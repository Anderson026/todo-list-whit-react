// função para gerar um id aleatório
  function randomId() {
    let number = parseInt(Math.random() * 10000);
    return number
  }

class Item {

  // variável de classe
  // static lastId = 0;

  constructor(text) {
    this.id = randomId();
    this.text = text;
    this.done = false;
  }

}

export default Item;