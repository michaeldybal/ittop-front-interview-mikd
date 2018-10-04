export default class Model {
  static parse(json) {
      const jsonObject = JSON.parse(json);

      for (let prop in this) {
          if (this.hasOwnProperty(prop)) {

              if (json[prop] === null || json[prop] === undefined) {
                  throw new Error('Parsing model error.');
              }

              this[prop] = jsonObject[prop];
          }
      }
  }

  toJson() {
      return JSON.stringify(this);
  }
}
