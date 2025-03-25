const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

// Handle button clicks
buttons.forEach(btn => {
    btn.addEventListener('click', () => handleInput(btn.value));
});

// Handle keyboard input
display.addEventListener('keydown', (e) => {
    e.preventDefault();
    const key = e.key;
    if (key === 'Enter') handleInput('=');
    else if (key === 'Backspace') handleInput('DE');
    else if (key === 'Escape') handleInput('AC');
    else if (/[0-9.+\-*/]/.test(key)) handleInput(key);
});

// Core input handling
function handleInput(value) {
    try {
        if (value === 'AC') display.value = '';
        else if (value === 'DE') display.value = display.value.slice(0, -1);
        else if (value === '=') display.value = eval(display.value) || '';
        else display.value += value;
        display.classList.remove('error');
    } catch {
        display.value = 'Error';
        display.classList.add('error');
        setTimeout(() => {
            display.value = '';
            display.classList.remove('error');
        }, 1000);
    }
}