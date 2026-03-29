const currentYear = document.getElementById("currentYear");
if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

const revealElements = document.querySelectorAll(".reveal-up");

revealElements.forEach((element) => {
  const delay = element.getAttribute("data-reveal-delay");
  if (delay) {
    element.style.setProperty("--reveal-delay", `${delay}ms`);
  }
});

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
      rootMargin: "0px 0px -12% 0px",
      threshold: 0.16,
    }
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}
