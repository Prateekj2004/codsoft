let display = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');
let buttonArray = Array.from(buttons);
let string = '';

buttonArray.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let btnValue = e.target.innerHTML;

        if (btnValue === 'DEL') {
            string = string.substring(0, string.length - 1);
        } else if (btnValue === 'AC') {
            string = '';
        } else if (btnValue === '=') {
            try {
                string = parseExpression(string);
            } catch (error) {
                string = 'Error';
            }
        } else {
            string += btnValue;
        }

        display.value = string;
    });
});

function parseExpression(expression) {
    expression = expression.replace('%', '/100');
    return eval(expression);
}
