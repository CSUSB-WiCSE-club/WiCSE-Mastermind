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

//Picks the random color that is to be guessed
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
//document.getElementById("results").onclick = function() {pressed()};
function pressed(){
    setHiddenColor(hidColor1, 0);
    setHiddenColor(hidColor2, 1);
    setHiddenColor(hidColor3, 2);
    setHiddenColor(hidColor4, 3);
}

//The next portion is about selecting the right parts************************************************************** 
var selection1 = [document.getElementById("sr1"), -1];
var selection2 = [document.getElementById("sr2"), -1];
var selection3 = [document.getElementById("sr3"), -1];
var selection4 = [document.getElementById("sr4"), -1];

function setSelectionColor(selectionColor){
    if(selectionColor[1] == 0){
        selectionColor[0].style.backgroundColor = "red";
    }
    else if(selectionColor[1] == 1){
        selectionColor[0].style.backgroundColor = "yellow";
    }
    else if(selectionColor[1] == 2){
        selectionColor[0].style.backgroundColor = "orange";
    }
    else if(selectionColor[1] == 3){
        selectionColor[0].style.backgroundColor = "green";
    }
    else if(selectionColor[1] == 4){
        selectionColor[0].style.backgroundColor = "pink";
    }
    else if(selectionColor[1] == 5){
        selectionColor[0].style.backgroundColor = "blue";
    }
    else if(selectionColor[1] == 6){
        selectionColor[0].style.backgroundColor = "purple";
    }
    else{
        selectionColor[0].style.backgroundColor = "brown";
    }    
}

function selected(selectionID){
    if(selectionID[1] == 7){
        selectionID[1] = -1;
    }
    selectionID[1] += 1;
    setSelectionColor(selectionID);
}

document.getElementById("sr1").onclick = function() {selected(selection1)};
document.getElementById("sr2").onclick = function() {selected(selection2)};
document.getElementById("sr3").onclick = function() {selected(selection3)};
document.getElementById("sr4").onclick = function() {selected(selection4)};

/***************This next portion is for testing if the combination is accurate************************************/
document.getElementById("buttonID").onclick = function() {submitted()};
var response1 = document.getElementById("r1");
var response2 = document.getElementById("r2");
var response3 = document.getElementById("r3");
var response4 = document.getElementById("r4");

function submitted(){
    if(check() == true){
        alert("You got it correct!!");
        pressed();
    }
    else{
        alert("Keep trying");
    }
}

function changeRes(res){
    let response = [response1, response2, response3, response4];
    for(let i = 0; i < 4; i++){
        if(res[i] == 1){
            response[i].style.backgroundColor = "white";
        }
        else if(res[i] == 2){
            response[i].style.backgroundColor = "black";
        }
        else{
            response[i].style.backgroundColor = "grey";
        }   
    }
}

function check(){
    let result = true;
    let guess = [selection1[1], selection2[1], selection3[1], selection4[1]]
    let position = 0;
    let seq = [0, 0, 0, 0];
    let selectCode = [0, 0, 0, 0];
    let passCode = [0, 0, 0, 0];

    for(let i = 0; i < 4; i++){
        if(guess[i] != colorSequence[i]){
            result = false;
        }
        else{
            seq[position] = 2;
            position++;
            selectCode[i] = 3;
            passCode[i] = 3;
        }
    }

    for(let i = 0; i < 4; i++){
        if(guess[i] != colorSequence[i]){
            for(let j = 0; j < 4; j ++){
                if(guess[i] == colorSequence[j] && selectCode[i] == 0 && passCode[j] == 0 && i != j){
                    selectCode[i] = 3;
                    passCode[j] = 3;
                    seq[position] = 1;
                    position++;
                }
            }
        }
    }

    /*
    for(let i = 3; i > 0; i--){
        if(guess[4] == colorSequence[i] && selectCode[4] == 0 && passCode[i] == 0){
            selectCode[4] = 3;
            passCode[i] = 3;
            seq[position] = 1;
            position++;
            break;
        }
    }
*/

    changeRes(seq);
    return result;
}

