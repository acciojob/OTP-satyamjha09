 const inputs = document.querySelectorAll(".code");

        function moveNext(input, index) {
            if (input.value.length === 1 && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        }

        function handleBackspace(event, index) {
            if (event.key === "Backspace" && !inputs[index].value && index > 0) {
                inputs[index - 1].focus();
            }
        }
