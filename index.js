function startCountdownTo8PM() {
    const now = new Date();
    const targetTime = new Date(now);

    // Set target time to 8 PM today
    targetTime.setHours(20, 0, 0, 0);

    // If it's already past 8 PM, set target to 8 PM tomorrow
    if (now.getTime() > targetTime.getTime()) {
        targetTime.setDate(targetTime.getDate() + 1);
    }

    function updateCountdown() {
        const currentTime = new Date();
        const timeLeft = targetTime - currentTime;

        if (timeLeft <= 0) {
            // Target time reached
            clearInterval(interval);
            document.getElementById('countdown').textContent = "Text Available!";
            document.getElementById('hiddenText').style.display = 'block';
            return;
        }

        const hours = Math.floor(timeLeft / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById('countdown').textContent = `${hours}h ${minutes}m ${seconds}s`;
    }

    updateCountdown(); // Initial call to avoid delay
    const interval = setInterval(updateCountdown, 1000); // Update every second
}

// Example HTML structure:
document.body.innerHTML = `
  <div id="countdown"></div>
  <div id="hiddenText" style="display: none;">
    This is the text that becomes available at 8 PM.
  </div>
`;

// CSS styling:
const style = document.createElement('style');
style.textContent = `
  body {
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
    background-color: #f4f4f4;
  }

  #countdown {
    font-size: 2em;
    font-weight: bold;
    color: #333;
    padding: 20px;
    border: 2px solid #ddd;
    border-radius: 8px;
    margin-bottom: 20px;
    background-color: white;
  }

  #hiddenText {
    font-size: 1.2em;
    color: #555;
    padding: 15px;
    border: 1px solid #eee;
    border-radius: 5px;
    background-color: #f9f9f9;
  }
`;
document.head.appendChild(style);

startCountdownTo8PM();