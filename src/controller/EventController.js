import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import Order from "../model/Order.js";
import Benefit from "../model/Benefit.js";
import { print } from "../commons/utils.js";
import { MENU } from "../commons/constants.js";

class EventController {
  #date;
  #menu;

  async eventStart() {
    OutputView.printStart();

    // 주문 정보 입력 & 주문 정보 출력
    await this.#getOrderInformation();
    OutputView.printOrderInformation(this.#date, this.#menu);

    // 주문 클래스 생성 & 총 주문 금액 출력
    const order = new Order(this.#date, this.#menu);
    OutputView.printAllAmount(order.getAllAmount());

    // 혜택 클래스 생성 & 혜택과 관련된 메세지 출력
    const benefit = new Benefit(this.#date, this.#menu);
    this.#printBenefit(benefit);
  }

  async #getOrderInformation() {
    await this.#getDate();
    await this.#getMenu();
  }

  async #getDate() {
    while (true) {
      try {
        this.#date = await InputView.inputDate();
        break;
      } catch (error) {
        print(error);
      }
    }
  }

  async #getMenu() {
    while (true) {
      try {
        this.#menu = await InputView.inputMenu();
        break;
      } catch (error) {
        print(error);
      }
    }
  }

  #printBenefit(benefit) {
    OutputView.printGiveaway(benefit.benefitDetail()); // <증정 메뉴>
    OutputView.printBenefitDetail(benefit.benefitDetail()); // <혜택 내역>
    OutputView.printTotalBenefit(benefit.totalBenefit()); // <총 혜텍 금액>
    OutputView.printExpectedAmount(benefit.expectedAmount()); // <할인 후 예상 결제 금액>
    OutputView.printEventBadge(benefit.eventBadge()); // <12월 이벤트 배지>
  }
}
export default EventController;
