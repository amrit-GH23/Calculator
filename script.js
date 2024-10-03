let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        let buttonValue = e.target.innerHTML;

        // Handle special buttons like AC (clear), = (evaluate), del (delete last)
        if (buttonValue === 'AC') {
            string = "";  // Clear the input
            document.querySelector('input').value = string;
        } else if (buttonValue === '=') {
            try {
                string = eval(string);  // Evaluate the expression
                document.querySelector('input').value = string;
            } catch (err) {
                document.querySelector('input').value = "Error";  // Handle errors
            }
        } else if (buttonValue === 'del') {
            string = string.slice(0, -1);  // Remove the last character
            document.querySelector('input').value = string;
        } else {
            string += buttonValue;  // Append button value to the string
            document.querySelector('input').value = string;
        }
    });
});




