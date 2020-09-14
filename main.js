var plus = document.querySelector("#plus");
var minus = document.querySelector("#minus");
var multiply = document.querySelector("#multiply");
var divide = document.querySelector("#divide");
var one = document.querySelector("#one");
var two = document.querySelector("#two");
var three = document.querySelector("#three");
var four = document.querySelector("#four");
var five = document.querySelector("#five");
var six = document.querySelector("#six");
var seven = document.querySelector("#seven");
var eight = document.querySelector("#eight");
var nine = document.querySelector("#nine");
var zero = document.querySelector("#zero");
var clear = document.querySelector("#clear");
var equals = document.querySelector("#equals");

var display = document.querySelector("#display");

var num1 = 0;
var num2 = 0;

var addBoolean1 = true;

plus.addEventListener('click', function(){
    add()
})

one.addEventListener('click', function (){
    displayNumbers(1)
})


clear.addEventListener('click', function(){
    clearScreen();
    num1 = 0;
    num2 = 0;
    addBoolean1 = true;
})

function displayNumbers(number){
    display.textContent += number;
}

function saveFirstNumber(){
    if(display.textContent){
        num1 = display.textContent;

    }
}

function saveSecondNumber(){
    if(display.textContent){
        num2 = display.textContent
    }
}

function clearScreen(){
    display.textContent = "";
}

// if(num1){
//     then clear display
//     set some variable to true that will run inside a function
// }

function add(){
    if(addBoolean1 === true){
        saveFirstNumber();
        clearScreen();
    }
    if(addBoolean1 === false){
        saveSecondNumber();
        display.textContent = parseInt(num1) + parseInt(num2);
    }
    addBoolean1 = false;
}

function minus(){
    if(minusBoolean1 === true){
        saveFirstNumber();
        clearScreen();
    }
}
