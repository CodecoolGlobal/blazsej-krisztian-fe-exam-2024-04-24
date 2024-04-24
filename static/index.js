import data from "./data.js";

const root = document.querySelector("#root");

function main() {
  const section = document.createElement("section");
  section.className = "section";

  const flatList = document.createElement("div");
  flatList.className = "flat-list";

  const titleBlock = document.createElement("div");
  titleBlock.className = "flat-list__title";

  const h1 = document.createElement("h1");
  h1.className = "flat-list__title__header";
  h1.innerText = "Clean Code Principles";

  titleBlock.append(h1);
  flatList.append(titleBlock);
  section.append(flatList);

  for (const info of data) {
    const cardComponent = document.createElement("div");
    cardComponent.className = "card";

    const cardTitle = document.createElement("div");
    cardTitle.className = "card__title";
    cardTitle.innerText = info.title;

    const cardBody = document.createElement("div");
    cardBody.className = "card__body";
    cardBody.innerText = info.description;

    cardComponent.append(cardTitle, cardBody);
    flatList.append(cardComponent);
  }
  root.append(section);
  console.log(data);
}

main();
