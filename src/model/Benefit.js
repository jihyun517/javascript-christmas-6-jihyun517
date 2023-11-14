import {
  MENU,
  MESSAGE,
  ARRAY,
  CALENDAR,
  BENEFIT_AMOUNT,
  BADGE,
  BOUNDARY,
} from "../commons/constants.js";
import Order from "./Order.js";
import { getMenu, getMenuCount } from "../commons/utils.js";

class Benefit {
  #date;
  #menu;
  #order;
  #benefitResult;

  constructor(date, menu) {
    this.#date = date;
    this.#menu = menu;
    this.#order = new Order(date, menu);
  }

  // 혜택 내역
  benefitDetail() {
    // benefitResult [ DDay | Weekday | Weekend | Special | Giveaway ]
    this.#benefitResult = [0, 0, 0, 0, 0];

    if (this.#isBenefit()) {
      if (this.#isDDay()) this.#benefitResult[ARRAY.DDAY] = this.#applyDDay();
      if (this.#isWeekday())
        this.#benefitResult[ARRAY.WEEKDAY] = this.#applyWeekday();
      if (this.#isWeekend())
        this.#benefitResult[ARRAY.WEEKEND] = this.#applyWeekend();
      if (this.#isSpecial())
        this.#benefitResult[ARRAY.SPECIALDAY] = this.#applySpecial();
      if (this.#isGiveaway())
        this.#benefitResult[ARRAY.GIVEAWAY] = this.#applyGiveaway();
    }

    return this.#benefitResult;
  }

  // 총 혜택 금액
  totalBenefit() {
    let totalBenefit = 0;
    this.#benefitResult.forEach((benefit) => {
      totalBenefit += benefit;
    });

    return totalBenefit;
  }

  // 할인 후 예상 결제 금액
  expectedAmount() {
    const totalDiscount =
      this.totalBenefit() - this.#benefitResult[ARRAY.GIVEAWAY];

    return this.#order.getAllAmount() - totalDiscount;
  }

  // 12월 이벤트 배지
  eventBadge() {
    const totalBenefit = this.totalBenefit();

    if (!this.#isBenefit()) return MESSAGE.NOTHING;
    if (totalBenefit <= BOUNDARY.STAR_PRICE) return BADGE.STAR;
    if (totalBenefit <= BOUNDARY.TREE_PRICE) return BADGE.TREE;

    return BADGE.SANTA;
  }

  #isBenefit() {
    return this.#order.getAllAmount() > BOUNDARY.BENEFIT_PRICE;
  }

  #isDDay() {
    return this.#date <= BOUNDARY.DDAY_END;
  }

  #isWeekday() {
    return CALENDAR.WEEKDAY.includes(this.#date);
  }

  #isWeekend() {
    return CALENDAR.WEEKEND.includes(this.#date);
  }

  #isSpecial() {
    return CALENDAR.SPECIAL.includes(this.#date);
  }

  #isGiveaway() {
    return this.#order.getAllAmount() >= BOUNDARY.GIVEAWAY_PRICE;
  }

  #applyDDay() {
    let discount = BENEFIT_AMOUNT.DDAY_START;
    for (let day = 1; day < this.#date; day++) {
      discount += BENEFIT_AMOUNT.DDAY_PLUS;
    }
    return discount;
  }

  #applyWeekday() {
    const menuCount = getMenuCount(getMenu(MENU.DESSERT), this.#menu);
    return menuCount * BENEFIT_AMOUNT.WEEKDAY;
  }

  #applyWeekend() {
    const menuCount = getMenuCount(getMenu(MENU.MAIN), this.#menu);
    return menuCount * BENEFIT_AMOUNT.WEEKEND;
  }

  #applySpecial() {
    return BENEFIT_AMOUNT.SPECIALDAY;
  }

  #applyGiveaway() {
    return BENEFIT_AMOUNT.GIVEAWAY;
  }
}
export default Benefit;
