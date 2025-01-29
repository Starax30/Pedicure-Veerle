document.addEventListener("DOMContentLoaded", () => {
    const timelineItems = document.querySelectorAll(".timeline-item");
  
    timelineItems.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        item.querySelector(".balloon").style.transform = "scale(1.1)";
      });
  
      item.addEventListener("mouseleave", () => {
        item.querySelector(".balloon").style.transform = "scale(1)";
      });
    });
  
    console.log("Interactieve tijdlijn geladen!");
  });
  
  const map = L.map('map').setView([51.3488335, 4.6605458], 10); // Antwerpen
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors'
  }).addTo(map);


const polygon = L.polygon([
  [51.4213173,4.5395157 ],  // Punt 1
  [51.4037797,4.8640952],  // Punt 2
  [51.3130539,4.8881936],  // Punt 3
  [51.2900898,4.4915345],
  [51.4213173,4.5395157 ]   // Terug naar Punt 1
], {
  color: 'blue',      // Randkleur
  fillColor: 'skyblue', // Vul kleur
  fillOpacity: 0.5    // Transparantie
}).addTo(map);

// Optioneel: Een popup toevoegen
polygon.bindPopup("Dit is een aangeduid gebied.");




