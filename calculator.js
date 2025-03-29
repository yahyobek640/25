function toggleCalculator() {
    const calculator = document.getElementById('calculator');
    if (calculator.style.display === 'none' || calculator.style.display === '') {
        calculator.style.display = 'block';
    } else {
        calculator.style.display = 'none';
    }
}

function calculate() {
    const a = parseFloat(document.getElementById('num1').value);
    const b = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;
    let result;
    switch (operator) {
        case '+': result = a + b; break;
        case '-': result = a - b; break;
        case '*': result = a * b; break;
        case '/': result = b !== 0 ? a / b : 'Ошибка'; break;
        default: result = 'Некорректная операция';
    }
    document.getElementById('result').innerText = 'Результат: ' + result;
}
