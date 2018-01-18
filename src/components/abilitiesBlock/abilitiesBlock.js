//import {bindable} from 'aurelia-framework';

export class AbilitiesBlock {
  constructor() {
    this.test = 'dfsffs';
    this.obj = {
      STR: 15,
      DEX: 14,
      CON: 13,
      INT: 12,
      WIS: 10,
      CHA: 8
    };
    this.stats = this.findModifier(this.obj);
  }

  findModifier(obj) {
    let modifier = '';
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        modifier = this.modifierSearch(obj[prop]);
        obj[prop] = obj[prop] + modifier;
      }
    }
    return obj;
  }

  modifierSearch(value) {
    let sign = '';
    let modArray = [0, 1, 4, 4, 3, 3, 2, 2, 1, 1, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10];
    sign = (value < 10) ? '-' : '+';
    return ' (' + sign + modArray[value] + ')';
  }
}
