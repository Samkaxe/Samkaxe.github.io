function countdownToChristmas() {
    const currentDate = new Date();
    const christmasDate = new Date(currentDate.getFullYear(), 11, 25);

    // Check if Christmas has already passed this year
    if (currentDate > christmasDate) {
        christmasDate.setFullYear(christmasDate.getFullYear() + 1); // Set it to next year
    }

    const timeLeft = christmasDate - currentDate;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Update the countdown every second
setInterval(countdownToChristmas, 1000);

// Initial call to display the countdown immediately
countdownToChristmas();