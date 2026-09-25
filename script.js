// Small entrance effect. The page also works if JavaScript is disabled.
document.documentElement.classList.add("js");

window.addEventListener("load", () => {
  const content = document.querySelector(".hero-content");
  if (!content) return;

  content.animate(
    [
      { opacity: 0, transform: "translateY(18px)" },
      { opacity: 1, transform: "translateY(0)" }
    ],
    {
      duration: 700,
      easing: "cubic-bezier(.2,.7,.2,1)",
      fill: "both"
    }
  );
});
