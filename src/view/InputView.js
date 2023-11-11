import { input } from "../commons/utils.js"
import { MESSAGE } from "../commons/constants.js";
import { validDateCheck } from "../commons/validator.js";

const InputView = {
    async inputDate() {
        const date = await input(MESSAGE.INPUT_DATE);
        await validDateCheck(date);
        return date;
    }
}

export default InputView;
