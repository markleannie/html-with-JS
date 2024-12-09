const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    // Get the current value of the display
    const input = display.value;

    // Check if the input is "1 + 1"
    if (input === "1 + 1 = 2") {
        display.value = "hatdog"; 
    } else {
        // If it's not "1 + 1", you can either evaluate it or show an error
        try {
            display.value = eval(input);
        } catch (error) {
            display.value = 'Error';
        }
    }
}


























































































 

















