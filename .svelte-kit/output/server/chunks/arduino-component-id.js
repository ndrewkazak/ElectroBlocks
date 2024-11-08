import { M as MicroControllerType } from "./microcontroller.js";
import { w as writable } from "./index.js";
import { d as defaultSetting, a as authStore } from "./model.js";
import "blockly";
import { getDoc, doc, initializeFirestore, CACHE_SIZE_UNLIMITED } from "firebase/firestore";
import "firebase/storage";
import { getApp } from "firebase/app";
import { k as get_store_value } from "./ssr.js";
import _ from "lodash";
async function getSettings(uid) {
  const db = firestore();
  const settingDoc = await getDoc(doc(db, "settings", uid));
  if (settingDoc.exists) {
    return settingDoc.data();
  }
  return defaultSetting;
}
const firestore = () => {
  return initializeFirestore(getApp(), {
    cacheSizeBytes: CACHE_SIZE_UNLIMITED
  });
};
const breadboard$1 = {
  areas: [
    { holes: [3, 4, 5, 6, 7, 8], taken: false, isDown: true },
    { holes: [9, 10, 11, 12, 13, 14], taken: false, isDown: true },
    { holes: [15, 16, 17, 18, 19, 20], taken: false, isDown: true },
    { holes: [21, 22, 23, 24, 25, 26], taken: false, isDown: true },
    { holes: [27, 28, 29, 30, 31, 32], taken: false, isDown: true },
    { holes: [33, 34, 35, 36, 37, 38], taken: false, isDown: true },
    { holes: [39, 40, 41, 42, 43, 44], taken: false, isDown: true },
    { holes: [45, 46, 47, 48, 49, 50], taken: false, isDown: true },
    { holes: [51, 52, 53, 54, 55, 56], taken: false, isDown: true },
    { holes: [57, 58, 59, 60, 61, 62], taken: false, isDown: true }
  ],
  order: [4, 6, 8, 3, 5, 7, 0, 1, 2, 3, 9, 10]
};
const pinConnections = {
  "2": {
    color: "#5533D1",
    id: "ARDUINO_PIN_2"
  },
  "3": { color: "#FFE600", id: "ARDUINO_PIN_3" },
  "4": { color: "#34CE5F", id: "ARDUINO_PIN_4" },
  "5": { color: "#CC9E37", id: "ARDUINO_PIN_5" },
  "6": { color: "#D15F33", id: "ARDUINO_PIN_6" },
  "7": { color: "#B637CC", id: "ARDUINO_PIN_7" },
  "8": { color: "#5533D1", id: "ARDUINO_PIN_8" },
  "9": { color: "#FFE600", id: "ARDUINO_PIN_9" },
  "10": { color: "#34CE5F", id: "ARDUINO_PIN_10" },
  "11": {
    color: "#CC9E37",
    id: "ARDUINO_PIN_11"
  },
  "12": {
    color: "#D15F33",
    id: "ARDUINO_PIN_12"
  },
  "13": {
    color: "#B637CC",
    id: "ARDUINO_PIN_13"
  },
  A0: {
    color: "#B637CC",
    id: "ARDUINO_PIN_A0"
  },
  A1: {
    color: "#CC9E37",
    id: "ARDUINO_PIN_A1"
  },
  A2: {
    color: "#34CE5F",
    id: "ARDUINO_PIN_A2"
  },
  A3: {
    color: "#5533D1",
    id: "ARDUINO_PIN_A3"
  },
  A4: {
    color: "#FFE600",
    id: "ARDUINO_PIN_A4"
  },
  A5: {
    color: "#D15F33",
    id: "ARDUINO_PIN_A5"
  }
};
const unoArduino = {
  analonPins: ["A5", "A4", "A3", "A2", "A1", "A0"],
  digitalPins: [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "A0",
    "A1",
    "A2",
    "A3",
    "A4",
    "A5"
  ],
  misoPins: ["12"],
  mosiPins: ["11"],
  pwmPins: ["3", "5", "6", "9", "10", "11", "A0", "A1", "A2", "A3", "A4", "A5"],
  sckPins: ["13"],
  ssPins: ["10"],
  sclPins: ["A5"],
  sdaPins: ["A4"],
  serial_baud_rate: 9600,
  type: MicroControllerType.ARDUINO_UNO,
  breadboard: breadboard$1,
  skipHoles: [
    6,
    9,
    13,
    18,
    22,
    27,
    31,
    37,
    41,
    46,
    51,
    54,
    58,
    61,
    56,
    50,
    44,
    38,
    32,
    26,
    20,
    14,
    8
  ],
  pinConnections
};
const pinArrayToFieldList = (pins) => {
  return pins.map((pin) => [pin, pin]);
};
const transformBoardBlockly = (board) => {
  return {
    serial_baud_rate: board.serial_baud_rate,
    type: board.type,
    pwmPins: pinArrayToFieldList(board.pwmPins),
    digitalPins: pinArrayToFieldList(board.digitalPins),
    analogPins: pinArrayToFieldList(board.analonPins),
    sckPins: pinArrayToFieldList(board.sckPins),
    sclPins: pinArrayToFieldList(board.sclPins),
    sdaPins: pinArrayToFieldList(board.sdaPins),
    ssPins: pinArrayToFieldList(board.ssPins),
    misoPins: pinArrayToFieldList(board.misoPins),
    mosiPins: pinArrayToFieldList(board.mosiPins)
  };
};
const is_browser = () => {
  return typeof window !== "undefined";
};
let settings;
try {
  settings = is_browser() && localStorage.getItem("settings") ? JSON.parse(localStorage.getItem("settings")) : defaultSetting;
} catch (e) {
  settings = defaultSetting;
}
settings["boardType"] = settings.boardType || MicroControllerType.ARDUINO_UNO;
const settingsStore = writable(settings);
authStore.subscribe(async (auth) => {
  if (auth.isLoggedIn && is_browser()) {
    try {
      const settingsFB = await getSettings(auth.uid);
      settingsStore.set(settingsFB);
    } catch (e) {
      console.log(e, "error settings");
    }
  }
});
settingsStore.subscribe((newSettings) => {
  if (is_browser()) {
    localStorage.setItem("settings", JSON.stringify(newSettings));
  }
});
const settingsStore$1 = {
  subscribe: settingsStore.subscribe,
  set: settingsStore.set,
  update: settingsStore.update
};
const getBoardType = () => {
  return get_store_value(settingsStore$1)["boardType"] || MicroControllerType.ARDUINO_UNO;
};
var WIRE_COLORS = /* @__PURE__ */ ((WIRE_COLORS2) => {
  WIRE_COLORS2["PURPLE"] = "#B637CC";
  WIRE_COLORS2["LIGHT_BROWN"] = "#CC9E37";
  WIRE_COLORS2["GREEN"] = "#34CE5F";
  WIRE_COLORS2["DEEP_PURPLE"] = "#5533D1";
  WIRE_COLORS2["YELLOW"] = "#FFE600";
  WIRE_COLORS2["ORANGE"] = "#D15F33";
  return WIRE_COLORS2;
})(WIRE_COLORS || {});
const breadboard = {
  areas: [
    { holes: [3, 4, 5, 6, 7, 8], taken: false, isDown: true },
    { holes: [9, 10, 11, 12, 13, 14], taken: false, isDown: true },
    { holes: [15, 16, 17, 18, 19, 20], taken: false, isDown: true },
    { holes: [21, 22, 23, 24, 25, 26], taken: false, isDown: true },
    { holes: [27, 28, 29, 30, 31, 32], taken: false, isDown: true },
    { holes: [33, 34, 35, 36, 37, 38], taken: false, isDown: true },
    { holes: [39, 40, 41, 42, 43, 44], taken: false, isDown: true },
    { holes: [45, 46, 47, 48, 49, 50], taken: false, isDown: true },
    { holes: [51, 52, 53, 54, 55, 56], taken: false, isDown: true },
    { holes: [57, 58, 59, 60, 61, 62], taken: false, isDown: true }
  ],
  order: [4, 6, 8, 3, 5, 7, 0, 1, 2, 3, 9, 10]
};
function createPinConnections() {
  const pinConnections2 = {};
  const colorKeys = _.keys(WIRE_COLORS);
  for (let i = 2; i <= 53; i += 1) {
    const colorIndex = i % colorKeys.length;
    const color = WIRE_COLORS[colorKeys[colorIndex]];
    pinConnections2[i.toString()] = {
      color,
      id: `ARDUINO_PIN_${i}`
    };
  }
  for (let i = 0; i <= 15; i += 1) {
    const colorIndex = i % colorKeys.length;
    const color = WIRE_COLORS[colorKeys[colorIndex]];
    pinConnections2[`A${i}`] = {
      color,
      id: `ARDUINO_PIN_A${i}`
    };
  }
  return pinConnections2;
}
const arduinoMega = {
  analonPins: [
    "A0",
    "A1",
    "A2",
    "A3",
    "A4",
    "A5",
    "A6",
    "A7",
    "A8",
    "A9",
    "A10",
    "A11",
    "A12",
    "A13",
    "A14",
    "A15"
  ],
  digitalPins: [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "50",
    "51",
    "52",
    "53",
    "A0",
    "A1",
    "A2",
    "A3",
    "A4",
    "A5",
    "A6",
    "A7",
    "A8",
    "A9",
    "A10",
    "A11",
    "A12",
    "A13",
    "A14",
    "A15"
  ],
  misoPins: ["50"],
  mosiPins: ["51"],
  pwmPins: [
    "4",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "46",
    "45",
    "44",
    "A0",
    "A1",
    "A2",
    "A3",
    "A4",
    "A5",
    "A6",
    "A7",
    "A8",
    "A9",
    "A10",
    "A11",
    "A12",
    "A13",
    "A14",
    "A15"
  ],
  sckPins: ["52"],
  ssPins: ["53"],
  sclPins: ["21"],
  sdaPins: ["20"],
  serial_baud_rate: 9600,
  type: MicroControllerType.ARDUINO_MEGA,
  breadboard,
  skipHoles: [
    1,
    2,
    3,
    4,
    6,
    7,
    8,
    10,
    12,
    14,
    15,
    16,
    18,
    20,
    22,
    23,
    25,
    26,
    28,
    29,
    31,
    32,
    34,
    35,
    37,
    38,
    39,
    41,
    43,
    44,
    46,
    47,
    49,
    50,
    51,
    53,
    54,
    56,
    61
  ],
  pinConnections: createPinConnections()
};
const selectBoardBlockly = () => {
  const boardType = getBoardType();
  return transformBoardBlockly(boardProfiles[boardType]);
};
const boardProfiles = {
  uno: unoArduino,
  mega: arduinoMega
};
const ANALOG_PINS = [
  "A0",
  "A1",
  "A2",
  "A3",
  "A4",
  "A5"
  /* PIN_A5 */
];
var ArduinoComponentType = /* @__PURE__ */ ((ArduinoComponentType2) => {
  ArduinoComponentType2["SERVO"] = "SERVO_COMPONENT";
  ArduinoComponentType2["LCD_SCREEN"] = "LCD_SCREEN_COMPONENT";
  ArduinoComponentType2["LED_MATRIX"] = "LED_MATRIX_COMPONENT";
  ArduinoComponentType2["NEO_PIXEL_STRIP"] = "NEO_PIXEL_STRIP_COMPONENT";
  ArduinoComponentType2["FASTLED_STRIP"] = "FASTLED_STRIP_COMPONENT";
  ArduinoComponentType2["MOTOR"] = "MOTOR_COMPONENT";
  ArduinoComponentType2["PIN"] = "PIN_COMPONENT";
  ArduinoComponentType2["BLUE_TOOTH"] = "BLUE_TOOTH_COMPONENT";
  ArduinoComponentType2["LED_COLOR"] = "LED_COLOR_COMPONENT";
  ArduinoComponentType2["LED"] = "LED_COMPONENT";
  ArduinoComponentType2["WRITE_PIN"] = "WRITE_PIN_COMPONENT";
  ArduinoComponentType2["RFID"] = "RFID_COMPONENT";
  ArduinoComponentType2["BUTTON"] = "BUTTON_COMPONENT";
  ArduinoComponentType2["MESSAGE"] = "MESSAGE_COMPONENT";
  ArduinoComponentType2["TIME"] = "TIME_COMPONENT";
  ArduinoComponentType2["DIGITAL_SENSOR"] = "DIGITAL_SENSOR_COMPONENT";
  ArduinoComponentType2["ANALOG_SENSOR"] = "ANALOG_SENSOR_COMPONENT";
  ArduinoComponentType2["IR_REMOTE"] = "IR_REMOTE_COMPONENT";
  ArduinoComponentType2["ULTRASONICE_SENSOR"] = "ULTRASONICE_SENSOR_COMPONENT";
  ArduinoComponentType2["TEMPERATURE_SENSOR"] = "TEMPERATURE_SENSOR_COMPONENT";
  ArduinoComponentType2["THERMISTOR"] = "THERMISTOR";
  ArduinoComponentType2["PASSIVE_BUZZER"] = "PASSIVE_BUZZER";
  ArduinoComponentType2["STEPPER_MOTOR"] = "STEPPER_MOTOR";
  ArduinoComponentType2["DIGITAL_DISPLAY"] = "DIGITAL_DISPLAY";
  ArduinoComponentType2["JOYSTICK"] = "JOYSTICK";
  return ArduinoComponentType2;
})(ArduinoComponentType || {});
const lcdStateId = (state) => {
  return `${state.type}-${state.rows}-${state.columns}-${state.sdaPin}-${state.sclPin}`;
};
const neoPixelId = (state) => {
  return `${state.type}-${state.pins.sort().join("-")}-${state.numberOfLeds}`;
};
const fastLEDId = (state) => {
  return `${state.type}-${state.pins.sort().join("-")}-${state.numberOfLeds}`;
};
const getLedColorId = (state) => {
  return `${state.type}_${state.pictureType}_${state.redPin}_${state.greenPin}_${state.bluePin}`;
};
const writePinId = (state) => {
  return `${state.type}-${state.pin}-${state.pinType}`;
};
const getDigitalSensorId = (state) => {
  return `${state.type}-${state.pictureType}-${state.pin}`;
};
const getAnalogSensorId = (state) => {
  return `${state.type}-${state.pictureType}-${state.pin}`;
};
const getMotorStateId = (motorState) => {
  return `${motorState.type}-${motorState.motorNumber}`;
};
const getLedId = (state) => {
  return `${state.type}_${state.color.replace("#", "")}_${state.pin}`;
};
const genericSingleComponentId = (state) => {
  return state.type + "_" + state.pins.sort().join("-");
};
const componentStateFuncs = {
  [ArduinoComponentType.BLUE_TOOTH]: genericSingleComponentId,
  [ArduinoComponentType.BUTTON]: genericSingleComponentId,
  [ArduinoComponentType.IR_REMOTE]: genericSingleComponentId,
  [ArduinoComponentType.LED_MATRIX]: genericSingleComponentId,
  [ArduinoComponentType.MOTOR]: getMotorStateId,
  [ArduinoComponentType.MESSAGE]: () => ArduinoComponentType.MESSAGE.toString(),
  [ArduinoComponentType.NEO_PIXEL_STRIP]: neoPixelId,
  [ArduinoComponentType.FASTLED_STRIP]: fastLEDId,
  [ArduinoComponentType.RFID]: genericSingleComponentId,
  [ArduinoComponentType.SERVO]: genericSingleComponentId,
  [ArduinoComponentType.TEMPERATURE_SENSOR]: genericSingleComponentId,
  [ArduinoComponentType.ULTRASONICE_SENSOR]: genericSingleComponentId,
  [ArduinoComponentType.LCD_SCREEN]: lcdStateId,
  [ArduinoComponentType.LED_COLOR]: getLedColorId,
  [ArduinoComponentType.LED]: getLedId,
  [ArduinoComponentType.WRITE_PIN]: writePinId,
  [ArduinoComponentType.DIGITAL_SENSOR]: getDigitalSensorId,
  [ArduinoComponentType.ANALOG_SENSOR]: getAnalogSensorId,
  [ArduinoComponentType.THERMISTOR]: genericSingleComponentId,
  [ArduinoComponentType.PASSIVE_BUZZER]: genericSingleComponentId,
  [ArduinoComponentType.STEPPER_MOTOR]: genericSingleComponentId,
  [ArduinoComponentType.DIGITAL_DISPLAY]: genericSingleComponentId,
  [ArduinoComponentType.JOYSTICK]: genericSingleComponentId,
  [ArduinoComponentType.TIME]: genericSingleComponentId
};
const arduinoComponentStateToId = (state) => {
  if (_.isFunction(componentStateFuncs[state.type])) {
    return componentStateFuncs[state.type](state);
  }
  throw new Error("No Id generator found for state type " + state.type);
};
export {
  ArduinoComponentType as A,
  selectBoardBlockly as a,
  ANALOG_PINS as b,
  arduinoComponentStateToId as c,
  is_browser as i,
  settingsStore$1 as s
};
