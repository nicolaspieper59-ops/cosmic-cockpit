export function activate(container) {
  const g = 9.80665; // constante
  container.querySelector('#g-value').textContent = `g = ${g.toFixed(2)} m/s²`;
}
