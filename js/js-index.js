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
  