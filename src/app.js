export class App {
  constructor() {
    this.message = 'Hello World!';
    this.itemArray = [{}];
  }

  newItem() {
    let obj = {};
    this.itemArray.push(obj);
  }
}
