
//updates the calculator's display
function updateDisplay(s) {

    console.log("button pressed: " + s);
    document.getElementById("pDisplay").innerHTML = s;
    console.log("function: updateDisplay \nn: " + n + "\nx: " + x + "\ny: " + y + "\no: " + o + "\np: " + p);
}
var n = ""; //passed in the applyNum when number button is pushed
var x = ""; //num 1
var y = ""; //num 2
var o = ""; //operator
var p = 0; //holder before it's converted to string

//applies the operation to x and y then puts that to x
//clears y and the operator
function useOperation() {
    if (o === 'plus') {
        p = parseFloat(x) + parseFloat(y);
        x = p.toString();
    } else if (o === 'minus') {
        p = parseFloat(x) - parseFloat(y);
        x = p.toString();
    } else if (o === 'divide') {
        p = parseFloat(x) / parseFloat(y);
        x = p.toString();
    } else if (o === 'multiply') {
        p = parseFloat(x) * parseFloat(y);
        x = p.toString();
    }
    y = "";
    o = "";
    console.log("function: useOperation \nn: " + n + "\nx: " + x + "\ny: " + y + "\no: " + o + "\np: " + p);
    updateDisplay(x);
}
//sets the operator(o), if y isn't 0 then performs calculation
function applyOperation(s) {
    o = s;
    if (y !== "") {
        useOperation();
        o = s;
    }
    console.log("function: applyOperation \nn: " + n + "\nx: " + x + "\ny: " + y + "\no: " + o + "\np: " + p);
}
//if y = 0 it does nothing otherwise it performs calculation
function equals() {
    if (y !== "") {
        useOperation();
    }
    console.log("function: equals \nn: " + n + "\nx: " + x + "\ny: " + y + "\no: " + o + "\np: " + p);
}

function applyNumber(n) {
    if (o === "") {
        x = x + n;
        console.log("function: applyNumber \nn: " + n + "\nx: " + x + "\ny: " + y + "\no: " + o + "\np: " + p);
        updateDisplay(x);
    } else {
        y = y + n;
        console.log("function: applyNumber \nn: " + n + "\nx: " + x + "\ny: " + y + "\no: " + o + "\np: " + p);
        updateDisplay(y);
    }
}

function negate() {
    if (o === "" && parseFloat(x) > 0) {
        x = "-" + x;
        updateDisplay(x);
        console.log("condition 1...function: negate \nn: " + n + "\nx: " + x + "\ny: " + y + "\no: " + o + "\np: " + p);
    } else if (o === "" && parseFloat(x) < 0) {
        x = x.substring(1);
        updateDisplay(x);
        console.log("condition 2...function: negate \nn: " + n + "\nx: " + x + "\ny: " + y + "\no: " + o + "\np: " + p);
    } else if (parseFloat(y) > 0) {
        y = "-" + y;
        updateDisplay(y);
        console.log("condition 3...function: negate \nn: " + n + "\nx: " + x + "\ny: " + y + "\no: " + o + "\np: " + p);
    } else {
        y = y.substring(1);
        console.log("condition 4...function: negate \nn: " + n + "\nx: " + x + "\ny: " + y + "\no: " + o + "\np: " + p);
        updateDisplay(y);
    }
}
//I don't even have a percent button on my calculator
//must update index.html
// function percent() {
//     if (y === "") {
//         p = parseFloat(x) * 0.01;
//         x = p.toString();
//         updateDisplay();
//     } else
//         p = parseFloat(y) * 0.01;
//     y = p.toString();
//console.log("function: percent \nn: " + n + "\nx: " + x + "\ny: " + y + "\no: " + o + "\np: " + p);
//     updateDisplay();
// }

function clear1() {
    x = "0";
    y = "";
    o = "";
    updateDisplay(x);
    console.log("function: clear1 \nn: " + n + "\nx: " + x + "\ny: " + y + "\no: " + o + "\np: " + p);
}