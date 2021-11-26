document.addEventListener("DOMContentLoaded", function () {
  const players = {
    props: ["Nom", "Image", "Poste", "Description", "Actions"],
    datas: [
      {
        name: "Dane Coles",
        image: "/TP1/tp-front-clubsportif%20/img/dane-coles.jpeg",
        position: "Talonneur",
        description: "183cm / 110kg",
        actions: ["Modifier", "Supprimer"],
      },
      {
        name: "George Bower",
        image: "/TP1/tp-front-clubsportif%20/img/george-bower.jpg",
        position: "Pillier",
        description: "186cm / 120kg",
        actions: ["Modifier", "Supprimer"],
      },
      {
        name: "Joe Moody",
        image: "/TP1/tp-front-clubsportif%20/img/joe-moody.jpeg",
        position: "Pillier",
        description: "188cm / 120kg",
        actions: ["Modifier", "Supprimer"],
      },

      {
        name: "Patrick Tuopulotu",
        image: "/TP1/tp-front-clubsportif%20/img/patrick-tuopulotu.jpeg",
        position: "2ème ligne",
        description: "198cm / 120kg",
        actions: ["Modifier", "Supprimer"],
      },
    ],
  };

  const removeAllChildNodes = (parent) => {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  };

  const reloadTable = () => {
    const playersTable = document.getElementById("playersTable");

    const tbody = playersTable.querySelector("tbody");
    removeAllChildNodes(tbody);

    fillTbody(playersTable, players.datas);
  };

  const update = (playerId) => {};

  const add = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    const value = Object.fromEntries(data.entries());

    players.datas.push(value);
    console.log(players.datas.slice(-1).pop());

    addRow(players.datas.slice(-1).pop(), "td");
  };

  const remove = (playerId) => {
    const playersTable = document.getElementById("playersTable");
    console.log(playerId);

    players.datas.splice(playerId, 1);
    reloadTable(playersTable, players.datas);
  };

  const addPlayerForm = document.getElementById("add-player-form");
  addPlayerForm.addEventListener("submit", add);

  const addRow = (datas, tableCase = null) => {
    const playersTable = document.getElementById("playersTable");
    const tbody = playersTable.querySelector("tbody");
    const tr = document.createElement("tr");

    Object.entries(datas).map(([key, value]) => {
      console.log(value);
      const c = document.createElement(tableCase);
      c.appendChild(document.createTextNode(value));
      tr.appendChild(c);
    });

    tbody.appendChild(tr);
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
    datas.map((elements, index) => {
      const tr = document.createElement("tr");
      tbody.appendChild(tr);
      const id = index;
      Object.entries(elements).map(([key, value]) => {
        const td = document.createElement("td");

        if (key === "image") {
          const img = document.createElement("img");
          img.setAttribute("src", value);
          img.setAttribute("width", "400px");
          td.appendChild(img);
        } else if (key === "actions") {
          value.map((action) => {
            const btn = document.createElement("button");
            btn.setAttribute("type", "button");
            if (action === "Modifier") {
              btn.onclick = () => {
                update(id);
              };
            } else {
              btn.onclick = () => {
                remove(id);
              };
            }

            const text = document.createTextNode(action);
            btn.appendChild(text);
            td.appendChild(btn);
          });
        } else {
          const text = document.createTextNode(value);
          td.appendChild(text);
        }
        tr.appendChild(td);
      });
    });
  };

  const fillTable = () => {
    const playersTable = document.getElementById("playersTable");

    fillThead(playersTable, players.props);
    fillTbody(playersTable, players.datas);
  };

  fillTable();
});
