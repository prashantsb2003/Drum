var numofdrums=document.querySelectorAll(".drum").length;

for(var i=0;i<numofdrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHTML=this.innerHTML;
        makesound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
});
}

document.addEventListener("keydown",function(event){
    var keypressed=event.key;
    makesound(keypressed);
    buttonAnimation(keypressed);
});
    function makesound(key){
        switch (key) {
            case "w":
                var audio=new Audio('sounds/crash.mp3');
                audio.play();
            break;
            case "a":
                var audio=new Audio('sounds/kick-bass.mp3');
                audio.play();
                break;
                case "s":
                    var audio=new Audio('sounds/snare.mp3');
                    audio.play();
                break;
                case "d":
                    var audio=new Audio('sounds/tom-1.mp3');
                    audio.play();
                break;
                case "j":
                    var audio=new Audio('sounds/tom-2.mp3');
                    audio.play();
                break;
                case "k":
                    var audio=new Audio('sounds/tom-3.mp3');
                    audio.play();
                break;
                case "l":
                    var audio=new Audio('sounds/tom-4.mp3');
                    audio.play();
                break;
            default:
                alert("only press specified keys!");
                break;
        }
};

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    if (activeButton) {
      activeButton.classList.add("pressed");
      setTimeout(function () {
        activeButton.classList.remove("pressed");
      }, 100);
    }
  }
