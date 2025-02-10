const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const reasonsDiv = document.getElementById("reasons");

let yesSize = 20; // Kích thước ban đầu của nút "Có"

noBtn.addEventListener("mouseover", function () {
    yesSize += 10; // Mỗi lần di chuột vào "Không", nút "Có" to hơn
    yesBtn.style.fontSize = yesSize + "px";
    yesBtn.style.padding = (yesSize / 2) + "px " + yesSize + "px";
});

noBtn.addEventListener("click", function () {
    alert("Em không bấm được đâu nè! 😜");
});

yesBtn.addEventListener("click", function () {
    reasonsDiv.classList.remove("hidden");
});
