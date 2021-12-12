document.addEventListener("DOMContentLoaded", function () {
  const players = [
    {
      name: "Dane Coles",
      image: "img/dane-coles.jpeg",
      position: "Talonneur",
      description: "183cm / 110kg",
      actions: ["Modifier", "Supprimer"],
    },
    {
      name: "George Bower",
      image: "img/george-bower.jpg",
      position: "Pillier",
      description: "186cm / 120kg",
      actions: ["Modifier", "Supprimer"],
    },
    {
      name: "Joe Moody",
      image: "img/joe-moody.jpeg",
      position: "Pillier",
      description: "188cm / 120kg",
      actions: ["Modifier", "Supprimer"],
    },

    {
      name: "Patrick Tuopulotu",
      image: "img/patrick-tuopulotu.jpeg",
      position: "2ème ligne",
      description: "198cm / 120kg",
      actions: ["Modifier", "Supprimer"],
    },
  ];

  const createPlayerCard = (player) => {
    const colDiv = document.createElement("div");
    const cardDiv = document.createElement("div");
    const img = document.createElement("img");
    const cardBodyDiv = document.createElement("div");
    const h5CardBody = document.createElement("h5");
    const ul = document.createElement("ul");
    const positionItem = document.createElement("li");
    const descriptionItem = document.createElement("li");
    const session = document.getElementById("session").value;

    console.log(session);
    colDiv.setAttribute("class", "col");

    cardDiv.setAttribute("class", "card");

    colDiv.appendChild(cardDiv);

    img.setAttribute("src", player.image);
    img.setAttribute("class", "card-img-top");
    img.setAttribute("style", "height: 25vw; object-fit: cover");
    cardDiv.appendChild(img);

    cardBodyDiv.setAttribute("class", "card-body");
    cardDiv.appendChild(cardBodyDiv);

    h5CardBody.setAttribute("class", "card-title");
    h5CardBody.appendChild(document.createTextNode(player.name));
    cardBodyDiv.appendChild(h5CardBody);

    ul.setAttribute("class", "list-group list-group-flush");
    cardBodyDiv.appendChild(ul);

    positionItem.setAttribute("class", "list-group-item");
    positionItem.appendChild(
      document.createTextNode("Position: " + player.position)
    );
    ul.appendChild(positionItem);

    descriptionItem.setAttribute("class", "list-group-item");
    descriptionItem.appendChild(
      document.createTextNode("Description: " + player.description)
    );
    ul.appendChild(descriptionItem);

    if (session === "admin") {
      const updateButton = document.createElement("a");
      const deleteButton = document.createElement("a");

      updateButton.setAttribute("class", "btn btn-primary");
      updateButton.setAttribute("href", "#");
      updateButton.appendChild(document.createTextNode("Modifier"));
      cardBodyDiv.appendChild(updateButton);

      deleteButton.setAttribute("class", "btn btn-danger");
      deleteButton.setAttribute("href", "#");
      deleteButton.appendChild(document.createTextNode("Supprimer"));
      cardBodyDiv.appendChild(deleteButton);
    } else if (session === "user") {
      const discoverLink = document.createElement("a");
      discoverLink.setAttribute("href", "#");
      discoverLink.setAttribute("class", "btn btn-primary");
      discoverLink.appendChild(document.createTextNode("Découvrir"));
      cardBodyDiv.appendChild(discoverLink);
    }
    return colDiv;
  };

  const displayPlayerCards = () => {
    const cardGroup = document.getElementById("card-group");
    Object.entries(players).map((player) => {
      const playerCard = createPlayerCard(player[1]);
      cardGroup.appendChild(playerCard);
    });
  };

  displayPlayerCards();
});
