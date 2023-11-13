import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import Order from "../model/Order.js";
import { print } from "../commons/utils.js";
import { MENU } from "../commons/constants.js";

class EventController {

  #date;
  #menu;

  async eventStart() {
    OutputView.printStart();

    await this.#getOrderInformation();  // 주문 정보 입력받기

    OutputView.printOrderInformation(this.#date, this.#menu);

    const order = new Order(this.#date, this.#menu);
    OutputView.printAllAmount(order.getAllAmount())


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
      }
      catch (error) {
        print(error);
      }
    }
  }

  async #getMenu() {
    while (true) {
      try {
        this.#menu = await InputView.inputMenu();
        break;
      }
      catch (error) {
        print(error);
      }
    }
  }



}
export default EventController;