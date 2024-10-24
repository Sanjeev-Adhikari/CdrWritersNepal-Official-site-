document.addEventListener("DOMContentLoaded", () => {
  const accordionItems = document.querySelectorAll(
    "#accordion-collapse h2 button"
  );

  accordionItems.forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.querySelector(
        button.getAttribute("data-accordion-target")
      );
      const expanded = button.getAttribute("aria-expanded") === "true";

      // Close other panels
      accordionItems.forEach((item) => {
        if (item !== button) {
          const otherTarget = document.querySelector(
            item.getAttribute("data-accordion-target")
          );
          otherTarget.style.maxHeight = "0px";
          item.querySelector("svg").classList.remove("rotate-180");
          item.setAttribute("aria-expanded", "false");
        }
      });

      if (expanded) {
        target.style.maxHeight = "0px";
        button.querySelector("svg").classList.remove("rotate-180");
        button.setAttribute("aria-expanded", "false");
      } else {
        target.style.maxHeight = target.scrollHeight + "px";
        button.querySelector("svg").classList.add("rotate-180");
        button.setAttribute("aria-expanded", "true");
      }
    });
  });
});
