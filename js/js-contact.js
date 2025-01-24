document.addEventListener("DOMContentLoaded", function () {
    const calendar = document.getElementById("calendar");
    const monthSelect = document.getElementById("month-select");

    // Dagen van de week in het Nederlands
    const daysOfWeek = ["Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag", "Zondag"];

    // Beschikbare dagen (voorbeeld: { maand: [lijst met dagen] })
    const availability = {
        0: [2, 4, 6, 9, 12], // Januari
        1: [1, 5, 10, 15],   // Februari
        2: [3, 8, 12, 18],   // Maart
        3: [3, 8, 12, 18],
        4: [3, 8, 12, 18],
        5: [3, 8, 12, 18],
        6: [3, 8, 12, 18],
        7: [3, 8, 12, 18],
        8: [3, 8, 12, 18],
        9: [3, 8, 12, 18],
        10: [3, 8, 12, 18],               // April (geen beschikbaarheid)
        11: [3, 8, 12, 18],
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
