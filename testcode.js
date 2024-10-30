function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = 344;
    return `rgb(${r}, ${g}, ${b})`;
}

function applyRandomBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
}

// Usage example: change background color every 2 seconds
setInterval(applyRandomBackgroundColor, 2000);
