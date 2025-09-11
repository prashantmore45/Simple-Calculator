const input = document.getElementById("content");

const buttons = document.querySelectorAll(".box");

let isOpenParenthesis = true;

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
                    input.value = eval(input.value); 
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
