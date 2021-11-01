var display = document.getElementById("display");
var buttons = document.getElementsByClassName("button");
var operand1 = 0;
var operand2 = null;
var operator = null;

for (var i = 0; i <= buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        var value = this.getAttribute('data-value');

        if (value == 'AC') {
            display.innerText =null;
            //var operand1 = 0;
            //var operand2 = 0;
            //var operator = null;
        }
        else if(value == '+/-'){
            var op=display.textContent;
            display.innerText = '-'+ op;
        }
        else if(value == '%'){
            var op=display.textContent;
            display.innerText = op/100;
        }

        else if (value == '+') {
            operator = '+';
            operand1 = parseFloat(display.textContent);
            display.innerText = '+';
        }
        else if (value == '-') {
            operator = '-';
            operand1 = parseFloat(display.textContent);
            display.innerText = '-';
        }
        else if (value == '*') {
            operator = '*';
            operand1 = parseFloat(display.textContent);
            display.innerText = '*';
        }
        else if (value == '/') {
            operator = '/';
            operand1 = parseFloat(display.textContent);
            display.innerText = '/';
        }
        else if (value == '=') {
            operand2 = parseFloat(display.textContent);
            var result = eval(operand1 + "" + operator + "" + operand2);
            display.innerText = result;
        }
        else {
            if (display.innerText == operator) {
                display.innerText = '';
            }
            display.innerText += value;
        }
    });
}