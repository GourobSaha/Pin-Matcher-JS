function pinGenerator() {
    let random = Math.round(Math.random() * 10000);
    return random;
}

function getPin() {
    let pin = pinGenerator();
    let pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

document.getElementById('generate-pin').addEventListener('click', function () {
    let pin = getPin();
    let displayPinField = document.getElementById('show-pin');
    displayPinField.value = pin;
})

document.getElementById('calculator').addEventListener('click', function (event) {
    let clickedNumber = event.target.innerText;
    let typedNumberField = document.getElementById('typed-number');
    let previousTypedNumber = typedNumberField.value;

    if (isNaN(clickedNumber)) {
        if (clickedNumber === 'C') {
            typedNumberField.value = '';
        }
        else if (clickedNumber === '<') {
            let numbers = previousTypedNumber.split('');
            numbers.pop();
            let remainingNumbers = numbers.join('');
            typedNumberField.value = remainingNumbers;
        }
    }
    else {
        let newTypedNumber = previousTypedNumber + clickedNumber;
        typedNumberField.value = newTypedNumber;
    }
})

document.getElementById('btn-submit').addEventListener('click', function () {
    let displayPinField = document.getElementById('show-pin');
    let currentPin = displayPinField.value;
    let typedNumberField = document.getElementById('typed-number');
    let typedPin = typedNumberField.value;

    let pinCorrect = document.getElementById('pin-correct');
    let pinIncorrect = document.getElementById('pin-incorrect');
    if (currentPin === typedPin) {
        pinCorrect.style.display = 'block';
        pinIncorrect.style.display = 'none';
    }
    else {

        pinIncorrect.style.display = 'block';
        pinCorrect.style.display = 'none';
    }
})