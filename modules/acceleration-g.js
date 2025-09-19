function dessinerG(g) {
  const canvas = document.getElementById("accelCanvas");
  const ctx = canvas.getContext("2d");
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const rayon = 40 + g * 60;
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, rayon, 0, 2 * Math.PI);
  ctx.strokeStyle = `rgba(${Math.min(255, g*255)}, ${255 - g*100}, 255, 0.7)`;
  ctx.lineWidth = 4;
  ctx.stroke();
}

window.addEventListener("devicemotion", e => {
  const ax = e.acceleration.x || 0;
  const ay = e.acceleration.y || 0;
  const az = e.acceleration.z || 0;
  const a = Math.sqrt(ax**2 + ay**2 + az**2);
  const g = a / 9.81;
  document.getElementById("accelG").textContent = g.toFixed(2);
  dessinerG(g);
});
