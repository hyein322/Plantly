//글자 타이핑 효과
const content = "Plant care is not difficult"
const typing_text = document.querySelector(".typing_text")
let index = 0;

function typing() {
    typing_text.textContent += content[index++];
    if (index > content.length) {
        typing_text.textContent = ""
        index = 0;
    }
}
setInterval(typing, 200)

//커서 깜빡거리는 효과
const target = document.querySelector("#dynamic");
function blink() {
    target.classList.toggle("active");
}
setInterval(blink, 500)

