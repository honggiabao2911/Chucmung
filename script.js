const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const reasonsDiv = document.getElementById("reasons");
const selectAll = document.getElementById("selectAll");
const reasonsList = document.getElementById("reasonsList");
const confirmBtn = document.getElementById("confirmBtn");

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

// Xử lý sự kiện khi click vào checkbox
selectAll.addEventListener("change", function () {
    if (selectAll.checked) {
        reasonsList.classList.remove("hidden");
        confirmBtn.classList.remove("hidden");
    } else {
        reasonsList.classList.add("hidden");
        confirmBtn.classList.add("hidden");
    }
});

// Khi bấm nút xác nhận
confirmBtn.addEventListener("click", function () {
    alert("Em đã xác nhận yêu anh rồi nhé! 🥰💖");
});
