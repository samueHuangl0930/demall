const modal = document.getElementById("myModal");
const closeBtn = document.getElementsByClassName("close")[0];

// 當網頁載入完成後，顯示彈跳視窗
window.onload = function () {
  modal.style.display = "block";
};

// 當按下關閉符號時，隱藏彈跳視窗
closeBtn.onclick = function () {
  modal.style.display = "none";
};
