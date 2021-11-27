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

  const addActions = () => {};

  const reloadTable = () => {
    const playersTable = document.getElementById("playersTable");

    const tbody = playersTable.querySelector("tbody");
    removeAllChildNodes(tbody);

    fillTbody(playersTable, players.datas);
  };

  const update = (playerId, event) => {
    const playersTable = document.getElementById("playersTable");
    document.getElementById("edit-player-form").style.display = "block";

    const player = players.datas[playerId];
    document.getElementById("editName").value = player.name;
    document.getElementById("editImage").value = player.image;
    document.getElementById("editPosition").value = player.position;
    document.getElementById("editDescription").value = player.description;

    const editPlayerForm = document.getElementById("edit-player-form");
    editPlayerForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(event.target);
      const value = Object.fromEntries(data.entries());
      const newPlayer = {
        name: value.editName,
        image: value.editImage,
        position: value.editPosition,
        description: value.editDescription,
        actions: ["Modifier", "Supprimer"],
      };

      players.datas.splice(playerId, 1, newPlayer);
      reloadTable(playersTable, players.datas);
    });
  };

  const add = (event) => {
    event.preventDefault();

    const playersTable = document.getElementById("playersTable");
    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
    const newPlayer = {
      name: value.addName,
      image: value.addImage,
      position: value.addPosition,
      description: value.addDescription,
      actions: ["Modifier", "Supprimer"],
    };

    players.datas.push(newPlayer);
    reloadTable(playersTable, players.datas);
  };

  const remove = (playerId) => {
    const playersTable = document.getElementById("playersTable");

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
