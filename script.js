window.addEventListener("load", () => {
  const targets = document.querySelectorAll(".hero-content, .about-header, .cards, .process, .credits");

  targets.forEach((element, index) => {
    element.animate(
      [
        { opacity: 0, transform: "translateY(18px)" },
        { opacity: 1, transform: "translateY(0)" }
      ],
      {
        duration: 600,
        delay: Math.min(index * 70, 250),
        easing: "cubic-bezier(.2,.7,.2,1)",
        fill: "both"
      }
    );
  });
});
