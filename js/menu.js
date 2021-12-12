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

  const createNavItem = (
    navItemText = "",
    pageName = "",
    currPageName = "",
    ul
  ) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    const text = document.createTextNode(navItemText);
    a.setAttribute("href", `#${pageName}`);
    a.appendChild(text);

    if (pageName === currPageName) {
      a.setAttribute("class", "active");
    }

    ul.appendChild(li);
    li.appendChild(a);

    return li;
  };

  const fillMenu = () => {
    const ulNav = document.querySelector("nav > ul");
    const currPageName = window.location.href.split("/").pop().split(".")[0];

    Object.entries(menu).map(([pageName, navItemText]) => {
      if (Array.isArray(navItemText)) {
        const li = createNavItem(navItemText[0], pageName, currPageName, ulNav);
        const ul = document.createElement("ul");

        for (let i = 1; i < navItemText.length; i++) {
          const text = navItemText[i];
          createNavItem(text, pageName, "", ul);
        }
        li.appendChild(ul);
      } else {
        createNavItem(navItemText, pageName, currPageName, ulNav);
      }
    });
  };

  fillMenu();

  const toogleVisibility = (source, target) => {
    source.style.display = "none";
    target.style.display = "block";
  };
  const h = document.getElementById("index");
  h.style.display = "block";

  let links = document.querySelectorAll("nav > ul > li > a");
  links.forEach(function (link) {
    link.addEventListener("click", function (e) {
      const idSource =
        window.location.href.split("#")[1] === undefined
          ? "index"
          : window.location.href.split("#")[1];
      const source = document.getElementById(`${idSource}`);
      const idTarget = link.getAttribute("href").split("#").pop();
      const target = document.getElementById(`${idTarget}`);
      toogleVisibility(source, target);
    });
  });
});
