var gameOver = true;
var completed = false;
window.onload = function(){
    $("status").textContent = "Click 'S' to begin";
    $("boundary1").onmouseover = hitWall;
    $("start").onclick = reset;
    $("end").onmouseover = message;
    var walls = $$("div.boundary");
    for(var i = 0; i < walls.length; i++){
        walls[i].onmouseover = hitWall
        walls[i].addClassName("youlose")
    }
    $("maze").onmouseleave = hitWall;
};

function hitWall(){
    if(!completed){
        $("boundary1").addClassName("youlose")
        var walls = $$("div.boundary");
        for(var i = 0; i < walls.length; i++){
            walls[i].addClassName("youlose")
        }
        gameOver = true;
        $("status").textContent = "Click 'S' to begin";
    }
}

function reset(){
    var walls = $$("div.boundary");
    for(var i =0; i < walls.length; i++){
        walls[i].removeClassName("youlose");
    }
    gameOver = false;
    completed = false;
    $("status").textContent = "Get to 'E' without touching the walls!";
}

function message(){
    if(!gameOver){
        $("status").textContent = "You win, Click S to play again";
        completed = true;
    }
    else{
        $("status").textContent = "You lose";
    }
}

