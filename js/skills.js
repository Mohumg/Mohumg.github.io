// js/skills.js

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const progress = entry.target;
          const percent = progress.getAttribute("data-percent");
          progress.style.width = percent + "%";
          observer.unobserve(progress); // 다시 애니메이션 안 하게
        }
      });
    },
    { threshold: 0.5 }
  );

  const bars = document.querySelectorAll(".progress");
  bars.forEach((bar) => observer.observe(bar));
});
