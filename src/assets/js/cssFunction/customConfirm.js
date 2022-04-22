class CustomConfirm {
  constructor() {}

  async render(board) {
    document.querySelector(".confirm-box-container").style.display = "flex";

    return new Promise((resolve, reject) => {
      const box_btn = [...document.querySelectorAll(".box-btn")];
      
      box_btn.forEach((elem) =>
      elem.addEventListener("click", (e) => {
        document.querySelector(".confirm-box-container").style.display =
        "none";
          resolve(e.target.value);
        })
      );
    });
  }
}

export { CustomConfirm };
