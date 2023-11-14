import { ERROR, ARRAY, MENU } from "./constants.js";
import { getAllMenu, orderIntoArray, getMenu } from "./utils.js";

export const validDateCheck = async (date) => {
  if (date < 1 || date > 31 || isNaN(date)) {
    throw ERROR.DATE;
  }
};

export const validOrderCheck = async (order) => {
  const orderArray = orderIntoArray(order);

  validMenuCheck(orderArray);
  validCountCheck(orderArray);

  return orderArray;
};

const validMenuCheck = (orderArray) => {
  orderArray[ARRAY.MENU].forEach((menu, index) => {
    // 메뉴판에 있는 메뉴인지 검사
    if (!getAllMenu().includes(menu)) throw ERROR.ORDER;

    // 중복 입력 검사
    if (orderArray[ARRAY.MENU].lastIndexOf(menu) !== index) throw ERROR.ORDER;
  });

  // 음료만 있는 경우인지 검사
  if (
    getMenu(MENU.DRINK).filter((drink) =>
      orderArray[ARRAY.MENU].includes(drink)
    ).length == orderArray[ARRAY.MENU].length
  )
    throw ERROR.ORDER;
};

const validCountCheck = (orderArray) => {
  let sumOfCount = 0;

  orderArray[ARRAY.COUNT].forEach((count) => {
    // 1개 이상인지 검사
    if (!count >= 1) throw ERROR.ORDER;

    // 주문 총 개수 20개 이하인지 검사
    if ((sumOfCount += count) > 20) throw ERROR.ORDER;
  });
};
