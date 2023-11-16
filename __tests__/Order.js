import Order from "../src/model/Order.js";
import { orderIntoArray } from "../src/commons/utils.js";

describe("Order 클래스 테스트", () => {
  test("getAllAmount 메소드 테스트", () => {
    //given
    const date = "3";
    const menu = orderIntoArray("티본스테이크-1,바비큐립-1,초코케이크-2,제로콜라-1");
    const order = new Order(date, menu);

    // when
    const result = order.getAllAmount();

    // then
    const expected = 142000;

    expect(result).toEqual(expected);
  });
});
