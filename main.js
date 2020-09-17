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

var Boolean1 = true;
var minusBoolean1 = true;

one.addEventListener('click', function (){
    displayNumbers(1)
})
two.addEventListener('click', function (){
    displayNumbers(2)
})
three.addEventListener('click', function (){
    displayNumbers(3)
})
four.addEventListener('click', function(){
    displayNumbers(4)
})
five.addEventListener('click', function(){
    displayNumbers(5)
})
six.addEventListener('click', function (){
    displayNumbers(6)
})
seven.addEventListener('click', function (){
    displayNumbers(7)
})
eight.addEventListener('click', function (){
    displayNumbers(8)
})
nine.addEventListener('click', function(){
    displayNumbers(9)
})
zero.addEventListener('click', function(){
    displayNumbers(0)
})

var equalsVar;

plus.addEventListener('click', function(){
    addNums()
    equalsVar = "+";
})

minus.addEventListener('click', function(){
    minusNums()
    equalsVar = "-";
})

multiply.addEventListener('click', function(){
    multiplyNums()
    equalsVar = "*";
})

divide.addEventListener('click', function(){
    divideNums()
    equalsVar = "/";
})

equals.addEventListener('click', function(){
    equalsNums()
})

clear.addEventListener('click', function(){
    clearScreen();
    clearButton();
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

function clearButton(){
    num1 = 0;
    num2 = 0;
    Boolean1 = true;
}

function addNums(){
    if(Boolean1 === true){
        saveFirstNumber();
        clearScreen();
    }
    if(Boolean1 === false){
        saveSecondNumber();
        display.textContent = parseInt(num1) + parseInt(num2);
    }
    Boolean1 = false;
}

function minusNums(){
    if(Boolean1 === true){
        saveFirstNumber();
        clearScreen();
    }
    if(Boolean1 === false){
        saveSecondNumber();
        display.textContent = parseInt(num1) - parseInt(num2);
    }
    Boolean1 = false;
}

function multiplyNums(){
    if(Boolean1 === true){
        saveFirstNumber();
        clearScreen();
    }
    if(Boolean1 === false){
        saveSecondNumber();
        display.textContent = parseInt(num1) * parseInt(num2);
    }
    Boolean1 = false;
}

function divideNums(){
    if(Boolean1 === true){
        saveFirstNumber();
        clearScreen();
    }
    if(Boolean1 === false){
        saveSecondNumber();
        display.textContent = parseInt(num1) / parseInt(num2);
    }
    Boolean1 = false;
}

function equalsNums(){
    if(equalsVar === "+"){
        addNums()
    } else if(equalsVar === "-"){
        minusNums()
    } else if(equalsVar === "*"){
        multiplyNums()
    } else if(equalsVar === "/"){
        divideNums()
    } else{
        display.textContent = "Invalid"
    }
}