const inputs = document.querySelectorAll(".code");

        window.moveNext = function (input, index) {
            if (input.value.length === 1 && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        };

        window.handleBackspace = function (event, index) {
            if (event.key === "Backspace" && !inputs[index].value && index > 0) {
                inputs[index - 1].focus();
            }
        };

        inputs.forEach((input, index) => {
            input.addEventListener("input", (e) => window.moveNext(e.target, index));
            input.addEventListener("keydown", (e) => window.handleBackspace(e, index));
        });