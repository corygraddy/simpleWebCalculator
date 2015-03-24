//updates the calculator's display
function updateDisplay(s){
  // Create a new element and store it in 'newEl' put
  // the string in a <p>
  //var newEl = document.createElement('p');
  // store the contents of s in a new text node
  //var newText = document.createTextNode(s);
  // attach the new element to the new text node
  //newEl.appendChild(newText);
  //insert the new element in to its position
  //document.getElementById('display').appendChild(newEl);
  //console.log(s);
  document.getElementById("pDisplay").innerHTML = s;

}
var n = "";//passed in the applyNum when number button is pushed
var x = "";//num 1
var y = "";//num 2
var o = "";//operator
var p = 0;//holder before it's converted to string

//applies the operation to x and y then puts that to x
//clears y and the operator
function useOperation(){
  if(o==='plus'){
      p = parseFloat(x)+parseFloat(y);
      x = p.toString();
    }
    else if(o==='minus'){
     p = parseFloat(x)-parseFloat(y);
      x = p.toString();
    }
    else if(o==='divide'){
     p = parseFloat(x)/parseFloat(y);
      x = p.toString();
    }
    else if(o==='multiply'){
     p = parseFloat(x)*parseFloat(y);
      x = p.toString();
    }
    y="";
    o="";
    updateDisplay(x);
}
//sets the operator(o), if y isn't 0 then performs calculation
function applyOperation(s){
    o = s;
  if(y!==""){
    useOperation();
  }
}
//if y = 0 it does nothing otherwise it performs calculation
function equals(){
  if(y!==""){
   useOperation();
  }
}

function applyNumber(n){
  if(o===""){
    x = x + n;
    updateDisplay(x);
  }
  else{
    y = y + n;
    updateDisplay(y);
  }
}

function negate(){
  if(o===""&&parseFloat(x) > 0){
    x = "-" + x;
    updateDisplay(x);
  }
  else if( o === "" && parseFloat(x) <0 ){
    x = x.substring(1);
    updateDisplay(x);
  }
  else if (parseFloat(y) > 0){
    y = "-"+y;
    updateDisplay(y);
  }
  else
    y = y.substring(1);
    updateDisplay(y);
}

function percent(){
  if(y===""){
    p = parseFloat(x) * 0.01;
    x = p.toString();
    updateDisplay();
  }
  else
    p = parseFloat(y) * 0.01;
    y = p.toString();
    updateDisplay();
}

function clear(){
  x = "0";
  y = "";
  o = "";
  updateDisplay(x);
}


















