import { print } from "../commons/utils.js"
import { MESSAGE, ARRAY } from "../commons/constants.js";

const OutputView = {
    printStart() {
        print(MESSAGE.START);
    },

    printOrderInformation(date, menu) {
        print(MESSAGE.MONTH + date + MESSAGE.SHOW_BENEFIT);
        print(MESSAGE.MENU);
        menu[ARRAY.MENU].forEach((menuName, index) => {
            print(menuName + MESSAGE.BLANK + menu[ARRAY.COUNT][index] + MESSAGE.EA);
        })
    }
    // ...
}

export default OutputView;
