import { MENU, ARRAY, CALENDAR, DISCOUNT_AMOUNT } from "../commons/constants.js";
import Order from "./Order.js";
import { getMenu, getMenuCount } from "../commons/utils.js";

class Benefit {
  #date;
  #menu;
  #order;


  constructor(date, menu) {
    this.#date = date;
    this.#menu = menu;
    this.#order = new Order(date, menu);
  }

  benefitDetail() {
    // benefitResult [ DDay | Weekday | Weekend | Special | Giveaway ]
    const benefitResult = [0, 0, 0, 0, 0];
    if (this.#isBenefit()) {
      if (this.#isDDay()) benefitResult[ARRAY.DDAY] = this.#applyDDay();
      if (this.#isWeekday()) benefitResult[ARRAY.WEEKDAY] = this.#applyWeekday();
      if (this.#isWeekend()) benefitResult[ARRAY.WEEKEND] = this.#applyWeekend();
      if (this.#isSpecial()) benefitResult[ARRAY.SPECIALDAY] = this.#applySpecial();
      if (this.#isGiveaway()) benefitResult[ARRAY.GIVEAWAY] = this.#applyGiveaway();
    }
    return benefitResult;
  }
  
  #isBenefit() {
    return (this.#order.getAllAmount() > 10000);
  }

  #isDDay() {
    return (this.#date <= 25);
  }

  #isWeekday() {
    return (CALENDAR.WEEKDAY.includes(this.#date));
  }

  #isWeekend() {
    return (CALENDAR.WEEKEND.includes(this.#date));
  }

  #isSpecial() {
    return (CALENDAR.SPECIAL.includes(this.#date));
  }

  #isGiveaway() {
    return (this.#order.getAllAmount() >= 120000);
  }

  #applyDDay() {
    let discount = DISCOUNT_AMOUNT.DDAY_START;
    for (let day = 1; day < this.#date; day++) {
      discount += 100;
    }
    return discount;
  }

  #applyWeekday() {
    const menuCount = getMenuCount(getMenu(MENU.DESSERT), this.#menu);
    return menuCount * DISCOUNT_AMOUNT.WEEKDAY;
  }

  #applyWeekend() {
    const menuCount = getMenuCount(getMenu(MENU.MAIN), this.#menu);
    return menuCount * DISCOUNT_AMOUNT.WEEKEND;
  }

  #applySpecial() {
    return DISCOUNT_AMOUNT.SPECIALDAY;
  }

  #applyGiveaway() {
    return DISCOUNT_AMOUNT.GIVEAWAY;
  }

}
export default Benefit;