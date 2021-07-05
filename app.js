document.addEventListener("DOMContentLoaded", () => {
  // For navigation menu

  let settingBtn = document.getElementById("setting");
  let cancelBtn = document.getElementById("cancel");
  let ul = document.querySelector("ul");
  cancelBtn.style.display = "none";

  settingBtn.addEventListener("click", () => {
    ul.classList.add("left0");
    settingBtn.classList.add("setting");
    cancelBtn.classList.remove("cancel");

    settingBtn.ontransitionend = () => {
      settingBtn.style.display = "none";
      cancelBtn.style.display = "block";
      cancelBtn.style.filter = "none";
    };
  });

  cancelBtn.addEventListener("click", () => {
    cancelBtn.classList.add("cancel");
    ul.classList.remove("left0");
    settingBtn.classList.remove("setting");

    cancelBtn.addEventListener("transitionend", () => {
      settingBtn.style.display = "block";
      cancelBtn.style.display = "none";
    });
  });

  // For showing time

  let timeh4 = document.getElementById("timeh4");
  let time = new Date().toLocaleTimeString();
  let date = new Date().toLocaleDateString();
  timeh4.innerText = `Time: ${time} &  Date: ${date}`;
  setInterval(() => {
    time = new Date().toLocaleTimeString();
    date = new Date().toLocaleDateString();
    timeh4.innerText = `Time: ${time} & Date: ${date}`;
  }, 1000);
});
