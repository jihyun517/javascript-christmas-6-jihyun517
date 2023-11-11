import { print } from "../commons/utils.js"
import { MESSAGE } from "../commons/constants.js";

const OutputView = {
    printStart(){
        print(MESSAGE.START);
    },

    printMenu() {
        Console.print("<주문 메뉴>");
        // ...
    }
    // ...
}

export default OutputView;
