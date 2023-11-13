import { ARRAY, MENU } from "../commons/constants.js";

class Order {
  #date;
  #menu;
  #allAmount = 0;

  constructor(date, menu) {
    this.#date = date;
    this.#menu = menu;
  }

  getAllAmount() {
    const menuCategory = Object.keys(MENU);
    menuCategory.forEach((menuCategory) => {
      let menudetail = new Map(MENU[menuCategory]);
      menudetail.forEach((price, menu) => {
        this.#compareMenu(price, menu);
      })
    })
    return this.#allAmount;
  }

  #compareMenu(price, menu) {
    this.#menu[ARRAY.MENU].forEach((myMenu, index) => {
      if (menu === myMenu) {
        this.#allAmount += this.#menu[ARRAY.COUNT][index] * price;
      }
    })
  }

  getMenuCount(category) {

  }
}
export default Order;