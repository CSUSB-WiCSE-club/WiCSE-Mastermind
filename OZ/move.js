/* */
let colorSequence = []; //create an empty array so that values can be pushed into it

//selects a random sequence of numbers from 0 - 7
/* 
    The numbers can be thought of as colors and so we can treat them as such when we create the circles. We will keep white and black for results
    0 - Red
    1 - yellow
    2 - orange
    3 - green
    4 - pink
    5 - blue
    6 - purple
    7 - brown
*/
function createColorSequence(){
    for(let i = 0; i < 4; i++){
        let randomNum = Math.floor(Math.random() * 8);
        colorSequence.push(randomNum);
    }
}

//used to show that the array does have a random sequence of numbers
function print(){
    for(let i = 0; i < 4; i++){
        console.log(colorSequence[i]);
    }
} 

function getColors(){
    return colorSequence;
}

createColorSequence();
print();


//bottom portion is connecting the top array to the figures

var hidColor1 = document.getElementById("hiddenAnswer1");
var hidColor2 = document.getElementById("hiddenAnswer2");
var hidColor3 = document.getElementById("hiddenAnswer3");
var hidColor4 = document.getElementById("hiddenAnswer4");

function setHiddenColor(hiddenColor, num){
    if(colorSequence[num] == 0){
        hiddenColor.style.backgroundColor = "red";
    }
    else if(colorSequence[num] == 1){
        hiddenColor.style.backgroundColor = "yellow";
    }
    else if(colorSequence[num] == 2){
        hiddenColor.style.backgroundColor = "orange";
    }
    else if(colorSequence[num] == 3){
        hiddenColor.style.backgroundColor = "green";
    }
    else if(colorSequence[num] == 4){
        hiddenColor.style.backgroundColor = "pink";
    }
    else if(colorSequence[num] == 5){
        hiddenColor.style.backgroundColor = "blue";
    }
    else if(colorSequence[num] == 6){
        hiddenColor.style.backgroundColor = "purple";
    }
    else{
        hiddenColor.style.backgroundColor = "brown";
    }    
}

//this button is temperary just ment to show that the answer can be hidden
document.getElementById("demo").onclick = function() {pressed()};
function pressed(){
    setHiddenColor(hidColor1, 0);
    setHiddenColor(hidColor2, 1);
    setHiddenColor(hidColor3, 2);
    setHiddenColor(hidColor4, 3);
}