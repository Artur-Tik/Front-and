const onBtn = document.querySelector(".btn");
const onBody = document.querySelector(".body");
const onLiquid = document.querySelector(".liquid")
const onContent = document.querySelector(".content")

function activeButton() {
    onBtn.classList.toggle("btn-active");
    onBody.classList.toggle("body-active");
    onLiquid.classList.toggle("liquid-active");
    onContent.classList.toggle("content-active");
}

