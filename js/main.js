document.addEventListener("DOMContentLoaded", function () {
  const players = {
    props: ["Nom", "Image", "Poste", "Description"],
    datas: [
      {
        name: "Dane Coles",
        image: "/TP1/tp-front-clubsportif%20/img/dane-coles.jpeg",
        position: "Talonneur",
        description: "183cm / 110kg",
      },
      {
        name: "George Bower",
        image: "/TP1/tp-front-clubsportif%20/img/george-bower.jpg",
        position: "Pillier",
        description: "186cm / 120kg",
      },
      {
        name: "Joe Moody",
        image: "/TP1/tp-front-clubsportif%20/img/joe-moody.jpeg",
        position: "Pillier",
        description: "188cm / 120kg",
      },

      {
        name: "Patrick Tuopulotu",
        image: "/TP1/tp-front-clubsportif%20/img/patrick-tuopulotu.jpeg",
        position: "2ème ligne",
        description: "198cm / 120kg",
      },
    ],
  };

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

  const fillThead = (table, thTexts) => {
    const thead = table.querySelector("thead");
    const tr = document.createElement("tr");

    thead.appendChild(tr);

    thTexts.map((thText) => {
      const th = document.createElement("th");
      const text = document.createTextNode(thText);
      th.appendChild(text);
      tr.appendChild(th);
    });
  };

  const fillTbody = (table, datas) => {
    const tbody = table.querySelector("tbody");
    datas.map((elements) => {
      const tr = document.createElement("tr");
      tbody.appendChild(tr);
      Object.entries(elements).map(([key, value]) => {
        if (key !== "image") {
          const td = document.createElement("td");
          const text = document.createTextNode(value);
          td.appendChild(text);
          tr.appendChild(td);
        } else {
          const td = document.createElement("td");
          const img = document.createElement("img");
          img.setAttribute("src", value);
          img.setAttribute("width", "400px");

          td.appendChild(img);
          tr.appendChild(td);
        }
      });
    });
  };

  const fillTable = () => {
    const playersTable = document.getElementById("playersTable");

    fillThead(playersTable, players.props);
    fillTbody(playersTable, players.datas);
  };

  const fillMenu = () => {
    const nav = document.querySelector("nav");
    const ulNav = nav.firstChild();
    console.log("fd" + menu.contactd);
    Object.entries(menu).map(([key, value]) => {
      console.log(key + " " + value);
      const li = document.createElement("li");
      const a = document.createElement("a");
      const text = document.createTextNode(value);
      a.setAttribute("href", `${key}` + ".html");
      a.appendChild(text);
      li.appendChild(a);
      ulNav.appendChild(li);
    });
  };

  fillTable();
  fillMenu();
});

// <li>
// <a href="index.html" class="active">Accueil</a>
// </li>
// <li>
// <a href="sub-space.html">Espace abonnées</a>
// <ul>
//   <li>
//     <a href="#">Connexion</a>
//     <a href="#">Mes informations</a>
//     <a href="#">Messagerie</a>
//     <a href="#">historirique</a>
//   </li>
// </ul>
// </li>
// <li>
// <a href="matchs.html">Ambiance matchs</a>
// </li>
// <li>
// <a href="highlight.html">Moments forts</a>
// </li>
// <li>
// <a href="players.html">Joueurs</a>
// </li>
// <li>
// <a href="contact.html">Contact</a>
// </li>
