import { w as writable } from "./index.js";
import { M as MicroControllerType } from "./microcontroller.js";
const resetCode = `int simple_loop_variable = 0;
struct RGB {
	int red;
	int green;
	int blue;
};




void setup() {

}


void loop() {

}
`;
const codeStore = writable({
  code: resetCode,
  boardType: MicroControllerType.ARDUINO_UNO
});
const codeStore$1 = {
  set: codeStore.set,
  subscribe: codeStore.subscribe,
  resetCode: (boardType) => codeStore.set({ code: resetCode, boardType })
};
export {
  codeStore$1 as c
};
