import { MissionUtils } from "@woowacourse/mission-utils";
import { MENU, ARRAY } from "./constants.js";

export const print = async (message) => MissionUtils.Console.print(message);

export const input = async (message) => await MissionUtils.Console.readLineAsync(message);

// 문자열 형태의 메뉴 2차원 배열로 반환
export const orderIntoArray = (allMenu) => {
  const eachMenu = allMenu.split(",");
  const orderArray = Array.from(Array(2), () => Array.apply(eachMenu.length).fill(0));
  eachMenu.forEach((menu) => {
    orderArray[ARRAY.MENU].push(menu.substring(0, menu.indexOf("-")));
    orderArray[ARRAY.COUNT].push(parseInt(menu.substring(menu.lastIndexOf("-") + 1)));
  })

  return orderArray;
}

// 메뉴판 순회하며 모든 메뉴이름배열 반환
export const getAllMenu = () => {
  const allMenu = [];

  const menuCategory = Object.keys(MENU);
  menuCategory.forEach((menuCategory) => {
    let menudetail = new Map(MENU[menuCategory]);
    menudetail.forEach((price, menu) => {
      allMenu.push(menu)
    })
  })
  return allMenu;
}

// 카테고리 별 메뉴이름배열 반환
export const getMenu = (menuCategory) => {
  const allMenu = [];
  menuCategory.forEach((menu) => {
    allMenu.push(menu[ARRAY.MENU]);
  })
  return allMenu;
}

export const priceToString = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}