document.addEventListener("DOMContentLoaded", function () {
    const calendar = document.getElementById("calendar");
    const monthSelect = document.getElementById("month-select");

    // Dagen van de week in het Nederlands
    const daysOfWeek = ["Ma", "Di", "Woe", "Do", "Vrij", "Za", "Zo"];

    // Beschikbare dagen (voorbeeld: { maand: [lijst met dagen] })
    const availability = {
        0: [1,2, 6, 8,9,,13,15,16,20,22,23,27,,29,30], // Januari
        1: [3,5,6,10,12,13,17,19,20,24,26,27],   // Februari
        2: [3,5,6,10,12,13,17,19,20,24,26,27],   // Maart
        3: [2,3,,7,9,10,14,16,17,21,23,24,28,30,31],
        4: [1,5,7,8,12,14,15,19,21,22,26,28,29],
        5: [2,4,5,9,11,12,16,18,19,23,25,26,30],
        6: [2,3,7,9,10,14,16,17,21,23,24,28,30,31],
        7: [4,6,7,11,13,14,18,20,21,25,27,28,],
        8: [1,3,4,8,10,11,15,17,18,22,24,25,29],
        9: [1,2,6,8,9,13,15,16,20,22,23,27,29,30],
        10: [3,5,6,10,12,13,17,19,20,24,26,27,31],               // April (geen beschikbaarheid)
        11: [1,3,4,8,10,11,15,17,18,22,24,25,29,31],
        // Voeg hier beschikbaarheid toe voor andere maanden...
    };

    // Update de kalender bij het wisselen van maand
    monthSelect.addEventListener("change", () => renderCalendar(monthSelect.value));

    function renderCalendar(month) {
        const currentYear = new Date().getFullYear();
        const firstDay = new Date(currentYear, month, 1);
        const lastDay = new Date(currentYear, month + 1, 0);

        // Reset de kalender
        calendar.innerHTML = "";

        // Voeg de headers toe (dagen van de week)
        daysOfWeek.forEach(day => {
            const dayHeader = document.createElement("div");
            dayHeader.textContent = day;
            dayHeader.classList.add("header");
            calendar.appendChild(dayHeader);
        });

        // Lege cellen voor dagen vóór de eerste dag van de maand
        let emptyCells = (firstDay.getDay() + 6) % 7; // Start maandag
        for (let i = 0; i < emptyCells; i++) {
            const emptyCell = document.createElement("div");
            calendar.appendChild(emptyCell);
        }

        // Voeg de dagen toe
        for (let day = 1; day <= lastDay.getDate(); day++) {
            const dayCell = document.createElement("div");
            dayCell.textContent = day;

            // Controleer beschikbaarheid
            if (availability[month]?.includes(day)) {
                dayCell.classList.add("available"); // Beschikbaar
            } else {
                dayCell.classList.add("unavailable"); // Niet beschikbaar
            }

            calendar.appendChild(dayCell);
        }
    }

    // Start met de huidige maand
    const currentMonth = new Date().getMonth();
    monthSelect.value = currentMonth;
    renderCalendar(currentMonth);
});
