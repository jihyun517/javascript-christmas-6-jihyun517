import { input } from "../commons/utils.js";
import { MESSAGE } from "../commons/constants.js";
import { validDateCheck, validOrderCheck } from "../commons/validator.js";

const InputView = {
  async inputDate() {
    const date = await input(MESSAGE.INPUT_DATE);
    validDateCheck(date);
    return date;
  },

  async inputMenu() {
    var menu = (await input(MESSAGE.INPUT_MENU)).replace(/\s+/g, ""); // 공백제거
    menu = validOrderCheck(menu);
    return menu;
  },
};

export default InputView;
