function checkPattern() {
    // Setting DOM to all boxes or input field 
    let b1, b2, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById("btn1").value;
    b2 = document.getElementById("btn2").value;
    b3 = document.getElementById("btn3").value;
    b4 = document.getElementById("btn4").value;
    b5 = document.getElementById("btn5").value;
    b6 = document.getElementById("btn6").value;
    b7 = document.getElementById("btn7").value;
    b8 = document.getElementById("btn8").value;
    b9 = document.getElementById("btn9").value;

   // console.log("b1 b2 b3 b4 b5 b6 b7 b8 b9 " + b1 +b2+b3+b4+b5+b6+b7+b8+b9);

  
}
let b1, b2, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById("btn1").value;
    b2 = document.getElementById("btn2").value;
    b3 = document.getElementById("btn3").value;
    b4 = document.getElementById("btn4").value;
    b5 = document.getElementById("btn5").value;
    b6 = document.getElementById("btn6").value;
    b7 = document.getElementById("btn7").value;
    b8 = document.getElementById("btn8").value;
    b9 = document.getElementById("btn9").value;
function fun1() {
    
    if(b4 == "")
        {
            b4.value = b1.value;
            b1.value = "";             
        }
    if(b2=="")
        {
            document.getElementById("btn2").innerHTML = "78";
            document.getElementById("btn1").value = "hdhdgdf";           
        }
      
        console.log("b1  " + b1);
        console.log("b2  " + b2);
        console.log("b3  " + b3);
        console.log("b4  " + b4);
        console.log("b5  " + b5);
        console.log("b6  " + b6);
        console.log("b7  " + b7);
        console.log("b8  " + b8);
        console.log("b9  " + b9);
}   

function fun2() {
    if (flag == 1) {
        document.getElementById("btn2").value = "X";
        document.getElementById("btn2").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("btn2").value = "0";
        document.getElementById("btn2").disabled = true;
        flag = 1;
    }
}

function fun3() {
    if (flag == 1) {
        document.getElementById("btn3").value = "X";
        document.getElementById("btn3").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("btn3").value = "0";
        document.getElementById("btn3").disabled = true;
        flag = 1;
    }
}

function fun4() {
    if (flag == 1) {
        document.getElementById("btn4").value = "X";
        document.getElementById("btn4").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("btn4").value = "0";
        document.getElementById("btn4").disabled = true;
        flag = 1;
    }
}

function fun5() {
    if (flag == 1) {
        document.getElementById("btn5").value = "X";
        document.getElementById("btn5").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("btn5").value = "0";
        document.getElementById("btn5").disabled = true;
        flag = 1;
    }
}

function fun6() {
    if (flag == 1) {
        document.getElementById("btn6").value = "X";
        document.getElementById("btn6").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("btn6").value = "0";
        document.getElementById("btn6").disabled = true;
        flag = 1;
    }
}

function fun7() {
    if (flag == 1) {
        document.getElementById("btn7").value = "X";
        document.getElementById("btn7").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("btn7").value = "0";
        document.getElementById("btn7").disabled = true;
        flag = 1;
    }
}

function fun8() {
    if (flag == 1) {
        document.getElementById("btn8").value = "X";
        document.getElementById("btn8").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("btn8").value = "0";
        document.getElementById("btn8").disabled = true;
        flag = 1;
    }
}

function fun9() {
    if (flag == 1) {
        document.getElementById("btn9").value = "X";
        document.getElementById("btn9").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("btn9").value = "0";
        document.getElementById("btn9").disabled = true;
        flag = 1;
    }

}