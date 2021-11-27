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
    const tbody = document.querySelector("tbody");
    removeAllChildNodes(tbody);
    fillTbody(players.datas);
  };

  const update = (playerId) => {
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
      reloadTable();
    });
  };

  const add = (event) => {
    event.preventDefault();

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
    reloadTable();
  };

  const remove = (playerId) => {
    players.datas.splice(playerId, 1);
    reloadTable();
  };

  const addPlayerForm = document.getElementById("add-player-form");
  addPlayerForm.addEventListener("submit", add);

  const createTableHead = (tr, text) => {
    const th = document.createElement("th");
    const thContent = document.createTextNode(text);
    th.appendChild(thContent);
    tr.appendChild(th);
  };

  const createTableCase = (
    tr,
    tagName = null,
    text = null,
    attrValue = null,
    index = null
  ) => {
    const td = document.createElement("td");

    if (tagName === "img") {
      const img = document.createElement("img");
      img.setAttribute("src", attrValue);
      img.setAttribute("width", "400px");
      td.appendChild(img);
    } else if (tagName === "button") {
      text.map((t) => {
        const btn = document.createElement("button");
        btn.setAttribute("type", "button");
        const textNode = document.createTextNode(t);
        if (t === "Modifier") {
          btn.onclick = () => {
            update(index);
          };
        } else {
          btn.onclick = () => {
            remove(index);
          };
        }
        btn.appendChild(textNode);
        td.appendChild(btn);
      });
    } else {
      td.appendChild(document.createTextNode(text));
    }
    tr.appendChild(td);
    return td;
  };

  const createTableRow = (parent, datas, index = null) => {
    const tr = document.createElement("tr");
    if (parent.tagName === "TBODY") {
      Object.entries(datas).map(([key, value]) => {
        if (key === "image") {
          createTableCase(tr, "img", null, value);
        } else if (key === "actions") {
          createTableCase(tr, "button", value, null, index);
        } else {
          createTableCase(tr, null, value);
        }
      });
    } else {
      datas.map((data) => {
        createTableHead(tr, data);
      });
    }

    parent.appendChild(tr);
    return tr;
  };

  const fillThead = (thTexts) => {
    const thead = document.querySelector("thead");
    createTableRow(thead, thTexts);
  };

  const fillTbody = (datas) => {
    const tbody = document.querySelector("tbody");

    datas.map((data, index) => {
      createTableRow(tbody, data, index);
    });
  };

  const fillTable = () => {
    fillThead(players.props);
    fillTbody(players.datas);
  };

  fillTable();
});
