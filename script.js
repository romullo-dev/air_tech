// Atualiza o ano automaticamente no rodapé
const currentYear = document.getElementById("currentYear");
if (currentYear) currentYear.textContent = new Date().getFullYear();

// Microinteração: navbar ganha destaque ao rolar
const navbar = document.getElementById("mainNavbar");
const onScrollNavbar = () => {
  if (!navbar) return;
  navbar.classList.toggle("scrolled", window.scrollY > 30);
};
window.addEventListener("scroll", onScrollNavbar);
onScrollNavbar();

// Animações suaves ao rolar com delay por elemento
const animatedSections = document.querySelectorAll(".fade-in-section");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = Number(entry.target.dataset.delay || 0);
          entry.target.style.transitionDelay = `${delay}ms`;
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  animatedSections.forEach((section) => observer.observe(section));
} else {
  animatedSections.forEach((section) => section.classList.add("is-visible"));
}
