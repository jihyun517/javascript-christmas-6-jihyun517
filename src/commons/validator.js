import { ERROR } from "./constants.js";

export const validDateCheck = async (date) => {
  if (date < 1 || date > 31 || isNaN(date)) {
    throw ERROR.DATE;
  }
}
