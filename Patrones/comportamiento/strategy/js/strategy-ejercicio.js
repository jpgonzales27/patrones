console.log("Strategy Ejercicio");

const data = [
  {
    name: "cerveza",
    country: "Bolivia",
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    img: "urlimagen.com",
  },
  {
    name: "carne",
    country: "Alemania",
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    img: "urlimagen.com",
  },
  {
    name: "soda",
    country: "Argentina",
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    img: "urlimagen.com",
  },
];

//Contexto Principal
class InfoContext {
  constructor(strategy, data, element) {
    this.setStrategy(strategy);
    this.data = data;
    this.element = element;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  show() {
    this.strategy.show(this.data, this.element);
  }
}

//Estrategias
class ListStrategy {
  show(data, element) {
    element.innerHTML = data.reduce((acumulador, item) => {
      return (
        acumulador +
        `<div>
            <h2>${item.name}</h2>
            <p>${item.country}</p>
        </div>
        <hr>`
      );
    }, "");
  }
}

class DetailedListStrategy {
  show(data, element) {
    element.innerHTML = data.reduce((acumulador, item) => {
      return (
        acumulador +
        `<div>
              <h2>${item.name}</h2>
              <p>${item.country}</p>
              <p>${item.info}</p>
          </div>
          <hr>`
      );
    }, "");
  }
}

class ListWithImageStrategy {
  show(data, element) {
    element.innerHTML = data.reduce((acumulador, item) => {
      return (
        acumulador +
        `<div>
                <img width="10%" src="${item.img}" alt="${item.img}">
                <h2>${item.name}</h2>
                <p>${item.country}</p>
                <p>${item.info}</p>
            </div>
            <hr>`
      );
    }, "");
  }
}

const strategies = [
  new ListStrategy(),
  new DetailedListStrategy(),
  new ListWithImageStrategy(),
];

const info = new InfoContext(new ListStrategy(), data, content);
info.show();

selectOptions.addEventListener("change", (event) => {
  const opt = event.target.value;
  info.setStrategy(strategies[opt]);
  info.show();
});
