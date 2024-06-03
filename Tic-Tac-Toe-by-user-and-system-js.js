function checkPattern() {
    // Setting DOM to all boxes or input field 
    let b1, b2, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById("txt1").value;
    b2 = document.getElementById("txt2").value;
    b3 = document.getElementById("txt3").value;
    b4 = document.getElementById("txt4").value;
    b5 = document.getElementById("txt5").value;
    b6 = document.getElementById("txt6").value;
    b7 = document.getElementById("txt7").value;
    b8 = document.getElementById("txt8").value;
    b9 = document.getElementById("txt9").value;

    let b1btn, b2btn, b3btn, b4btn, b5btn,
        b6btn, b7btn, b8btn, b9btn;

    b1btn = document.getElementById("txt1");
    b2btn = document.getElementById("txt2");
    b3btn = document.getElementById("txt3");
    b4btn = document.getElementById("txt4");
    b5btn = document.getElementById("txt5");
    b6btn = document.getElementById("txt6");
    b7btn = document.getElementById("txt7");
    b8btn = document.getElementById("txt8");
    b9btn = document.getElementById("txt9");

    /**********************this section is for 'X'*****************/

    // first row 
    if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' ||
        b2 == 'X') && (b3 == 'x' || b3 == 'X')) {
        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b1btn.style.color = "red";
        b2btn.style.color = "red";
        b3btn.style.color = "red";
        whoWins('x');
        
    }
    // second row
    else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' ||
        b5 == 'X') && (b6 == 'x' || b6 == 'X')) {
        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b4btn.style.color = "red";
        b5btn.style.color = "red";
        b6btn.style.color = "red";
        whoWins('x');
    }
    // third row
    else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' ||
        b8 == 'X') && (b9 == 'x' || b9 == 'X')) {

        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;

        b7btn.style.color = "red";
        b8btn.style.color = "red";
        b9btn.style.color = "red";
        whoWins('x');
    }
    // first column
    else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' ||
        b4 == 'X') && (b7 == 'x' || b7 == 'X')) {

        b2btn.disabled = true;
        b3btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b1btn.style.color = "red";
        b4btn.style.color = "red";
        b7btn.style.color = "red";
        whoWins('x');
    }
    // second column
    else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' ||
        b5 == 'X') && (b8 == 'x' || b8 == 'X')) {
        b1btn.disabled = true;
        b2btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b9btn.disabled = true;

        b2btn.style.color = "red";
        b5btn.style.color = "red";
        b8btn.style.color = "red";
        whoWins('x');
    }
    // third column
    else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' ||
        b6 == 'X') && (b9 == 'x' || b9 == 'X')) {

        b1btn.disabled = true;
        b2btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;

        b3btn.style.color = "red";
        b6btn.style.color = "red";
        b9btn.style.color = "red";
        whoWins('x');
    }
    //for cross check (position 1,5,9)
    else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' ||
        b5 == 'X') && (b9 == 'x' || b9 == 'X')) {

        b2btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;

        b1btn.style.color = "red";
        b5btn.style.color = "red";
        b9btn.style.color = "red";
        whoWins('x');
        
    }
    //for cross check (position 3,5,7)
    else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' ||
        b5 == 'X') && (b7 == 'x' || b7 == 'X')) {

        b1btn.disabled = true;
        b2btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b3btn.style.color = "red";
        b5btn.style.color = "red";
        b7btn.style.color = "red";
        whoWins('x');
    }



    /***************this section is for '0'********************/

    // first row 
    if ((b1 == '0') && (b2 == '0') && (b3 == '0')) {
        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b1btn.style.color = "red";
        b2btn.style.color = "red";
        b3btn.style.color = "red";
        whoWins('0');
    }
    // second row
    else if ((b4 == '0') && (b5 == '0') && (b6 == '0')) {
        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b4btn.style.color = "red";
        b5btn.style.color = "red";
        b6btn.style.color = "red";
        whoWins('0');
    }
    // third row
    else if ((b7 == '0') && (b8 == '0') && (b9 == '0')) {
        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;

        b7btn.style.color = "red";
        b8btn.style.color = "red";
        b9btn.style.color = "red";
        whoWins('0');
    }
    // first column
    else if ((b1 == '0') && (b4 == '0') && (b7 == '0')) {

        b2btn.disabled = true;
        b3btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b1btn.style.color = "red";
        b4btn.style.color = "red";
        b7btn.style.color = "red";
        whoWins('0');
    }
    // second column
    else if ((b2 == '0') && (b5 == '0') && (b8 == '0')) {

        b1btn.disabled = true;
        b2btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b9btn.disabled = true;

        b2btn.style.color = "red";
        b5btn.style.color = "red";
        b8btn.style.color = "red";
        whoWins('0');
    }
    // third column
    else if ((b3 == '0') && (b6 == '0') && (b9 == '0')) {

        b1btn.disabled = true;
        b2btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;

        b3btn.style.color = "red";
        b6btn.style.color = "red";
        b9btn.style.color = "red";
        whoWins('0');
    }
    //for cross check (position 1,5,9)
    else if ((b1 == '0') && (b5 == '0') && (b9 == '0')) {

        b2btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;

        b1btn.style.color = "red";
        b5btn.style.color = "red";
        b9btn.style.color = "red";
        whoWins('0');
    }
    //for cross check (position 3,5,7)
    else if ((b3 == '0') && (b5 == '0') && (b7 == '0')) {

        b1btn.disabled = true;
        b2btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b3btn.style.color = "red";
        b5btn.style.color = "red";
        b7btn.style.color = "red";
        whoWins('0');
    }
}
function whoWins(who)
{
    setTimeout(function () {
        alert(who + 'wins!!!');
      }, 200)
      
}

function generateRandomNumber() {
    let Randomnumber = Math.floor((Math.random() * 9) + 1);
    randomFunction(Randomnumber);
}
function randomFunction(x) {

    if (x == 1 && document.getElementById("txt1").disabled == false) {
        document.getElementById("txt1").value = "0";
        document.getElementById("txt1").disabled = true;
    }
    else if (x == 2 && document.getElementById("txt2").disabled == false) {
        document.getElementById("txt2").value = "0";
        document.getElementById("txt2").disabled = true;
    }
    else if (x == 3 && document.getElementById("txt3").disabled == false) {
        document.getElementById("txt3").value = "0";
        document.getElementById("txt3").disabled = true;
    }
    else if (x == 4 && document.getElementById("txt4").disabled == false) {
        document.getElementById("txt4").value = "0";
        document.getElementById("txt4").disabled = true;
    }
    else if (x == 5 && document.getElementById("txt5").disabled == false) {
        document.getElementById("txt5").value = "0";
        document.getElementById("txt5").disabled = true;
    }
    else if (x == 6 && document.getElementById("txt6").disabled == false) {
        document.getElementById("txt6").value = "0";
        document.getElementById("txt6").disabled = true;
    }
    else if (x == 7 && document.getElementById("txt7").disabled == false) {
        document.getElementById("txt7").value = "0";
        document.getElementById("txt7").disabled = true;
    }
    else if (x == 8 && document.getElementById("txt8").disabled == false) {
        document.getElementById("txt8").value = "0";
        document.getElementById("txt8").disabled = true;
    }
    else if (x == 9 && document.getElementById("txt9").disabled == false) {
        document.getElementById("txt9").value = "0";
        document.getElementById("txt9").disabled = true;
    }
    else {
        generateRandomNumber();
    }
}

function fun1() {
    document.getElementById("txt1").value = "X";
    document.getElementById("txt1").disabled = true;
    generateRandomNumber();

}

function fun2() {
    document.getElementById("txt2").value = "X";
    document.getElementById("txt2").disabled = true;
    generateRandomNumber();

}

function fun3() {
    document.getElementById("txt3").value = "X";
    document.getElementById("txt3").disabled = true;
    generateRandomNumber();
}

function fun4() {
    document.getElementById("txt4").value = "X";
    document.getElementById("txt4").disabled = true;
    generateRandomNumber();
}

function fun5() {
    document.getElementById("txt5").value = "X";
    document.getElementById("txt5").disabled = true;
    generateRandomNumber();
}

function fun6() {
    document.getElementById("txt6").value = "X";
    document.getElementById("txt6").disabled = true;
    generateRandomNumber();
}

function fun7() {
    document.getElementById("txt7").value = "X";
    document.getElementById("txt7").disabled = true;
    generateRandomNumber();
}

function fun8() {
    document.getElementById("txt8").value = "X";
    document.getElementById("txt8").disabled = true;
    generateRandomNumber();
}

function fun9() {
    document.getElementById("txt9").value = "X";
    document.getElementById("txt9").disabled = true;
    generateRandomNumber();
}