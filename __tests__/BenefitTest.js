import Benefit from "../src/model/Benefit.js";
import { orderIntoArray } from "../src/commons/utils.js";

describe("Benefit 클래스 테스트(혜택 있는 경우)", () => {
  //given
  const date = "3";
  const menu = orderIntoArray("티본스테이크-1,바비큐립-1,초코케이크-2,제로콜라-1");
  const benefit = new Benefit(date, menu);

  test("Benefit Detail(혜택 내역) 테스트", () => {
    // when
    const result = benefit.benefitDetail();
    // then
    const expected = [1200, 4046, 0, 1000, 25000];

    expect(result).toEqual(expected);
  });

  test("Total Beneift(총 혜택 금액) 테스트", () => {
    // when
    const result = benefit.totalBenefit();
    // then
    const expected = 31246;

    expect(result).toEqual(expected);
  });

  test("Expected Amount(예상 결제 금액) 테스트", () => {
    // when
    const result = benefit.expectedAmount();
    // then
    const expected = 135754;

    expect(result).toEqual(expected);
  });

  test("Event Badge(이벤트 배지) 테스트", () => {
    // when
    const result = benefit.eventBadge();
    // then
    const expected = "산타";

    expect(result).toEqual(expected);
  });
});

describe("Benefit 클래스 테스트(혜택 없는 경우)", () => {
  //given
  const date = "26";
  const menu = orderIntoArray("타파스-1,제로콜라-1");
  const benefit = new Benefit(date, menu);

  test("Benefit Detail(혜택 내역) 테스트", () => {
    // when
    const result = benefit.benefitDetail();
    // then
    const expected = [0, 0, 0, 0, 0];

    expect(result).toEqual(expected);
  });

  test("Total Beneift(총 혜택 금액) 테스트", () => {
    // when
    const result = benefit.totalBenefit();
    // then
    const expected = 0;

    expect(result).toEqual(expected);
  });

  test("Expected Amount(예상 결제 금액) 테스트", () => {
    // when
    const result = benefit.expectedAmount();
    // then
    const expected = 8500;

    expect(result).toEqual(expected);
  });

  test("Event Badge(이벤트 배지) 테스트", () => {
    // when
    const result = benefit.eventBadge();
    // then
    const expected = "없음";

    expect(result).toEqual(expected);
  });
});
