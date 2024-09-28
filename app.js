/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

// a set of variables need to build the First number in the operation
let arrayOfNums1 = []
let concatenatedNums1
let finalNum1

// a set of variables need to build the Second number in the operation
let arrayOfNums2 = []
let concatenatedNums2
let finalNum2

// a variable to store the operator needed to perfrom the specific operation 
let operator

// a variable to store the boolean value used to operate the clearDisplay function
let isDisplayCleared = false

/*------------------------ Cached Element References ------------------------*/

// a constants to cache the elements by their id or class to perform the tasks needed
const calculatorDisplay = document.querySelector(".display")
const calculatorElement = document.querySelector("#calculator")

/*----------------------------- Functions -----------------------------*/


// a set of functions to build the first number needed to perform the oparation
const pushNumbers1 = (event) => {
    console.log(event.target.innerText);
    const numToPush = event.target.innerText
    console.log("The First number inside the event was: ",numToPush);
    arrayOfNums1.push(numToPush)
    console.log("The First string of numbers is: ", arrayOfNums1);
}

const concatenateNums1 = () => {
    concatenatedNums1 = arrayOfNums1.join("")
    console.log("The First concatenated Nums was:", concatenatedNums1);
}

const finalizeNum1 = () => {
    finalNum1 = parseInt(concatenatedNums1)
    console.log("The First final Number is:", finalNum1);
}

const buildNumber1 = (event) => {
    pushNumbers1(event)
    concatenateNums1()
    finalizeNum1()
}


// a set of functions to build the Second number needed to perform the oparation
const pushNumbers2 = (event) => {
    console.log(event.target.innerText);
    const  numToPush = event.target.innerText
    console.log("The Second number inside the event was: ",numToPush);
    arrayOfNums2.push(numToPush)
    console.log("The Second string of numbers is: ", arrayOfNums2);
}

const concatenateNums2 = () => {
    concatenatedNums2 = arrayOfNums2.join("")
    console.log("The Second concatenated Nums was:", concatenatedNums2);
}

const finalizeNum2 = () => {
    finalNum2 = parseInt(concatenatedNums2)
    console.log("The Second final Number is:", finalNum2);
}

const buildNumber2 = (event) => {
    pushNumbers2(event)
    concatenateNums2()
    finalizeNum2()
}


// a function to check what is the operator and perform the specific mathematical equation based on it, by using both built numbers in the functions above 
const operation  = (operatorSymbol) => {
    let result

    if (operatorSymbol === "+" ) {
        result =  finalNum1 + finalNum2
        console.log(`${finalNum1} + ${finalNum2} is equal to: ${result}`);
    } 
    else if (operatorSymbol === "-") {
        result = finalNum1 - finalNum2
        console.log(`${finalNum1} - ${finalNum2} is equal to: ${result}`);
    }else if (operatorSymbol === "*") {
        result = finalNum1 * finalNum2
        console.log(`${finalNum1} * ${finalNum2} is equal to: ${result}`);
    }else if (operatorSymbol === "/"){
        result =  finalNum1 / finalNum2
        console.log(`${finalNum1} / ${finalNum2} is equal to: ${result}`); 
    }else {
        console.log("Not Completed Yet");
    }

    return result
}


// a function to empty the varialbes values in case of Clear operator detected or after completing the equation
// Note that the function is created seperately from the clearDisplay in order to not clear the results after completing the operation
const emptyValues = () => {
    arrayOfNums1 = []
    arrayOfNums2 = []
    concatenatedNums1 = undefined
    concatenatedNums2 = undefined
    finalNum1 = undefined
    finalNum2 = undefined
    operator = undefined

}


// a function in order to clear the calculator display and set it to 0 after calling the empty function 
const clearDisplay = (checkDisplay) => {
    if (checkDisplay === true) {
        emptyValues()
        calculatorDisplay.textContent = "0"
    }
}


// a function to check the Classes of the event in order perform and call the funcitons needed above
// this function is passed to the EventListener of the calculator to check for different values
const checkClasses = (event) => {
    if (event.target.classList.contains('button')) {

        if (event.target.classList.contains('operator')) {
            operator = event.target.innerText
            console.log("The operator is ", operator,);
            if (operator === "C") {
                isDisplayCleared = true
                clearDisplay(isDisplayCleared)
            }else if (finalNum2 === undefined) {
                calculatorDisplay.textContent = `${finalNum1} ${operator}`  
            }
            
                
        }else if (event.target.classList.contains('number')) {
            if (operator === undefined) {
                buildNumber1(event)
                console.log("operator does not exist yet");
                calculatorDisplay.textContent = finalNum1
                // clearDisplay(isDisplayCleared)

                
            }else if (operator != undefined) {
                buildNumber2(event)
                console.log("Operator Exists !", );
                calculatorDisplay.textContent = `${finalNum1} ${operator} ${finalNum2} `
                // clearDisplay(isDisplayCleared)
            }
        }else if (event.target.classList.contains("equals")) {
            calculatorDisplay.textContent = operation(operator)
            isDisplayCleared = true
            emptyValues()
            
        }
    }
}

/*-------------------------------- Event Listeners --------------------------------*/

// an event listener in order to pass the event values to the passed function and perform the operation 
calculatorElement.addEventListener('click',(event) => {
    checkClasses(event)
})
  
