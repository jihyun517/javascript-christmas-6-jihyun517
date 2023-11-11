import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import { print } from "../commons/utils.js";

class EventController {

  #date;
  #menu;

  async eventStart() {
    OutputView.printStart();
    
    await this.#getOrderInformation();  // 주문 정보 입력받기
  }

  async #getOrderInformation() {
    await this.#getDate();

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



}
export default EventController;