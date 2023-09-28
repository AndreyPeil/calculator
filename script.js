let display = document.getElementById('display');
let value_display = '';

function manda_numbro(valor) {
    value_display += valor;
    display.value = value_display;
}


function clear_n(){
    value_display = '';
    display.value = value_display;
}

function sum_em() {
    var displayValue = display.value; 

    var result;

    switch (true) {
        case displayValue.includes('+'):
            var operands = displayValue.split('+');
            if (operands.length === 2) {
                var operand1 = parseFloat(operands[0]);
                var operand2 = parseFloat(operands[1]);
                if (!isNaN(operand1) && !isNaN(operand2)) {
                    result = operand1 + operand2;
                }
            }
            break;
        case displayValue.includes('-'):
            var operands = displayValue.split('-');
            if (operands.length === 2) {
                var operand1 = parseFloat(operands[0]);
                var operand2 = parseFloat(operands[1]);
                if (!isNaN(operand1) && !isNaN(operand2)) {
                    result = operand1 - operand2;
                }
            }
            
            break;
        case displayValue.includes('*'):
            var operands = displayValue.split('*');
            if (operands.length === 2) {
                var operand1 = parseFloat(operands[0]);
                var operand2 = parseFloat(operands[1]);
                if (!isNaN(operand1) && !isNaN(operand2)) {
                    result = operand1 * operand2;
                }
            }
            break;
        case displayValue.includes('/'):
            var operands = displayValue.split('/');
            if (operands.length === 2) {
                var operand1 = parseFloat(operands[0]);
                var operand2 = parseFloat(operands[1]);
                if (!isNaN(operand1) && !isNaN(operand2)) {
                    result = operand1 / operand2;
                }
            }
            break;
        default:
            console.log("Invalid input"); // Handle invalid input
            return; // Exit the function
    }

    if (typeof result !== 'undefined') {
        display.value = result
        // Do something with the result, e.g., display it on the page
    }
}


