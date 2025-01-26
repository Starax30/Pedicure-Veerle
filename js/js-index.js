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
  
  const map = L.map('map').setView([51.2194, 4.4025], 13); // Antwerpen
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  // Voeg een marker toe
  L.marker([51.2194, 4.4025]).addTo(map)
      .bindPopup("Locatie Pedicure Veerle")
      .openPopup();

      
const polygon = L.polygon([
  [52.3702, 4.8952],  // Punt 1
  [52.3712, 4.8962],  // Punt 2
  [52.3722, 4.8942],  // Punt 3
  [52.3702, 4.8952]   // Terug naar Punt 1
], {
  color: 'blue',      // Randkleur
  fillColor: 'skyblue', // Vul kleur
  fillOpacity: 0.5    // Transparantie
}).addTo(map);

// Optioneel: Een popup toevoegen
polygon.bindPopup("Dit is een aangeduid gebied.");

const circle = L.circle([52.3702, 4.8952], {
  color: 'red',       // Randkleur
  fillColor: 'pink',  // Vul kleur
  fillOpacity: 0.5,   // Transparantie
  radius: 500         // Straal in meters
}).addTo(map);

circle.bindPopup("Dit is een cirkelgebied.");

const rectangle = L.rectangle([
  [52.3690, 4.8930],  // Zuidwest
  [52.3720, 4.8970]   // Noordoost
], {
  color: 'green',
  fillColor: 'lightgreen',
  fillOpacity: 0.5
}).addTo(map);

rectangle.bindPopup("Dit is een rechthoekig gebied.");


polygon.addTo(map);
circle.addTo(map);
rectangle.addTo(map);


