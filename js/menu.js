document.addEventListener("DOMContentLoaded", function () {
  const menu = {
    index: "Accueil",
    subSpace: [
      "Espaces abonnées",
      "Connexion",
      "Mes informations",
      "Messagerie",
      "historique",
    ],
    matchs: "Ambiance matchs",
    highlight: "Moments forts",
    players: "Joueurs",
    contact: "Contact",
  };

  const fillMenu = () => {
    const ulNav = document.querySelector("nav > ul");
    Object.entries(menu).map(([key, value]) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      const text = document.createTextNode(value);
      a.setAttribute("href", `${key}` + ".html");
      a.appendChild(text);
      li.appendChild(a);
      ulNav.appendChild(li);
    });
  };

  fillMenu();
});
