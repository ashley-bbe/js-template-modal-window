//モーダルウィンドウ

const buttons = document.querySelectorAll("[data-target]");
const close_btn = document.querySelectorAll(".btn-close");
const overlay = document.querySelector('#overlay');


buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(btn.dataset.target).classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = 'hidden';
  });
});

close_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(btn.dataset.target).classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = '';
  });
});


window.onclick = (e) => {
  if (e.target == overlay) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach(modal => modal.classList.remove("active"));
    overlay.classList.remove("active");
    document.body.style.overflow = '';
  }
};