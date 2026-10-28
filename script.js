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

document.querySelectorAll(".copy-prompt").forEach((button) => {
  button.addEventListener("click", async () => {
    const prompt = document.getElementById(button.dataset.copyTarget);
    if (!prompt) return;

    const text = prompt.textContent.trim();
    const originalLabel = button.textContent;

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const temporaryInput = document.createElement("textarea");
        temporaryInput.value = text;
        temporaryInput.setAttribute("readonly", "");
        temporaryInput.style.position = "fixed";
        temporaryInput.style.opacity = "0";
        document.body.appendChild(temporaryInput);
        temporaryInput.select();
        const copied = document.execCommand("copy");
        temporaryInput.remove();
        if (!copied) throw new Error("No se pudo copiar el texto");
      }

      button.textContent = "COPIADO";
      button.classList.add("is-copied");
    } catch {
      button.textContent = "NO SE PUDO COPIAR";
    }

    window.setTimeout(() => {
      button.textContent = originalLabel;
      button.classList.remove("is-copied");
    }, 1800);
  });
});
