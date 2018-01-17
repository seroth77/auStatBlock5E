export class App {
  constructor(statBlock) {
    this.statBlock = statBlock;
    this.message = 'Hello World!';
    this.itemArray = [];
  }

  newItem() {
    let obj = {};
    this.itemArray.push(obj);
  }
}
