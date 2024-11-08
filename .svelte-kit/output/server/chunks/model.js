import { w as writable } from "./index.js";
import { M as MicroControllerType } from "./microcontroller.js";
const authStore = writable({ isLoggedIn: false, uid: null, firebaseControlled: false });
const authStore$1 = {
  subscribe: authStore.subscribe,
  set: authStore.set
};
const defaultSetting = {
  backgroundColor: "#d9e4ec",
  touchSkinColor: "#a424d3",
  ledColor: "#AA0000",
  customLedColor: false,
  maxTimePerMove: 20,
  boardType: MicroControllerType.ARDUINO_UNO
};
export {
  authStore$1 as a,
  defaultSetting as d
};
