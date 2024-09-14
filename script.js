function smoothScrollToBottom(duration) {
  const startPosition = window.pageYOffset;
  const targetPosition =
    document.documentElement.scrollHeight - window.innerHeight;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function animationScroll(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animationScroll);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animationScroll);
}

// Event listener for the button
document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".scroll-down-btn a")
    .addEventListener("click", function (e) {
      e.preventDefault();
      smoothScrollToBottom(4026); // 1000ms = 1 second duration
    });
});
const targetPosition =
  document.documentElement.scrollHeight - window.innerHeight;
scrollHeight = 4026;
