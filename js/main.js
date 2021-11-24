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
      console.log(elements);
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

  fillTable();
});
