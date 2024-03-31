function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  const hourHand = document.getElementById('hour-hand');
  const minuteHand = document.getElementById('minute-hand');
  const secondHand = document.getElementById('second-hand');

  const hourDegrees = (360 / 12) * (now.getHours() + now.getMinutes() / 60);
  const minuteDegrees = (360 / 60) * (now.getMinutes() + now.getSeconds() / 60);
  const secondDegrees = (360 / 60) * now.getSeconds();

  hourHand.textContent = hours;
  minuteHand.textContent = minutes;
  secondHand.textContent = seconds;

  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
}

updateClock();
setInterval(updateClock, 1000);
