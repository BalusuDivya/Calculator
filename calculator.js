function show(value) {
    const display = document.getElementById('display');
    display.textContent += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.textContent = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.textContent = eval(display.textContent.replace(/×/g, '*').replace(/÷/g, '/'));
    } catch {
        display.textContent = 'Error';
    }
}
