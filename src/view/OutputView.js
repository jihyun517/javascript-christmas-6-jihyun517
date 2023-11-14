import { print, priceToString } from "../commons/utils.js";
import { MESSAGE, ARRAY, BENEFIT_AMOUNT } from "../commons/constants.js";

const OutputView = {
  printStart() {
    print(MESSAGE.START);
  },

  printOrderInformation(date, menu) {
    print(MESSAGE.MONTH + date + MESSAGE.SHOW_BENEFIT);
    print(MESSAGE.MENU);
    menu[ARRAY.MENU].forEach((menuName, index) => {
      print(menuName + MESSAGE.BLANK + menu[ARRAY.COUNT][index] + MESSAGE.EA);
    });
  },

  printAllAmount(amount) {
    print(MESSAGE.TOTAL_AMOUNT);
    print(priceToString(amount) + MESSAGE.WON);
  },

  printGiveaway(benefitResult) {
    print(MESSAGE.GIVEAWAY);
    if (benefitResult[ARRAY.GIVEAWAY] !== 0) print(MESSAGE.GIVEAWAY_ITEM);
    else print(MESSAGE.NOTHING);
  },

  printBenefitDetail(benefitResult) {
    print(MESSAGE.BENEFIT_DETAILS);
    if (JSON.stringify(benefitResult) === "[0,0,0,0,0]") {
      print(MESSAGE.NOTHING);
    } else {
      benefitResult.forEach((benefit, index) => {
        if (benefit !== 0)
          print(
            MESSAGE.BENEFIT_DETAILS_TITLE[index] +
              priceToString(benefit) +
              MESSAGE.WON
          );
      });
    }
  },

  printTotalBenefit(totalBenefit) {
    print(MESSAGE.TOTAL_BENEFIT);
    if (totalBenefit > 0)
      print(MESSAGE.HYPEN + priceToString(totalBenefit) + MESSAGE.WON);
    else print(priceToString(totalBenefit) + MESSAGE.WON);
  },

  printExpectedAmount(expectedAmount) {
    print(MESSAGE.EXPECTED_AMOUNT);
    print(priceToString(expectedAmount) + MESSAGE.WON);
  },

  printEventBadge(eventBadge) {
    print(MESSAGE.EVENT_BADGE);
    print(eventBadge);
  },
};

export default OutputView;
