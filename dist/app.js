"use strict";
// DOM ELEMENTS 
const inputElement = document.getElementById("content");
if (!(inputElement instanceof HTMLInputElement)) {
    throw new Error('Expected an input element with id "content".');
}
const input = inputElement;
const buttons = document.querySelectorAll(".box");
// STATE 
let isOpenParenthesis = true;
// SAFE EVALUATION 
const evaluateExpression = (expression) => {
    try {
        const result = new Function(`return ${expression}`)();
        return result.toString();
    }
    catch (_a) {
        return "Error";
    }
};
// EVENT LISTENERS
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        var _a;
        const id = button.id;
        const value = ((_a = button.textContent) === null || _a === void 0 ? void 0 : _a.trim()) || "";
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
