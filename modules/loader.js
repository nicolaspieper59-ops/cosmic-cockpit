import { modules } from "./config.js";

export function chargerModule(nom) {
  const url = modules[nom];
  if (!url) return;
  fetch(url).then(r => r.text()).then(html => {
    const div = document.createElement("div");
    div.innerHTML = html;
    document.body.appendChild(div);
  });
      }
