document.addEventListener("DOMContentLoaded", function () {
    const calendar = document.getElementById("calendar");
    const monthSelect = document.getElementById("month-select");

    // Beschikbare dagen (voor elke maand)
    const availableDays = {
        0: [1, 2, 3, 4,5,8,9,10,11,12,15,16,17,18,19,22,23,24,25,26,29,30,31], // Januari
        1: [8, 14, 22],      // Februari
        2: [1, 5, 12, 19],   // Maart
        3: [4, 10, 18, 25],  // April
        4: [3, 9, 16, 30],   // Mei
        5: [6, 14, 21],      // Juni
        6: [2, 8, 15],       // Juli
        7: [5, 20, 27],      // Augustus
        8: [10, 15, 22],     // September
        9: [4, 11, 18],      // Oktober
        10: [7, 14, 21],     // November
        11: [1, 8, 25],      // December
    };

    // Dagen per maand
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Genereer de kalender voor de geselecteerde maand
    function generateCalendar(month) {
        calendar.innerHTML = ""; // Reset de kalender

        const totalDays = daysInMonth[month];
        const monthAvailableDays = availableDays[month] || [];

        for (let day = 1; day <= totalDays; day++) {
            const dayElement = document.createElement("div");
            dayElement.className = "day";
            dayElement.innerHTML = `<span class="day-number">${day}</span>`;

            if (monthAvailableDays.includes(day)) {
                dayElement.classList.add("available");
                dayElement.addEventListener("click", () => {
                    alert(`Dag ${day} geselecteerd als beschikbaar.`);
                });
            } else {
                dayElement.classList.add("unavailable");
            }

            calendar.appendChild(dayElement);
        }
    }

    // Voeg evenement toe aan de dropdown voor maandselectie
    monthSelect.addEventListener("change", (e) => {
        const selectedMonth = parseInt(e.target.value, 10);
        generateCalendar(selectedMonth);
    });

    // Init: Toon de kalender voor januari (standaard maand)
    generateCalendar(0);
});

