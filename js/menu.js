document.addEventListener("DOMContentLoaded", function () {
  const menu = {
    home: "Accueil",
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
    const button = document.createElement("button");
    const text = document.createTextNode(navItemText);

    li.setAttribute("class", "nav-item");
    li.setAttribute("role", "presentation");

    button.setAttribute("class", "nav-link");
    button.setAttribute("id", `pills-${pageName}-tab`);
    button.setAttribute("data-bs-toggle", "pill");
    button.setAttribute("data-bs-target", `#pills-${pageName}`);
    button.setAttribute("type", "button");
    button.setAttribute("role", "tab");
    button.setAttribute("aria-controls", `pills-${pageName}`);
    button.setAttribute("aria-selected", `${pageName === currPageName}`);

    button.appendChild(text);

    // if (pageName === currPageName) {
    //   button.setAttribute("class", "active");
    // }

    ul.appendChild(li);
    li.appendChild(button);

    return li;
  };

  const fillMenu = () => {
    const ulNav = document.getElementById("nav-list");
    const currPageName = window.location.href.split("/").pop().split(".")[0];

    Object.entries(menu).map(([pageName, navItemText]) => {
      if (Array.isArray(navItemText)) {
        const li = createNavItem(navItemText[0], pageName, currPageName, ulNav);
        const ul = document.createElement("ul");
        ul.setAttribute("class", "dropdown-menu");

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
});
