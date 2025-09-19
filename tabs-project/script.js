const tabButtons = document.querySelectorAll("#tabs .nav-link");
const tabContents = document.querySelectorAll(".tab-pane");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    tabContents.forEach((content) => content.classList.remove("active"));
    const target = button.getAttribute("data-tab");
    document.getElementById(target).classList.add("active");
  });
});
