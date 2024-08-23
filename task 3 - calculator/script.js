// Get all the buttons and the display element
const buttons = document.querySelectorAll('.btn');
const display = document.getElementById('display');

// Variable to hold the current input and result
let currentInput = '';
let result = null;

// Function to update the display
function updateDisplay(value) {
    display.textContent = value;
}

// Function to handle button clicks
function handleClick(event) {
    const value = event.target.dataset.value;

    if (value === 'C') {
        // Clear the display
        currentInput = '';
        result = null;
    } else if (value === '=') {
        try {
            // Calculate the result
            result = eval(currentInput);
            currentInput = result;
        } catch {
            currentInput = 'Error';
        }
    } else {
        // Append the value to the current input
        currentInput += value;
    }

    // Update the display with the current input or result
    updateDisplay(currentInput);
}

// Add event listeners to each button
buttons.forEach(button => {
    button.addEventListener('click', handleClick);
});
