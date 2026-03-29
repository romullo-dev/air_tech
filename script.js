// Atualiza o ano automaticamente no rodapé
const currentYear = document.getElementById("currentYear");
if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

// Animações leves ao rolar usando IntersectionObserver
const animatedSections = document.querySelectorAll(".fade-in-section");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  animatedSections.forEach((section) => observer.observe(section));
} else {
  // Fallback para navegadores antigos
  animatedSections.forEach((section) => section.classList.add("is-visible"));
}
