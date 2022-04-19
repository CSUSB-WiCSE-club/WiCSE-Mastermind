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