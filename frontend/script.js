async function _load() {
  const root = document.getElementById("root");

  const res = await fetch(`http://localhost:8080`);

  const message = await res.json();

  root.innerHTML = message.text;
}

window.addEventListener("load", _load);
