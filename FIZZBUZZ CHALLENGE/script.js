function checkFizzBuzz() {
    const number = parseInt(document.getElementById('numberInput').value);
    const resultDiv = document.getElementById('result');
    
    if (isNaN(number)) {
        resultDiv.textContent = 'Please enter a valid number';
        resultDiv.style.color = 'red';
        return;
    }

    let result = '';
    
    if (number % 3 === 0 && number % 5 === 0) {
        result = 'FizzBuzz';
        resultDiv.style.color = 'purple';
    } else if (number % 3 === 0) {
        result = 'Fizz';
        resultDiv.style.color = 'green';
    } else if (number % 5 === 0) {
        result = 'Buzz';
        resultDiv.style.color = 'blue';
    } else {
        result = number.toString();
        resultDiv.style.color = 'black';
    }
    
    resultDiv.textContent = result;
}

// Add event listener for Enter key
document.getElementById('numberInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkFizzBuzz();
    }
});
