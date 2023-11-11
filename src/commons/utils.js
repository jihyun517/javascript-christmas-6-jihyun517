import { MissionUtils } from "@woowacourse/mission-utils";

export const print = async (message) => MissionUtils.Console.print(message);

export const input = async (message) => await MissionUtils.Console.readLineAsync(message);


