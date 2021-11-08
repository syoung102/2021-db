const range = document.getElementById("js-range");
const title = document.getElementsByClassName("js-title");
const guess = document.getElementById("js-guess");
const display = document.getElementById("js-result");


const rangeChange = (e) =>{
    e.preventDefault();
    const rangeSpan = title[0].querySelector("span");
    rangeSpan.innerHTML = range.value;
    const num = guess.querySelector("input");
    num.setAttribute('max', Number(range.value));
};

const rand = (max) => {
    const machine = Math.floor(Math.random() * (Number(max) + 1));
    return machine;
}

const handlePrint = (e) => {
    e.preventDefault();
    const max = range.value;
    const userNum = Number(guess.querySelector("input").value);
    const comNum = rand(max);
    const diplaySpan = display.querySelector("span");

    if (userNum <= comNum) {
        diplaySpan.innerHTML = `You choose ${userNum}, the machine choose: ${comNum}<br><strong>You lost!<br>`;
     } else{
        diplaySpan.innerHTML = `You choose ${userNum}, the machine choose: ${comNum}<br><strong>You win!<br>`;
     }
};
guess.addEventListener("submit", handlePrint);
range.addEventListener("input", rangeChange);