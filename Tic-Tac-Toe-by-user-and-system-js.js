const win = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];
function checkWinner() {
    let isWon = false;
    for (let i = 0; i < win.length; i++) {
        const condition = win[i];
        const box1 = document.getElementById('txt' + condition[0]).value;
        const box2 = document.getElementById('txt' + condition[1]).value;
        const box3 = document.getElementById('txt' + condition[2]).value;

        if (box1 != "" && box2 != "" && box3 != "") {
            if (box1 == box2 && box2 == box3) {
                isWon = true;
                document.getElementById("disText").innerHTML =box1 +" is win ";
                document.getElementById('txt' + condition[0]).style.color = "red";
                document.getElementById('txt' + condition[1]).style.color = "red";
                document.getElementById('txt' + condition[2]).style.color = "red";
               
                for (let j = 1; j < 10; j++) {
                    id = "txt" + j;
                    document.getElementById(id).disabled = true;
                }
            }
        }
    }
   
}

xTurn = true;
function printXorO(id) {

    document.getElementById(id).value = "X";
    document.getElementById(id).disabled = true;
    generateRandomNumber();
}
function generateRandomNumber() {

    let Randomnumber = Math.floor((Math.random() * 9) + 1);
    console.log("randomNumber = "+Randomnumber);
    randomFunction(Randomnumber);
}

function randomFunction(x) {    
    for (let i = 1; i < 10; i++) {
        id = 'txt' + i;
        if (x == i) {
            if (document.getElementById(id).disabled == false) {
                document.getElementById(id).value = "0";
                document.getElementById(id).disabled = true;                                
            }
            else{          
                console.log("again");     
                generateRandomNumber();
            }
        }
    }
    
}
