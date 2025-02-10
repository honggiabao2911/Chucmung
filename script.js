const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const reasonsDiv = document.getElementById("reasons");
const reasonsForm = document.getElementById("reasonsForm");

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

// Xử lý sự kiện khi nhấn "Xác nhận yêu anh"
reasonsForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const checkedReasons = document.querySelectorAll('input[name="reason"]:checked');
    
    if (checkedReasons.length > 0) {
        alert("Em đã xác nhận yêu anh rồi nhé! 🥰💖");
    } else {
        alert("Hãy chọn ít nhất một lý do em yêu anh đi nè! 😆");
    }
});
