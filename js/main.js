document.addEventListener("DOMContentLoaded", () => {
    // Intersection Observerでのスクロールアニメーション（fade-in処理）
    const sections = document.querySelectorAll(".fade-section");
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    }, { threshold: 0.2 });
  
    sections.forEach(section => observer.observe(section));
  });
  