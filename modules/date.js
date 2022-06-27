function handleDate() {
  setInterval(function () {
    const timeEl = document.querySelector(`[data-id="data-date-info"]`);
    let currentTime = new Date().toLocaleString('en-US');
    timeEl.textContent = currentTime;
    return currentTime;
  }, 1000);
}

export { handleDate };
