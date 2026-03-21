
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

// 1. Setup the Styles

const style = document.createElement('style');
style.textContent = `
    .terminal-box {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 120px;
        width: 0; 
        background: rgba(0, 255, 65, 0.02);
        border-top: 1px solid rgba(0, 255, 65, 0.5);
        border-bottom: 1px solid rgba(0, 255, 65, 0.5);
        overflow: hidden;
        opacity: 0;
        font-family: 'Courier New', Courier, monospace;
        margin: 20px auto;
    }

    .terminal-box::before, .terminal-box::after {
        content: '';
        position: absolute;
        top: 0; height: 100%; width: 1px;
        background: #00ff41; box-shadow: 0 0 10px #00ff41;
    }
    .terminal-box::before { left: 0; }
    .terminal-box::after { right: 0; }

    .terminal-animate {
        animation: terminalExpand 5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }

    .terminal-text {
        padding: 0 20px;
        text-align: center;
        line-height: 1.4;
        text-transform: uppercase;
        color: #00ff41;
        text-shadow: 0 0 5px rgba(0, 255, 65, 0.8);
    }

    .terminal-char {
        display: inline-block;
        opacity: 0;
        filter: blur(4px);
        transition: opacity 0.15s ease, filter 0.15s ease;
    }

    .char-visible { opacity: 1; filter: blur(0); }

    /* --- TIGHTER RESPONSIVE QUERIES --- */

    /* Desktop & Laptop */
    @media (min-width: 1025px) {
        .terminal-text { width: 450px; font-size: 14px; }
        @keyframes terminalExpand {
            0%, 10% { width: 0; opacity: 0; }
            15% { opacity: 1; }
            25%, 75% { width: 500px; opacity: 1; }
            90% { width: 0; opacity: 1; }
            100% { width: 0; opacity: 0; }
        }
    }

    /* Tablet */
    @media (max-width: 1024px) {
        .terminal-text { width: 400px; font-size: 13px; }
        @keyframes terminalExpand {
            0%, 10% { width: 0; opacity: 0; }
            15% { opacity: 1; }
            25%, 75% { width: 450px; opacity: 1; }
            90% { width: 0; opacity: 1; }
            100% { width: 0; opacity: 0; }
        }
    }

    /* Large Mobile / Small Tablet */
    @media (max-width: 768px) {
        .terminal-text { width: 345px; font-size: 12px; }
        @keyframes terminalExpand {
            0%, 10% { width: 0; opacity: 0; }
            15% { opacity: 1; }
            25%, 75% { width: 385px; opacity: 1; }
            90% { width: 0; opacity: 1; }
            100% { width: 0; opacity: 0; }
        }
    }

    /* Small Mobile (375px - 425px) */
    @media (max-width: 425px) {
        .terminal-box { height: 100px; } 
        .terminal-text { width: 240px; font-size: 11px; padding: 0 10px; }
        @keyframes terminalExpand {
            0%, 10% { width: 0; opacity: 0; }
            15% { opacity: 1; }
            25%, 75% { width: 300px; opacity: 1; }
            90% { width: 0; opacity: 1; }
            100% { width: 0; opacity: 0; }
        }
    }
`;
document.head.appendChild(style);

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