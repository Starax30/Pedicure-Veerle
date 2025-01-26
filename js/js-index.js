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
  
  const map = L.map('map').setView([51.3482122, 4.7606187], 11); // Antwerpen
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors'
  }).addTo(map);


const polygon = L.polygon([
  [51.4213173,4.5395157 ],  // Punt 1
  [51.3834342,5.0768168],  // Punt 2
  [51.2859158,4.9834507],
  [51.2859158,4.9834507],  // Punt 3
  [51.2900898,4.4915345],
  [51.4213173,4.5395157 ]   // Terug naar Punt 1
], {
  color: 'blue',      // Randkleur
  fillColor: 'skyblue', // Vul kleur
  fillOpacity: 0.5    // Transparantie
}).addTo(map);

// Optioneel: Een popup toevoegen
polygon.bindPopup("Dit is een aangeduid gebied.");




