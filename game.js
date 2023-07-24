var gamePattern=[];
var buttonColors=["red","blue", "green", "yellow"];
var userClickedPattern=[];

var started=false; 
var level=0;  

    $(document).keypress(
        function(){
            if (!started) {
                $("#level-title").text=("Level "+level); 
                nextSequence();
                started = true ; 
            }
        }
        ); 
        $(".aditya").click(
            function(){
                if (!started) {
                    $("#level-title").text=("Level "+level); 
                    nextSequence();
                    started = true ; 
                }
            }
            ); 
        function nextSequence() { 
            userClickedPattern=[];
            level++;
            $("#level-title").text=("Level "+level);  
      
    var randomVariable=Math.floor(Math.random()*4);
    var randomChosenColour=buttonColors[randomVariable]; 
    gamePattern.push(randomChosenColour); 
    
    animate(randomChosenColour);
    playSound(randomChosenColour); 
    
    $("h1").text("Level "+level); 
    } 
    
       
    
    $(".btn").click(function () {
          var userChosenColour = $(this).attr("id");
          animate(userChosenColour);
          playSound(userChosenColour);
          userClickedPattern.push(userChosenColour); 
          checkAnswer(userClickedPattern.length-1); 
        })  
    
    function playSound(adi){
        var audio = new Audio("sounds/" + adi + ".mp3");
        audio.play(); 
    } 
    
    function animate(adi) {
        $("#"+adi).addClass("pressed");
        setTimeout(function () {
            $("#"+adi).removeClass("pressed");
        },100); 
    }
    
  function checkAnswer(currentLevel) {
     if (userClickedPattern[currentLevel]==gamePattern[currentLevel]) {
        console.log("Success");  
        if (userClickedPattern.length === gamePattern.length){

            setTimeout(function () {
                nextSequence();
            }, 1000); 
        }
    
} 
else{
    var audio = new Audio("sounds/wrong.mp3");
    audio.play(); 
    $("h1").html("Game Over<br>"+"Your Score : "+level+"<br>"+"Press Any Key To Start"); 
    $("body").addClass("game-over");
    setTimeout(function () {
        $("body").removeClass("game-over");     
    },1000);
     startOver();
  }
  } 

  function startOver() {
    level=0; 
    gamePattern=[]; 
    started=false;
  }


    


