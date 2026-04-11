// DOM ELEMENTS 

const inputElement = document.getElementById("content");

if (!(inputElement instanceof HTMLInputElement)) {
    throw new Error('Expected an input element with id "content".');
}

const input = inputElement;
const buttons = document.querySelectorAll<HTMLButtonElement>(".box");

// STATE 

let isOpenParenthesis = true;

// SAFE EVALUATION 

const evaluateExpression = (expression: string): string => {
    try {
        const result = new Function(`return ${expression}`)();
        return result.toString();
    } catch {
        return "Error";
    }
};

// EVENT LISTENERS

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const id = button.id;
        const value = button.textContent?.trim() || "";

        switch (id) {
            case "clear":
                input.value = "";
                break;

            case "backspace":
                input.value = input.value.slice(0, -1);
                break;

            case "equal":
                input.value = evaluateExpression(input.value);
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