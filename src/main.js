
let select = document.getElementById("yearsDropdown");

const default_optionVal = "Select Year";
let default_option= document.createElement("option");
let input = document.getElementById("yearInputBox");
const submitButton = document.getElementById("submitYear");
default_option.textContent = default_optionVal;
select.appendChild(default_option);

const currentYear = new Date().getFullYear();

for (i = 2000; i <= currentYear; i++){
    let option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    select.appendChild(option);
    select.value = default_optionVal;
}

select.addEventListener("change", function(){
    input.value = this.value;
    this.selectedIndex = 0;
})


const errorMessage1 = "TIME MACHINE FAILURE: That year cannot be reached. The past is locked. The system refuses to open a timeline that should not exist.";
const errorMessage2 = "NETWORK VOID: You jumped too far back. The internet was barely alive then—no platforms, no trends, no signals. Just static in the digital abyss.";

let errorMessageBox = document.createElement("div");
errorMessageBox.className = "terminal-box";
let errorTextContainer = document.createElement("div");
errorTextContainer.className = "terminal-text";
errorMessageBox.appendChild(errorTextContainer);

document.body.appendChild(errorMessageBox);

submitButton.addEventListener("click", function() {
    const currentYear = new Date().getFullYear();
    const yearVal = parseInt(input.value);
    let selectedMessage = "";

    if (yearVal > currentYear) {
        selectedMessage = errorMessage1;
    } else if (yearVal < 2000) {
        selectedMessage = errorMessage2;
    } else {
        errorMessageBox.classList.remove("terminal-animate");
        return;
    }

    errorMessageBox.classList.remove("terminal-animate");
    void errorMessageBox.offsetWidth; // Force reflow
    errorMessageBox.classList.add("terminal-animate");


    errorTextContainer.innerHTML = '';
    selectedMessage.split('').forEach((char, i) => {
        const span = document.createElement('span');
        span.className = 'terminal-char';
        span.innerHTML = char === ' ' ? '&nbsp;' : char;
        errorTextContainer.appendChild(span);

        setTimeout(() => {
            span.classList.add('char-visible');
        }, 800 + (i * 12));
    });
});


