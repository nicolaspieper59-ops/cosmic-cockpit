function estActif(module) {
  return localStorage.getItem(module + "Actif") === "true";
}

function chargerModule(url) {
  fetch(url).then(r => r.text()).then(html => {
    const div = document.createElement("div");
    div.innerHTML = html;
    document.body.appendChild(div);
  });
}
