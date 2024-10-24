function countUp(element, endValue, duration) {
  let startValue = 0;
  const increment = endValue / (duration / 16);

  const interval = setInterval(() => {
    startValue += increment;
    if (startValue >= endValue) {
      element.innerText = endValue + (element.id === "outcomes" ? "%" : "+");
      clearInterval(interval);
    } else {
      element.innerText =
        Math.floor(startValue) + (element.id === "outcomes" ? "%" : "+");
    }
  }, 16);
}

let observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      countUp(document.getElementById("clients"), 500, 3000);
      countUp(document.getElementById("years"), 4, 3000);
      countUp(document.getElementById("projects"), 500, 3000);
      countUp(document.getElementById("outcomes"), 100, 3000);
      observer.disconnect();
    }
  });
});

observer.observe(document.getElementById("achievements"));
