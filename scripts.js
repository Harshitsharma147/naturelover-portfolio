document.addEventListener("DOMContentLoaded", () => {
    const leftBox = document.querySelector(".skill-row.left");
    const rightBox = document.querySelector(".skill-row.right");
  
    // Add the 'visible' class to trigger the animation
    setTimeout(() => {
      leftBox.classList.add("visible");
      rightBox.classList.add("visible");
    }, 500); // Delay for better effect
  });