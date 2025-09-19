const dateInput = document.getElementById("dateInput");
const calendar = document.getElementById("calendar");

dateInput.addEventListener("click", () => {
  calendar.classList.toggle("hidden");
  if (!calendar.classList.contains("hidden")) {
    renderCalendar();
  }
});

function renderCalendar() {
  const today = new Date();
  const month = today.getMonth();
  const year = today.getFullYear();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  calendar.innerHTML = `
    <div class="calendar-header">
      <span>${today.toLocaleString("default", { month: "long" })} ${year}</span>
    </div>
    <div class="calendar-grid">
      <div class="day-header">Su</div>
      <div class="day-header">Mo</div>
      <div class="day-header">Tu</div>
      <div class="day-header">We</div>
      <div class="day-header">Th</div>
      <div class="day-header">Fr</div>
      <div class="day-header">Sa</div>
      ${"<div></div>".repeat(firstDay)}
      ${Array.from(
        { length: daysInMonth },
        (_, i) => `<div class="day">${i + 1}</div>`
      ).join("")}
    </div>
  `;

  document.querySelectorAll(".day").forEach((day) => {
    day.addEventListener("click", () => {
      dateInput.value = `${day.textContent}/${month + 1}/${year}`;
      calendar.classList.add("hidden");
    });
  });
}
