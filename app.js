// Select the input field
const input = document.getElementById("content");

// Select all buttons with class "box"
const buttons = document.querySelectorAll(".box");

// Variable to keep track of parentheses toggle
let isOpenParenthesis = true;

// Loop through each button and add click event
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const id = button.id;
        const value = button.textContent.trim();

        switch (id) {
            case "clear":
                input.value = "";
                break;
            case "backspace":
                input.value = input.value.slice(0, -1);
                break;
            case "equal":
                try {
                    input.value = eval(input.value); // NOTE: eval is not safe for untrusted input
                } catch {
                    input.value = "Error";
                }
                break;
            case "parenthesis":
                input.value += isOpenParenthesis ? "(" : ")";
                isOpenParenthesis = !isOpenParenthesis;
                break;
            default:
                input.value += value;
        }
    });
});
