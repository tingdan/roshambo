var imgPath = ["img/rock.jpg","img/paper.jpg", "img/scissors.jpg"];
var score = 0;



function randomResult() {
    return Math.floor(Math.random()*3);
}

$(" .btnRock" ).click(function() {
    var result = randomResult();
    

    $(" #imgPlayer").attr( "src", imgPath[0]);
    $(" #imgBot").attr( "src", imgPath[result]);

    if(result == 0) { 
        $("#showResult").text("Draw");
    }
    else if(result == 1) {
         $("#showResult").text("Lose");
         score--; 
         $("#score").text(score);
        }
    else {
        $("#showResult").text("Win"); 
        score++;
        $("#score").text(score);}

})


$(" .btnPaper" ).click(function() {
    var result = randomResult();
    

    $(" #imgPlayer").attr( "src", imgPath[1]);
    $(" #imgBot").attr( "src", imgPath[result]);

    if(result == 0) { 
        $("#showResult").text("Win"); 
        score++; 
        $("#score").text(score);}
    else if(result == 1) { 
        $("#showResult").text("Draw"); 
        }
    else {
        $("#showResult").text("Lose"); 
        score--;
        $("#score").text(score);}

})


$(" .btnScissors" ).click(function() {
    var result = randomResult();
    

    $(" #imgPlayer").attr( "src", imgPath[2]);
    $(" #imgBot").attr( "src", imgPath[result]);

    if(result == 0) { 
        $("#showResult").text("Lose");
        score--; 
        $("#score").text(score);
    }
    else if(result == 1) { 
        $("#showResult").text("Win"); 
        score++;
        $("#score").text(score);
    }
    else {
        $("#showResult").text("Draw");
         }

})


$(" .btnReset" ).click(function() {
    score = 0;
    $("#score").text(score);
})