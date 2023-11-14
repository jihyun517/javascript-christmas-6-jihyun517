export const MESSAGE = Object.freeze({
  START: "안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.",

  INPUT_DATE:
    "12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n",
  INPUT_MENU:
    "주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n",

  MONTH: "12월 ",
  SHOW_BENEFIT: "일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!",

  MENU: "\n<주문 메뉴>",
  TOTAL_AMOUNT: "\n<할인 전 총주문 금액>",
  GIVEAWAY: "\n<증정 메뉴>",
  BENEFIT_DETAILS: "\n<혜택 내역>",
  TOTAL_BENEFIT: "\n<총혜택 금액>",
  EXPECTED_AMOUNT: "\n<할인 후 예상 결제 금액>",
  EVENT_BADGE: "\n<12월 이벤트 배지>",

  NOTHING: "없음",
  HYPEN: "-",
  BLANK: " ",
  EA: "개",
  WON: "원",

  GIVEAWAY_ITEM: "샴페인 1개",

  BENEFIT_DETAILS_TITLE: [
    "크리스마스 디데이 할인: -",
    "평일 할인: -",
    "주말 할인: -",
    "특별 할인: -",
    "증정 이벤트: -",
  ],
});

export const ERROR = Object.freeze({
  DATE: "[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.",
  ORDER: "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.",
});

export const MENU = Object.freeze({
  APPETIZER: [
    ["양송이수프", 6000],
    ["타파스", 5500],
    ["시저샐러드", 8000],
  ],
  MAIN: [
    ["티본스테이크", 55000],
    ["바비큐립", 54000],
    ["해산물파스타", 35000],
    ["크리스마스파스타", 25000],
  ],
  DESSERT: [
    ["초코케이크", 15000],
    ["아이스크림", 5000],
  ],
  DRINK: [
    ["제로콜라", 3000],
    ["레드와인", 60000],
    ["샴페인", 25000],
  ],
});

export const ARRAY = Object.freeze({
  MENU: 0,
  COUNT: 1,

  DDAY: 0,
  WEEKDAY: 1,
  WEEKEND: 2,
  SPECIALDAY: 3,
  GIVEAWAY: 4,
});

export const CALENDAR = Object.freeze({
  WEEKDAY: [
    "3",
    "4",
    "5",
    "6",
    "7",
    "10",
    "11",
    "12",
    "13",
    "14",
    "17",
    "18",
    "19",
    "20",
    "21",
    "24",
    "25",
    "26",
    "27",
    "28",
    "31",
  ],
  WEEKEND: ["1", "2", "8", "9", "15", "16", "22", "23", "29", "30"],
  SPECIAL: ["3", "10", "17", "24", "25", "31"],
});

export const BOUNDARY = Object.freeze({
  MENU_COUNT: 20,
  DDAY_END: 25,

  BENEFIT_PRICE: 10000,
  GIVEAWAY_PRICE: 120000,

  STAR_PRICE: 5000,
  TREE_PRICE: 10000,
  SANTA_PRICE: 20000,
});

export const BENEFIT_AMOUNT = Object.freeze({
  DDAY_START: 1000,
  DDAY_PLUS: 100,
  WEEKDAY: 2023,
  WEEKEND: 2023,
  SPECIALDAY: 1000,
  GIVEAWAY: 25000,
});

export const BADGE = Object.freeze({
  STAR: "별",
  TREE: "트리",
  SANTA: "산타",
});
