import { validDateCheck, validOrderCheck } from "../src/commons/validator.js";
import { ERROR } from "../src/commons/constants.js";

describe("날짜 입력 유효성 검사", () => {
  test("날짜 테스트", () => {
    const input = ["25", "31", "1"];

    input.forEach((input) => {
      expect(validDateCheck(input)).toEqual(input);
    });
  });

  test("날짜 테스트 예외 상황", () => {
    const wrong_input = ["0", "32", "a"];

    wrong_input.forEach((input) => {
      try {
        validDateCheck(input);
      } catch (e) {
        expect(e).toEqual(ERROR.DATE);
      }
    });
  });
});

describe("메뉴 입력 유효성 검사", () => {
  test("메뉴 테스트", () => {
    const input = ["티본스테이크-1,바비큐립-1,초코케이크-2,제로콜라-1", "바비큐립-1,초코케이크-2"];

    const expected = [
      [
        ["티본스테이크", "바비큐립", "초코케이크", "제로콜라"],
        [1, 1, 2, 1],
      ],
      [
        ["바비큐립", "초코케이크"],
        [1, 2],
      ],
    ];

    input.forEach((input, index) => {
      expect(validOrderCheck(input)).toEqual(expected[index]);
    });
  });

  test("메뉴 테스트 예외 상황", () => {
    const wrong_input = ["티본스테이크-10,바비큐립-5,초코케이크-8", "제로콜라-1,레드와인-2", "코카콜라-3", "바비큐립-0"];

    wrong_input.forEach((input) => {
      try {
        validOrderCheck(input);
      } catch (e) {
        expect(e).toEqual(ERROR.ORDER);
      }
    });
  });
});
