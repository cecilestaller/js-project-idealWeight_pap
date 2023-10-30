
// Allgemeine Varaibalen Definition
// Element: Button, damit eventlistener verwendet werden kann:

const calculate = document.body.querySelector('#calculate-input');
// console.log(calculate); TEST

// callback (arrow) function definieren:

const idealWeight = () => {
    // Inputs:
    const heightInput = document.body.querySelector('#height-input').value;
    const ageInput = document.body.querySelector('#age-input').value;
    const radioWide = document.body.querySelector('#wide');
    const radioSlim = document.body.querySelector('#slim');
    // Outputs:
    const error = document.body.querySelector('#error-content');
    const resultOutput = document.body.querySelector('#result-output');
    
    // Operator Text für Error-Handling:
    // console.log(radioWide.checked === false );
    // console.log(radioSlim.checked === false);
    // console.log(heightInput.length === 0 );
    // console.log(ageInput.length === 0);

    if (radioWide.checked === false && radioSlim.checked === false || heightInput.length === 0 || ageInput.length === 0) {
        error.textContent = "Please fill all input Fields with data and select a Body-Structure";
    } else if (radioWide.checked && heightInput.length > 0 && ageInput.length > 0) {
        let calculateWide = Math.round(((heightInput - 100) + (ageInput / 10)) * 0.9 * 1.1);
        resultOutput.textContent = "Your ideal weight is " + calculateWide + " kilograms.";
        error.textContent = " ";
    } else if (radioSlim.checked && heightInput.length > 0 && ageInput.length > 0) {
        let calculateSlim = Math.round(((heightInput - 100) + (ageInput / 10)) * 0.9 * 0.9);
        resultOutput.textContent = "Your ideal weight is " + calculateSlim + " kilograms.";
        error.textContent = " ";
    } 
    
}

// EventListener über Element: Button aktivieren:

calculate.addEventListener('click', idealWeight);