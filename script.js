document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filters button");
  const imageCards = document.querySelectorAll(".image-card");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const filterValue = button.dataset.filter;

      imageCards.forEach(card => {
        if (filterValue === "all" || card.dataset.category === filterValue) {
          card.style.opacity = "1";
          card.style.pointerEvents = "auto";
          card.style.transform = "scale(1)";
          card.style.display = "block";
        } else {
          card.style.opacity = "0";
          card.style.pointerEvents = "none";
          card.style.transform = "scale(0.95)";
          setTimeout(() => (card.style.display = "none"), 300);
        }
      });
    });
  });
});
