import { MENU, ARRAY, CALENDAR, DISCOUNT_AMOUNT } from "../commons/constants.js";
import Order from "./Order.js";
import { getMenu } from "../commons/utils.js";

class Benefit {
  #date;
  #menu;
  #order;


  constructor(date, menu) {
    this.#date = date;
    this.#menu = menu;
    this.#order = new Order(date, menu)
  }

  #isBenefit() {
    return (this.#order.getAllAmount() > 10000)
  }

  benefitDetail() {
    // benefitResult [ DDay | Weekday | Weekend | Special | Giveaway ]
    const benefitResult = [0, 0, 0, 0, 0];
    if (this.#isBenefit()) {
      if (this.#isDDay()) benefitResult[ARRAY.DDAY] = this.#applyDDay();
      if (this.#isWeekday()) benefitResult[ARRAY.WEEKDAY] = this.#applyWeekday();
    }
    console.log("benefitResult", benefitResult);
    return benefitResult;
  }

  #isDDay() {
    return (this.#date <= 25)
  }

  #isWeekday() {
    return (CALENDAR.WEEKDAY.includes(this.#date))
  }

  #applyDDay() {
    let discount = DISCOUNT_AMOUNT.DDAY_START;
    for (let day = 1; day < this.#date; day++) {
      discount += 100;
    }
    return discount;
  }

  #applyWeekday() {
    const menuCount = this.#getMenuCount(getMenu(MENU.DESSERT));
    return menuCount * DISCOUNT_AMOUNT.WEEKDAY
  }

  #getMenuCount(menuArray) {
    let menuCount = 0;
    menuArray.forEach((menu) => {
      this.#menu[ARRAY.MENU].forEach((myMenu, index) => {
        if (menu === myMenu) menuCount += this.#menu[ARRAY.COUNT][index]
      })
    })
    return menuCount;
  }

}
export default Benefit;