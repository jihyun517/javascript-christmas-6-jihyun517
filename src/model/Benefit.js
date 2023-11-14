import { ARRAY } from "../commons/constants.js";
import Order from "./Order.js";

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
    }
    console.log("benefitResult", benefitResult);
    return benefitResult;
  }

  #isDDay() {
    return (this.#date <= 25)
  }

  #applyDDay() {
    let discount = 1000;
    for (let day = 0; day <= this.#date; day++) {
      discount += 100;
    }
    return discount;
  }

}
export default Benefit;