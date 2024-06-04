let arr = [];
let x;
while (arr.length < 9) {
    var r = Math.floor(Math.random() * 9)
    if (r == 0) { x = arr.indexOf(r); console.log("dfddsf" + x); }
    if (arr.indexOf(r) === -1) arr.push(r);
}
for (let i = 1; i < 10; i++) {
    id = 'n' + i;
    if (arr[i - 1] == 0) {
        document.getElementById(id).innerHTML = "";
    }
    else {
        document.getElementById(id).innerHTML = arr[i - 1];
    }
}

function fun1() {
    let v1 = document.getElementById("n1").innerHTML;
    let v2 = document.getElementById("n2").innerHTML;
    let v4 = document.getElementById("n4").innerHTML;
    if (v4 == '') {
        document.getElementById("n4").innerHTML = v1;
        document.getElementById("n1").innerHTML = v4;
    }
    if (v2 == '') {
        document.getElementById("n2").innerHTML = v1;
        document.getElementById("n1").innerHTML = v2;
    }
}

function fun2() {
    let v1 = document.getElementById("n1").innerHTML;
    let v2 = document.getElementById("n2").innerHTML;
    let v5 = document.getElementById("n5").innerHTML;
    let v3 = document.getElementById("n3").innerHTML;
    if (v1 == '') {
        document.getElementById("n1").innerHTML = v2;
        document.getElementById("n2").innerHTML = v1;
    }
    if (v3 == '') {
        document.getElementById("n3").innerHTML = v2;
        document.getElementById("n2").innerHTML = v3;
    }
    if (v5 == '') {
        document.getElementById("n5").innerHTML = v2;
        document.getElementById("n2").innerHTML = v5;
    }
}

function fun3() {
    let v2 = document.getElementById("n2").innerHTML;
    let v3 = document.getElementById("n3").innerHTML;
    let v6 = document.getElementById("n6").innerHTML;
    if (v2 == '') {
        document.getElementById("n3").innerHTML = v2;
        document.getElementById("n2").innerHTML = v3;
    }
    if (v6 == '') {
        document.getElementById("n6").innerHTML = v2;
        document.getElementById("n2").innerHTML = v6;
    }
}
function fun4() {
    let v1 = document.getElementById("n1").innerHTML;
    let v4 = document.getElementById("n4").innerHTML;
    let v5 = document.getElementById("n5").innerHTML;
    let v7 = document.getElementById("n7").innerHTML;
    if (v1 == '') {
        document.getElementById("n1").innerHTML = v4;
        document.getElementById("n4").innerHTML = v1;
    }

    if (v5 == '') {
        document.getElementById("n5").innerHTML = v4;
        document.getElementById("n4").innerHTML = v5;
    }
    if (v7 == '') {
        document.getElementById("n7").innerHTML = v4;
        document.getElementById("n4").innerHTML = v7;
    }
}

function fun5() {
    let v2 = document.getElementById("n2").innerHTML;
    let v4 = document.getElementById("n4").innerHTML;
    let v5 = document.getElementById("n5").innerHTML;
    let v6 = document.getElementById("n6").innerHTML;
    let v8 = document.getElementById("n8").innerHTML;
    if (v2 == '') {
        document.getElementById("n2").innerHTML = v5;
        document.getElementById("n5").innerHTML = v2;
    }

    if (v4 == '') {
        document.getElementById("n4").innerHTML = v5;
        document.getElementById("n5").innerHTML = v4;
    }
    if (v6 == '') {
        document.getElementById("n6").innerHTML = v5;
        document.getElementById("n5").innerHTML = v6;
    }
    if (v8 == '') {
        document.getElementById("n8").innerHTML = v5;
        document.getElementById("n5").innerHTML = v8;
    }
}

function fun6() {

    let v3 = document.getElementById("n3").innerHTML;
    let v5 = document.getElementById("n5").innerHTML;
    let v6 = document.getElementById("n6").innerHTML;
    let v9 = document.getElementById("n9").innerHTML;
    if (v3 == '') {
        document.getElementById("n3").innerHTML = v6;
        document.getElementById("n6").innerHTML = v3;
    }
    if (v5 == '') {
        document.getElementById("n5").innerHTML = v6;
        document.getElementById("n6").innerHTML = v5;
    }
    if (v9 == '') {
        document.getElementById("n9").innerHTML = v6;
        document.getElementById("n6").innerHTML = v9;
    }
}

function fun7() {
    let v4 = document.getElementById("n4").innerHTML;
    let v7 = document.getElementById("n7").innerHTML;
    let v8 = document.getElementById("n8").innerHTML;

    if (v4 == '') {
        document.getElementById("n4").innerHTML = v7;
        document.getElementById("n7").innerHTML = v4;
    }
    if (v8 == '') {
        document.getElementById("n8").innerHTML = v7;
        document.getElementById("n7").innerHTML = v8;
    }
}

function fun8() {
    let v5 = document.getElementById("n5").innerHTML;
    let v7 = document.getElementById("n7").innerHTML;
    let v8 = document.getElementById("n8").innerHTML;
    let v9 = document.getElementById("n9").innerHTML;

    if (v5 == '') {
        document.getElementById("n5").innerHTML = v8;
        document.getElementById("n8").innerHTML = v5;
    }
    if (v7 == '') {
        document.getElementById("n7").innerHTML = v8;
        document.getElementById("n8").innerHTML = v7;
    }
    if (v9 == '') {
        document.getElementById("n9").innerHTML = v8;
        document.getElementById("n8").innerHTML = v9;
    }
}

function fun9() {
    let v6 = document.getElementById("n6").innerHTML;
    let v8 = document.getElementById("n8").innerHTML;
    let v9 = document.getElementById("n9").innerHTML;
    if (v6 == '') {
        document.getElementById("n6").innerHTML = v9;
        document.getElementById("n9").innerHTML = v6;
    }
    if (v8 == '') {
        document.getElementById("n8").innerHTML = v9;
        document.getElementById("n9").innerHTML = v8;
    }
}



