document.addEventListener('DOMContentLoaded', () => {
    const timeline = document.getElementById('timeline');
    const events = [
        { year: 2000, text: 'Millennium startte met grote vieringen.' },
        { year: 2001, text: 'Lancering van Wikipedia.' },
        { year: 2004, text: 'Facebook opgericht.' },
        { year: 2008, text: 'Olympische Spelen in Beijing.' },
        { year: 2016, text: 'Eerste foto van een zwart gat.' },
        { year: 2020, text: 'Pandemie veranderde de wereld.' },
        { year: 2025, text: 'Heden: Toekomstplannen worden gemaakt.' }
    ];

    events.forEach(event => {
        const card = document.createElement('div');
        card.className = 'timeline-card mb-3 p-3 shadow-sm rounded border';
        card.innerHTML = `
            <h5 class="year fw-bold text-primary">${event.year}</h5>
            <p class="description m-0">${event.text}</p>
        `;
        timeline.appendChild(card);
    });
});
