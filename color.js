var correctColor; 
var colors=[];
var numsquare = 6;
var c=2;

var squares = document.querySelectorAll(".squares");
var playbtn = document.querySelector("#new");
var easybtn = document.querySelector("#easy");
var hardbtn = document.querySelector("#hard");
var rgbmessage = document.querySelector("#rgb");
var message = document.querySelector("#message");
var bigd = document.querySelector("#bigd");

setUpColors(numsquare);


// Click Listeners:

for(var i=0; i<squares.length; i++){
    squares[i].addEventListener("click", function(){
        c--;
        
        if(c>=0){
            message.textContent = c+" Guess Left!";
            if(this.style.backgroundColor == correctColor){
                playbtn.textContent = "Play Again";
                message.textContent = "You Won!";
                changeColors();
            } else{
                if(c==0){
                    playbtn.textContent = "Play Again";
                    message.textContent = "You Lose!";
                    bigd.style.backgroundColor = correctColor;
                    changeColors();   
                } else{
                    this.style.visibility = "hidden";
                    message.textContent = c +" Guess Left!";
                }
                
            }
        }
    });
}


playbtn.addEventListener("click", function(){
    reset();

});

easybtn.addEventListener("click", function(){
    easybtn.classList.add("selected");
    hardbtn.classList.remove("selected");
    numsquare = 3;
    reset();   
});

hardbtn.addEventListener("click", function(){
    hardbtn.classList.add("selected");
    easybtn.classList.remove("selected");
    numsquare = 6;
    reset();   
});



// Functions:

// Pick Random Colors
function randomColor(){
    for(var i=0; i<3; i++){
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
    }
    return "rgb(" + r +", "+ g +", "+ b +")";
}

// Change Div Colors & Visibility
function changeColors(){
    for(var j=0; j<numsquare; j++){
        squares[j].style.visibility = "visible";
        squares[j].style.backgroundColor = correctColor;
        bigd.style.backgroundColor = correctColor;
    }
}

// Assign Random colors & Visibility to available Divs
function setUpColors(num){
    colors=[];   
    for(var i=0; i<num; i++){
        colors[i] = randomColor();
    }
    for(var i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.visibility = "visible"
            squares[i].style.backgroundColor = colors[i];
        } else{
            squares[i].style.backgroundColor = "#232323";
            squares[i].style.visibility = "hidden";
        }
    }
    // pick correct color randomly
    correctColor = colors[Math.floor(Math.random() * colors.length)];
    rgbmessage.textContent = correctColor;
    message.textContent = c+" Guess Left!";
}

// Resets everything to New Game
function reset(){
    c=2;
    playbtn.textContent = "New Game";
    bigd.style.backgroundColor = "#232323";
    setUpColors(numsquare);
}
