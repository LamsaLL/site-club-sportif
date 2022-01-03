document.addEventListener("DOMContentLoaded", () => {
  const session = document.getElementById("session").value;

  const addPLayerForm = document.getElementById("add-player-form");

  const getPlayers = async () => {
    //get players from json file
    const response = await fetch("php/players.json");
    const players = await response.json();
    return players;
  };

  const postPlayer = async (player) => {
    //post player to json file
    const response = await fetch("php/players.php?action=create", {
      method: "POST",
      body: player,
    });
    return await response.json();
  };

  const deletePlayer = async (id) => {
    //delete player from json file
    const response = await fetch(
      "php/players.php?id=" + id + "&action=delete",
      {
        method: "POST",
      }
    );
    return await response.json();
  };

  const updatePlayer = async (id, player) => {
    //update player in json file
    const response = await fetch(
      "php/players.php?id=" + id + "&action=update",
      {
        method: "POST",
        body: player,
      }
    );
    return await response.json();
  };

  const fillUpdateForm = (fields) => {
    Object.entries(fields).map(([key, value]) => {
      document.getElementById(`${key}`).value = value;
    });
  };

  const showUpdateForm = (player) => {
    const editPlayerForm = document.getElementById("edit-player-form");
    editPlayerForm.style.display = "block";

    const fields = {
      editName: player.name,
      editImage: player.image,
      editPosition: player.position,
      editDescription: player.description,
    };

    fillUpdateForm(fields);

    location.href = "#edit-player-form";

    editPlayerForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const data = new FormData(event.target);
      const value = Object.fromEntries(data.entries());

      const formData = new FormData();

      //add form data to formData
      formData.append("id", player.id);
      formData.append("name", value.editName);
      formData.append("image", value.editImage);
      formData.append("position", value.editPosition);
      formData.append("description", value.editDescription);

      updatePlayer(player.id, formData).then((playerUpdated) => {
        editPlayerForm.style.display = "none";
        //reload
        location.reload();
      });
    });
  };

  //function to generalize the creation of HTML DOM element
  const createElement = (
    element,
    className,
    id = null,
    style = null,
    src = null,
    type = null,
    value = null
  ) => {
    const newElement = document.createElement(element);
    newElement.classList.add(...className);

    if (id) newElement.id = id;
    if (style) newElement.style = style;
    if (src) newElement.src = src;
    if (type) newElement.type = type;
    if (value) newElement.value = value;

    return newElement;
  };

  const createPlayerCard = (player) => {
    const colDiv = createElement("div", ["col"]);

    const cardDiv = createElement("div", ["card"], `player-card-${player.id}`);
    colDiv.appendChild(cardDiv);

    const img = createElement(
      "img",
      ["card-img-top", "player-image"],
      null,
      "height: 25vw; object-fit: cover",
      player.image
    );
    cardDiv.appendChild(img);

    const cardBodyDiv = createElement("div", ["card-body"]);
    cardDiv.appendChild(cardBodyDiv);

    const h5CardBody = createElement("h5", ["card-title", "player-name"]);
    h5CardBody.appendChild(document.createTextNode(player.name));
    cardBodyDiv.appendChild(h5CardBody);

    const ul = createElement("ul", ["list-group", "list-group-flush"]);
    cardBodyDiv.appendChild(ul);

    const positionItem = createElement("li", [
      "list-group-item",
      "player-position",
    ]);
    positionItem.appendChild(
      document.createTextNode("Position: " + player.position)
    );
    ul.appendChild(positionItem);

    const descriptionItem = createElement("li", [
      "list-group-item",
      "player-description",
    ]);
    descriptionItem.appendChild(
      document.createTextNode("Description: " + player.description)
    );
    ul.appendChild(descriptionItem);

    if (session === "admin") {
      const updateButton = createElement(
        "input",
        ["btn", "btn-primary"],
        null,
        null,
        null,
        "submit",
        "Modifier"
      );

      updateButton.addEventListener("click", () => {
        showUpdateForm(player);
      });

      cardBodyDiv.appendChild(updateButton);

      const deleteButton = createElement(
        "input",
        ["btn", "btn-danger"],
        null,
        null,
        null,
        "submit",
        "Supprimer"
      );

      deleteButton.addEventListener("click", async (e) => {
        e.preventDefault();
        await deletePlayer(player.id);
        document.getElementById("card-group").removeChild(colDiv);
      });

      cardBodyDiv.appendChild(deleteButton);
    } else if (session === "user") {
      const discoverButton = createElement(
        "input",
        ["btn", "btn-primary"],
        null,
        null,
        null,
        "submit",
        "Découvrir"
      );
      cardBodyDiv.appendChild(discoverButton);
    }
    return colDiv;
  };

  const displayPlayerCard = (player) => {
    const cardGroup = document.getElementById("card-group");
    const playerCard = createPlayerCard(player);
    cardGroup.appendChild(playerCard);
  };

  //Get all players from json file and display them
  getPlayers().then((players) => {
    players.forEach((player) => {
      displayPlayerCard(player);
    });
  });

  if (session === "admin") {
    addPLayerForm.style.display = "block";

    //Listen on add player form
    addPLayerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("addName").value;
      const position = document.getElementById("addPosition").value;
      const description = document.getElementById("addDescription").value;
      const image = document.getElementById("addImage").value;

      //get random int between 1 and 999
      const id = Math.floor(Math.random() * 999) + 1;
      //new form data
      const formData = new FormData();

      //add form datas to formData
      formData.append("id", id);
      formData.append("name", name);
      formData.append("position", position);
      formData.append("description", description);

      postPlayer(formData).then(displayPlayerCard);
    });
  }
});
