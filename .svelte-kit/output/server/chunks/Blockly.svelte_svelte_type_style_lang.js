import { w as writable } from "./index.js";
import Blockly from "blockly";
import { a as selectBoardBlockly, A as ArduinoComponentType, s as settingsStore } from "./arduino-component-id.js";
import ColorWheelField from "blockly-field-color-wheel";
import _ from "lodash";
import { g as goto } from "./client.js";
import { c as codeStore } from "./code.store.js";
import { M as MicroControllerType } from "./microcontroller.js";
import { d as defaultSetting } from "./model.js";
const deleteVariable = (id) => {
  getWorkspace().deleteVariableById(id);
};
const getWorkspace = () => {
  return Blockly.getMainWorkspace();
};
const getArduinoCode = () => {
  return Blockly["Arduino"].workspaceToCode(getWorkspace());
};
const getAllBlocks = () => {
  return getWorkspace().getAllBlocks(true);
};
const getBlockByType = (type) => {
  return getAllBlocks().find((block) => block.type === type);
};
const getBlocksByName = (name) => {
  return getAllBlocks().filter((block) => block.type === name);
};
const getBlockById = (id) => {
  return getWorkspace().getBlockById(id);
};
const arduinoLoopBlockShowNumberOfTimesThroughLoop = () => {
  const block = getBlockByType("arduino_loop");
  block.inputList[0].setVisible(false);
  block.inputList[1].setVisible(true);
  block.render();
  return;
};
const getTimesThroughLoop = () => {
  return +getBlockByType("arduino_loop").getFieldValue("LOOP_TIMES");
};
function wait(msTime) {
  return new Promise((resolve) => setTimeout(resolve, msTime));
}
var WindowType = /* @__PURE__ */ ((WindowType2) => {
  WindowType2["NONE"] = "none";
  WindowType2["MAIN"] = "main";
  WindowType2["SIDE"] = "side";
  return WindowType2;
})(WindowType || {});
const store = writable({ type: "none", time: (/* @__PURE__ */ new Date()).getTime() });
const resizeStore = {
  subscribe: store.subscribe,
  mainWindow: () => {
    store.set({ type: "main", time: (/* @__PURE__ */ new Date()).getTime() });
  },
  sideWindow: () => {
    store.set({ type: "side", time: (/* @__PURE__ */ new Date()).getTime() });
  }
};
var COLOR_THEME = /* @__PURE__ */ ((COLOR_THEME2) => {
  COLOR_THEME2["SENSOR"] = "#505bda";
  COLOR_THEME2["ARDUINO_START_BLOCK"] = "#b063c5";
  COLOR_THEME2["COMPONENTS"] = "#512c62";
  COLOR_THEME2["ARDUINO"] = "#b063c5";
  COLOR_THEME2["DATA"] = "#ffaac3";
  COLOR_THEME2["VALUES"] = "#505bda";
  COLOR_THEME2["CONTROL"] = "#b063c5";
  return COLOR_THEME2;
})(COLOR_THEME || {});
Blockly.Blocks["arduino_loop"] = {
  init: function() {
    this.appendDummyInput().appendField("Цикл шексіз орындалады");
    this.appendDummyInput().appendField(" Цикл ").appendField(new Blockly.FieldNumber(3, 0, 1e3), "LOOP_TIMES").appendField("рет виртуалды түрде орындау");
    this.appendStatementInput("loop").setCheck(null);
    this.setColour(COLOR_THEME.ARDUINO_START_BLOCK);
    this.setTooltip("");
    this.setHelpUrl("");
    this.setCommentText(
      "Цикл блогы Arduino қуатын жоғалтқанша қайталанып жұмыс істейді.  Егер сізде бар болса, ол орнату блогынан кейін бірден іске қосылады.\n\nСимуляторды пайдаланып жатсаңыз, оның қанша рет қайталанатынын басқара аласыз."
    );
    this.getIcon("comment")?.setBubbleSize(new Blockly.utils.Size(460, 170));
  }
};
Blockly.Blocks["arduino_setup"] = {
  init: function() {
    this.appendDummyInput().appendField("Setup (runs once)");
    this.appendStatementInput("setup").setCheck(null);
    this.setColour(COLOR_THEME.ARDUINO_START_BLOCK);
    this.setTooltip("");
    this.setHelpUrl("");
    this.setCommentText(
      "Орнату блогы барлық кітапхана блоктарынан кейін жұмыс істейді.  Ол тек бір рет жұмыс істейді.\n\n орнату блогын пайдаланыңыз кодтағы айнымалыларды инициализациялаңыз."
    );
    this.getIcon("comment")?.setBubbleSize(new Blockly.utils.Size(460, 150));
  }
};
const loopTimes = () => {
  return _.range(1, getTimesThroughLoop() + 1).map((loop) => {
    const menuOption = [loop.toString(), loop.toString()];
    return menuOption;
  });
};
Blockly.defineBlocksWithJsonArray([
  {
    type: "bluetooth_get_message",
    message0: "%1 bluetooth-ге хабарлама алу",
    args0: [
      {
        type: "field_image",
        src: "./blocks/bluetooth/bluetooth.png",
        width: 15,
        height: 15,
        alt: "*",
        flipRtl: false
      }
    ],
    output: "String",
    colour: COLOR_THEME.COMPONENTS,
    tooltip: "",
    helpUrl: ""
  },
  {
    type: "bluetooth_has_message",
    message0: "%1 bluetooth хабарлама алды ма?",
    args0: [
      {
        type: "field_image",
        src: "./blocks/bluetooth/bluetooth.png",
        width: 15,
        height: 15,
        alt: "*",
        flipRtl: false
      }
    ],
    output: "Boolean",
    colour: COLOR_THEME.COMPONENTS,
    tooltip: "",
    helpUrl: ""
  },
  {
    type: "bluetooth_send_message",
    message0: "%1 bluetooth хабарлама жіберу %2",
    args0: [
      {
        type: "field_image",
        src: "./blocks/bluetooth/bluetooth.png",
        width: 15,
        height: 15,
        alt: "*",
        flipRtl: false
      },
      {
        type: "input_value",
        name: "MESSAGE",
        check: "String"
      }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: COLOR_THEME.COMPONENTS,
    tooltip: "",
    helpUrl: ""
  }
]);
const bluetoothSetupBlock = {
  init: function() {
    this.appendDummyInput().appendField(
      new Blockly.FieldImage("/blocks/bluetooth/bluetooth.png", 15, 15)
    ).appendField("Bluetooth баптаулары");
    this.appendDummyInput().appendField("RX Pin# ").appendField(
      new Blockly.FieldDropdown(() => {
        return selectBoardBlockly().digitalPins;
      }),
      "PIN_RX"
    ).appendField("TX Pin#").appendField(
      new Blockly.FieldDropdown(selectBoardBlockly().digitalPins),
      "PIN_TX"
    );
    this.appendDummyInput("SHOW_CODE_VIEW").appendField(
      "-----------------------------------------"
    );
    this.appendDummyInput().appendField("Қайталау саны").appendField(new Blockly.FieldDropdown(() => loopTimes()), "LOOP");
    this.appendDummyInput().appendField("Хабар қабылдап жатырсыз ба? ").appendField(
      new Blockly.FieldCheckbox("TRUE", (value) => {
        if ("FALSE" === value) {
          this.getField("message").setValue("");
        }
        return value;
      }),
      "receiving_message"
    );
    this.appendDummyInput().appendField("Хабарлама:").appendField(
      new Blockly.FieldTextInput("Сәлем Әлем! :)", (value) => {
        if (this.getFieldValue("receiving_message") === "FALSE") {
          return null;
        }
        return value;
      }),
      "message"
    );
    this.appendDummyInput("COPY_ALL").appendField("Барлығын көшіру: ").appendField(new Blockly.FieldCheckbox(false), "COPY_SAME");
    this.setColour(COLOR_THEME.COMPONENTS);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks["bluetooth_setup"] = bluetoothSetupBlock;
const configuredPins = (setupBlockType, potentialListOfPins) => {
  const pins = getBlocksByName(setupBlockType).map(
    (block) => [
      block.getFieldValue("PIN"),
      block.getFieldValue("PIN")
    ]
  );
  if (pins.length === 0) {
    return potentialListOfPins;
  }
  return pins || [["NO_PINS", "NO_PINS"]];
};
const getAvailablePins = (setupBlockType, selectedPin, potentialListOfPins) => {
  const takenPins = configuredPins(setupBlockType, potentialListOfPins);
  if (_.isEqual(potentialListOfPins, takenPins)) {
    return potentialListOfPins;
  }
  const takenPinSingle = takenPins.map(([pin]) => pin);
  const pinList = potentialListOfPins.filter(
    ([pin]) => !takenPinSingle.includes(pin) || pin === selectedPin
  );
  if (_.isEmpty(pinList)) {
    return [["NO_PINS", "NO_PINS"]];
  }
  return pinList;
};
const buttonSetupBlock = {
  init: function() {
    this.appendDummyInput().appendField(new Blockly.FieldImage("./blocks/button/button.png", 15, 15)).appendField("Батырманы орнату");
    this.appendDummyInput().appendField("Орнатылған PIN# ").appendField(
      new Blockly.FieldDropdown(() => {
        return getAvailablePins(
          "button_setup",
          this.getFieldValue("PIN"),
          selectBoardBlockly().digitalPins
        );
      }),
      "PIN"
    );
    this.appendDummyInput("SHOW_CODE_VIEW").appendField(
      "-------------------------------------"
    );
    this.appendDummyInput().appendField("Қайталау саны ").appendField(
      new Blockly.FieldDropdown(() => {
        return loopTimes();
      }),
      "LOOP"
    );
    this.appendDummyInput().appendField("Батырма басылулы ма: ").appendField(new Blockly.FieldCheckbox("TRUE"), "is_pressed");
    this.appendDummyInput("COPY_ALL").appendField("Барлығын көшіру: ").appendField(new Blockly.FieldCheckbox(false), "COPY_SAME");
    this.setColour(COLOR_THEME.SENSOR);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks["button_setup"] = buttonSetupBlock;
const isBtnPressedBlock = {
  init: function() {
    this.appendDummyInput().appendField(
      new Blockly.FieldImage("./blocks/button/button.png", 15, 15, "*")
    ).appendField("Батырма").appendField(
      new Blockly.FieldDropdown(() => {
        return configuredPins(
          "button_setup",
          selectBoardBlockly().digitalPins
        );
      }),
      "PIN"
    ).appendField("басылған ба?");
    this.setOutput(true, "Boolean");
    this.setColour(COLOR_THEME.SENSOR);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks["is_button_pressed"] = isBtnPressedBlock;
Blockly.Blocks["color_picker_custom"] = {
  init: function() {
    this.appendDummyInput().appendField(
      new ColorWheelField("#ff00ff"),
      "COLOR"
    );
    this.setOutput(true, "Colour");
    this.setColour(COLOR_THEME.VALUES);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks["debug_block"] = {
  init: function() {
    this.appendDummyInput().appendField("Debug");
    this.appendDummyInput().appendField(
      new Blockly.FieldImage("./blocks/debug/debug.png", 70, 50)
    );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(COLOR_THEME.ARDUINO);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.defineBlocksWithJsonArray([
  {
    type: "ir_remote_has_code_receive",
    message0: "%1 қашықтан басқару пульті код алды ма?",
    args0: [
      {
        type: "field_image",
        src: "./blocks/ir_remote/ir_remote.png",
        width: 15,
        height: 15,
        alt: "*",
        flipRtl: false
      }
    ],
    output: "Boolean",
    colour: COLOR_THEME.SENSOR,
    tooltip: "",
    helpUrl: ""
  },
  {
    type: "ir_remote_get_code",
    message0: "%1 қашықтан кодты алады",
    args0: [
      {
        type: "field_image",
        src: "./blocks/ir_remote/ir_remote.png",
        width: 15,
        height: 15,
        alt: "*",
        flipRtl: false
      }
    ],
    output: "String",
    colour: COLOR_THEME.SENSOR,
    tooltip: "",
    helpUrl: ""
  }
]);
const irSetupBlock = {
  init: function() {
    this.appendDummyInput().appendField(
      new Blockly.FieldImage("./blocks/ir_remote/ir_remote.png", 15, 15)
    ).appendField("IR қашықтан басқару құралын орнату");
    this.appendDummyInput().appendField("Аналогты Pin# ").appendField(
      new Blockly.FieldDropdown(() => selectBoardBlockly().analogPins),
      "PIN"
    );
    this.appendDummyInput("SHOW_CODE_VIEW").appendField(
      "-----------------------------"
    );
    this.appendDummyInput().appendField("Қайталау саны").appendField(
      new Blockly.FieldDropdown(() => {
        return loopTimes();
      }),
      "LOOP"
    );
    this.appendDummyInput().appendField("Жаңа код сканерлене ме? ").appendField(
      new Blockly.FieldCheckbox("TRUE", (value) => {
        if ("FALSE" === value) {
          this.getField("code").setValue("");
        }
        return value;
      }),
      "scanned_new_code"
    );
    this.appendDummyInput().appendField("Код").appendField(
      new Blockly.FieldTextInput("E932B", (value) => {
        if (this.getFieldValue("scanned_new_code") === "FALSE") {
          return null;
        }
        return value;
      }),
      "code"
    );
    this.appendDummyInput("COPY_ALL").appendField("Барлығын көшіру: ").appendField(new Blockly.FieldCheckbox(false), "COPY_SAME");
    this.setColour(COLOR_THEME.SENSOR);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks["ir_remote_setup"] = irSetupBlock;
Blockly.Blocks["procedures_defnoreturn"] = {
  /**
   * Block for defining a procedure with no return value.
   * @this Blockly.Block
   */
  init: function() {
    var nameField = new Blockly.FieldTextInput("", Blockly.Procedures.rename);
    nameField.setSpellcheck(false);
    this.appendDummyInput().appendField("блок жасау").appendField(nameField, "NAME");
    if ((this.workspace.options.comments || this.workspace.options.parentWorkspace && this.workspace.options.parentWorkspace.options.comments) && Blockly.Msg["PROCEDURES_DEFNORETURN_COMMENT"]) {
      this.setCommentText(
        `Бұл блок өз блоктарыңызды жасауға мүмкіндік береді.  Осы блоктың ішіне салған блоктар реттелетін блокты пайдаланған кезде іске қосылады.`
      );
      this.getIcon("comment")?.setBubbleSize(new Blockly.utils.Size(460, 110));
    }
    this.setStyle("procedure_blocks");
    this.setTooltip(Blockly.Msg["PROCEDURES_DEFNORETURN_TOOLTIP"]);
    this.setHelpUrl(Blockly.Msg["PROCEDURES_DEFNORETURN_HELPURL"]);
    this.setStatements_(true);
    this.statementConnection_ = null;
  },
  /**
   * Add or remove the statement block from this function definition.
   * @param {boolean} hasStatements True if a statement block is needed.
   * @this Blockly.Block
   */
  setStatements_: function(hasStatements) {
    if (this.hasStatements_ === hasStatements) {
      return;
    }
    if (hasStatements) {
      this.appendStatementInput("STACK").appendField(
        Blockly.Msg["PROCEDURES_DEFNORETURN_DO"]
      );
    } else {
      this.removeInput("STACK", true);
    }
    this.hasStatements_ = hasStatements;
  },
  /**
   * Return the signature of this procedure definition.
   * @return {!Array} Tuple containing three elements:
   *     - the name of the defined procedure,
   *     - a list of all its arguments,
   *     - that it DOES NOT have a return value.
   * @this Blockly.Block
   */
  getProcedureDef: function() {
    return [this.getFieldValue("NAME"), [], false];
  },
  callType_: "procedures_callnoreturn"
};
Blockly.defineBlocksWithJsonArray([
  {
    type: "lcd_scroll",
    message0: "%1 1 бос орынды жылжытыңыз %2",
    args0: [
      {
        type: "field_image",
        src: "./blocks/lcd/lcd.png",
        width: 15,
        height: 15,
        alt: "*",
        flipRtl: false
      },
      {
        type: "field_dropdown",
        name: "DIR",
        options: [
          ["RIGHT", "RIGHT"],
          ["LEFT", "LEFT"]
        ]
      }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: COLOR_THEME.COMPONENTS,
    tooltip: "",
    helpUrl: ""
  },
  {
    type: "lcd_blink",
    message0: "%1 %2 %3 Жол %4 Баған %5",
    args0: [
      {
        type: "field_image",
        src: "./blocks/lcd/lcd.png",
        width: 15,
        height: 15,
        alt: "*",
        flipRtl: false
      },
      {
        type: "field_dropdown",
        name: "BLINK",
        options: [
          ["Blink", "BLINK"],
          ["No Blink", "OFF"]
        ]
      },
      {
        type: "input_dummy"
      },
      {
        type: "input_value",
        name: "ROW",
        check: "Number",
        align: "RIGHT"
      },
      {
        type: "input_value",
        name: "COLUMN",
        check: "Number",
        align: "RIGHT"
      }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: COLOR_THEME.COMPONENTS,
    tooltip: "",
    helpUrl: ""
  },
  {
    type: "lcd_screen_simple_print",
    message0: "%1  Print -> Delay -> Clear %2 1-жолға жазу %3 2-жолға жазу %4 3-жолға жазу %5 4-жолға жазу %6 Кідіріс %7",
    args0: [
      {
        type: "field_image",
        src: "./blocks/lcd/lcd.png",
        width: 15,
        height: 15,
        alt: "*",
        flipRtl: false
      },
      {
        type: "input_dummy"
      },
      {
        type: "input_value",
        name: "ROW_1",
        check: "String",
        align: "RIGHT"
      },
      {
        type: "input_value",
        name: "ROW_2",
        check: "String",
        align: "RIGHT"
      },
      {
        type: "input_value",
        name: "ROW_3",
        check: "String",
        align: "RIGHT"
      },
      {
        type: "input_value",
        name: "ROW_4",
        check: "String",
        align: "RIGHT"
      },
      {
        type: "input_value",
        name: "DELAY",
        check: "Number",
        align: "RIGHT"
      }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: COLOR_THEME.COMPONENTS,
    tooltip: "",
    helpUrl: ""
  },
  {
    type: "lcd_backlight",
    message0: "%1 Артқы жарықты қосыңыз %2",
    args0: [
      {
        type: "field_image",
        src: "./blocks/lcd/lcd.png",
        width: 15,
        height: 15,
        alt: "*",
        flipRtl: false
      },
      {
        type: "field_dropdown",
        name: "BACKLIGHT",
        options: [
          ["on", "ON"],
          ["off", "OFF"]
        ]
      }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: COLOR_THEME.COMPONENTS,
    tooltip: "",
    helpUrl: ""
  },
  {
    type: "lcd_screen_print",
    message0: "%1 Басып шығару %2 Жол %3 Баған %4 Хабар %5",
    args0: [
      {
        type: "field_image",
        src: "./blocks/lcd/lcd.png",
        width: 15,
        height: 15,
        alt: "*",
        flipRtl: false
      },
      {
        type: "input_dummy"
      },
      {
        type: "input_value",
        name: "ROW",
        check: "Number",
        align: "RIGHT"
      },
      {
        type: "input_value",
        name: "COLUMN",
        check: "Number",
        align: "RIGHT"
      },
      {
        type: "input_value",
        name: "PRINT",
        check: "String",
        align: "RIGHT"
      }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: COLOR_THEME.COMPONENTS,
    tooltip: "",
    helpUrl: ""
  },
  {
    type: "lcd_screen_clear",
    message0: "%1 Тазалау",
    args0: [
      {
        type: "field_image",
        src: "./blocks/lcd/lcd.png",
        width: 15,
        height: 15,
        alt: "*",
        flipRtl: false
      }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: COLOR_THEME.COMPONENTS,
    tooltip: "",
    helpUrl: ""
  }
]);
Blockly.Blocks["lcd_setup"] = {
  init: function() {
    this.appendDummyInput().appendField(new Blockly.FieldImage("./blocks/lcd/lcd.png", 15, 15)).appendField("СКД орнату");
    this.appendDummyInput().appendField("Жад түрі").appendField(
      new Blockly.FieldDropdown([
        ["0x3F", "0x3F"],
        ["0x27", "0x27"]
      ]),
      "MEMORY_TYPE"
    );
    this.appendDummyInput().appendField("Өлшемі").appendField(
      new Blockly.FieldDropdown([
        ["16 x 2", "16 x 2"],
        ["20 x 4", "20 x 4"]
      ]),
      "SIZE"
    );
    this.appendDummyInput().appendField("SDA").appendField(
      new Blockly.FieldDropdown(() => selectBoardBlockly().sdaPins),
      "PIN_SDA"
    ).appendField("SCL").appendField(
      new Blockly.FieldDropdown(() => selectBoardBlockly().sclPins),
      "PIN_SCL"
    );
    this.setColour(COLOR_THEME.COMPONENTS);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.defineBlocksWithJsonArray([
  {
    type: "led_matrix_make_draw",
    message0: "%1 Жарықдиодты матрицалық сызу %2 %3 %4 %5 %6 %7 %8 %9 %10 %11 %12 %13 %14 %15 %16 %17 %18 %19 %20 %21 %22 %23 %24 %25 %26 %27 %28 %29 %30 %31 %32 %33 %34 %35 %36 %37 %38 %39 %40 %41 %42 %43 %44 %45 %46 %47 %48 %49 %50 %51 %52 %53 %54 %55 %56 %57 %58 %59 %60 %61 %62 %63 %64 %65 %66 %67 %68 %69 %70 %71 %72 %73",
    args0: [
      {
        type: "field_image",
        src: "./blocks/led_matrix/led_matrix.png",
        width: 15,
        height: 15,
        alt: "*",
        flipRtl: false
      },
      {
        type: "input_dummy"
      },
      {
        type: "field_checkbox",
        name: "1,1",
        checked: false
      },
      {
        type: "field_checkbox",
        name: "1,2",
        checked: false
      },
      {
        type: "field_checkbox",
        name: "1,3",
        checked: false
      },
      {
        type: "field_checkbox",
        name: "1,4",
        checked: false
      },
      {
        type: "field_checkbox",
        name: "1,5",
        checked: false
      },
      {
        type: "field_checkbox",
        name: "1,6",
        checked: false
      },
      {
        type: "field_checkbox",
        name: "1,7",
        checked: false
      },
      {
        type: "field_checkbox",
        name: "1,8",
        checked: false
      },
      {
        type: "input_dummy"
      },
      {
        type: "field_checkbox",
        name: "2,1",
        checked: false
      },
      {
        type: "field_checkbox",
        name: "2,2",
        checked: false
      },
      {
        type: "field_checkbox",
        name: "2,3",
        checked: false
      },
      {
        type: "field_checkbox",
        name: "2,4",
        checked: false
      },
      {
        type: "field_checkbox",
        name: "2,5",
        checked: false
      },
      {
        type: "field_checkbox",
        name: "2,6",
        checked: false
      },
      {
        type: "field_checkbox",
        name: "2,7",
        checked: false
      },
      {
        type: "field_checkbox",
        name: "2,8",
        checked: false
      },
      {
        type: "input_dummy"
      },
      {
        type: "field_checkbox",
        name: "3,1",
        checked: false
      },
      {
        type: "field_checkbox",
        name: "3,2",
        checked: false
      },
      {
        type: "field_checkbox",
        name: "3,3",
        checked: false
      },
      {
        type: "field_checkbox",
        name: "3,4",
        checked: false
      },
      {
        type: "field_checkbox",
        name: "3,5",
        checked: false
      },
      {
        type: "field_checkbox",
        name: "3,6",
        checked: false
      },
      {
        type: "field_checkbox",
        name: "3,7",
        checked: false
      },
      {
        type: "field_checkbox",
        name: "3,8",
        checked: false
      },
      {
        type: "input_dummy"
      },
      {
        type: "field_checkbox",
        name: "4,1",
        checked: false
      },
      {
        type: "field_checkbox",
        name: "4,2",
        checked: false
      },
      {
        type: "field_checkbox",
        name: "4,3",
        checked: false
      },
      {
        type: "field_checkbox",
        name: "4,4",
        checked: false
      },
      {
        type: "field_checkbox",
        name: "4,5",
        checked: false
      },
      {
        type: "field_checkbox",
        name: "4,6",
        checked: false
      },
      {
        type: "field_checkbox",
        name: "4,7",
        checked: false
      },
      {
        type: "field_checkbox",
        name: "4,8",
        checked: false
      },
      {
        type: "input_dummy"
      },
      {
        type: "field_checkbox",
        name: "5,1",
        checked: false
      },
      {
        type: "field_checkbox",
        name: "5,2",
        checked: false
      },
      {
        type: "field_checkbox",
        name: "5,3",
        checked: false
      },
      {
        type: "field_checkbox",
        name: "5,4",
        checked: false
      },
      {
        type: "field_checkbox",
        name: "5,5",
        checked: false
      },
      {
        type: "field_checkbox",
        name: "5,6",
        checked: false
      },
      {
        type: "field_checkbox",
        name: "5,7",
        checked: false
      },
      {
        type: "field_checkbox",
        name: "5,8",
        checked: false
      },
      {
        type: "input_dummy"
      },
      {
        type: "field_checkbox",
        name: "6,1",
        checked: false
      },
      {
        type: "field_checkbox",
        name: "6,2",
        checked: false
      },
      {
        type: "field_checkbox",
        name: "6,3",
        checked: false
      },
      {
        type: "field_checkbox",
        name: "6,4",
        checked: false
      },
      {
        type: "field_checkbox",
        name: "6,5",
        checked: false
      },
      {
        type: "field_checkbox",
        name: "6,6",
        checked: false
      },
      {
        type: "field_checkbox",
        name: "6,7",
        checked: false
      },
      {
        type: "field_checkbox",
        name: "6,8",
        checked: false
      },
      {
        type: "input_dummy"
      },
      {
        type: "field_checkbox",
        name: "7,1",
        checked: false
      },
      {
        type: "field_checkbox",
        name: "7,2",
        checked: false
      },
      {
        type: "field_checkbox",
        name: "7,3",
        checked: false
      },
      {
        type: "field_checkbox",
        name: "7,4",
        checked: false
      },
      {
        type: "field_checkbox",
        name: "7,5",
        checked: false
      },
      {
        type: "field_checkbox",
        name: "7,6",
        checked: false
      },
      {
        type: "field_checkbox",
        name: "7,7",
        checked: false
      },
      {
        type: "field_checkbox",
        name: "7,8",
        checked: false
      },
      {
        type: "input_dummy"
      },
      {
        type: "field_checkbox",
        name: "8,1",
        checked: false
      },
      {
        type: "field_checkbox",
        name: "8,2",
        checked: false
      },
      {
        type: "field_checkbox",
        name: "8,3",
        checked: false
      },
      {
        type: "field_checkbox",
        name: "8,4",
        checked: false
      },
      {
        type: "field_checkbox",
        name: "8,5",
        checked: false
      },
      {
        type: "field_checkbox",
        name: "8,6",
        checked: false
      },
      {
        type: "field_checkbox",
        name: "8,7",
        checked: false
      },
      {
        type: "field_checkbox",
        name: "8,8",
        checked: false
      }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: COLOR_THEME.COMPONENTS,
    tooltip: "",
    helpUrl: ""
  },
  {
    type: "led_matrix_turn_one_on_off",
    message0: "%1 Бір жарықдиодты %2 қосу %3 Қатар %4 Бағана %5",
    args0: [
      {
        type: "field_image",
        src: "./blocks/led_matrix/led_matrix.png",
        width: 15,
        height: 15,
        alt: "*",
        flipRtl: false
      },
      {
        type: "field_dropdown",
        name: "STATE",
        options: [
          ["on", "ON"],
          ["off", "OFF"]
        ]
      },
      {
        type: "input_dummy"
      },
      {
        type: "input_value",
        name: "ROW",
        check: "Number",
        align: "RIGHT"
      },
      {
        type: "input_value",
        name: "COLUMN",
        check: "Number",
        align: "RIGHT"
      }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: COLOR_THEME.COMPONENTS,
    tooltip: "",
    helpUrl: ""
  }
]);
Blockly.Blocks["led_matrix_setup"] = {
  init: function() {
    this.appendDummyInput().appendField(
      new Blockly.FieldImage("./blocks/led_matrix/led_matrix.png", 15, 15)
    ).appendField("Жарықдиодты матрицаны орнату");
    this.appendDummyInput().appendField("Data Pin#").appendField(
      new Blockly.FieldDropdown(() => selectBoardBlockly().digitalPins),
      "PIN_DATA"
    );
    this.appendDummyInput().appendField("CLK Pin#").appendField(
      new Blockly.FieldDropdown(() => selectBoardBlockly().digitalPins),
      "PIN_CLK"
    );
    this.appendDummyInput().appendField("CS Pin#").appendField(
      new Blockly.FieldDropdown(() => selectBoardBlockly().digitalPins),
      "PIN_CS"
    );
    this.setColour(COLOR_THEME.COMPONENTS);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks["rgb_led_setup"] = {
  init: function() {
    this.appendDummyInput().appendField(new Blockly.FieldImage("./blocks/led/color_led.png", 15, 15)).appendField("RGB жарықдиодын орнату");
    this.appendDummyInput().appendField("Сурет түрі").appendField(
      new Blockly.FieldDropdown([
        ["Макет платасында", "BREADBOARD"],
        ["Аппаратқа кіріктірілген", "BUILT_IN"]
      ]),
      "PICTURE_TYPE"
    );
    this.appendDummyInput().appendField("Қызыл").appendField(
      new Blockly.FieldDropdown(() => selectBoardBlockly().pwmPins),
      "PIN_RED"
    ).appendField("Жасыл").appendField(
      new Blockly.FieldDropdown(() => selectBoardBlockly().pwmPins),
      "PIN_GREEN"
    ).appendField("Көк").appendField(
      new Blockly.FieldDropdown(() => selectBoardBlockly().pwmPins),
      "PIN_BLUE"
    );
    this.setColour(COLOR_THEME.COMPONENTS);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.defineBlocksWithJsonArray([
  {
    type: "set_color_led",
    message0: "%1 RGB жарық диоды түсін орнатыңыз %2",
    args0: [
      {
        type: "field_image",
        src: "./blocks/led/color_led.png",
        width: 15,
        height: 15,
        alt: "*",
        flipRtl: false
      },
      {
        type: "input_value",
        name: "COLOUR",
        check: "Colour"
      }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: COLOR_THEME.COMPONENTS,
    tooltip: "",
    helpUrl: ""
  }
]);
Blockly.Blocks["led"] = {
  init: function() {
    this.appendDummyInput().appendField(new Blockly.FieldImage("./blocks/led/led.png", 15, 15)).appendField("Жағу ").appendField(
      new Blockly.FieldColour("red", null, {
        colourOptions: [
          "#ff0000",
          "#008000",
          "#0000ff",
          "#ffff00",
          "#ffffff",
          "#800080",
          "#ffa500"
        ]
      }),
      "COLOR"
    ).appendField(" led# ").appendField(
      new Blockly.FieldDropdown(() => {
        return selectBoardBlockly().digitalPins;
      }),
      "PIN"
    ).appendField(
      new Blockly.FieldDropdown([
        ["қосу", "ON"],
        ["өшіру", "OFF"]
      ]),
      "STATE"
    );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(COLOR_THEME.COMPONENTS);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks["led_fade"] = {
  init: function() {
    this.appendValueInput("Жарықтығы").setCheck("Number").appendField(new Blockly.FieldImage("./blocks/led/led.png", 15, 15)).appendField("Жарықтығын өзгерту").appendField(
      new Blockly.FieldColour("red", null, {
        colourOptions: [
          "#ff0000",
          "#008000",
          "#0000ff",
          "#ffff00",
          "#ffffff",
          "#800080",
          "#ffa500"
        ]
      }),
      "COLOR"
    ).appendField(" led# ").appendField(
      new Blockly.FieldDropdown(() => {
        return selectBoardBlockly().pwmPins;
      }),
      "PIN"
    ).appendField(" ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(COLOR_THEME.COMPONENTS);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.defineBlocksWithJsonArray([
  {
    type: "neo_pixel_set_color",
    message0: "%1 Жарықдиодтың түсін орнату %2 Қай жарықдиод: %3 Қандай түс: %4",
    args0: [
      {
        type: "field_image",
        src: "./blocks/neo_pixel/neo_pixel.png",
        width: 15,
        height: 15,
        alt: "*",
        flipRtl: false
      },
      {
        type: "input_dummy"
      },
      {
        type: "input_value",
        name: "POSITION",
        check: "Number",
        align: "RIGHT"
      },
      {
        type: "input_value",
        name: "COLOR",
        check: "Colour",
        align: "RIGHT"
      }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: COLOR_THEME.COMPONENTS,
    tooltip: "",
    helpUrl: ""
  }
]);
Blockly.Blocks["neo_pixel_setup"] = {
  init: function() {
    this.appendDummyInput().appendField(
      new Blockly.FieldImage("./blocks/neo_pixel/neo_pixel.png", 15, 15)
    ).appendField("Жарықдиодты түсті жолақты орнату");
    this.appendDummyInput().appendField("Аналогтық деректер пині").appendField(
      new Blockly.FieldDropdown(() => selectBoardBlockly().pwmPins),
      "PIN"
    );
    this.appendDummyInput().appendField("Жарықдиодтар саны").appendField(new Blockly.FieldNumber(30, 1, 150), "NUMBER_LEDS");
    this.appendDummyInput().appendField("Жарықтық 1-ден 20-ға дейін").appendField(new Blockly.FieldNumber(10, 1, 20, 1), "BRIGHTNESS");
    this.setColour(COLOR_THEME.COMPONENTS);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.defineBlocksWithJsonArray([
  {
    type: "fastled_set_color",
    message0: "%1 Жарық диодтың түсін орнату %2 Қай LED? %3 Қандай түс? %4",
    args0: [
      {
        type: "field_image",
        src: "./blocks/neo_pixel/neo_pixel.png",
        width: 15,
        height: 15,
        alt: "*",
        flipRtl: false
      },
      {
        type: "input_dummy"
      },
      {
        type: "input_value",
        name: "POSITION",
        check: "Number",
        align: "RIGHT"
      },
      {
        type: "input_value",
        name: "COLOR",
        check: "Colour",
        align: "RIGHT"
      }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: COLOR_THEME.COMPONENTS,
    tooltip: "",
    helpUrl: ""
  },
  {
    type: "fastled_show_all_colors",
    message0: "%1 барлық rgb жарықдиодтарын көрсетіңіз",
    args0: [
      {
        type: "field_image",
        src: "./blocks/neo_pixel/neo_pixel.png",
        width: 15,
        height: 15,
        alt: "*",
        flipRtl: false
      }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: COLOR_THEME.COMPONENTS,
    tooltip: "",
    helpUrl: ""
  }
]);
Blockly.Blocks["fastled_setup"] = {
  init: function() {
    this.appendDummyInput().appendField(
      new Blockly.FieldImage("./blocks/neo_pixel/neo_pixel.png", 15, 15)
    ).appendField("Жарықдиодты түсті жолақты орнату");
    this.appendDummyInput().appendField("Аналогтық деректер пин").appendField(
      new Blockly.FieldDropdown(() => selectBoardBlockly().pwmPins),
      "PIN"
    );
    this.appendDummyInput().appendField("Type").appendField(
      new Blockly.FieldDropdown([
        ["WS2811", "WS2811"],
        ["WS2801", "WS2801"],
        ["WS2803", "WS2803"],
        ["APA102", "APA102"],
        ["APA104", "APA104"],
        ["APA106", "APA106"],
        ["DOTSTAR", "DOTSTAR"],
        ["GE8822", "GE8822"],
        ["GS1903", "GS1903"],
        ["GW6205", "GW6205"],
        ["GW6205_400", "GW6205_400"],
        ["LPD1886", "LPD1886"],
        ["LPD1886_8BIT", "LPD1886_8BIT"],
        ["LPD6803", "LPD6803"],
        ["LPD8806", "LPD8806"],
        ["P9813", "P9813"],
        ["PL9823", "PL9823"],
        ["SK6812", "SK6812"],
        ["SK6822", "SK6822"],
        ["SK9822", "SK9822"],
        ["SM16703", "SM16703"],
        ["SM16716", "SM16716"],
        ["TM1803", "TM1803"],
        ["TM1804", "TM1804"],
        ["TM1809", "TM1809"],
        ["TM1812", "TM1812"],
        ["TM1829", "TM1829"],
        ["UCS1903", "UCS1903"],
        ["UCS1903B", "UCS1903B"],
        ["UCS1904", "UCS1904"],
        ["UCS2903", "UCS2903"],
        ["WS2811_400", "WS2811_400"],
        ["WS2812", "WS2812"],
        ["WS2812B", "WS2812B"],
        ["WS2813", "WS2813"],
        ["WS2852", "WS2852"]
      ]),
      "CHIP_SET"
    );
    this.appendDummyInput().appendField("Түс тәртібі").appendField(
      new Blockly.FieldDropdown([
        ["RGB", "RGB"],
        ["GRB", "GRB"],
        ["RBG", "RBG"],
        ["GBR", "GBR"],
        ["BRG", "BRG"],
        ["BGR", "BGR"]
      ]),
      "COLOR_ORDER"
    );
    this.appendDummyInput().appendField("Жарықдиодтар саны").appendField(new Blockly.FieldNumber(30, 1, 150), "NUMBER_LEDS");
    this.appendDummyInput().appendField("Жарықтық 1-ден 255-ке дейін").appendField(new Blockly.FieldNumber(10, 1, 255, 1), "BRIGHTNESS");
    this.setColour(COLOR_THEME.COMPONENTS);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks["fastled_set_all_colors"] = {
  init: function() {
    this.appendDummyInput().appendField(
      new Blockly.FieldImage("./blocks/neo_pixel/neo_pixel.png", 15, 15)
    ).appendField("Барлық Түстерді орнату");
    for (let rows = 12; rows >= 1; rows -= 1) {
      let input = this.appendDummyInput();
      for (let cols = 1; cols <= 12; cols += 1) {
        let actualCol = rows % 2 == 0 ? 13 - cols : cols;
        input.appendField(
          new ColorWheelField("#000000"),
          `${rows}-${actualCol}`
        );
      }
    }
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(COLOR_THEME.COMPONENTS);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks["analog_write"] = {
  init: function() {
    this.appendDummyInput().appendField(
      new Blockly.FieldImage("./blocks/arduino/analog_write.png", 15, 15)
    ).appendField("Аналогты пин# ").appendField(
      new Blockly.FieldDropdown(() => selectBoardBlockly().pwmPins),
      "PIN"
    );
    this.appendValueInput("WRITE_VALUE").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("Күші");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(COLOR_THEME.COMPONENTS);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks["digital_write"] = {
  init: function() {
    this.appendDummyInput().appendField(
      new Blockly.FieldImage("./blocks/arduino/digital_write.png", 15, 15)
    ).appendField("Пин күйі: ").appendField(
      new Blockly.FieldDropdown([
        ["on", "ON"],
        ["off", "OFF"]
      ]),
      "STATE"
    ).appendField("пин# ").appendField(
      new Blockly.FieldDropdown(() => selectBoardBlockly().digitalPins),
      "PIN"
    );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(COLOR_THEME.COMPONENTS);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
const digitalReadBlock = {
  init: function() {
    this.appendDummyInput().appendField(
      new Blockly.FieldImage("./blocks/arduino/digital_read.png", 15, 15)
    ).appendField("сандық сенсор ").appendField(
      new Blockly.FieldDropdown(() => {
        return configuredPins(
          "digital_read_setup",
          selectBoardBlockly().digitalPins
        );
      }),
      "PIN"
    ).appendField(" бірдеңе таптыңыз ба?");
    this.setOutput(true, "Boolean");
    this.setColour(COLOR_THEME.SENSOR);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks["digital_read"] = digitalReadBlock;
const digitalReadSetupBlock = {
  init: function() {
    this.appendDummyInput().appendField(
      new Blockly.FieldImage("./blocks/arduino/digital_read.png", 15, 15)
    ).appendField("Сандық оқу пинін орнату");
    this.appendDummyInput().appendField("PIN #").appendField(
      new Blockly.FieldDropdown(() => {
        return getAvailablePins(
          "digital_read_setup",
          this.getFieldValue("PIN"),
          selectBoardBlockly().digitalPins
        );
      }),
      "PIN"
    );
    this.appendDummyInput("SHOW_CODE_VIEW").appendField("Түрі").appendField(
      new Blockly.FieldDropdown([
        ["Түрту сенсоры", "TOUCH_SENSOR"],
        ["Сенсор", "SENSOR"]
      ]),
      "TYPE"
    );
    this.appendDummyInput("SHOW_CODE_VIEW").appendField(
      "------------------------------------"
    );
    this.appendDummyInput("LOOP_TIMES").appendField("Қайталау саны").appendField(
      new Blockly.FieldDropdown(() => {
        return loopTimes();
      }),
      "LOOP"
    );
    this.appendDummyInput().appendField("Бірдеңе сезіп тұрсың ба? ").appendField(new Blockly.FieldCheckbox("TRUE"), "isOn");
    this.appendDummyInput("COPY_ALL").appendField("Барлығын көшіру: ").appendField(new Blockly.FieldCheckbox(false), "COPY_SAME");
    this.setColour(COLOR_THEME.SENSOR);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks["digital_read_setup"] = digitalReadSetupBlock;
[
  { type: "сан", blockName: "number", variable_type: "List Number" },
  { type: "жолдық", blockName: "string", variable_type: "List String" },
  { type: "логикалық", blockName: "boolean", variable_type: "List Boolean" },
  { type: "түстік", blockName: "colour", variable_type: "List Colour" }
].forEach(({ type, blockName, variable_type }) => {
  const humanType = type === "string" ? "text" : type;
  Blockly.Blocks[`create_list_${blockName}_block`] = {
    init: function() {
      const varField = new Blockly.FieldVariable(
        null,
        null,
        [variable_type],
        variable_type
      );
      varField.showOnlyVariableAssigned = true;
      varField.createNewVariable = false;
      this.appendDummyInput().appendField(`Тізім`).appendField(varField, "VAR").appendField(" сақтайды ").appendField(new Blockly.FieldNumber(2, 2, 1e3), "Өлшемі").appendField(` ${humanType}`);
      this.setColour(COLOR_THEME.DATA);
      this.setTooltip("");
      this.setHelpUrl("");
      this.setCommentText(
        `Бұл блок ${humanType} тізімін жасайды. Өлшем тізімдегі ${humanType} санын анықтайды.`
      );
      this.getIcon("comment")?.setBubbleSize(new Blockly.utils.Size(460, 80));
    }
  };
  Blockly.Blocks[`set_${blockName}_list_block`] = {
    init: function() {
      const varField = new Blockly.FieldVariable(
        null,
        null,
        [variable_type],
        variable_type
      );
      varField.showOnlyVariableAssigned = false;
      this.appendValueInput("Мән").setCheck(variable_type.replace("Тізім ", "")).setAlign(Blockly.ALIGN_RIGHT).appendField(`Енгізілетін мән ${humanType}`);
      this.appendValueInput("Орны").setCheck("Number").appendField(" Тізім: ").appendField(varField, "мән").appendField(" орны: ");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(COLOR_THEME.DATA);
      this.setTooltip("");
      this.setHelpUrl("");
      this.setCommentText(
        `Бұл блок ${humanType}ды тізімге қояды. Орны ${humanType} тізімдегі қай жерде болатынын анықтайды. Тізімдегі бірінші ${humanType} 1-орыннан басталады..`
      );
      this.getIcon("comment")?.setBubbleSize(new Blockly.utils.Size(460, 120));
    }
  };
  Blockly.Blocks[`get_${blockName}_from_list`] = {
    init: function() {
      const varField = new Blockly.FieldVariable(
        null,
        null,
        [variable_type],
        variable_type
      );
      varField.showOnlyVariableAssigned = false;
      this.appendDummyInput().appendField(`Тізімнен ${humanType} өшіру `).appendField(varField, "VAR");
      this.appendValueInput("POSITION").setCheck("Number").appendField(" Индексі: ");
      this.setInputsInline(true);
      this.setOutput(true, variable_type.replace("List ", ""));
      this.setColour(COLOR_THEME.DATA);
      this.setTooltip("");
      this.setHelpUrl("");
      this.setCommentText(
        `Бұл блок тізімнен ${humanType} алады. Орны тізімдегі қай жерден ${humanType} алатыныңызды анықтайды. Тізімдегі бірінші ${humanType} 1-орыннан басталады.`
      );
      this.getIcon("comment")?.setBubbleSize(new Blockly.utils.Size(460, 120));
    }
  };
});
Blockly.defineBlocksWithJsonArray([
  // If/else block that does not use a mutator.
  {
    type: "control_if",
    message0: "Егер %1",
    args0: [
      {
        type: "input_value",
        name: "IF0",
        check: "Boolean"
      }
    ],
    message1: "Онда %1",
    args1: [
      {
        type: "input_statement",
        name: "DO0"
      }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: COLOR_THEME.CONTROL,
    tooltip: "%{BKYCONTROLS_IF_TOOLTIP_2}",
    helpUrl: "%{BKY_CONTROLS_IF_HELPURL}",
    extensions: ["controls_if_tooltip"]
  },
  {
    type: "controls_ifelse",
    message0: "Егер %1",
    args0: [
      {
        type: "input_value",
        name: "IF0",
        check: "Boolean"
      }
    ],
    message1: "Онда %1",
    args1: [
      {
        type: "input_statement",
        name: "DO0"
      }
    ],
    message2: "%{BKY_CONTROLS_IF_MSG_ELSE} %1",
    args2: [
      {
        type: "input_statement",
        name: "ELSE"
      }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: COLOR_THEME.CONTROL,
    tooltip: "%{BKYCONTROLS_IF_TOOLTIP_2}",
    helpUrl: "%{BKY_CONTROLS_IF_HELPURL}",
    extensions: ["controls_if_tooltip"]
  }
]);
Blockly.defineBlocksWithJsonArray([
  {
    lastDummyAlign0: "RIGHT",
    type: "controls_for",
    inputsInline: true,
    message0: "%1 айнымалысын пайдаланып %2 ден %3 дейін %4 қадаммен қайталау",
    args0: [
      {
        type: "field_variable",
        name: "VAR",
        variable: null,
        variableTypes: ["Number"],
        defaultType: "Number",
        createNewVariable: true,
        showOnlyVariableAssigned: false
      },
      {
        type: "input_value",
        name: "FROM",
        check: "Number",
        align: "RIGHT"
      },
      {
        type: "input_value",
        name: "TO",
        check: "Number",
        align: "RIGHT"
      },
      {
        type: "field_number",
        name: "BY",
        value: "1",
        min: 1,
        max: 2e5
      }
    ],
    message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
    args1: [
      {
        type: "input_statement",
        name: "DO"
      }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: COLOR_THEME.CONTROL,
    helpUrl: "%{BKY_CONTROLS_FOR_HELPURL}",
    extensions: ["contextMenu_newGetVariableBlock", "controls_for_tooltip"]
  }
]);
Blockly.defineBlocksWithJsonArray([
  {
    type: "string_to_number",
    message0: "Мәтіннен санға %1",
    args0: [
      {
        type: "input_value",
        name: "VALUE",
        check: "String"
      }
    ],
    output: "Number",
    colour: COLOR_THEME.VALUES,
    tooltip: "",
    helpUrl: ""
  },
  {
    type: "math_number_property",
    message0: "%1 %2",
    args0: [
      {
        type: "input_value",
        name: "NUMBER_TO_CHECK",
        check: "Number"
      },
      {
        type: "field_dropdown",
        name: "PROPERTY",
        options: [
          ["%{BKY_MATH_IS_EVEN}", "EVEN"],
          ["%{BKY_MATH_IS_ODD}", "ODD"],
          ["%{BKY_MATH_IS_POSITIVE}", "POSITIVE"],
          ["%{BKY_MATH_IS_NEGATIVE}", "NEGATIVE"],
          ["%{BKY_MATH_IS_DIVISIBLE_BY}", "DIVISIBLE_BY"]
        ]
      }
    ],
    inputsInline: true,
    output: "Boolean",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_IS_TOOLTIP}",
    mutator: "math_is_divisibleby_mutator"
  }
]);
Blockly.defineBlocksWithJsonArray([
  {
    type: "arduino_receive_message",
    message0: "%1 Ардуино хабарлама алды ма? ",
    args0: [
      {
        type: "field_image",
        src: "./blocks/message/message.png",
        width: 15,
        height: 15,
        alt: "*",
        flipRtl: false
      }
    ],
    output: "Boolean",
    colour: COLOR_THEME.ARDUINO,
    tooltip: "",
    helpUrl: ""
  },
  {
    type: "arduino_get_message",
    message0: "%1 Arduino-дан хабарлама алу",
    args0: [
      {
        type: "field_image",
        src: "./blocks/message/message.png",
        width: 15,
        height: 15,
        alt: "*",
        flipRtl: false
      }
    ],
    output: "String",
    colour: COLOR_THEME.ARDUINO,
    tooltip: "",
    helpUrl: ""
  },
  {
    type: "arduino_send_message",
    message0: "%1 Arduino жіберген хабарлама %2",
    args0: [
      {
        type: "field_image",
        src: "./blocks/message/message.png",
        width: 15,
        height: 15,
        alt: "*",
        flipRtl: false
      },
      {
        type: "input_value",
        name: "MESSAGE",
        check: "String"
      }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: COLOR_THEME.ARDUINO,
    tooltip: "",
    helpUrl: ""
  }
]);
const messageSetupBlock = {
  init: function() {
    this.appendDummyInput().appendField(
      new Blockly.FieldImage("./blocks/message/message.png", 15, 15)
    ).appendField("Arduino хабарламаларын баптау");
    this.appendDummyInput("SHOW_CODE_VIEW").appendField(
      "-----------------------------------------"
    );
    this.appendDummyInput().appendField("Қайталау саны").appendField(new Blockly.FieldDropdown(() => loopTimes()), "LOOP");
    this.appendDummyInput().appendField("Хабарлама қабылдай ма? ").appendField(
      new Blockly.FieldCheckbox("TRUE", (value) => {
        if ("FALSE" === value) {
          this.getField("message").setValue("");
        }
        return value;
      }),
      "receiving_message"
    );
    this.appendDummyInput().appendField("Хабарлама:").appendField(
      new Blockly.FieldTextInput("Сәлем Әлем! :)", (value) => {
        if (this.getFieldValue("receiving_message") === "FALSE") {
          return null;
        }
        return value;
      }),
      "message"
    );
    this.appendDummyInput("COPY_ALL").appendField("Барлығын көшіру: ").appendField(new Blockly.FieldCheckbox(false), "COPY_SAME");
    this.setColour(COLOR_THEME.ARDUINO);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks["message_setup"] = messageSetupBlock;
Blockly.defineBlocksWithJsonArray([
  {
    type: "ultra_sonic_sensor_motion",
    message0: "%1 қашықтық (cm).",
    args0: [
      {
        type: "field_image",
        src: "./blocks/motion_sensor/ultrasonic_sensor.png",
        width: 30,
        height: 15,
        alt: "*",
        flipRtl: false
      }
    ],
    output: "Number",
    colour: COLOR_THEME.SENSOR,
    tooltip: "",
    helpUrl: ""
  }
]);
const ultraSonicSensorBlock = {
  init: function() {
    this.appendDummyInput().appendField(
      new Blockly.FieldImage(
        "./blocks/motion_sensor/ultrasonic_sensor.png",
        30,
        15
      )
    ).appendField("Ультрадыбыстық сенсор баптаулары");
    this.appendDummyInput().appendField("Trig Pin# ").appendField(
      new Blockly.FieldDropdown(() => selectBoardBlockly().digitalPins),
      "PIN_TRIG"
    ).appendField("Echo Pin# ").appendField(
      new Blockly.FieldDropdown(() => selectBoardBlockly().digitalPins),
      "PIN_ECHO"
    );
    this.appendDummyInput("SHOW_CODE_VIEW").appendField(
      "------------------------------------------------"
    );
    this.appendDummyInput().appendField("Қайталау саны").appendField(new Blockly.FieldDropdown(() => loopTimes()), "LOOP");
    this.appendDummyInput().appendField("Қашықтық CM").appendField(new Blockly.FieldNumber(1, 0.1, 500, 1e-5), "cm");
    this.appendDummyInput("COPY_ALL").appendField("Барлығын көшіру: ").appendField(new Blockly.FieldCheckbox(false), "COPY_SAME");
    this.setColour(COLOR_THEME.SENSOR);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks["ultra_sonic_sensor_setup"] = ultraSonicSensorBlock;
Blockly.defineBlocksWithJsonArray([
  // BEGIN JSON EXTRACT
  {
    type: "move_motor",
    message0: "%1 Қозғалтқышты жылжыту %2 Қай қозғалтқыш %3 Бағыт %4 %5 Жылдамдық %6",
    args0: [
      {
        type: "field_image",
        src: "./blocks/motor/motor.png",
        width: 15,
        height: 15,
        alt: "*",
        flipRtl: false
      },
      {
        type: "input_dummy"
      },
      {
        type: "field_dropdown",
        name: "MOTOR",
        // check: "Number",
        // align: "RIGHT",
        options: [
          ["1", "1"],
          ["2", "2"]
        ]
      },
      {
        type: "field_dropdown",
        name: "DIRECTION",
        options: [
          ["Сағат тілімен", "CLOCKWISE"],
          ["Сағат тіліне қарсы", "ANTICLOCKWISE"]
        ]
      },
      {
        type: "input_dummy",
        align: "RIGHT"
      },
      {
        type: "input_value",
        name: "SPEED",
        check: "Number",
        align: "RIGHT"
      }
    ],
    inputsInline: false,
    previousStatement: null,
    nextStatement: null,
    colour: COLOR_THEME.COMPONENTS,
    tooltip: "",
    helpUrl: ""
  }
]);
const analogReadBlock = {
  init: function() {
    this.appendDummyInput().appendField(
      new Blockly.FieldImage("./blocks/arduino/analog_read.png", 15, 15)
    ).appendField("Аналогты пинды оқу#").appendField(
      new Blockly.FieldDropdown(() => {
        return configuredPins(
          "digital_read_setup",
          selectBoardBlockly().analogPins
        );
      }),
      "PIN"
    );
    this.setOutput(true, "Number");
    this.setColour(COLOR_THEME.SENSOR);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks["analog_read"] = analogReadBlock;
const analogReadSetupBlock = {
  init: function() {
    this.appendDummyInput().appendField(
      new Blockly.FieldImage("./blocks/arduino/analog_read.png", 15, 15)
    ).appendField("Аналогты пинды оқуды баптау");
    this.appendDummyInput().appendField("Пин #").appendField(
      new Blockly.FieldDropdown(() => {
        return getAvailablePins(
          "analog_read_setup",
          this.getFieldValue("PIN"),
          selectBoardBlockly().analogPins
        );
      }),
      "PIN"
    );
    this.appendDummyInput("SHOW_CODE_VIEW").appendField("Түрі").appendField(
      new Blockly.FieldDropdown([
        ["Потенциометр", "POTENTIOMETER"],
        ["Фото сенсор (фоторезистор)", "PHOTO_SENSOR"],
        ["Топырақ сенсоры", "SOIL_SENSOR"],
        ["Сенсор", "SENSOR"]
      ]),
      "TYPE"
    );
    this.appendDummyInput("SHOW_CODE_VIEW").appendField(
      "------------------------------------"
    );
    this.appendDummyInput("LOOP_TIMES").appendField("Қайталау саны").appendField(
      new Blockly.FieldDropdown(() => {
        return loopTimes();
      }),
      "LOOP"
    );
    this.appendDummyInput("LEVEL").appendField("Сенсордың көрсеткіші: ").appendField(new Blockly.FieldNumber(512, 0, 1024, 1e-6), "state");
    this.appendDummyInput("COPY_ALL").appendField("Барлығын көшіру: ").appendField(new Blockly.FieldCheckbox(false), "COPY_SAME");
    this.setColour(COLOR_THEME.SENSOR);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks["analog_read_setup"] = analogReadSetupBlock;
Blockly.defineBlocksWithJsonArray([
  {
    type: "rfid_scan",
    message0: "%1 rfid оқу құралы жаңа картаны тапты ма?",
    args0: [
      {
        type: "field_image",
        src: "./blocks/rfid/rfid.png",
        width: 15,
        height: 15,
        alt: "*",
        flipRtl: false
      }
    ],
    inputsInline: false,
    output: "Boolean",
    colour: COLOR_THEME.SENSOR,
    tooltip: "",
    helpUrl: ""
  },
  {
    type: "rfid_card",
    lastDummyAlign0: "RIGHT",
    metadata: "blue",
    message0: "%1 Карта нөмірін алу",
    args0: [
      {
        type: "field_image",
        src: "./blocks/rfid/rfid.png",
        width: 15,
        height: 15,
        alt: "*",
        flipRtl: false
      }
    ],
    inputsInline: false,
    output: "String",
    colour: COLOR_THEME.SENSOR,
    tooltip: "",
    helpUrl: ""
  },
  {
    type: "rfid_tag",
    lastDummyAlign0: "RIGHT",
    metadata: "blue",
    message0: "%1 Тегті алу",
    args0: [
      {
        type: "field_image",
        src: "./blocks/rfid/rfid.png",
        width: 15,
        height: 15,
        alt: "*",
        flipRtl: false
      }
    ],
    inputsInline: false,
    output: "String",
    colour: COLOR_THEME.SENSOR,
    tooltip: "",
    helpUrl: ""
  }
]);
const rfidSetupBlock = {
  init: function() {
    this.appendDummyInput().appendField(new Blockly.FieldImage("./blocks/rfid/rfid.png", 15, 15)).appendField("RFID орнату");
    this.appendDummyInput().appendField("TX Pin#").appendField(
      new Blockly.FieldDropdown(() => selectBoardBlockly().digitalPins),
      "PIN_TX"
    );
    this.appendDummyInput("SHOW_CODE_VIEW").appendField(
      "-----------------------------------------"
    );
    this.appendDummyInput().appendField("Қайталау саны").appendField(
      new Blockly.FieldDropdown(() => {
        return loopTimes();
      }),
      "LOOP"
    );
    this.appendDummyInput().appendField("Карточка сканерленген бе?").appendField(
      new Blockly.FieldCheckbox("TRUE", (value) => {
        if ("FALSE" === value) {
          this.getField("card_number").setValue("");
          this.getField("tag").setValue("");
        }
        return value;
      }),
      "scanned_card"
    );
    this.appendDummyInput().appendField("Карта #:").appendField(
      new Blockly.FieldTextInput("card#", (value) => {
        if (this.getFieldValue("scanned_card") === "FALSE") {
          return null;
        }
        return value;
      }),
      "card_number"
    );
    this.appendDummyInput().appendField("Тэг#:").appendField(
      new Blockly.FieldTextInput("tag", (value) => {
        if (this.getFieldValue("scanned_card") === "FALSE") {
          return null;
        }
        return value;
      }),
      "tag"
    );
    this.appendDummyInput("COPY_ALL").appendField("Барлығын көшіру: ").appendField(new Blockly.FieldCheckbox(false), "COPY_SAME");
    this.setColour(COLOR_THEME.SENSOR);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks["rfid_setup"] = rfidSetupBlock;
Blockly.Blocks["rotate_servo"] = {
  init: function() {
    this.appendDummyInput().appendField(new Blockly.FieldImage("./blocks/servo/servo.png", 15, 15)).appendField("Сервоны айналдыру");
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField("Пин# ").appendField(
      new Blockly.FieldDropdown(() => {
        return selectBoardBlockly().digitalPins;
      }),
      "PIN"
    );
    this.appendValueInput("DEGREE").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("Градус:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(COLOR_THEME.COMPONENTS);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.defineBlocksWithJsonArray([
  {
    type: "temp_get_temp",
    message0: "%1 Температура °C",
    args0: [
      {
        type: "field_image",
        src: "./blocks/temp/temp.png",
        width: 15,
        height: 15,
        alt: "*",
        flipRtl: false
      }
    ],
    output: "Number",
    colour: COLOR_THEME.SENSOR,
    tooltip: "",
    helpUrl: ""
  },
  {
    type: "temp_get_humidity",
    message0: "%1 Ылғалдылық %",
    args0: [
      {
        type: "field_image",
        src: "./blocks/temp/temp.png",
        width: 15,
        height: 15,
        alt: "*",
        flipRtl: false
      }
    ],
    output: "Number",
    colour: COLOR_THEME.SENSOR,
    tooltip: "",
    helpUrl: ""
  }
]);
const tempSetupBlock = {
  init: function() {
    this.appendDummyInput().appendField(new Blockly.FieldImage("./blocks/temp/temp.png", 15, 15)).appendField("Температура сенсорын орнату");
    this.appendDummyInput().appendField("Pin# ").appendField(
      new Blockly.FieldDropdown(() => selectBoardBlockly().digitalPins),
      "PIN"
    );
    this.appendDummyInput().appendField("Түрі: ").appendField(
      new Blockly.FieldDropdown([
        ["DHT11", "DHT11"],
        ["DHT21", "DHT21"],
        ["DHT22", "DHT22"]
      ]),
      "TYPE"
    );
    this.appendDummyInput("SHOW_CODE_VIEW").appendField(
      "------------------------------------------"
    );
    this.appendDummyInput().appendField("Қайталау саны").appendField(
      new Blockly.FieldDropdown(() => {
        return loopTimes();
      }),
      "LOOP"
    );
    this.appendDummyInput().appendField("Tтемпература Цельсий ").appendField(new Blockly.FieldNumber(30, -200, 300, 1e-5), "temp");
    this.appendDummyInput().appendField("Ылғалдылық ").appendField(new Blockly.FieldNumber(5, 0, 300), "humidity");
    this.appendDummyInput("COPY_ALL").appendField("Copy All: ").appendField(new Blockly.FieldCheckbox(false), "COPY_SAME");
    this.setColour(COLOR_THEME.SENSOR);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks["temp_setup"] = tempSetupBlock;
Blockly.defineBlocksWithJsonArray([
  // BEGIN JSON EXTRACT
  {
    type: "number_to_string",
    message0: "Ондық орындар %1 %2 Саннан мәтінге %3",
    args0: [
      {
        type: "field_number",
        name: "PRECISION",
        value: 2,
        min: 0,
        max: 5,
        precision: 1
      },
      {
        type: "input_dummy"
      },
      {
        type: "input_value",
        name: "NUMBER",
        check: "Number",
        align: "RIGHT"
      }
    ],
    output: "String",
    colour: COLOR_THEME.VALUES,
    tooltip: "",
    helpUrl: ""
  },
  {
    type: "parse_string_block",
    message0: "Мәтін блогының бір бөлігін алу %1 мән %2 таңбаны ажырату %3 %4 орын %5",
    args0: [
      {
        type: "input_dummy",
        align: "RIGHT"
      },
      {
        type: "input_value",
        name: "VALUE",
        check: "String",
        align: "RIGHT"
      },
      {
        type: "field_dropdown",
        name: "DELIMITER",
        options: [
          [",", ","],
          ["-", "-"],
          ["*", "*"],
          [":", ":"],
          ["#", "#"],
          ["$", "$"],
          ["^", "^"],
          ["|", "|"],
          ["@", "@"]
        ]
      },
      {
        type: "input_dummy",
        align: "RIGHT"
      },
      {
        type: "input_value",
        name: "POSITION",
        check: "Number",
        align: "RIGHT"
      }
    ],
    inputsInline: false,
    output: "String",
    colour: COLOR_THEME.VALUES,
    tooltip: "",
    helpUrl: ""
  }
]);
Blockly.Blocks["text_changeCase"] = {
  /**
   * Block for changing capitalization.
   * @this {Blockly.Block}
   */
  init: function() {
    var OPERATORS = [
      [Blockly.Msg["TEXT_CHANGECASE_OPERATOR_UPPERCASE"], "UPPERCASE"],
      [Blockly.Msg["TEXT_CHANGECASE_OPERATOR_LOWERCASE"], "LOWERCASE"]
    ];
    this.setHelpUrl(Blockly.Msg["TEXT_CHANGECASE_HELPURL"]);
    this.setStyle("text_blocks");
    this.appendValueInput("TEXT").setCheck("String").appendField(new Blockly.FieldDropdown(OPERATORS), "CASE");
    this.setOutput(true, "String");
    this.setTooltip(Blockly.Msg["TEXT_CHANGECASE_TOOLTIP"]);
  }
};
Blockly.defineBlocksWithJsonArray([
  {
    type: "time_seconds",
    message0: "%1 секунд arduino қосылды",
    args0: [
      {
        type: "field_image",
        src: "./blocks/time/time.png",
        width: 15,
        height: 15,
        alt: "*",
        flipRtl: false
      }
    ],
    output: "Number",
    colour: COLOR_THEME.ARDUINO,
    tooltip: "",
    helpUrl: ""
  },
  {
    type: "delay_block",
    message0: "%1 күту уақыты  %2 секунд",
    args0: [
      {
        type: "field_image",
        src: "./blocks/time/time.png",
        width: 15,
        height: 15,
        alt: "*",
        flipRtl: false
      },
      {
        type: "input_value",
        name: "DELAY",
        check: "Number"
      }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: COLOR_THEME.ARDUINO,
    tooltip: "",
    helpUrl: ""
  }
]);
const timeSetupBlock = {
  init: function() {
    this.appendDummyInput().appendField(new Blockly.FieldImage("./blocks/time/time.png", 15, 15)).appendField("Таймер баптауы");
    this.appendDummyInput().appendField("Бір циклде қанша секунд").appendField(
      new Blockly.FieldNumber(0.1, 0, 1e5, 1e-5),
      "time_in_seconds"
    );
    this.setColour(COLOR_THEME.ARDUINO);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks["time_setup"] = timeSetupBlock;
[
  { type: "сандық", blockName: "number", variable_type: "Number" },
  { type: "мәтіндік", blockName: "string", variable_type: "String" },
  { type: "логикалық", blockName: "boolean", variable_type: "Boolean" },
  { type: "түстік", blockName: "colour", variable_type: "Colour" }
].forEach(({ type, blockName, variable_type }) => {
  const humanType = type === "string" ? "text" : type;
  Blockly.Blocks[`variables_get_${blockName}`] = {
    init: function() {
      const fieldVar = new Blockly.FieldVariable(
        null,
        null,
        [variable_type],
        variable_type
      );
      fieldVar.createNewVariable = false;
      fieldVar.showOnlyVariableAssigned = false;
      this.appendDummyInput().appendField(fieldVar, "VAR");
      this.setOutput(true, variable_type);
      this.setColour(COLOR_THEME.DATA);
      this.setTooltip("");
      this.setHelpUrl("");
      this.setCommentText(
        `Бұл блок айнымалы сақталатын мәнді алады. Бұл айнымалы ${humanType} сақтайды.`
      );
      this.getIcon("comment")?.setBubbleSize(new Blockly.utils.Size(460, 80));
    }
  };
  Blockly.Blocks[`variables_set_${blockName}`] = {
    init: function() {
      const fieldVar = new Blockly.FieldVariable(
        null,
        null,
        [variable_type],
        variable_type
      );
      fieldVar.createNewVariable = false;
      fieldVar.showOnlyVariableAssigned = false;
      this.appendValueInput("VALUE").setCheck(variable_type).appendField(`${humanType}`).appendField(fieldVar, "VAR").appendField(" = ");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(COLOR_THEME.DATA);
      this.setTooltip("");
      this.setHelpUrl("");
      this.setCommentText(
        `Бұл блок айнымалы сақталатын мәнді орнатады. Бұл айнымалы мән тек ${humanType} сақтайды.`
      );
      this.getIcon("comment")?.setBubbleSize(new Blockly.utils.Size(460, 90));
    }
  };
});
Blockly.Blocks["thermistor_setup"] = {
  init: function() {
    this.appendDummyInput().appendField(
      new Blockly.FieldImage("./blocks/thermistor/thermistor.svg", 15, 15)
    ).appendField("Термисторды орнату");
    this.appendDummyInput().appendField("Аналогтық пин #").appendField(
      new Blockly.FieldDropdown(() => selectBoardBlockly().analogPins),
      "PIN"
    );
    this.appendDummyInput().appendField("Әдепкі температура °C: ").appendField(new Blockly.FieldNumber(25, -50, 50), "DEFAULT_TEMP");
    this.appendDummyInput().appendField("Термистор Ом: ").appendField(
      new Blockly.FieldNumber(1e4, 1e3, 1e6, 1e3),
      "THERMISTOR_RESISTANCE"
    );
    this.appendDummyInput().appendField("Резистор Ом: ").appendField(
      new Blockly.FieldNumber(1e4, 1e3, 1e6, 1e3),
      "NONIMAL_RESISTANCE"
    );
    this.appendDummyInput().appendField("B Мәні").appendField(new Blockly.FieldNumber(3950, 1e3, 1e4, 1), "B_VALUE");
    this.appendDummyInput().appendField("------------------------------");
    this.appendDummyInput().appendField("Қайталау саны").appendField(new Blockly.FieldDropdown(() => loopTimes()), "LOOP");
    this.appendDummyInput().appendField("Температура °C").appendField(new Blockly.FieldNumber(23, -500, 500), "TEMP");
    this.appendDummyInput("COPY_ALL").appendField("Барлығын көшіру: ").appendField(new Blockly.FieldCheckbox(false), "COPY_SAME");
    this.setColour(COLOR_THEME.SENSOR);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks["thermistor_read"] = {
  init: function() {
    this.appendDummyInput().appendField(
      new Blockly.FieldImage("./blocks/thermistor/thermistor.svg", 15, 15)
    ).appendField("Температураны оқу");
    this.setOutput(true, "Number");
    this.setColour(COLOR_THEME.SENSOR);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks["passive_buzzer_note"] = {
  init: function() {
    this.appendDummyInput().appendField(
      new Blockly.FieldImage(
        "/blocks/passivebuzzer/passivebuzzer.png",
        15,
        15
      )
    ).appendField("Пассивті дыбыстық ескерту").appendField(
      new Blockly.FieldDropdown([
        ["No Tone", "0"],
        ["C", "131"],
        ["C#", "139"],
        ["D", "147"],
        ["D#", "156"],
        ["E", "165"],
        ["F", "175"],
        ["F#", "185"],
        ["G", "196"],
        ["G#", "208"],
        ["A", "220"],
        ["A#", "233"],
        ["B", "247"]
      ]),
      "TONE"
    ).appendField("Pin").appendField(
      new Blockly.FieldDropdown(() => selectBoardBlockly().digitalPins),
      "PIN"
    );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(COLOR_THEME.COMPONENTS);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks["passive_buzzer_tone"] = {
  init: function() {
    this.appendDummyInput().appendField(
      new Blockly.FieldImage(
        "/blocks/passivebuzzer/passivebuzzer.png",
        15,
        15
      )
    ).appendField("Пассивті дыбыстық сигнал");
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField("Пин").appendField(
      new Blockly.FieldDropdown(() => selectBoardBlockly().digitalPins),
      "PIN"
    );
    this.appendValueInput("TONE").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(" Тон");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(COLOR_THEME.COMPONENTS);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks["stepper_motor_setup"] = {
  init: function() {
    this.appendDummyInput().appendField(
      new Blockly.FieldImage("./blocks/steppermotor/steppermotor.png", 15, 15)
    ).appendField("Қадамдық қозғалтқышты орнату");
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField("PIN 1").appendField(
      new Blockly.FieldDropdown(() => selectBoardBlockly().digitalPins),
      "PIN_1"
    ).appendField("PIN 2").appendField(
      new Blockly.FieldDropdown(() => selectBoardBlockly().digitalPins),
      "PIN_2"
    ).appendField("PIN 3").appendField(
      new Blockly.FieldDropdown(() => selectBoardBlockly().digitalPins),
      "PIN_3"
    ).appendField("PIN 4").appendField(
      new Blockly.FieldDropdown(() => selectBoardBlockly().digitalPins),
      "PIN_4"
    );
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField("Жылдамдық").appendField(new Blockly.FieldNumber(30, 0, 1e3), "SPEED");
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField("Қадамдар саны").appendField(new Blockly.FieldNumber(200, 0, 500), "TOTAL_STEPS");
    this.setColour(COLOR_THEME.COMPONENTS);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks["stepper_motor_move"] = {
  init: function() {
    this.appendValueInput("STEPS").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(
      new Blockly.FieldImage("./blocks/steppermotor/steppermotor.png", 15, 15)
    ).appendField("Қадамдық қозғалтқыш қадмдар саны:");
    this.appendDummyInput().appendField("қадам.");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(COLOR_THEME.COMPONENTS);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks["digital_display_setup"] = {
  init: function() {
    this.appendDummyInput().appendField(
      new Blockly.FieldImage(
        "/blocks/digit4display/digit4display.png",
        20,
        20
      )
    ).appendField("Сандық Дисплей");
    this.appendDummyInput().appendField("DIO Pin# ").appendField(
      new Blockly.FieldDropdown(() => selectBoardBlockly().digitalPins),
      "DIO_PIN"
    ).appendField("CLK Pin# ").appendField(
      new Blockly.FieldDropdown(() => selectBoardBlockly().digitalPins),
      "CLK_PIN"
    );
    this.setColour(COLOR_THEME.COMPONENTS);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks["digital_display_set"] = {
  init: function() {
    this.appendDummyInput().appendField(
      new Blockly.FieldImage(
        "/blocks/digit4display/digit4display.png",
        20,
        20
      )
    ).appendField("Сандық Дисплейді Орнатыңыз");
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField("Colon: ").appendField(new Blockly.FieldCheckbox("TRUE"), "COLON");
    this.appendValueInput("TEXT").setCheck(null).setAlign(Blockly.ALIGN_RIGHT).appendField("Мәтін");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(COLOR_THEME.COMPONENTS);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks["joystick_setup"] = {
  init: function() {
    this.appendDummyInput().appendField(
      new Blockly.FieldImage("./blocks/joystick/joystick.png", 15, 15)
    ).appendField("Джойстик орнату");
    this.appendDummyInput().appendField("X Pin: ").appendField(
      new Blockly.FieldDropdown(() => selectBoardBlockly().analogPins),
      "PIN_X"
    );
    this.appendDummyInput().appendField("Y Pin: ").appendField(
      new Blockly.FieldDropdown(() => selectBoardBlockly().analogPins),
      "PIN_Y"
    );
    this.appendDummyInput().appendField("Батырма Pin-і: ").appendField(
      new Blockly.FieldDropdown(selectBoardBlockly().digitalPins),
      "PIN_BUTTON"
    );
    this.appendDummyInput().appendField("------------------------------");
    this.appendDummyInput().appendField("Қайталау саны").appendField(new Blockly.FieldDropdown(() => loopTimes()), "LOOP");
    this.appendDummyInput().appendField("Бос емес").appendField(new Blockly.FieldCheckbox("TRUE"), "ENGAGED");
    this.appendDummyInput().appendField("Дәрежесі").appendField(new Blockly.FieldAngle(0), "DEGREE");
    this.appendDummyInput().appendField("Батырма Басылды").appendField(new Blockly.FieldCheckbox("TRUE"), "BUTTON_PRESSED");
    this.appendDummyInput("COPY_ALL").appendField("Барлығын көшіру: ").appendField(new Blockly.FieldCheckbox(false), "COPY_SAME");
    this.setColour(COLOR_THEME.SENSOR);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks["joystick_angle"] = {
  init: function() {
    this.appendDummyInput().appendField(
      new Blockly.FieldImage("./blocks/joystick/joystick.png", 15, 15)
    ).appendField("Джойстик Бұрышы");
    this.setOutput(true, "Number");
    this.setColour(COLOR_THEME.SENSOR);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks["joystick_engaged"] = {
  init: function() {
    this.appendDummyInput().appendField(
      new Blockly.FieldImage("./blocks/joystick/joystick.png", 15, 15)
    ).appendField("джойстик қосылды ма?");
    this.setOutput(true, "Boolean");
    this.setColour(COLOR_THEME.SENSOR);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks["joystick_button"] = {
  init: function() {
    this.appendDummyInput().appendField(
      new Blockly.FieldImage("./blocks/joystick/joystick.png", 15, 15)
    ).appendField(" джойстик батырмасы басылды ма?");
    this.setOutput(true, "Boolean");
    this.setColour(COLOR_THEME.SENSOR);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.FieldVariable.prototype.initModel = function() {
  if (this.variable) {
    return;
  }
  this.workspace_ = this.sourceBlock_.workspace;
  const variables = Blockly.getMainWorkspace().getVariablesOfType(
    this.defaultType
  );
  let variableId = null;
  if (variables.length > 0 && this.createNewVariable !== true) {
    variableId = variables[variables.length - 1].getId();
  }
  const variable = Blockly.Variables.getOrCreateVariablePackage(
    this.workspace_,
    variableId,
    this.defaultVariableName,
    this.defaultType
  );
  Blockly.Events.disable();
  try {
    this.setValue(variable.getId());
  } catch (e) {
    console.log(e, "error for");
  } finally {
    Blockly.Events.enable();
  }
};
Blockly.FieldVariable.dropdownCreate = function() {
  if (!this.getVariable()) {
    console.log(this.getSourceBlock(), "failed variable");
    return;
  }
  const name = this.getText();
  let workspace = null;
  if (this.getSourceBlock()) {
    workspace = this.getSourceBlock().workspace;
  }
  let variableModelList = [];
  if (workspace && this.showOnlyVariableAssigned === false) {
    const variableTypes = workspace.getVariableTypes().filter((x) => x !== "");
    for (let i = 0; i < variableTypes.length; i++) {
      const variableType = variableTypes[i];
      const variables = workspace.getVariablesOfType(variableType);
      variableModelList = variableModelList.concat(variables);
    }
    variableModelList.sort(Blockly.VariableModel.compareByName);
  }
  if (workspace && this.showOnlyVariableAssigned !== false) {
    variableModelList.push(this.getVariable());
  }
  const options = [];
  for (let i = 0; i < variableModelList.length; i++) {
    options[i] = [variableModelList[i].name, variableModelList[i].getId()];
  }
  options.push([Blockly.Msg["RENAME_VARIABLE"], Blockly.RENAME_VARIABLE_ID]);
  if (Blockly.Msg["DELETE_VARIABLE"]) {
    options.push([
      Blockly.Msg["DELETE_VARIABLE"].replace("%1", name),
      Blockly.DELETE_VARIABLE_ID
    ]);
  }
  return options;
};
Blockly.FieldVariable.fromJson = function(options) {
  const varname = Blockly.utils.parsing.replaceMessageReferences(
    options["variable"]
  );
  const variableTypes = options["variableTypes"];
  const defaultType = options["defaultType"];
  const showOnlyVariableAssigned = options["showOnlyVariableAssigned"] || false;
  const createNewVariable = options["createNewVariable"] || false;
  const fieldVariable = new Blockly.FieldVariable(
    varname,
    null,
    variableTypes,
    defaultType
  );
  fieldVariable.showOnlyVariableAssigned = showOnlyVariableAssigned;
  fieldVariable.createNewVariable = createNewVariable;
  return fieldVariable;
};
Blockly.Procedures.flyoutCategory = (workspace) => {
  const xmlList = [];
  if (Blockly.Blocks["procedures_defnoreturn"]) {
    const block = Blockly.utils.xml.createElement("block");
    block.setAttribute("type", "procedures_defnoreturn");
    block.setAttribute("gap", "16");
    const nameField = Blockly.utils.xml.createElement("field");
    nameField.setAttribute("name", "NAME");
    nameField.appendChild(
      Blockly.utils.xml.createTextNode(
        Blockly.Msg["PROCEDURES_DEFNORETURN_PROCEDURE"]
      )
    );
    block.appendChild(nameField);
    xmlList.push(block);
  }
  if (xmlList.length) {
    xmlList[xmlList.length - 1].setAttribute("gap", 24);
  }
  function populateProcedures(procedureList, templateName) {
    for (let i = 0; i < procedureList.length; i++) {
      const name = procedureList[i][0];
      const block = Blockly.utils.xml.createElement("block");
      block.setAttribute("type", templateName);
      block.setAttribute("gap", "16");
      const mutation = Blockly.utils.xml.createElement("mutation");
      mutation.setAttribute("name", name);
      block.appendChild(mutation);
      xmlList.push(block);
    }
  }
  const tuple = Blockly.Procedures.allProcedures(workspace);
  populateProcedures(tuple[0], "procedures_callnoreturn");
  return xmlList;
};
Blockly.BlockSvg.prototype.showHelp = function() {
  var url = typeof this.helpUrl == "function" ? this.helpUrl() : this.helpUrl;
  if (url) {
    goto();
  }
};
Blockly["Arduino"] = new Blockly.Generator("Arduino");
Blockly["Arduino"].addReservedWords(
  // http://arduino.cc/en/Reference/HomePage
  "setup,loop,if,else,for,switch,case,while,do,break,continue,return,goto,define,include,HIGH,LOW,INPUT,OUTPUT,INPUT_PULLUP,true,false,interger, constants,floating,point,void,bookean,char,unsigned,byte,int,word,long,float,double,string,String,array,static, volatile,const,sizeof,pinMode,digitalWrite,digitalRead,analogReference,analogRead,analogWrite,tone,noTone,shiftOut,shitIn,pulseIn,millis,micros,delay,delayMicroseconds,min,max,abs,constrain,map,pow,sqrt,sin,cos,tan,randomSeed,random,lowByte,highByte,bitRead,bitWrite,bitSet,bitClear,ultraSonicDistance,parseDouble,setNeoPixelColor,bit,attachInterrupt,detachInterrupt,interrupts,noInterrupts",
  "short",
  "isBtnPressed"
);
Blockly["Arduino"].ORDER_ATOMIC = 0;
Blockly["Arduino"].ORDER_UNARY_POSTFIX = 1;
Blockly["Arduino"].ORDER_UNARY_PREFIX = 2;
Blockly["Arduino"].ORDER_MULTIPLICATIVE = 3;
Blockly["Arduino"].ORDER_ADDITIVE = 4;
Blockly["Arduino"].ORDER_LOGICAL_NOT = 4.4;
Blockly["Arduino"].ORDER_SHIFT = 5;
Blockly["Arduino"].ORDER_MODULUS = 5.3;
Blockly["Arduino"].ORDER_RELATIONAL = 6;
Blockly["Arduino"].ORDER_EQUALITY = 7;
Blockly["Arduino"].ORDER_BITWISE_AND = 8;
Blockly["Arduino"].ORDER_BITWISE_XOR = 9;
Blockly["Arduino"].ORDER_BITWISE_OR = 10;
Blockly["Arduino"].ORDER_LOGICAL_AND = 11;
Blockly["Arduino"].ORDER_LOGICAL_OR = 12;
Blockly["Arduino"].ORDER_CONDITIONAL = 13;
Blockly["Arduino"].ORDER_ASSIGNMENT = 14;
Blockly["Arduino"].ORDER_COMMA = 18;
Blockly["Arduino"].ORDER_NONE = 99;
Blockly["Arduino"].init = function(workspace) {
  if (!this.nameDB_) {
    this.nameDB_ = new Blockly.Names(this.RESERVED_WORDS_);
  } else {
    this.nameDB_.reset();
  }
  this.nameDB_.setVariableMap(workspace.getVariableMap());
  this.nameDB_.populateVariables(workspace);
  this.nameDB_.populateProcedures(workspace);
  Blockly["Arduino"].libraries_ = /* @__PURE__ */ Object.create(null);
  Blockly["Arduino"].setupCode_ = /* @__PURE__ */ Object.create(null);
  Blockly["Arduino"].information_ = /* @__PURE__ */ Object.create(null);
  Blockly["Arduino"].functionNames_ = /* @__PURE__ */ Object.create(null);
  Blockly["Arduino"].variablesInitCode_ = "";
  if (!Blockly["Arduino"].variableDB_) {
    Blockly["Arduino"].variableDB_ = new Blockly.Names(
      Blockly["Arduino"].RESERVED_WORDS_
    );
  } else {
    Blockly["Arduino"].variableDB_.reset();
  }
  Blockly["Arduino"].variableDB_.setVariableMap(workspace.getVariableMap());
  const doubleVariables = workspace.getVariablesOfType("Number");
  let i = 0;
  let variableCode = "";
  for (i = 0; i < doubleVariables.length; i += 1) {
    variableCode += "double " + Blockly["Arduino"].getVariableName(doubleVariables[i].getId()) + " = 0; \n\n";
  }
  const stringVariables = workspace.getVariablesOfType("String");
  for (i = 0; i < stringVariables.length; i += 1) {
    variableCode += "String " + Blockly["Arduino"].getVariableName(stringVariables[i].getId()) + ' = ""; \n\n';
  }
  const booleanVariables = workspace.getVariablesOfType("Boolean");
  for (i = 0; i < booleanVariables.length; i += 1) {
    variableCode += "boolean " + Blockly["Arduino"].getVariableName(booleanVariables[i].getId()) + " = false; \n\n";
  }
  const colourVariables = workspace.getVariablesOfType("Colour");
  for (i = 0; i < colourVariables.length; i += 1) {
    variableCode += "struct RGB " + Blockly["Arduino"].getVariableName(colourVariables[i].getId()) + " = {0, 0, 0}; \n\n";
  }
  Blockly["Arduino"].variablesInitCode_ = variableCode;
};
Blockly["Arduino"].finish = function(code) {
  let libraryCode = "";
  let functionsCode = "";
  let devVariables = "";
  for (const key in Blockly["Arduino"].libraries_) {
    libraryCode += Blockly["Arduino"].libraries_[key] + "\n";
  }
  for (const key in Blockly["Arduino"].functionNames_) {
    functionsCode += Blockly["Arduino"].functionNames_[key] + "\n";
  }
  if (!_.isEmpty(Blockly["Arduino"].setupCode_["bluetooth_setup"])) {
    devVariables += 'String bluetoothMessageDEV = ""; \n';
  }
  if (!_.isEmpty(Blockly["Arduino"].setupCode_["serial_begin"])) {
    devVariables += 'String serialMessageDEV = ""; \n';
  }
  if (!_.isEmpty(Blockly["Arduino"].functionNames_["double_to_string_debug"])) {
    devVariables += "boolean stopDebugging = false; \n";
  }
  let setupCode = "";
  let setupCodeFunctionText = "";
  for (const key in Blockly["Arduino"].setupCode_) {
    setupCodeFunctionText += Blockly["Arduino"].setupCode_[key] || "";
  }
  if (getBlockByType("arduino_setup") === void 0 && !_.isEmpty(Blockly["Arduino"].setupCode_)) {
    setupCode = "\nvoid setup() { \n" + setupCodeFunctionText + "\n}\n";
  } else if (getBlockByType("arduino_setup") === void 0 && _.isEmpty(Blockly["Arduino"].setupCode_)) {
    setupCode = "\nvoid setup() { \n\n}\n";
  }
  code = devVariables + libraryCode + "\n" + Blockly["Arduino"].variablesInitCode_ + "\n" + functionsCode + "\n" + setupCode + "\n" + code;
  code = code.replace("__REPLACE_WITH_SETUP_CODE", setupCodeFunctionText);
  delete Blockly["Arduino"].definitions_;
  delete Blockly["Arduino"].functionNames_;
  delete Blockly["Arduino"].variablesInitCode_;
  delete Blockly["Arduino"].libraries_;
  Blockly["Arduino"].variableDB_.reset();
  return code;
};
Blockly["Arduino"].scrubNakedValue = function(line) {
  return line + ";\n";
};
Blockly["Arduino"].quote_ = function(string) {
  string = string.replace(/\\/g, "\\\\").replace(/\n/g, "\\\n").replace(/'/g, "\\'");
  return '"' + string + '"';
};
Blockly["Arduino"].scrub_ = function(block, code) {
  let commentCode = "";
  if ((!block.outputConnection || !block.outputConnection.targetConnection) && block.nextConnection !== null) {
    let comment = block.getCommentText();
    comment = comment ? Blockly.utils.string.wrap(
      comment,
      Blockly["Arduino"].COMMENT_WRAP - 3
    ) : null;
    if (comment) {
      if (block.getProcedureDef) {
        commentCode += "/**\n" + Blockly["Arduino"].prefixLines(comment + "\n", " * ") + " */\n";
      } else {
        commentCode += Blockly["Arduino"].prefixLines(comment + "\n", "// ");
      }
    }
    for (let i = 0; i < block.inputList.length; i++) {
      if (block.inputList[i].type === Blockly.INPUT_VALUE) {
        const childBlock = block.inputList[i].connection.targetBlock();
        if (childBlock) {
          const comment2 = Blockly["Arduino"].allNestedComments(childBlock);
          if (comment2) {
            commentCode += Blockly["Arduino"].prefixLines(comment2, "// ");
          }
        }
      }
    }
  }
  const nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  const nextCode = Blockly["Arduino"].blockToCode(nextBlock);
  return commentCode + code + nextCode;
};
Blockly["Arduino"]["arduino_setup"] = function(block) {
  const statementsSetup = Blockly["Arduino"].statementToCode(block, "setup");
  return "\nvoid setup() { \n__REPLACE_WITH_SETUP_CODE" + statementsSetup + "}\n";
};
Blockly["Arduino"]["arduino_loop"] = function(block) {
  const statementsLoop = Blockly["Arduino"].statementToCode(block, "loop");
  let resetBluetoothVariable = "";
  let resetMessageVariable = "";
  let resetIrRemoteCode = "";
  let getNewTempReading = "";
  let setJoyStickValues = "";
  let setSerialMessageDEV = "";
  if (!_.isEmpty(Blockly["Arduino"].setupCode_["bluetooth_setup"])) {
    resetBluetoothVariable = '	bluetoothMessageDEV = ""; \n';
  }
  if (!_.isEmpty(Blockly["Arduino"].setupCode_["joystick"])) {
    setJoyStickValues = "	setJoyStickValues(); \n";
  }
  if (!_.isEmpty(Blockly["Arduino"].setupCode_["serial_begin"]) && Blockly["Arduino"].information_["message_recieve_block"]) {
    resetMessageVariable = ' serialMessageDEV= ""; \n';
    setSerialMessageDEV = "  setSerialMessage();\n";
  }
  if (!_.isEmpty(Blockly["Arduino"].setupCode_["setup_ir_remote"])) {
    resetIrRemoteCode = "	irReceiver.resume(); \n";
  }
  if (!_.isEmpty(Blockly["Arduino"].functionNames_["takeTempReading"])) {
    getNewTempReading = "	takeTempReading(); \n";
  }
  return "\nvoid loop() { \n" + setSerialMessageDEV + statementsLoop + "\n" + resetBluetoothVariable + resetMessageVariable + resetIrRemoteCode + getNewTempReading + setJoyStickValues + "}";
};
Blockly["Arduino"]["bluetooth_setup"] = function(block) {
  const rxPin = block.getFieldValue("PIN_RX");
  const txPin = block.getFieldValue("PIN_TX");
  Blockly["Arduino"].libraries_["define_bluetooth"] = "\n#include <SoftwareSerial.h>;\nSoftwareSerial blueToothSerial(" + txPin + ", " + rxPin + "); \n\n";
  Blockly["Arduino"].functionNames_["getBluetoothMessage"] = `String getBluetoothMessage() {
   if (bluetoothMessageDEV.length() > 0) {
     return bluetoothMessageDEV;
   }

   bluetoothMessageDEV = blueToothSerial.readStringUntil('|');

   return bluetoothMessageDEV;
};`;
  Blockly["Arduino"].setupCode_["bluetooth_setup"] = "	blueToothSerial.begin(" + selectBoardBlockly().serial_baud_rate + "); \n	delay(1000); \n";
  return "";
};
Blockly["Arduino"]["bluetooth_get_message"] = function(block) {
  return ["getBluetoothMessage()", Blockly["Arduino"].ORDER_ATOMIC];
};
Blockly["Arduino"]["bluetooth_has_message"] = function(block) {
  return [
    "getBluetoothMessage().length() > 0",
    Blockly["Arduino"].ORDER_ATOMIC
  ];
};
Blockly["Arduino"]["bluetooth_send_message"] = function(block) {
  const message = Blockly["Arduino"].valueToCode(
    block,
    "MESSAGE",
    Blockly["Arduino"].ORDER_ATOMIC
  );
  return "blueToothSerial.println(" + message + ");\n";
};
Blockly["Arduino"]["button_setup"] = function(block) {
  const pin = block.getFieldValue("PIN");
  Blockly["Arduino"].setupCode_["btn_pin_" + pin] = "	pinMode(" + pin + ", INPUT_PULLUP); \n";
  return "";
};
Blockly["Arduino"]["is_button_pressed"] = function(block) {
  const pin = block.getFieldValue("PIN");
  return ["(digitalRead(" + pin + ") == LOW)", Blockly["Arduino"].ORDER_ATOMIC];
};
function hexToRgb$1(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}
function createColorStruct() {
  Blockly["Arduino"].libraries_["color_struct"] = `struct RGB {
    int red;
    int green;
    int blue;
};`;
}
Blockly["Arduino"]["color_picker_custom"] = function(block) {
  const rgb = hexToRgb$1(block.getFieldValue("COLOR"));
  createColorStruct();
  return [
    "{ " + rgb.r + ", " + rgb.g + ", " + rgb.b + "}",
    Blockly["Arduino"].ORDER_ATOMIC
  ];
};
Blockly["Arduino"]["colour_random"] = function(block) {
  createColorStruct();
  return [
    "{ random(0, 255), random(0, 255), random(0, 255)}",
    Blockly["Arduino"].ORDER_ATOMIC
  ];
};
Blockly["Arduino"]["colour_rgb"] = function(block) {
  createColorStruct();
  const red = Blockly["Arduino"].valueToCode(
    block,
    "RED",
    Blockly["Arduino"].ORDER_ATOMIC
  );
  const green = Blockly["Arduino"].valueToCode(
    block,
    "GREEN",
    Blockly["Arduino"].ORDER_ATOMIC
  );
  const blue = Blockly["Arduino"].valueToCode(
    block,
    "BLUE",
    Blockly["Arduino"].ORDER_ATOMIC
  );
  return [
    "{ " + red + ", " + green + ", " + blue + "}",
    Blockly["Arduino"].ORDER_ATOMIC
  ];
};
const VARIABLE_TYPES = ["Number", "String", "Boolean", "Colour"];
function stepSerialBegin() {
  Blockly["Arduino"].setupCode_["serial_begin"] = "	Serial.begin(" + selectBoardBlockly().serial_baud_rate + "); \n	Serial.setTimeout(10);\n";
}
Blockly["Arduino"]["message_setup"] = function() {
  stepSerialBegin();
  return "";
};
Blockly["Arduino"]["arduino_get_message"] = function(block) {
  Blockly["Arduino"].information_["message_recieve_block"] = true;
  Blockly["Arduino"].functionNames_["setSerialMessage"] = `void setSerialMessage() {
  if (Serial.available() > 0) {
      serialMessageDEV = Serial.readString();
      serialMessageDEV.trim();      
  }
};
  `;
  return ["serialMessageDEV", Blockly["Arduino"].ORDER_ATOMIC];
};
Blockly["Arduino"]["arduino_receive_message"] = function(block) {
  Blockly["Arduino"].information_["message_recieve_block"] = true;
  Blockly["Arduino"].functionNames_["setSerialMessage"] = `void setSerialMessage() {
  if (Serial.available() > 0) {
      serialMessageDEV = Serial.readString();
      serialMessageDEV.trim();      
  }
};
  `;
  return ["(serialMessageDEV.length() > 0)", Blockly["Arduino"].ORDER_ATOMIC];
};
Blockly["Arduino"]["arduino_send_message"] = function(block) {
  const message = Blockly["Arduino"].valueToCode(
    block,
    "MESSAGE",
    Blockly["Arduino"].ORDER_ATOMIC
  );
  return "	Serial.println(" + message + ");\n	delay(200); // must have some delay always \n";
};
Blockly["Arduino"]["debug_block"] = function(block) {
  stepSerialBegin();
  Blockly["Arduino"].setupCode_["debug_clean_pipes"] = "	delay(200); // to prevent noise after uploading code \n";
  Blockly["Arduino"].setupCode_["debug_wait_til_ok"] = `while(Serial.readStringUntil('|').indexOf("START_DEBUG") == -1) {
      Serial.println("C_D_B_C_D_B_C_D_B_C_D_B_C_D_B_");
      delay(100);
  }

`;
  Blockly["Arduino"].functionNames_["double_to_string_debug"] = createDoubleToStringCFunc();
  Blockly["Arduino"].functionNames_["color_struct_string"] = colorFunction();
  for (let i = 0; i < VARIABLE_TYPES.length; i += 1) {
    Blockly["Arduino"].functionNames_["print_array_" + VARIABLE_TYPES[i].replace(" ", "")] = createPrintArrayFuncInC(VARIABLE_TYPES[i].replace(" ", "")) + "\n\n";
  }
  let debugFunction = '\n\nvoid debug(String blockNumber) { \n		if(stopDebugging) {\n			return; \n		}\n		String stopDebug = ""; \n';
  debugFunction += createDebugVariable();
  debugFunction += '		Serial.println("DEBUG_BLOCK_" + blockNumber);\n		delay(400);\n\n';
  debugFunction += `		while (stopDebug != "continue_debug" && !stopDebugging) { 
			stopDebug = Serial.readStringUntil('|'); 
			if (stopDebug == "stop_debug") { 
				stopDebugging = true; 
			} 
			delay(1000);  
		}
`;
  debugFunction += "}\n";
  Blockly["Arduino"].functionNames_["debug_function"] = debugFunction;
  return 'debug("' + block.id + '"); \n';
};
function createDebugVariable() {
  let debugString = "";
  const allVariables = Blockly.getMainWorkspace().getAllVariables();
  for (let i = 0; i < allVariables.length; i += 1) {
    const actualVariableName = Blockly["Arduino"].variableDB_.getName(
      allVariables[i].getId()
    );
    if (VARIABLE_TYPES.indexOf(allVariables[i].type) > -1) {
      debugString += '		Serial.println("**(|)' + actualVariableName + "_|_" + allVariables[i].type + '_|_" +';
      if (allVariables[i].type === "Number") {
        debugString += "double2string(" + actualVariableName + ", 5));\n";
        continue;
      }
      if (allVariables[i].type === "Colour") {
        debugString += "colorToString(" + actualVariableName + "));\n";
        continue;
      }
      if (allVariables[i].type === "Boolean") {
        debugString += (actualVariableName ? 'String("true")' : 'String("false")') + ");\n";
        continue;
      }
      debugString += "String(" + actualVariableName + ")); \n";
      continue;
    }
    let functionTypeName = allVariables[i].type.replace("List ", "");
    if (functionTypeName === "Colour") {
      functionTypeName = "RGB";
    } else if (functionTypeName === "Number") {
      functionTypeName = "double";
    } else if (functionTypeName === "Boolean") {
      functionTypeName = "boolean";
    }
    debugString += '		Serial.println("**(|)' + allVariables[i].name + "_|_" + allVariables[i].type + '_|_" +printArray' + functionTypeName + "(" + actualVariableName + "," + getArrayVariableSize(allVariables[i]) + ")); \n		delay(400);\n";
  }
  return debugString;
}
function getArrayVariableSize(variable) {
  const variableId = variable.getId();
  let blockType = "";
  if (variable.type === "List String") {
    blockType = "create_list_string_block";
  } else if (variable.type === "List Number") {
    blockType = "create_list_number_block";
  } else if (variable.type === "List Boolean") {
    blockType = "create_list_boolean_block";
  } else if (variable.type === "List Colour") {
    blockType = "create_list_colour_block";
  }
  const block = Blockly.getMainWorkspace().getBlocksByType(blockType, true).find((block2) => block2.getFieldValue("VAR") === variableId);
  if (!block) {
    return 1;
  }
  return block.getFieldValue("SIZE");
}
function createPrintArrayFuncInC(type) {
  if (type === "Colour" || type === "List Colour") {
    type = "RGB";
  }
  let func = 'String printArrayREPLATEWITHTYPE(REPLATEWITHTYPE arr[], int sizeOfArray) {\n		String returnValue = "[";\n		for (unsigned int i = 0; i < sizeOfArray; i += 1) {\n';
  if (type.toLowerCase() === "number") {
    func += "		returnValue +=  double2string(arr[i], 5);\n";
  } else if (type.toLowerCase() === "boolean") {
    func += '		returnValue += arr[i] ? "true" : "false"; \n';
  } else if (type.toLowerCase() === "rgb") {
    func += "		returnValue += colorToString(arr[i]); \n";
  } else {
    func += "		returnValue +=  String(arr[i]);\n";
  }
  func += '			if (i < sizeOfArray -1) {\n				returnValue += ",";\n			}\n		}\n		returnValue += "]";\n		return returnValue;\n}\n';
  if (type === "Number") {
    type = "double";
  } else if (type === "Boolean") {
    type = "boolean";
  }
  return func.replace(/REPLATEWITHTYPE/g, type);
}
function createDoubleToStringCFunc() {
  return ` String double2string(double n, int ndec) {                         
		 String r = "";                                                 
		 int v = n;                                                     
		 r += v;     // whole number part                               
		 r += '.';   // decimal point                                   
		 int i;                                                         
		 for (i = 0; i < ndec; i++) {                                   
		     // iterate through each decimal digit for 0..ndec          
		     n -= v;                                                    
		     n *= 10;                                                   
		     v = n;                                                     
		     r += v;                                                    
		 }                                                              
		                                                                
		 return r;                                                      
}`;
}
function colorFunction() {
  return 'String colorToString(RGB color) {\n	return "{" + String(color.red) + "-" + String(color.green) + "-" + String(color.blue) + "}";\n}\n';
}
Blockly["Arduino"]["ir_remote_setup"] = function(block) {
  const pin = block.getFieldValue("PIN") || "A1";
  Blockly["Arduino"].libraries_["define_ir_remote"] = "#include <IRremote.h>; \nIRrecv irReceiver(" + pin + ");\ndecode_results result;\n";
  Blockly["Arduino"].setupCode_["setup_ir_remote"] = "	irReceiver.enableIRIn(); \n";
  return "";
};
Blockly["Arduino"]["ir_remote_has_code_receive"] = function() {
  return ["irReceiver.decode(&result)", Blockly["Arduino"].ORDER_ATOMIC];
};
Blockly["Arduino"]["ir_remote_get_code"] = function() {
  return ["String(result.value, HEX)", Blockly["Arduino"].ORDER_ATOMIC];
};
const numberToCode = (num) => {
  if (_.isNumber(num)) {
    return +num > 0 ? +num - 1 : 0;
  }
  return `(${num} - 1)`;
};
Blockly["Arduino"]["lcd_setup"] = function(block) {
  const size = block.getFieldValue("SIZE");
  const memoryAddressLCDType = block.getFieldValue("MEMORY_TYPE").toUpperCase();
  const numberOfRows = size === "16 x 2" ? 2 : 4;
  const numberOfColumns = size === "16 x 2" ? 16 : 20;
  Blockly["Arduino"].libraries_["define_wire"] = "#include <Wire.h>;\n";
  Blockly["Arduino"].libraries_["define_liquid_crystal_i2c_big"] = "#include <LiquidCrystal_I2C.h>;\n";
  Blockly["Arduino"].libraries_["liquid_crystal_ic2_lcd_object"] = "LiquidCrystal_I2C lcd(" + memoryAddressLCDType + "," + numberOfRows + "," + numberOfColumns + ");";
  Blockly["Arduino"].setupCode_["liquid_crystal_ic2_lcd"] = "	lcd.init();\n	lcd.backlight(); \n";
  return "";
};
Blockly["Arduino"]["lcd_scroll"] = function(block) {
  const dropdown_dir = block.getFieldValue("DIR");
  if (dropdown_dir === "RIGHT") {
    return "lcd.scrollDisplayRight(); \n";
  } else {
    return "lcd.scrollDisplayLeft(); \n";
  }
};
Blockly["Arduino"]["lcd_screen_simple_print"] = function(block, generator) {
  const textRow1 = Blockly["Arduino"].valueToCode(
    block,
    "ROW_1",
    Blockly["Arduino"].ORDER_ATOMIC
  );
  const textRow2 = Blockly["Arduino"].valueToCode(
    block,
    "ROW_2",
    Blockly["Arduino"].ORDER_ATOMIC
  );
  const workspace = Blockly.getMainWorkspace();
  const setupblock = workspace.getAllBlocks().find((b) => b.type === "lcd_setup");
  let numRows = 2;
  if (setupblock) {
    const size = setupblock.getFieldValue("SIZE");
    numRows = size === "16 x 2" ? 2 : 4;
  }
  const textRow3 = Blockly["Arduino"].valueToCode(
    block,
    "ROW_3",
    Blockly["Arduino"].ORDER_ATOMIC
  );
  const textRow4 = Blockly["Arduino"].valueToCode(
    block,
    "ROW_4",
    Blockly["Arduino"].ORDER_ATOMIC
  );
  const seconds = Blockly["Arduino"].valueToCode(
    block,
    "DELAY",
    Blockly["Arduino"].ORDER_ATOMIC
  );
  function printRow(row, textRow) {
    return textRow !== '""' ? "lcd.setCursor(0, " + row + "); \nlcd.print(" + textRow + "); \n" : "";
  }
  const row3 = numRows === 2 ? "" : printRow(2, textRow3);
  const row4 = numRows === 2 ? "" : printRow(3, textRow4);
  return "lcd.clear(); \n" + printRow(0, textRow1) + printRow(1, textRow2) + row3 + row4 + "delay(" + seconds * 1e3 + "); \nlcd.clear(); \n";
};
Blockly["Arduino"]["lcd_backlight"] = function(block) {
  return block.getFieldValue("BACKLIGHT").toUpperCase() === "ON" ? "	lcd.backlight();\n" : "	lcd.noBacklight();\n";
};
Blockly["Arduino"]["lcd_screen_clear"] = function(block) {
  return "	lcd.clear();\n";
};
Blockly["Arduino"]["lcd_screen_print"] = function(block) {
  let row = numberToCode(
    Blockly["Arduino"].valueToCode(
      block,
      "ROW",
      Blockly["Arduino"].ORDER_ATOMIC
    )
  );
  let column = numberToCode(
    Blockly["Arduino"].valueToCode(
      block,
      "COLUMN",
      Blockly["Arduino"].ORDER_ATOMIC
    )
  );
  const message = Blockly["Arduino"].valueToCode(
    block,
    "PRINT",
    Blockly["Arduino"].ORDER_ATOMIC
  );
  return "	lcd.setCursor(" + column + ", " + row + ");\n	lcd.print(" + message + "); \n";
};
Blockly["Arduino"]["lcd_blink"] = function(block) {
  let row = numberToCode(
    Blockly["Arduino"].valueToCode(
      block,
      "ROW",
      Blockly["Arduino"].ORDER_ATOMIC
    )
  );
  let column = numberToCode(
    Blockly["Arduino"].valueToCode(
      block,
      "COLUMN",
      Blockly["Arduino"].ORDER_ATOMIC
    )
  );
  const blink = block.getFieldValue("BLINK").toUpperCase() === "BLINK";
  let code = "	lcd.setCursor(" + column + ", " + row + ");\n";
  code += blink ? "	lcd.blink();\n" : "	lcd.noBlink();\n";
  return code;
};
Blockly["Arduino"]["led_matrix_setup"] = function(block) {
  const dataPin = block.getFieldValue("PIN_DATA");
  const clkPin = block.getFieldValue("PIN_CLK");
  const csPin = block.getFieldValue("PIN_CS");
  Blockly["Arduino"].libraries_["define_led_matrix"] = "#include <LedControlMS.h>;\n";
  Blockly["Arduino"].libraries_["led_matrix_setup"] = `LedControl lc = LedControl(${dataPin},${clkPin},${csPin},1);
`;
  Blockly["Arduino"].setupCode_["led_matrix"] = "	lc.shutdown(0,false); \n	lc.setIntensity(0,8);\n	lc.clearDisplay(0);\n";
  return "";
};
Blockly["Arduino"]["led_matrix_make_draw"] = function(block) {
  let code = "\n	//START CODE TO DRAW BLOCK " + block.id + "\n";
  for (let i = 1; i <= 8; i += 1) {
    for (let j = 1; j <= 8; j += 1) {
      const lightState = block.getFieldValue(i + "," + j).toLowerCase();
      code += "	lc.setLed(0, " + (j - 1) + ", " + (7 - (i - 1)) + ", " + lightState + ");\n";
    }
  }
  code += "\n	//FINISH CODE TO DRAW BLOCK " + block.id + "\n";
  return code;
};
Blockly["Arduino"]["led_matrix_turn_one_on_off"] = function(block) {
  const row = Blockly["Arduino"].valueToCode(
    block,
    "ROW",
    Blockly["Arduino"].ORDER_ATOMIC
  );
  let column = Blockly["Arduino"].valueToCode(
    block,
    "COLUMN",
    Blockly["Arduino"].ORDER_ATOMIC
  );
  const state = block.getFieldValue("STATE") === "ON" ? "true" : "false";
  return "	lc.setLed(0, " + // This has to be 7 even though it's an 8 by 8 matrix
  // Because we are already substracting one
  // part still needs work
  numberToCode(column) + ",(7 - " + numberToCode(row) + " ), " + state + ");\n";
};
Blockly["Arduino"]["rgb_led_setup"] = function(block) {
  const redPin = block.getFieldValue("PIN_RED");
  const greenPin = block.getFieldValue("PIN_GREEN");
  const bluePin = block.getFieldValue("PIN_BLUE");
  Blockly["Arduino"].setupCode_["led_pin_" + redPin] = `	pinMode(RED_PIN, OUTPUT); 
`;
  Blockly["Arduino"].setupCode_["led_pin_" + greenPin] = `	pinMode(GREEN_PIN, OUTPUT); 
`;
  Blockly["Arduino"].setupCode_["led_pin_" + bluePin] = `	pinMode(BLUE_PIN, OUTPUT); 
`;
  Blockly["Arduino"].libraries_["color_pin_blue"] = "int BLUE_PIN = " + bluePin + ";\n";
  Blockly["Arduino"].libraries_["color_pin_red"] = "int RED_PIN = " + redPin + ";\n";
  Blockly["Arduino"].libraries_["color_pin_green"] = "int GREEN_PIN = " + greenPin + ";\n";
  Blockly["Arduino"].functionNames_["_setLedColor"] = "void setLedColor(RGB color) {\n	analogWrite(GREEN_PIN, color.green); \n	analogWrite(BLUE_PIN, color.blue); \n	analogWrite(RED_PIN, color.red); \n}\n";
  return "";
};
Blockly["Arduino"]["set_color_led"] = function(block) {
  let color = Blockly["Arduino"].valueToCode(
    block,
    "COLOUR",
    Blockly["Arduino"].ORDER_ATOMIC
  );
  if (_.isEmpty(color)) {
    color = "{ 0, 0, 0 }";
  }
  return "setLedColor(" + color + ");\n";
};
Blockly["Arduino"]["led"] = function(block) {
  const pin = block.getFieldValue("PIN");
  const state = block.getFieldValue("STATE");
  Blockly["Arduino"].setupCode_["led_pin" + pin] = "	pinMode(" + pin + ", OUTPUT); \n";
  const ledState = state === "ON" ? "HIGH" : "LOW";
  return "digitalWrite(" + pin + ", " + ledState + "); \n";
};
Blockly["Arduino"]["led_fade"] = function(block) {
  const pin = block.getFieldValue("PIN");
  const fadeNumber = Blockly["Arduino"].valueToCode(
    block,
    "FADE",
    Blockly["Arduino"].ORDER_ATOMIC
  );
  Blockly["Arduino"].setupCode_["led_pin" + pin] = "	pinMode(" + pin + ", OUTPUT); \n";
  return "analogWrite(" + pin + ", " + (fadeNumber || 1) + "); \n";
};
Blockly["Arduino"]["digital_write"] = function(block) {
  const pin = block.getFieldValue("PIN");
  const state = block.getFieldValue("STATE") === "ON" ? "HIGH" : "LOW";
  return "digitalWrite(" + pin + ", " + state + "); \n";
};
Blockly["Arduino"]["analog_write"] = function(block) {
  const pin = block.getFieldValue("PIN");
  const numberToSend = Blockly["Arduino"].valueToCode(
    block,
    "WRITE_VALUE",
    Blockly["Arduino"].ORDER_ATOMIC
  );
  return "analogWrite(" + pin + ", " + numberToSend + "); \n";
};
Blockly["Arduino"]["digital_read_setup"] = function(block) {
  const pin = block.getFieldValue("PIN");
  Blockly["Arduino"].setupCode_["digital_read" + pin] = "	pinMode(" + pin + ", INPUT); \n";
  return "";
};
Blockly["Arduino"]["digital_read"] = function(block) {
  const pin = block.getFieldValue("PIN");
  return ["digitalRead(" + pin + ")", Blockly["Arduino"].ORDER_ATOMIC];
};
const setZeroIndexAdjustFunc = () => {
  Blockly["Arduino"].functionNames_["zeroIndexAdjustNumber"] = "\n\nint zeroIndexAdjustNumber(double pos) {\n	pos = pos <= 0 ? 0 : pos;\n	return pos >= 1 ? pos - 1 : pos;\n}\n";
};
const initListVariable = function(block, type) {
  setZeroIndexAdjustFunc();
  const preStructBeforeVar = ["RGB"].includes(type) ? "struct " : "";
  const size = block.getFieldValue("SIZE");
  const variableId = block.getFieldValue("VAR");
  Blockly["Arduino"].variablesInitCode_ += preStructBeforeVar + type.replace(" list", "") + " " + Blockly["Arduino"].getVariableName(variableId) + "[" + size + "];\n";
  return "";
};
const setListVariable = function(block) {
  const position = Blockly["Arduino"].valueToCode(
    block,
    "POSITION",
    Blockly["Arduino"].ORDER_ATOMIC
  );
  const variableId = block.getFieldValue("VAR");
  const value = Blockly["Arduino"].valueToCode(
    block,
    "VALUE",
    Blockly["Arduino"].ORDER_ATOMIC
  );
  return Blockly["Arduino"].getVariableName(variableId) + "[zeroIndexAdjustNumber(" + position + ")] = " + value + ";\n";
};
const getListVariable = function(block) {
  const variableId = block.getFieldValue("VAR");
  const position = Blockly["Arduino"].valueToCode(
    block,
    "POSITION",
    Blockly["Arduino"].ORDER_ATOMIC
  );
  return [
    Blockly["Arduino"].getVariableName(variableId) + "[zeroIndexAdjustNumber(" + position + ")]",
    Blockly["Arduino"].ORDER_ATOMIC
  ];
};
Blockly["Arduino"]["create_list_number_block"] = function(block) {
  return initListVariable(block, "double");
};
Blockly["Arduino"]["create_list_string_block"] = function(block) {
  return initListVariable(block, "String");
};
Blockly["Arduino"]["create_list_boolean_block"] = function(block) {
  return initListVariable(block, "boolean");
};
Blockly["Arduino"]["create_list_colour_block"] = function(block) {
  return initListVariable(block, "RGB");
};
Blockly["Arduino"]["set_string_list_block"] = setListVariable;
Blockly["Arduino"]["set_boolean_list_block"] = setListVariable;
Blockly["Arduino"]["set_number_list_block"] = setListVariable;
Blockly["Arduino"]["set_colour_list_block"] = setListVariable;
Blockly["Arduino"]["get_string_from_list"] = getListVariable;
Blockly["Arduino"]["get_boolean_from_list"] = getListVariable;
Blockly["Arduino"]["get_number_from_list"] = getListVariable;
Blockly["Arduino"]["get_colour_from_list"] = getListVariable;
Blockly["Arduino"]["logic_boolean"] = function(block) {
  const code = block.getFieldValue("BOOL") === "TRUE" ? "true" : "false";
  return [code, Blockly["Arduino"].ORDER_ATOMIC];
};
Blockly["Arduino"]["logic_compare"] = function(block) {
  const OPERATORS = {
    EQ: "==",
    NEQ: "!=",
    LT: "<",
    LTE: "<=",
    GT: ">",
    GTE: ">="
  };
  const operator = OPERATORS[block.getFieldValue("OP")];
  const order = operator === "==" || operator === "!=" ? Blockly["Arduino"].ORDER_EQUALITY : Blockly["Arduino"].ORDER_RELATIONAL;
  const argument0 = Blockly["Arduino"].valueToCode(block, "A", order) || "0";
  const argument1 = Blockly["Arduino"].valueToCode(block, "B", order) || "0";
  const code = "( " + argument0 + " " + operator + " " + argument1 + ")";
  return [code, order];
};
Blockly["Arduino"]["logic_operation"] = function(block) {
  const operator = block.getFieldValue("OP") === "AND" ? "&&" : "||";
  const order = operator === "&&" ? Blockly["Arduino"].ORDER_LOGICAL_AND : Blockly["Arduino"].ORDER_LOGICAL_OR;
  let argument0 = Blockly["Arduino"].valueToCode(block, "A", order);
  let argument1 = Blockly["Arduino"].valueToCode(block, "B", order);
  if (!argument0 && !argument1) {
    argument0 = "false";
    argument1 = "false";
  } else {
    const defaultArgument = operator === "&&" ? "true" : "false";
    if (!argument0) {
      argument0 = defaultArgument;
    }
    if (!argument1) {
      argument1 = defaultArgument;
    }
  }
  const code = argument0 + " " + operator + " " + argument1;
  return [code, order];
};
Blockly["Arduino"]["control_if"] = function(block) {
  let n = 0;
  let code = "", branchCode, conditionCode;
  do {
    conditionCode = Blockly["Arduino"].valueToCode(
      block,
      "IF" + n,
      Blockly["Arduino"].ORDER_NONE
    ) || "false";
    branchCode = Blockly["Arduino"].statementToCode(block, "DO" + n);
    code += (n > 0 ? " else " : "") + "if (" + conditionCode + ") {\n" + branchCode + "}";
    ++n;
  } while (block.getInput("IF" + n));
  if (block.getInput("ELSE")) {
    branchCode = Blockly["Arduino"].statementToCode(block, "ELSE");
    code += " else {\n" + branchCode + "}";
  }
  return code + "\n";
};
Blockly["Arduino"]["controls_ifelse"] = Blockly["Arduino"]["control_if"];
Blockly["Arduino"]["logic_negate"] = function(block) {
  const order = Blockly["Arduino"].ORDER_UNARY_PREFIX;
  const argument0 = Blockly["Arduino"].valueToCode(block, "BOOL", order) || "true";
  const code = "!" + argument0;
  return [code, order];
};
Blockly["Arduino"]["controls_repeat_ext"] = function(block) {
  Blockly["Arduino"].libraries_["controls_repeat_ext"] = "int simple_loop_variable = 0;";
  const repeats = Blockly["Arduino"].valueToCode(
    block,
    "TIMES",
    Blockly["Arduino"].ORDER_ASSIGNMENT
  ) || "0";
  let branch = Blockly["Arduino"].statementToCode(block, "DO");
  branch = Blockly["Arduino"].addLoopTrap(branch, block.id);
  let code = "";
  const loopVar = "simple_loop_variable";
  code += "for (" + loopVar + " = 1; " + loopVar + " <= " + repeats + "; " + loopVar + " += 1) {\n" + branch + "}\n";
  return code;
};
Blockly["Arduino"]["controls_for"] = function(block) {
  const loopIndexVariable = Blockly.getMainWorkspace().getVariableById(
    block.getFieldValue("VAR")
  ).name;
  const branch = Blockly["Arduino"].statementToCode(block, "DO");
  const startNumber = +Blockly["Arduino"].valueToCode(
    block,
    "FROM",
    Blockly["Arduino"].ORDER_ASSIGNMENT
  ) || "0";
  const toNumber = +Blockly["Arduino"].valueToCode(
    block,
    "TO",
    Blockly["Arduino"].ORDER_ASSIGNMENT
  ) || "0";
  let byNumber = Math.abs(parseInt(block.getFieldValue("BY")));
  byNumber = byNumber === 0 ? 1 : byNumber;
  const addingSub = startNumber < toNumber ? " +" : " -";
  const sign = startNumber < toNumber ? " <= " : " >= ";
  return "for (" + loopIndexVariable + " = " + startNumber + "; " + loopIndexVariable + sign + toNumber + "; " + loopIndexVariable + addingSub + "= " + byNumber + ") {\n" + branch + "}\n";
};
Blockly["Arduino"]["controls_whileUntil"] = function(block) {
  const until = block.getFieldValue("MODE") === "UNTIL";
  let argument0 = Blockly["Arduino"].valueToCode(
    block,
    "BOOL",
    Blockly["Arduino"].ORDER_LOGICAL_AND
  ) || "false";
  let branch = Blockly["Arduino"].statementToCode(block, "DO");
  branch = Blockly["Arduino"].addLoopTrap(branch, block.id);
  if (until) {
    argument0 = "!" + argument0;
  }
  return "	while (" + argument0 + ") {\n" + branch + "	}\n";
};
Blockly["Arduino"]["controls_flow_statements"] = function(block) {
  switch (block.getFieldValue("FLOW")) {
    case "BREAK":
      return "break;\n";
    case "CONTINUE":
      return "continue;\n";
  }
  throw Error("Unknown flow statement.");
};
Blockly["Arduino"]["math_number"] = function(block) {
  return [
    parseFloat(block.getFieldValue("NUM")),
    Blockly["Arduino"].ORDER_ATOMIC
  ];
};
Blockly["Arduino"]["math_arithmetic"] = function(block) {
  const OPERATORS = {
    ADD: [" + ", Blockly["Arduino"].ORDER_ASSIGNMENT],
    MINUS: [" - ", Blockly["Arduino"].ORDER_ASSIGNMENT],
    MULTIPLY: [" * ", Blockly["Arduino"].ORDER_ASSIGNMENT],
    DIVIDE: [" / ", Blockly["Arduino"].ORDER_ASSIGNMENT],
    POWER: [null, Blockly["Arduino"].ORDER_ASSIGNMENT]
    // Handle power separately.
  };
  const tuple = OPERATORS[block.getFieldValue("OP")];
  const operator = tuple[0];
  const order = tuple[1];
  const argument0 = Blockly["Arduino"].valueToCode(block, "A", order) || "0";
  const argument1 = Blockly["Arduino"].valueToCode(block, "B", order) || "0";
  let code;
  if (!operator) {
    code = "pow(" + argument0 + ", " + argument1 + ")";
    return [code, Blockly["Arduino"].ORDER_ASSIGNMENT];
  }
  code = argument0 + operator + argument1;
  return [code, order];
};
Blockly["Arduino"]["math_round"] = function(block) {
  const operator = block.getFieldValue("OP");
  const arg = Blockly["Arduino"].valueToCode(
    block,
    "NUM",
    Blockly["Arduino"].ORDER_NONE
  ) || "0";
  let code = "";
  switch (operator) {
    case "ROUND":
      code = "(double)round(" + arg + ")";
      break;
    case "ROUNDUP":
      code = "(double)ceil(" + arg + ")";
      break;
    case "ROUNDDOWN":
      code = "(double)floor(" + arg + ")";
      break;
    default:
      throw Error("No option for this operator: " + operator);
  }
  return [code, Blockly["Arduino"].ORDER_UNARY_PREFIX];
};
Blockly["Arduino"]["math_modulo"] = function(block) {
  const dividend = Blockly["Arduino"].valueToCode(
    block,
    "DIVIDEND",
    Blockly["Arduino"].ORDER_MODULUS
  ) || "0";
  const divisor = Blockly["Arduino"].valueToCode(
    block,
    "DIVISOR",
    Blockly["Arduino"].ORDER_MODULUS
  ) || "0";
  const code = "(double)(" + dividend + " % " + divisor + ")";
  return [code, Blockly["Arduino"].ORDER_MODULUS];
};
Blockly["Arduino"]["math_number_property"] = function(block) {
  const number = Blockly["Arduino"].valueToCode(
    block,
    "NUMBER_TO_CHECK",
    Blockly["Arduino"].ORDER_MODULUS
  ) || 1;
  const checkBy = block.getFieldValue("PROPERTY");
  if (checkBy === "EVEN") {
    const code = "((int)" + number + " % 2 == 0)";
    return [code, Blockly["Arduino"].ORDER_MODULUS];
  }
  if (checkBy === "ODD") {
    const code = "((int)" + number + " % 2 == 1)";
    return [code, Blockly["Arduino"].ORDER_MODULUS];
  }
  if (checkBy === "POSITIVE") {
    const code = "(" + number + " > 0)";
    return [code, Blockly["Arduino"].ORDER_MODULUS];
  }
  if (checkBy === "NEGATIVE") {
    const code = "(" + number + " < 0)";
    return [code, Blockly["Arduino"].ORDER_MODULUS];
  }
  if (checkBy === "DIVISIBLE_BY") {
    const divisor = Blockly["Arduino"].valueToCode(
      block,
      "DIVISOR",
      Blockly["Arduino"].ORDER_MODULUS
    ) || 1;
    const code = "((int)" + number + " % (int)" + divisor + " == 0)";
    return [code, Blockly["Arduino"].ORDER_MODULUS];
  }
  return ["false", Blockly["Arduino"].ORDER_MODULUS];
};
Blockly["Arduino"]["math_random_int"] = function(block) {
  const start = Blockly["Arduino"].valueToCode(
    block,
    "FROM",
    Blockly["Arduino"].ORDER_MODULUS
  ) || 0;
  const finish = Blockly["Arduino"].valueToCode(
    block,
    "TO",
    Blockly["Arduino"].ORDER_MODULUS
  ) || 1;
  let code = "";
  if (start > finish) {
    code = "(double)random(" + finish + ", " + start + ")";
  } else {
    code = "(double)random(" + start + ", " + finish + ")";
  }
  return [code, Blockly["Arduino"].ORDER_UNARY_POSTFIX];
};
Blockly["Arduino"]["string_to_number"] = function(block) {
  Blockly["Arduino"].functionNames_["parseDouble"] = "\ndouble parseDouble(String num) {\n	 // Use num.toDouble() instead of this.  Doing this because of arduino is compiling on a linux server.  \n	char str[40];\n	num.toCharArray(str, num.length() + 1);\n	return atof(str);\n}\n";
  const string = Blockly["Arduino"].valueToCode(
    block,
    "VALUE",
    Blockly["Arduino"].ORDER_ATOMIC
  );
  return ["parseDouble(" + string + ")", Blockly["Arduino"].ORDER_ATOMIC];
};
Blockly["Arduino"]["ultra_sonic_sensor_motion"] = function(block) {
  return ["ultraSonicDistance()", Blockly["Arduino"].ORDER_ATOMIC];
};
Blockly["Arduino"]["ultra_sonic_sensor_setup"] = function(block) {
  const echoPin = block.getFieldValue("PIN_ECHO");
  const trigPin = block.getFieldValue("PIN_TRIG");
  Blockly["Arduino"].setupCode_["setup_input_" + echoPin] = "	pinMode(" + echoPin + ", INPUT);\n";
  Blockly["Arduino"].setupCode_["setup_input_" + trigPin] = "	pinMode(" + trigPin + ", OUTPUT);\n";
  Blockly["Arduino"].functionNames_["pulse_in_function"] = `double ultraSonicDistance() { 
	digitalWrite(${trigPin}, LOW);
	delayMicroseconds(2); 
	digitalWrite(${trigPin}, HIGH); 
	delayMicroseconds(10); 
	digitalWrite(${trigPin}, LOW); 
	long microseconds = pulseIn(${echoPin}, HIGH); 
	return (double)(microseconds / 29 / 2); 
} 

`;
  return "";
};
Blockly["Arduino"]["move_motor"] = function(block) {
  const motorNumber = block.getFieldValue("MOTOR");
  const direction = block.getFieldValue("DIRECTION").toUpperCase();
  let rotation;
  if (direction === "CLOCKWISE") {
    rotation = "FORWARD";
  } else {
    rotation = "BACKWARD";
  }
  const speed = Blockly["Arduino"].valueToCode(
    block,
    "SPEED",
    Blockly["Arduino"].ORDER_ATOMIC
  );
  Blockly["Arduino"].libraries_["include_motor_library"] = "#include <AFMotor.h>;\n";
  Blockly["Arduino"].libraries_["include_motor_init_" + motorNumber] = "AF_DCMotor motor_" + motorNumber + "(" + motorNumber + ");\n";
  let code = "motor_" + motorNumber + '.run("' + rotation + '");\n';
  code += "motor_" + motorNumber + ".setSpeed(" + speed + ");\n";
  return code;
};
Blockly["Arduino"]["neo_pixel_setup"] = function(block) {
  const numberOfLeds = block.getFieldValue("NUMBER_LEDS");
  const pin = block.getFieldValue("PIN");
  Blockly["Arduino"].libraries_["define_neo_pixel"] = "#include <Adafruit_NeoPixel.h>;\n#ifdef __AVR__ \n	#include <avr/power.h>; \n#endif\n";
  Blockly["Arduino"].libraries_["neo_pixel_setup"] = `double brightness = ${block.getFieldValue("BRIGHTNESS")}.0 / 20.0;

Adafruit_NeoPixel pixels = Adafruit_NeoPixel(` + numberOfLeds + ", " + pin + ", NEO_GRB + NEO_KHZ800);\n\n";
  Blockly["Arduino"].setupCode_["neo_pixel"] = "	pixels.begin();\n";
  return "";
};
Blockly["Arduino"]["neo_pixel_set_color"] = function(block) {
  Blockly["Arduino"].functionNames_["set_color"] = "\n\nvoid setNeoPixelColor(double pos, RGB color) {\n	pos = pos <= 0 ? 0 : pos;\n	pos = pos >= 1 ? pos - 1 : pos;\n	pixels.setPixelColor((int)pos, color.red * brightness, color.green * brightness, color.blue * brightness);\n	pixels.show();\n}\n";
  const color = Blockly["Arduino"].valueToCode(
    block,
    "COLOR",
    Blockly["Arduino"].ORDER_ATOMIC
  );
  const position = Blockly["Arduino"].valueToCode(
    block,
    "POSITION",
    Blockly["Arduino"].ORDER_ATOMIC
  );
  return "	setNeoPixelColor(" + position + "," + color + ");\n";
};
const hexToRgb = (hex) => {
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return {
    red: parseInt(result[1], 16),
    green: parseInt(result[2], 16),
    blue: parseInt(result[3], 16)
  };
};
const rgbToHex = (color) => {
  return "#" + componentToHex(color.red) + componentToHex(color.green) + componentToHex(color.blue);
};
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}
Blockly["Arduino"]["fastled_setup"] = function(block) {
  const numberOfLeds = block.getFieldValue("NUMBER_LEDS");
  const pin = block.getFieldValue("PIN");
  const brightness = block.getFieldValue("BRIGHTNESS");
  const colorOrder = block.getFieldValue("COLOR_ORDER");
  const chipSet = block.getFieldValue("CHIP_SET");
  Blockly["Arduino"]["fastled_info"] = { numberOfLeds };
  Blockly["Arduino"].libraries_["define_fastled"] = `
#include <FastLED.h>
#define NUM_LEDS ${numberOfLeds}
#define DATA_PIN ${pin} 
CRGB leds[NUM_LEDS];

`;
  Blockly["Arduino"].functionNames_["fastled_setColorFunction"] = `
void setFastLEDColor(int pos, struct RGB color) {
    pos = pos <= 0 ? 0 : pos;
    pos = pos >= 1 ? pos - 1 : pos;
    leds[pos].setRGB(color.red, color.green, color.blue);
}
`;
  Blockly["Arduino"].setupCode_["fastled"] = `
    FastLED.addLeds<${chipSet}, DATA_PIN, ${colorOrder}>(leds, NUM_LEDS);
    FastLED.setBrightness(${brightness});    
`;
  return "";
};
const getRowColId = (position) => {
  const row = Math.ceil(position / 12);
  return `${row}-${position - (row - 1) * 12}`;
};
Blockly["Arduino"]["fastled_set_all_colors"] = function(block) {
  const maxLeds = Blockly["Arduino"]["fastled_info"].numberOfLeds;
  const statements = [`// Colors for block ${block.id} 
`];
  for (let position = 1; position <= maxLeds; position += 1) {
    const hexColor = block.getFieldValue(getRowColId(position));
    const rgbColor = hexToRgb(hexColor);
    statements.push(
      "	setFastLEDColor(" + position + `,{${rgbColor.red}, ${rgbColor.green}, ${rgbColor.blue}});
`
    );
  }
  return statements.join("");
};
Blockly["Arduino"]["fastled_show_all_colors"] = function(block) {
  return `FastLED.show();
`;
};
Blockly["Arduino"]["fastled_set_color"] = function(block) {
  const color = Blockly["Arduino"].valueToCode(
    block,
    "COLOR",
    Blockly["Arduino"].ORDER_ATOMIC
  );
  const position = Blockly["Arduino"].valueToCode(
    block,
    "POSITION",
    Blockly["Arduino"].ORDER_ATOMIC
  );
  return "	setFastLEDColor(" + position + "," + color + ");\n";
};
Blockly["Arduino"]["analog_read_setup"] = function(block) {
  const pin = block.getFieldValue("PIN");
  Blockly["Arduino"].setupCode_["analog_read" + pin] = "	pinMode(" + pin + ", INPUT); \n";
  return "";
};
Blockly["Arduino"]["analog_read"] = function(block) {
  const pin = block.getFieldValue("PIN");
  return ["(double)analogRead(" + pin + ")", Blockly["Arduino"].ORDER_ATOMIC];
};
Blockly["Arduino"]["procedures_defreturn"] = function(block) {
  const funcName = Blockly["Arduino"].variableDB_.getName(
    block.getFieldValue("NAME")
  );
  const branch = Blockly["Arduino"].statementToCode(block, "STACK");
  const returnType = block.getFieldValue("RETURN TYPE") || "void";
  let returnValue = Blockly["Arduino"].valueToCode(
    block,
    "RETURN",
    Blockly["Arduino"].ORDER_NONE
  ) || "";
  if (returnValue) {
    returnValue = Blockly["Arduino"].INDENT + "return " + returnValue + ";\n";
  }
  let code = translateType(returnType) + " " + funcName + "() {\n" + branch + returnValue + "}";
  code = Blockly["Arduino"].scrub_(block, code);
  Blockly["Arduino"].functionNames_["%" + funcName] = code;
  return null;
};
function translateType(type) {
  switch (type) {
    case "Number":
      return "double";
    case "String":
      return "String";
    case "Boolean":
      return "boolean";
    case "void":
      return "void";
    default:
      throw new Error("Invalid Parameter Type");
  }
}
Blockly["Arduino"]["procedures_defnoreturn"] = Blockly["Arduino"]["procedures_defreturn"];
Blockly["Arduino"]["procedures_callnoreturn"] = function(block) {
  const funcName = Blockly["Arduino"].variableDB_.getName(
    block.getFieldValue("NAME"),
    Blockly.Procedures.DEFAULT_ARG
  );
  return funcName + "();\n";
};
Blockly["Arduino"]["rfid_scan"] = function() {
  return ["rfidReader.isAvailable()", Blockly["Arduino"].ORDER_ATOMIC];
};
Blockly["Arduino"]["rfid_tag"] = function() {
  return [
    "String(rfidReader.getTag().getTag())",
    Blockly["Arduino"].ORDER_ATOMIC
  ];
};
Blockly["Arduino"]["rfid_card"] = function() {
  return [
    "String(rfidReader.getTag().getCardNumber())",
    Blockly["Arduino"].ORDER_ATOMIC
  ];
};
Blockly["Arduino"]["rfid_setup"] = function() {
  Blockly["Arduino"].libraries_["define_rfid"] = '#include "RFIDRdm630.h"\n';
  Blockly["Arduino"].libraries_["setup_rfid"] = "RFIDRdm630 rfidReader = RFIDRdm630(6,7);\n";
  return "";
};
function servoSetup(pin) {
  Blockly["Arduino"].libraries_["define_servo"] = "#include <Servo.h>\n";
  Blockly["Arduino"].libraries_["var_servo" + pin] = "Servo servo_" + pin + ";\n";
  Blockly["Arduino"].setupCode_["setup_servo_" + pin] = "	servo_" + pin + ".attach(" + pin + ");\n";
}
Blockly["Arduino"]["rotate_servo"] = function(block) {
  const pin = block.getFieldValue("PIN");
  const degrees = Blockly["Arduino"].valueToCode(
    block,
    "DEGREE",
    Blockly["Arduino"].ORDER_ATOMIC
  );
  servoSetup(pin);
  return "servo_" + pin + ".write(" + degrees + ");\n";
};
Blockly["Arduino"]["servo_read_degrees"] = function(block) {
  const pin = block.getFieldValue("PIN");
  servoSetup(pin);
  return ["servo_" + pin + ".read()", Blockly["Arduino"].ORDER_ATOMIC];
};
Blockly["Arduino"]["servo_move_adafruit_tico"] = function(block) {
  const pin = block.getFieldValue("PIN");
  const degree = Blockly["Arduino"].valueToCode(
    block,
    "DEGREE",
    Blockly["Arduino"].ORDER_ATOMIC
  );
  Blockly["Arduino"].libraries_["servo_move_adafruit_"] = "#include <Adafruit_TiCoServo.h>\n";
  Blockly["Arduino"].libraries_["var_servo_adafruit_" + pin] = "Adafruit_TiCoServo servo_adafruit" + pin + ";\n";
  Blockly["Arduino"].setupCode_["setup_servo_adafruit" + pin] = "	servo_adafruit" + pin + ".attach(" + pin + ");\n";
  return "servo_adafruit" + pin + ".write(" + degree + ");\n";
};
Blockly["Arduino"]["temp_setup"] = function(block) {
  Blockly["Arduino"].libraries_["temp_setup"] = `#define DHTPIN ${block.getFieldValue("PIN")}
#define DHTTYPE ${block.getFieldValue("TYPE")}
#include <DHT.h>;
DHT dht(DHTPIN, DHTTYPE);`;
  Blockly["Arduino"].setupCode_["temp_setup"] = `dht.begin();

  `;
  return "";
};
Blockly["Arduino"]["temp_get_temp"] = function() {
  return ["(double)dht.readTemperature()", Blockly["Arduino"].ORDER_ATOMIC];
};
Blockly["Arduino"]["temp_get_humidity"] = function() {
  return ["(double)dht.readHumidity()", Blockly["Arduino"].ORDER_ATOMIC];
};
Blockly["Arduino"]["text"] = function(block) {
  const code = "String(" + Blockly["Arduino"].quote_(block.getFieldValue("TEXT")) + ")";
  return [code, Blockly["Arduino"].ORDER_ATOMIC];
};
Blockly["Arduino"].text.forceString_ = function(value) {
  if (Blockly["Arduino"].text.forceString_.strRegExp.it(value)) {
    return value;
  }
  return "String(" + value + ")";
};
Blockly["Arduino"].text.forceString_.strRegExp = /^\s*'([^']|\\')*'\s*$/;
Blockly["Arduino"]["text_join"] = function(block) {
  if (block.itemCount_ === 0) {
    return ['""', Blockly["Arduino"].ORDER_ATOMIC];
  }
  if (block.itemCount_ === 1) {
    const element = Blockly["Arduino"].valueToCode(
      block,
      "ADD0",
      Blockly["Arduino"].ORDER_NONE
    ) || '""';
    return [
      Blockly["Arduino"].text.forceString_(element),
      Blockly["Arduino"].ORDER_ATOMIC
    ];
  }
  const parts = [];
  for (let i = 0; i < block.itemCount_; i += 1) {
    const part = Blockly["Arduino"].valueToCode(
      block,
      "ADD" + i,
      Blockly["Arduino"].ORDER_COMMA
    );
    if (part.length > 0) {
      parts.push(part);
    }
  }
  const code = parts.join(" + ");
  return [code, Blockly["Arduino"].ORDER_ATOMIC];
};
Blockly["Arduino"]["text_length"] = function(block) {
  Blockly["Arduino"].functionNames_["textLength"] = "double textLength(String str) {\n	 return (double)str.length(); \n}\n";
  const str = Blockly["Arduino"].valueToCode(
    block,
    "VALUE",
    Blockly["Arduino"].ORDER_COMMA
  );
  return ["textLength(" + str + ")", Blockly["Arduino"].ORDER_ATOMIC];
};
Blockly["Arduino"]["text_isEmpty"] = function(block) {
  Blockly["Arduino"].functionNames_["textLength"] = "double textLength(String str) {\n	 return (double)str.length(); \n}\n";
  const str = Blockly["Arduino"].valueToCode(
    block,
    "VALUE",
    Blockly["Arduino"].ORDER_COMMA
  );
  return ["(textLength(" + str + ") > 0)", Blockly["Arduino"].ORDER_ATOMIC];
};
Blockly["Arduino"]["number_to_string"] = function(block) {
  Blockly["Arduino"].functionNames_["double_to_string_debug"] = createDoubleToStringCFunc();
  const numberOfDecimals = block.getFieldValue("PRECISION");
  const number = Blockly["Arduino"].valueToCode(
    block,
    "NUMBER",
    Blockly["Arduino"].ORDER_ATOMIC
  );
  return [
    "double2string(" + number + ", " + numberOfDecimals + ")",
    Blockly["Arduino"].ORDER_NONE
  ];
};
Blockly["Arduino"]["text_changeCase"] = function(block) {
  Blockly["Arduino"].functionNames_["upperCaseString"] = "\nString upperCaseString(String str) {\n	str.toUpperCase(); \n	return str;\n}\n";
  Blockly["Arduino"].functionNames_["lowerCaseString"] = "\nString lowerCaseString(String str) {\n	str.toLowerCase(); \n	return str;\n}\n";
  const transformType = block.getFieldValue("CASE");
  const text = Blockly["Arduino"].valueToCode(
    block,
    "TEXT",
    Blockly["Arduino"].ORDER_ATOMIC
  );
  if (transformType === "UPPERCASE") {
    return ["upperCaseString(" + text + ")", Blockly["Arduino"].ORDER_ATOMIC];
  } else {
    return ["lowerCaseString(" + text + ")", Blockly["Arduino"].ORDER_ATOMIC];
  }
};
Blockly["Arduino"]["parse_string_block"] = function(block) {
  Blockly["Arduino"].functionNames_["text_get_part_of_string"] = '\nString getParseValue(String data, char separator, int index) { \n	int found = 0;	int strIndex[] = {0, -1}; \n	int maxIndex = data.length()-1; \n	for(int i=0; i<=maxIndex && found<=index; i++){   \n	    if(data.charAt(i) == separator || i == maxIndex){    \n	        found++;                      \n	        strIndex[0] = strIndex[1]+1;    \n	        strIndex[1] = (i == maxIndex) ? i+1 : i;    \n	    }                            \n	}                     \n	return found>index ? data.substring(strIndex[0], strIndex[1]) : ""; \n}\n';
  const text = Blockly["Arduino"].valueToCode(
    block,
    "VALUE",
    Blockly["Arduino"].ORDER_ATOMIC
  );
  const delimiter = "'" + block.getFieldValue("DELIMITER") + "'";
  let position = +Blockly["Arduino"].valueToCode(
    block,
    "POSITION",
    Blockly["Arduino"].ORDER_ATOMIC
  );
  position = Math.abs(position);
  position = position > 0 ? position - 1 : position;
  return [
    "getParseValue(" + text + ", " + delimiter + ", " + position + ")",
    Blockly["Arduino"].ORDER_ATOMIC
  ];
};
Blockly["Arduino"]["time_seconds"] = function(block) {
  Blockly["Arduino"].functionNames_["secondsArduinoBeenOn"] = "double secondsArduinoBeenOn() {\n	return millis() / 1000;\n}\n";
  return ["secondsArduinoBeenOn()", Blockly["Arduino"].ORDER_ATOMIC];
};
Blockly["Arduino"]["delay_block"] = function(block) {
  let delay = Blockly["Arduino"].valueToCode(
    block,
    "DELAY",
    Blockly["Arduino"].ORDER_ATOMIC
  ) || 1;
  delay = Math.ceil(Math.abs(delay) * 1e3);
  return "delay(" + delay + ");\n";
};
Blockly["Arduino"]["time_setup"] = function() {
  return "";
};
const setVariableFunction = function(defaultValue) {
  return function(block, generator) {
    const variableName = generator.getVariableName(block.getFieldValue("VAR"));
    const variableValue = Blockly["Arduino"].valueToCode(
      block,
      "VALUE",
      Blockly["Arduino"].ORDER_ATOMIC
    );
    return variableName + " = " + (variableValue || defaultValue) + ";\n";
  };
};
const getVariableFunction = function(block, generator) {
  const variableName = generator.getVariableName(block.getFieldValue("VAR"));
  return [variableName, Blockly["Arduino"].ORDER_ATOMIC];
};
Blockly["Arduino"]["variables_set_number"] = setVariableFunction(10);
Blockly["Arduino"]["variables_set_boolean"] = setVariableFunction("true");
Blockly["Arduino"]["variables_set_string"] = setVariableFunction('" "');
Blockly["Arduino"]["variables_set_colour"] = setVariableFunction(`{ 22,  0,  22}`);
Blockly["Arduino"]["variables_get_number"] = getVariableFunction;
Blockly["Arduino"]["variables_get_boolean"] = getVariableFunction;
Blockly["Arduino"]["variables_get_string"] = getVariableFunction;
Blockly["Arduino"]["variables_get_colour"] = getVariableFunction;
Blockly["Arduino"]["thermistor_setup"] = function(block) {
  const pin = block.getFieldValue("PIN");
  const thermistorResistance = block.getFieldValue("THERMISTOR_RESISTANCE");
  const externalResistor = block.getFieldValue("NONIMAL_RESISTANCE");
  const defaultTemp = block.getFieldValue("DEFAULT_TEMP");
  const bValue = block.getFieldValue("B_VALUE");
  Blockly["Arduino"].libraries_["include_motor_library"] = `
#include <Thermistor.h>
#include <NTC_Thermistor.h>

#define SENSOR_PIN             ${pin}
#define REFERENCE_RESISTANCE   ${externalResistor}
#define NOMINAL_RESISTANCE     ${thermistorResistance}
#define NOMINAL_TEMPERATURE    ${defaultTemp}
#define B_VALUE                ${bValue}

Thermistor* thermistor;
`;
  Blockly["Arduino"].setupCode_["thermistor_setup_" + pin] = `	thermistor = new NTC_Thermistor(
        SENSOR_PIN,
        REFERENCE_RESISTANCE,
        NOMINAL_RESISTANCE,
        NOMINAL_TEMPERATURE,
        B_VALUE
      );
      
      `;
  return "";
};
Blockly["Arduino"]["thermistor_read"] = function(block) {
  return ["thermistor->readCelsius()", Blockly["Arduino"].ORDER_ATOMIC];
};
Blockly["Arduino"]["passive_buzzer_note"] = function(block) {
  var tone = +block.getFieldValue("TONE");
  var pin = block.getFieldValue("PIN");
  if (tone === 0) {
    return `noTone(${pin});`;
  }
  return `tone(${pin}, ${tone});`;
};
Blockly["Arduino"]["passive_buzzer_tone"] = function(block) {
  var tone = +Blockly["Arduino"].valueToCode(
    block,
    "TONE",
    Blockly["Arduino"].ORDER_ATOMIC
  );
  var pin = block.getFieldValue("PIN");
  if (tone === 0) {
    return `noTone(${pin});`;
  }
  return `tone(${pin}, ${tone});`;
};
Blockly["Arduino"]["stepper_motor_setup"] = function(block) {
  const totalSteps = block.getFieldValue("TOTAL_STEPS");
  const speed = block.getFieldValue("SPEED");
  const pin1 = block.getFieldValue("PIN_1");
  const pin2 = block.getFieldValue("PIN_2");
  const pin3 = block.getFieldValue("PIN_3");
  const pin4 = block.getFieldValue("PIN_4");
  Blockly["Arduino"].libraries_["stepper_motor"] = `
#include <Stepper.h>
const int stepsPerRevolution = ${totalSteps};

Stepper stepperMotor(stepsPerRevolution, ${pin1}, ${pin2}, ${pin3}, ${pin4});

  `;
  Blockly["Arduino"].setupCode_["stepper_motor_set_speed"] = `stepperMotor.setSpeed(${speed});`;
  return "";
};
Blockly["Arduino"]["stepper_motor_move"] = function(block) {
  const steps = Blockly["Arduino"].valueToCode(
    block,
    "STEPS",
    Blockly["Arduino"].ORDER_ATOMIC
  );
  return `stepperMotor.step(${steps}); 
`;
};
Blockly["Arduino"]["digital_display_setup"] = function(block) {
  let dioPin = block.getFieldValue("DIO_PIN");
  let clkPin = block.getFieldValue("CLK_PIN");
  Blockly["Arduino"].libraries_["define_digital_display"] = `
#include "SevenSegmentTM1637.h"
const byte PIN_CLK = ${dioPin};   // define CLK pin (any digital pin)
const byte PIN_DIO = ${clkPin};   // define DIO pin (any digital pin)
SevenSegmentTM1637    digitalDisplay(PIN_CLK, PIN_DIO);
`;
  Blockly["Arduino"].setupCode_["digital_display_setup"] = `  digitalDisplay.begin();
    digitalDisplay.setBacklight(100);
`;
  let code = "";
  return code;
};
Blockly["Arduino"]["digital_display_set"] = function(block) {
  let text = Blockly["Arduino"].valueToCode(
    block,
    "TEXT",
    Blockly["Arduino"].ORDER_ATOMIC
  );
  let colonOn = block.getFieldValue("COLON") == "TRUE";
  let code = `
  digitalDisplay.clear();
  digitalDisplay.setColonOn(${colonOn});
  digitalDisplay.print(${text});
`;
  return code;
};
Blockly["Arduino"]["joystick_setup"] = function(block) {
  var dropdown_pin_x = block.getFieldValue("PIN_X");
  var dropdown_pin_y = block.getFieldValue("PIN_Y");
  var dropdown_pin_button = block.getFieldValue("PIN_BUTTON");
  Blockly["Arduino"].libraries_["joystick"] = `
#include <math.h>

#define Y_PIN ${dropdown_pin_y}  
#define X_PIN ${dropdown_pin_x} 
#define SW_PIN ${dropdown_pin_button}

boolean internal_variable_isJoystickButtonPressed = false;
boolean internal_variable_isJoyStickEngaged = false;
int internal_variable_degrees = 0;

void setJoyStickValues() {

  // https://medium.com/@melaniechow/using-a-joystick-sensor-on-an-arduino-3498d7399464
  // This function was inspired by this Article
  int y = (analogRead(Y_PIN) * 4.9);   
  delay(50); // small pause needed between reading
  int x = (analogRead(X_PIN) * 4.9 );  
  delay(50);  
  
  x = (x - 2457);
  y = (y - 2541);
  
  double val = atan2(y, x) * 180/3.14159265358979; 
  
  if (val < 0) {
    val += 360;
  }
  
  //convert to a double
  double new_x = x / 100.0;
  double new_y = y / 100.0;
  double distance = sqrt((new_x * new_x) + (new_y * new_y));

  internal_variable_degrees = distance > 15 ? val : 0;
  internal_variable_isJoyStickEngaged = distance > 15;
  internal_variable_isJoystickButtonPressed = digitalRead(SW_PIN) == LOW;
  
}

  `;
  Blockly["Arduino"].setupCode_["joystick"] = `
    pinMode(SW_PIN, INPUT);
    pinMode(Y_PIN, INPUT);
    pinMode(X_PIN, INPUT);
    digitalWrite(SW_PIN, HIGH);
  `;
  return "";
};
Blockly["Arduino"]["joystick_angle"] = function(block) {
  return ["internal_variable_degrees", Blockly["Arduino"].ORDER_ATOMIC];
};
Blockly["Arduino"]["joystick_button"] = function(block) {
  return [
    "internal_variable_isJoystickButtonPressed",
    Blockly["Arduino"].ORDER_ATOMIC
  ];
};
Blockly["Arduino"]["joystick_engaged"] = function(block) {
  return [
    "internal_variable_isJoyStickEngaged",
    Blockly["Arduino"].ORDER_ATOMIC
  ];
};
({
  blockStyles: {
    logic_blocks: {
      colourPrimary: COLOR_THEME.CONTROL,
      colourSecondary: COLOR_THEME.CONTROL,
      colourTertiary: COLOR_THEME.CONTROL,
      hat: ""
    },
    loop_blocks: {
      colourPrimary: COLOR_THEME.CONTROL,
      colourSecondary: COLOR_THEME.CONTROL,
      colourTertiary: COLOR_THEME.CONTROL,
      hat: ""
    },
    procedure_blocks: {
      colourPrimary: COLOR_THEME.CONTROL,
      colourSecondary: COLOR_THEME.CONTROL,
      colourTertiary: COLOR_THEME.CONTROL,
      hat: ""
    },
    math_blocks: {
      colourPrimary: COLOR_THEME.VALUES,
      colourSecondary: COLOR_THEME.VALUES,
      colourTertiary: COLOR_THEME.VALUES,
      hat: ""
    },
    text_blocks: {
      colourPrimary: COLOR_THEME.VALUES,
      colourSecondary: COLOR_THEME.VALUES,
      colourTertiary: COLOR_THEME.VALUES,
      hat: ""
    },
    colour_blocks: {
      colourPrimary: COLOR_THEME.VALUES,
      colourSecondary: COLOR_THEME.VALUES,
      colourTertiary: COLOR_THEME.VALUES,
      hat: ""
    },
    variable_blocks: {
      colourPrimary: COLOR_THEME.DATA,
      colourSecondary: COLOR_THEME.DATA,
      colourTertiary: COLOR_THEME.DATA,
      hat: ""
    },
    list_blocks: {
      colourPrimary: COLOR_THEME.DATA,
      colourSecondary: COLOR_THEME.DATA,
      colourTertiary: COLOR_THEME.DATA,
      hat: ""
    }
  }
});
var ActionType = /* @__PURE__ */ ((ActionType2) => {
  ActionType2["FOR_LOOP_BLOCK_CHANGE"] = "FOR_LOOP_CHANGE";
  ActionType2["LCD_SIMPLE_PRINT_CHANGE"] = "LCD_SIMPLE_PRINT_CHANGE";
  ActionType2["SETUP_SENSOR_BLOCK_FIELD_UPDATE"] = "SETUP_SENSOR_BLOCK_FIELD_UPDATE";
  ActionType2["SETUP_SENSOR_BLOCK_LOOP_FIELD_UPDATE"] = "SETUP_SENSOR_BLOCK_LOOP_FIELD_UPDATE";
  ActionType2["SETUP_SENSOR_BLOCK_SAVE_DEBUG_DATA"] = "SETUP_SENSOR_BLOCK_SAVE_DEBUG_DATA";
  ActionType2["DISABLE_BLOCK"] = "DISABLE_BLOCK";
  ActionType2["ENABLE_BLOCK"] = "ENABLE_BLOCK";
  ActionType2["DELETE_VARIABLE"] = "DELETE_VARIABLE";
  ActionType2["UPDATE_LED_COLOR"] = "UPDATE_LED_COLOR";
  return ActionType2;
})(ActionType || {});
const stateStore = writable({
  frames: [],
  board: MicroControllerType.ARDUINO_UNO,
  error: false,
  settings: defaultSetting
});
const frameStore = {
  subscribe: stateStore.subscribe,
  set: stateStore.set,
  update: stateStore.update
};
const findFieldValue = (block, fieldName) => {
  const field = block.fieldValues.find((f) => f.name === fieldName);
  return field ? field.value : void 0;
};
const findSensorState = (block, timeline) => {
  const sensorStates = JSON.parse(block.metaData);
  return sensorStates.find((s) => {
    return s.loop === timeline.iteration || (timeline.function === "pre-setup" || timeline.function === "setup") && s.loop === 1;
  });
};
const bluetoothSetupBlockToComponentState = (block, timeline) => {
  const btState = findSensorState(block, timeline);
  return {
    type: ArduinoComponentType.BLUE_TOOTH,
    rxPin: findFieldValue(block, "PIN_RX"),
    txPin: findFieldValue(block, "PIN_TX"),
    pins: [
      findFieldValue(block, "PIN_TX"),
      findFieldValue(block, "PIN_RX")
    ],
    hasMessage: btState.receiving_message,
    message: btState.message,
    sendMessage: ""
  };
};
const buttonSetupBlockToComponentState = (block, timeline) => {
  const btState = findSensorState(block, timeline);
  return {
    type: ArduinoComponentType.BUTTON,
    pins: [findFieldValue(block, "PIN")],
    isPressed: btState.is_pressed
  };
};
const irRemoteSetupBlockToComponentState = (block, timeline) => {
  const irRemoteData = findSensorState(block, timeline);
  return {
    type: ArduinoComponentType.IR_REMOTE,
    analogPin: findFieldValue(block, "PIN"),
    pins: [findFieldValue(block, "PIN")],
    code: irRemoteData.code,
    hasCode: irRemoteData.scanned_new_code
  };
};
const digitalSetupBlockToComponentState = (block, timeline) => {
  const digitalSensorState = findSensorState(block, timeline);
  const pin = findFieldValue(block, "PIN");
  return {
    type: ArduinoComponentType.DIGITAL_SENSOR,
    pins: [pin],
    pin,
    pictureType: findFieldValue(block, "TYPE"),
    isOn: digitalSensorState.isOn
  };
};
const analogSetupBlockToComponentState = (block, timeline) => {
  const analogSensorState = findSensorState(block, timeline);
  const pin = findFieldValue(block, "PIN");
  if (!analogSensorState) {
    return {
      type: ArduinoComponentType.ANALOG_SENSOR,
      pins: [pin],
      pin,
      pictureType: findFieldValue(block, "TYPE"),
      state: 0
    };
  }
  return {
    type: ArduinoComponentType.ANALOG_SENSOR,
    pins: [pin],
    pin,
    pictureType: findFieldValue(block, "TYPE"),
    state: analogSensorState.state
  };
};
const messageSetupBlockToComponentState = (block, timeline) => {
  const btState = findSensorState(block, timeline);
  return {
    type: ArduinoComponentType.MESSAGE,
    pins: [],
    hasMessage: btState?.receiving_message || false,
    message: btState?.message || ""
  };
};
const timeSetupBlockToComponentState = (block, timeline) => {
  return {
    type: ArduinoComponentType.TIME,
    pins: [],
    timeInSeconds: +timeline.iteration * +findFieldValue(block, "time_in_seconds")
  };
};
const ultraSonicSetupBlockToComponentState = (block, timeline) => {
  const ultraSensor = findSensorState(block, timeline);
  return {
    type: ArduinoComponentType.ULTRASONICE_SENSOR,
    trigPin: findFieldValue(block, "PIN_TRIG"),
    echoPin: findFieldValue(block, "PIN_ECHO"),
    pins: [
      findFieldValue(block, "PIN_TRIG"),
      findFieldValue(block, "PIN_ECHO")
    ],
    cm: ultraSensor.cm
  };
};
const rfidSetupBlockToComponentState = (block, timeline) => {
  const rfidSensor = findSensorState(block, timeline);
  return {
    type: ArduinoComponentType.RFID,
    txPin: findFieldValue(block, "PIN_TX"),
    pins: [findFieldValue(block, "PIN_TX")],
    scannedCard: rfidSensor.scanned_card,
    cardNumber: rfidSensor.card_number,
    tag: rfidSensor.tag
  };
};
const temperatureSetupBlockToComponentState = (block, timeline) => {
  const tempSensor = findSensorState(block, timeline);
  return {
    type: ArduinoComponentType.TEMPERATURE_SENSOR,
    pins: [findFieldValue(block, "PIN")],
    temperature: tempSensor.temp,
    humidity: tempSensor.humidity
  };
};
const thermistorSetupBlockToComponentState = (block, timeline) => {
  const sensorData = findSensorState(block, timeline);
  return {
    type: ArduinoComponentType.THERMISTOR,
    pins: [findFieldValue(block, "PIN")],
    temp: sensorData.temp,
    externalResistorsOhms: +findFieldValue(block, "NONIMAL_RESISTANCE")
  };
};
const joystickSetupBlockToComponentState = (block, timeline) => {
  const xPin = findFieldValue(block, "PIN_X");
  const yPin = findFieldValue(block, "PIN_Y");
  const buttonPin = findFieldValue(block, "PIN_BUTTON");
  const joyStickSensor = findSensorState(block, timeline);
  const joystickState = {
    type: ArduinoComponentType.JOYSTICK,
    pins: [xPin, yPin, buttonPin],
    buttonPin,
    xPin,
    yPin,
    buttonPressed: joyStickSensor.buttonPressed,
    engaged: joyStickSensor.engaged,
    degree: joyStickSensor.degree
  };
  return joystickState;
};
const blockToSensorComponent = {
  bluetooth_setup: bluetoothSetupBlockToComponentState,
  button_setup: buttonSetupBlockToComponentState,
  ir_remote_setup: irRemoteSetupBlockToComponentState,
  digital_read_setup: digitalSetupBlockToComponentState,
  analog_read_setup: analogSetupBlockToComponentState,
  rfid_setup: rfidSetupBlockToComponentState,
  temp_setup: temperatureSetupBlockToComponentState,
  time_setup: timeSetupBlockToComponentState,
  ultra_sonic_sensor_setup: ultraSonicSetupBlockToComponentState,
  message_setup: messageSetupBlockToComponentState,
  thermistor_setup: thermistorSetupBlockToComponentState,
  joystick_setup: joystickSetupBlockToComponentState
};
_.keys(blockToSensorComponent);
const updateVariable = (action) => {
  if (action.actionType === "delete") {
    deleteVariable(action.variableId);
  }
};
const updateForLoop = (action) => {
  const block = getBlockById(action.blockId);
  block.inputList[2].fieldRow[0].setValue(action.changeText);
};
const updateSetupSensorBlockFields = (action) => {
  const block = getBlockById(action.blockId);
  action.fields.filter((field) => block.getField(field.name)).forEach((field) => {
    const blocklyField = block.getField(field.name);
    if (blocklyField instanceof Blockly.FieldCheckbox) {
      block.setFieldValue(
        field.value === 1 || field.value === true ? "TRUE" : "FALSE",
        field.name
      );
      return;
    }
    block.setFieldValue(field.value, field.name);
  });
};
const updateSetupSensorBlockLoopField = (action) => {
  const block = getBlockById(action.blockId);
  block.setFieldValue(action.loop.toString(), "LOOP");
};
const updateDisableBlock = (action) => {
  const block = getBlockById(action.blockId);
  if (block.isEnabled()) {
    block.setEnabled(false);
  }
  block.setWarningText(action.warningText);
};
const updateEnableBlock = (action) => {
  const block = getBlockById(action.blockId);
  if (!block.isEnabled()) {
    block.setEnabled(true);
    block.setWarningText(null);
  }
};
const updateSensorBlockData = (action) => {
  const block = getBlockById(action.blockId);
  block.data = action.data;
};
const updateLcdScreenPrintBlock = (action) => {
  const block = getBlockById(action.blockId);
  if (action.numberOfRows == 2) {
    block.getInput("ROW_3").setVisible(false);
    block.getInput("ROW_4").setVisible(false);
  } else {
    block.getInput("ROW_3").setVisible(true);
    block.getInput("ROW_4").setVisible(true);
  }
  block.render();
};
const updateLedColor = (action) => {
  const block = getBlockById(action.blockId);
  block.setFieldValue(action.color, "COLOR");
  block.render();
};
({
  [ActionType.DELETE_VARIABLE]: updateVariable,
  [ActionType.DISABLE_BLOCK]: updateDisableBlock,
  [ActionType.ENABLE_BLOCK]: updateEnableBlock,
  [ActionType.FOR_LOOP_BLOCK_CHANGE]: updateForLoop,
  [ActionType.SETUP_SENSOR_BLOCK_FIELD_UPDATE]: updateSetupSensorBlockFields,
  [ActionType.SETUP_SENSOR_BLOCK_LOOP_FIELD_UPDATE]: updateSetupSensorBlockLoopField,
  [ActionType.SETUP_SENSOR_BLOCK_SAVE_DEBUG_DATA]: updateSensorBlockData,
  [ActionType.LCD_SIMPLE_PRINT_CHANGE]: updateLcdScreenPrintBlock,
  [ActionType.UPDATE_LED_COLOR]: updateLedColor
});
let settings = void 0;
settingsStore.subscribe((newSettings) => {
  settings = newSettings;
  frameStore.update((frameContainer) => {
    const newFrameContainer = _.cloneDeep(frameContainer);
    newFrameContainer.board = settings.boardType;
    if (getWorkspace()) {
      codeStore.set({ code: getArduinoCode(), boardType: settings.boardType });
    }
    return newFrameContainer;
  });
});
const virtualCircuitComment = "\n\nТөменде ---- виртуалды схема қабылдайтын мәндерді орнатуға болады.";
const whatIsAPin = `

Пин - электр қуатын басқару немесе сезу үшін қолданылатын Arduino-ға қосылған металл бөлігі.`;
const bluetoothXMLString = `<category name="Bluetooth" colour="${COLOR_THEME.COMPONENTS}">
  <block type="bluetooth_setup">
      <comment pinned="false" h="150" w="460">Бұл блок (Bluetooth орнату блогы) Arduino-Ға Bluetooth құрылғыларын пайдаланып жатқанымызды айтады.${virtualCircuitComment}</comment>

    <field name="PIN_RX">11</field>
    <field name="PIN_TX">10</field>
  </block>
  <block type="bluetooth_send_message">
  <comment pinned="false" h="60" w="460">Бұл блок Bluetooth арқылы хабарлама жібереді.</comment>
    <value name="MESSAGE">
      <block type="text">
        <field name="TEXT">Сәлем</field>
      </block>
    </value>
  </block>

  <block type="bluetooth_has_message">
    <comment pinned="false" h="60" w="460">Егер Bluetooth хабарлама алған болса, true мәнін қайтарады.</comment>

  </block>
  <block type="bluetooth_get_message">
      <comment pinned="false" h="60" w="460">Bluetooth алған хабарды алыңыз.</comment>
  </block>
  </category>`;
const buttonXMLString = `<category name="Button" colour="${COLOR_THEME.SENSOR}">       
<block type="button_setup">
      <comment pinned="false" h="200" w="460">Бұл блок (Bluetooth орнату блогы) Arduino-Ға Bluetooth құрылғыларын пайдаланып жатқанымызды айтады.${whatIsAPin}${virtualCircuitComment}</comment>
</block>
<block type="is_button_pressed">
  <comment pinned="false" h="60" w="460">Егер батырма басылса, true мәнін қайтарады.</comment>
</block>
</category>`;
const irRmoteXMLString = `<category name="IR қашықтан басқару" colour="${COLOR_THEME.SENSOR}" >
<block type="ir_remote_setup">
       <comment pinned="false" h="200" w="460">Бұл блок ir қашықтан басқару сенсорын орнатады.${virtualCircuitComment}</comment>
</block>
<block type="ir_remote_has_code_receive">
       <comment pinned="false" h="60" w="460">Егер ir сенсоры хабарлама алған болса, true мәнін қайтарады.</comment>
</block>
<block type="ir_remote_get_code">
       <comment pinned="false" h="60" w="460">Ir қашықтан басқару пульті алған хабарды алыңыз.</comment>
</block>
</category>`;
const fastLEDXMLString = `<category name="FastLED" colour="${COLOR_THEME.COMPONENTS}">
       <block type="fastled_setup">
              <comment pinned="false" h="110" w="460">Бұл блок Arduino-ға деректерді пикселдерге жіберу үшін қандай аналогтық түйреуішті пайдалану керектігін айтады.  Аналогтық түйреуіштер әдетте A1, A2, A2 және т.б.</comment>

             <field name="PIN">A0</field>
       </block>
       <block type="fastled_set_all_colors">
                     <comment pinned="false" h="80" w="460">Бұл блок неопиксельдердегі барлық түстерді орнатады.</comment>
       </block>
       <block type="fastled_show_all_colors">
          <comment pinned="false" h="80" w="460">Барлық RGB LED жолақтарын көрсету үшін блокты пайдаланыңыз</comment>
       </block>
       <block type="fastled_set_color">
              <comment pinned="false" h="80" w="460">Бұл блок сіздің жарық жолағындағы бір жарықдиодтың түсін орнатады. Бұл блок бірінші пиксел ретінде 1 пайдаланады.</comment>

         <value name="POSITION">
           <block type="math_number">
             <field name="NUM">1</field>
           </block>
         </value>
         <value name="COLOR">
           <block type="color_picker_custom"> </block>
         </value>
       </block>
   </category>`;
const ledMatrixXMLString = `<category colour="${COLOR_THEME.COMPONENTS}" name="Жарықдиодты матрица">
     <block type="led_matrix_setup">
    <comment pinned="false" h="60" w="460">Бұл блок рұқсат матрицасын орнатады.</comment>
                           <field name="PIN_DATA">10</field>
                           <field name="PIN_CLK">12</field>
                           <field name="PIN_CS">11</field>

     </block>

     <block type="led_matrix_make_draw">
        <comment pinned="false" h="80" w="460">Жарық диодты матрицаға үлгі салу үшін құсбелгілерді қойыңыз.</comment>
     </block>
   <block type="led_matrix_turn_one_on_off">
   <comment pinned="false" h="150" w="460" >Жарық диодты матрицадағы бір жарықдиодты өшіреді немесе өшіреді.

Бағанның саны неғұрлым жоғары болса, жарық диоды соғұрлым оң болады. Жолдың саны неғұрлым жоғары болса, соғұрлым төмен болады.</comment>
   <value name="ROW">
                   <block type="math_number">
                       <field name="NUM">1</field>
                   </block>
               </value>
               <value name="COLUMN">
                   <block type="math_number">
                       <field name="NUM">1</field>
                   </block>
               </value>
   </block>
   </category>`;
const arduinoXMLString = `<category name="Жүйелік код" colour="${COLOR_THEME.ARDUINO}" custom="CODE"></category>`;
const listXMLString = `<category name="Тізімдер" colour="${COLOR_THEME.DATA}" custom="LIST"> </category>`;
const functionXMLString = `<category  name="Менің блоктарым" colour="${COLOR_THEME.CONTROL}"
 custom="ELECTROBLOCKS_FUNCTIONS"></category>`;
const lcdScreenXMLString = `<category colour="${COLOR_THEME.COMPONENTS}" name="СКД экраны">
   <block type="lcd_setup">
    <comment pinned="false" h="240" w="460">Бұл блок СКД экранын орнатады.

Чип жад түрін анықтайды. Чипті қай жерден сатып алғаныңызды тексеріңіз; егер сіз білмесеңіз, екеуін де қолданып көріңіз және оны көру оңай болады.

Өлшем үшін біз бірінші сан - ені, ал екінші сан - биіктік. 16 x 2, 16 солдан оңға қарай бос орындар, ал 2 жоғары және төмен 2 бос орын болады.</comment>
   </block>
   <block type="lcd_screen_simple_print">
    <comment pinned="false" h="120" w="460">СКД экрандарында бірдеңені басып шығарады, содан кейін оны өшіреді. "Көрсетілетін секундтар" блогы СКД экраны хабарламаны қанша секунд көрсететінін көрсетеді.</comment>
   <value name="ROW_1">
                   <block type="text">
                       <field name="TEXT"></field>
                   </block>
               </value>
               <value name="ROW_2">
                   <block type="text">
                       <field name="TEXT"></field>
                   </block>
               </value>
               <value name="ROW_3">
                   <block type="text">
                       <field name="TEXT"></field>
                   </block>
               </value>
               <value name="ROW_4">
                   <block type="text">
                       <field name="TEXT"></field>
                   </block>
               </value>
               <value name="DELAY">
                   <block type="math_number">
                       <field name="NUM">3</field>
                   </block>
               </value>
   </block>
   <block type="lcd_screen_print">
   <comment pinned="false" h="190" w="460">Бұл блок СКД экранында бірдеңені басып шығарады. Баған нөмірі x орнын басқарады, ал жол нөмірі y орнын басқарады. X солдан оңға қарай, ал Y жоғары және төмен дегенді білдіреді.

Y үшін төмендеген сайын сандар жоғарылайды. Сонымен, бірінші баған 1, ал келесі төмен баған 2.</comment>
   <value name="ROW">
                   <block type="math_number">
                       <field name="NUM">1</field>
                   </block>
               </value>
               <value name="COLUMN">
                   <block type="math_number">
                       <field name="NUM">1</field>
                   </block>
               </value>
               <value name="PRINT">
                   <block type="text">
                       <field name="TEXT">Hi</field>
                   </block>
               </value>
   </block>
   <block type="lcd_screen_clear">
        <comment pinned="false" h="60" w="460">Бұл блок СКД экранындағы барлық мәтінді өшіреді.</comment>
   </block>
   <block type="lcd_scroll">
    <comment pinned="false" h="70" w="460">Бұл блок барлық мәтінді солға немесе оңға жылжытады.</comment>
   </block>
   <block type="lcd_blink">
        <comment pinned="false" h="80" w="460">Бұл блок СКД экранындағы жыпылықтайтын орынды қосады немесе өшіреді.</comment>
   <value name="ROW">
                   <block type="math_number">
                       <field name="NUM">1</field>
                   </block>
               </value>
               <value name="COLUMN">
                   <block type="math_number">
                       <field name="NUM">1</field>
                   </block>
               </value>
   </block>
   <block type="lcd_backlight">
    <comment pinned="false" h="80" w="460">Бұл блок СКД экранындағы артқы жарықты қосады және өшіреді.</comment>
   </block>
   </category>
   `;
const rgbLedXMLString = `<category name="RGB Жарықдиод" colour="${COLOR_THEME.COMPONENTS}">
   
   <block type="rgb_led_setup">
    <comment pinned="false" h="100" w="460">Бұл блок Arduino-ға әр түс үшін қай түйреуішті пайдалану керектігін айтады. RGB қызыл, жасыл және көк дегенді білдіреді. Түстерді біріктіру арқылы сіз басқа түстерді жасай аласыз.</comment>

                           <field name="PIN_RED">11</field>
                         <field name="PIN_GREEN">10</field>
                         <field name="PIN_BLUE">9</field>
 </block>

   <block type="set_color_led">
      <comment pinned="false" h="130" w="460">Бұл блок RGB светодиодының түсін орнатады. RGB қызыл, жасыл және көк дегенді білдіреді. Пайдаланушы түсін пайдалану үшін деректер->түс астындағы құралдар тақтасына өтіп, ең үлкен блокты таңдаңыз. Содан кейін әртүрлі түстерді көру үшін Google RGB түс таңдау құралын пайдаланыңыз.</comment>

   <value name="COLOUR">

                   <block type="color_picker_custom">
                   </block>
   </value>
   </block>
   </category>`;
const LED_COMMENT = `Ашылмалы терезедегі түйреуішке бекітілген жарық диодты қосыңыз немесе өшіріңіз.${whatIsAPin}`;
const ledXMLString = `<category name="Жарықдиод" colour="${COLOR_THEME.COMPONENTS}">
   <block type="led">
    <comment pinned="false" h="145" w="460" >${LED_COMMENT}</comment>
   </block>

   <block type="led_fade">
    <comment pinned="false" h="175" w="460" >Бұл блок жарықдиодқа жалғанған түйреуішке электр тогының мөлшерін реттейді. Ол жарықдиодты шамға жай өшу және қосылу әсерін береді.${whatIsAPin}</comment>
   <value name="FADE">
                   <block type="math_number">
                       <field name="NUM">125</field>
                   </block>
               </value>
   </block>
</category>`;
const writePinXMLString = `
<category name="Пинмен жұмыс" colour="${COLOR_THEME.COMPONENTS}">
   <block type="digital_write">
    <comment pinned="false" h="130" w="460">Бұл блок (сандық жазу) түйреуішті қосады және өшіреді.${whatIsAPin}</comment>
   </block>
   <block type="analog_write">
    <comment pinned="false" h="200" w="400" >Бұл блок (аналогтық жазу) 0-ден 255-ке дейінгі санды түйреуішке жібереді.
255 түйреуіштер толығымен қосулы, ал 0 түйреуіш өшірулі дегенді білдіреді.${whatIsAPin}</comment>
       <value name="WRITE_VALUE">
                   <block type="math_number">
                       <field name="NUM">150</field>
                   </block>
        </value>
    </block>
</category>
`;
const digitalSensorXMLString = `<category name="Цифрлық/Сандық" colour="${COLOR_THEME.SENSOR}">
       <block type="digital_read_setup">
            <comment pinned="false" h="150" w="460">Бұл блок (сандық оқуды орнату) Arduino-ға қай пиннің сезімтал екенін айтады.${whatIsAPin}${virtualCircuitComment}</comment>
       </block>
       <block type="digital_read">
            <comment pinned="false" h="70" w="460">Егер сенсор бірдеңені сезсе, true мәнін қайтарады.</comment>
       </block>
   </category>`;
const analogSensorXMLString = `
<category name="Аналогты" colour="${COLOR_THEME.SENSOR}" >
       <block type="analog_read_setup">
            <comment pinned="false" h="200" w="501">Бұл блок (analogread setup) Arduino-ға қай пиннің электр сезімтал екенін айтады.${whatIsAPin}${virtualCircuitComment}</comment>
        </block>
       <block type="analog_read">
            <comment pinned="false" h="140" w="460">Бұл блок (аналогтық оқу) түйреуіш арқылы өтетін электр энергиясының мөлшерін сезеді.${whatIsAPin}</comment>
       </block>
   </category>
`;
const logicXMLString = `
<category name="Логика" colour="${COLOR_THEME.CONTROL}">
    <block type="control_if">
        <comment pinned="false" h="150" w="460">"«Егер блоктар» «Егер» бөлімінде не бар болса, онда «Егер» бөлімінде не бар болса, «ақиқат» болса, онда кодты іске қосады. «Егер» бөліміне is_button_pressed блогын қоссаңыз және түйме басылса, онда бөлімнің коды іске қосылады..</comment>
    </block>
    <block type="controls_ifelse">
<comment pinned="false" h="150" w="460">If Else блоктары" "Егер" бөліміндегі нәрсе "Егер" бөліміне тіркелгені "ақиқатқа" тең болса, онда "Сосын" бөліміндегі кодты іске қосады. Егер сіз is_button_pressed блогын IF бөліміне қоссаңыз және түйме басылса, онда бөлімнің коды іске қосылады. Түйме басылмаса, басқа бөлім іске қосылады.</comment>
    </block>
    <block type="logic_compare">
    <comment pinned="false" h="140" w="527">Сол және оң жақ тесіктердегі нәрсені салыстырады және ақиқат немесе жалғанды ​​қайтарады.

Егер оператор = болса, ол екі мәннің де бірдей екенін тексереді.
Оператор ≠ болса, ол екі мәннің де әртүрлі екенін тексереді.</comment>
    </block>
    <block type="logic_operation">
<comment pinned="false" h="170" w="527">Сол және оң жақ тесіктердегі нәрсені салыстырады және ақиқат немесе жалғанды ​​қайтарады.

Оператор «және» болса, ол екі мәннің ақиқатқа тең екенін тексереді.
Егер оператор «немесе» болса, ол мәндердің біреуінің ақиқат екенін тексереді.</comment>
    </block>
    <block type="logic_negate">
    <comment pinned="false" h="80" w="460">Шындықты қабылдап, оны жалғанға айналдырады, ал жалғанды ​​қабылдап, оны шындыққа айналдырады.</comment>
    </block>
    <block type="logic_boolean"></block>
</category>
`;
const loopXMLString = `<category name="Циклдар" colour="${COLOR_THEME.CONTROL}">
     <block type="controls_repeat_ext">
       <value name="TIMES">
         <block type="math_number">
           <field name="NUM">10</field>
         </block>
       </value>
     </block>
     <block type="controls_for">
         <comment pinned="false" h="140" w="460">A for «блокпен санау» айнымалы «to» нүктесіне жеткеннен кейін циклды тоқтататын цикл жасайды. Бұл блокты үйренудің ең жақсы жолы - оны сүйреп апарып, симуляторда оның мәндерімен ойнау.</comment>

       <value name="FROM">
         <block type="math_number">
           <field name="NUM">1</field>
         </block>
       </value>
       <value name="TO">
         <block type="math_number">
           <field name="NUM">10</field>
         </block>
       </value>
       <value name="BY">
         <block type="math_number">
           <field name="NUM">1</field>
         </block>
       </value>
     </block>
   </category>
`;
const DELAY_COMMENT = `Бұл блок Arduino-ны х секундқа кідіртеді. Кешігу жүріп жатқанда ештеңе сезілмейді.`;
const timeXMLString = `<category colour="${COLOR_THEME.ARDUINO}" name="Таймер">
   <block type="time_setup">
   <comment pinned="false" h="80" w="460">Бұл блок бір цикл үшін виртуалды тізбекте қанша уақыт өтетінін орнатады.</comment>
   </block>
   <block type="delay_block">
      <comment pinned="false" h="90" w="460">
      ${DELAY_COMMENT}</comment>

   <value name="DELAY">

       <block type="math_number">
           <field name="NUM">0.2</field>
       </block>
   </value>
   </block>
   <block type="time_seconds">
      <comment pinned="false" h="80" w="460">Arduino қосылған секундтар санын алады.</comment>

   </block>

   </category>`;
const mathXMLString = `
<category name="Математика" colour="${COLOR_THEME.VALUES}">
     <block type="math_number">
       <field name="NUM">123</field>
     </block>
     <block type="math_number_property">
     <value name="NUMBER_TO_CHECK">
         <block type="math_number">
           <field name="NUM">3</field>
         </block>
       </value>
    </block>
     <block type="math_arithmetic">
       <value name="A">
         <block type="math_number">
           <field name="NUM">1</field>
         </block>
       </value>
       <value name="B">
         <block type="math_number">
           <field name="NUM">1</field>
         </block>
       </value>
     </block>
     <block type="string_to_number">
          <comment pinned="false" h="60" w="460">Бұл блок мәтіндік деректерді алып, оны санға айналдырады.</comment>

       <value name="VALUE">
         <block type="text">
           <field name="TEXT">5.35</field>
         </block>
       </value>
     </block>

     <block type="math_round">
       <value name="NUM">
         <block type="math_number">
           <field name="NUM">3.1</field>
         </block>
       </value>
     </block>
     <block type="math_modulo">
       <value name="DIVIDEND">
         <block type="math_number">
           <field name="NUM">64</field>
         </block>
       </value>
       <value name="DIVISOR">
         <block type="math_number">
           <field name="NUM">10</field>
         </block>
       </value>
     </block>
     <block type="math_random_int">
       <value name="FROM">
         <block type="math_number">
           <field name="NUM">1</field>
         </block>
       </value>
       <value name="TO">
         <block type="math_number">
           <field name="NUM">100</field>
         </block>
       </value>
     </block>
   </category>
`;
const colorXMLString = `
<category name="Түстер" colour="${COLOR_THEME.VALUES}">
<block type="color_picker_custom"></block>
<block type="colour_random"></block>
       <block type="colour_rgb">
         <comment pinned="false" h="70" w="460">Бұл реттелетін түсті жасау үшін пайдаланылады.  Реттелетін түсті табу үшін Google "RGB color picker" пайдаланыңыз.</comment>

         <value name="RED">
           <block type="math_number">
             <field name="NUM">100</field>
           </block>
         </value>
         <value name="GREEN">
           <block type="math_number">
             <field name="NUM">50</field>
           </block>
         </value>
         <value name="BLUE">
           <block type="math_number">
             <field name="NUM">0</field>
           </block>
         </value>
       </block>
     </category>
`;
const messageXMLString = `
<category name="Хабарламалар" colour="${COLOR_THEME.ARDUINO}">
   <block type="message_setup">
    <comment pinned="false" h="100" w="460">Бұл блок Компьютер хабарларын жіберу Үшін Arduino және Arduino-дан хабарламалар жіберуге мүмкіндік береді.</comment>

   </block>
   <block type="arduino_send_message">
       <comment pinned="false" h="80" w="460">Бұл блок Arduino-дан компьютерге хабарлама жібереді.</comment>

        <value name="MESSAGE">
            <block type="text">
                <field name="TEXT">Сәлем!</field>
            </block>
        </value>
   </block>
   <block type="arduino_get_message">
    <comment pinned="false" h="80" w="460">Arduino компьютерден алған хабарламаны қайтарады.</comment>
   </block>
   <block type="arduino_receive_message">
       <comment pinned="false" h="80" w="460">Егер Arduino хабарлама алса, true мәнін қайтарады.</comment>

   </block>
   </category>
`;
const ultraSonicXMLString = `
<category name="Ултрадыбыстық сенсор" colour="${COLOR_THEME.SENSOR}" >
       <block type="ultra_sonic_sensor_setup">
       <comment pinned="false" h="180" w="460">Бұл блок қашықтықты өлшейтін Ультрадыбыстық сенсорды орнатады. Ол үшін ультрадыбыстық дыбыс толқындарын пайдаланады.${virtualCircuitComment}</comment>
         <field name="PIN_TRIG">11</field>
         <field name="PIN_ECHO">10</field>
       </block>
       <block type="ultra_sonic_sensor_motion">
        <comment pinned="false" h="60" w="460">Сенсор сезінген сантиметр санын қайтарады.</comment>
       </block>
       </category>
`;
const motorXMLString = `
<category name="Қозғалтқыш" colour="${COLOR_THEME.COMPONENTS}">
   <block type="move_motor">
    <comment pinned="false" h="220" w="460">Мотор нөмірі мотор қалқанында. Жылдамдық қозғалтқыш арқылы қанша электр тоғы өтетінін анықтайды. Қозғалтқышыңыздың қаншалықты үлкен екеніне байланысты нақты жылдамдықты шешеді.

Дәл қазір мотор қозғалысы тек Adafruit мотор қалқанының 1 нұсқасымен жұмыс істейді. Жақында біз 2-нұсқасын және басқа мотор қалқанының кітапханаларын қосатын боламыз.</comment>

   <value name="SPEED">
                   <block type="math_number">
                       <field name="NUM">50</field>
                   </block>
               </value>
               <value name="MOTOR">
                   <block type="math_number">
                       <field name="NUM">1</field>
                   </block>
               </value>
   </block>
   </category>
`;
const variablesXMLString = `
<category name="Айнымалылар" colour="${COLOR_THEME.DATA}" custom="ELECTROBLOCKS_VARIABLES"></category>
`;
const rfidXMLString = `
<category name="RFID" colour="${COLOR_THEME.SENSOR}" >
           <block type="rfid_setup">
            <comment pinned="false" h="150" w="460">Бұл блок RFID сенсорын орнатады және Arduino-ға RFID деректерін жіберу үшін қай түйреуішті пайдалану керектігін айтады..${virtualCircuitComment}</comment>
               <field name="PIN_TX">6</field>
           </block>
           <block type="rfid_card">
           <comment pinned="false" h="60" w="460">RFID чипінің карта нөмірін (мәтіндік деректер) қайтарады.</comment>
           </block>
           <block type="rfid_tag">
                <comment pinned="false" h="60" w="460">RFID чипінің тегін қайтарады.</comment>
           </block>
           <block type="rfid_scan">
                <comment pinned="false" h="80" w="460">Жаңа RFID картасын іздейді. Жаңа RFID чипі табылса, шын мәнін қайтарады.</comment>
           </block>
       </category>
`;
const servoXMLString = `
<category name="Серво қозғалтқыш" colour="${COLOR_THEME.COMPONENTS}">

   <block type="rotate_servo">
    <comment pinned="false" h="180" w="460">Бұл блок сервоның бұрышы мен түйреуіштерін орнатады. Серво - бұл оның қаншалықты айналатынын басқаруға мүмкіндік беретін қозғалтқыш. Сіз болып табылатын түйреуіш Бұл блок серво үшін бұрыш пен түйреуішті орнатады. Серво - бұл оның қаншалықты айналатынын басқаруға мүмкіндік беретін қозғалтқыш. Сіз көрсеткен түйреуіш Arduino сервоның бұрышын басқару үшін пайдаланатын деректер түйреуіш болып табылады..</comment>
   <value name="DEGREE">
   <block type="math_number">
       <field name="NUM">50</field>
   </block>
   </value>
   </block>
   </category>
`;
const temperatureXMLString = `
<category name="Температура сенсоры" colour="${COLOR_THEME.SENSOR}"  >
         <block type="temp_setup">
         <comment pinned="false" h="160" w="460">Бұл сенсор температура мен ылғалдылықты Цельсий бойынша оқиды. Сенсор түрін көрсетуді ұмытпаңыз.${virtualCircuitComment}</comment>
         </block>
         <block type="temp_get_temp">
          <comment pinned="false" h="60" w="460">Температураны Цельсий бойынша қайтарады.</comment>
         </block>
         <block type="temp_get_humidity">
            <comment pinned="false" h="60" w="460">Ылғалдылық пайызын қайтарады.</comment>
         </block>
       </category>
`;
const textXMLString = `
<category name="Мәтін" colour="${COLOR_THEME.VALUES}">
   <block type="text"></block>
   <block type="text_join">
      <comment pinned="false" h="60" w="460">Бірнеше мәтін блоктарын бір мәтін блогына айналдырады.</comment>
   </block>
   <block type="text_length">
   <comment pinned="false" h="80" w="460">Мәтін блогының ішіндегі әріптер санын алады.  Мысалы, "робот" сақтайтын мәтіндік блок 5 қайтарады.</comment>
     <value name="VALUE">
       <block type="text">
         <field name="TEXT">abc</field>
       </block>
     </value>
   </block>
   <block type="parse_string_block">
   <comment pinned="false" h="220" w="460">Бұл блок мәтіндік блокты бөлімдерге бөліп, сол бөлімдердің бірін қайтарады.  Ол мәтіндік блокты бөлгіш таңба бойынша бөледі.  

Сізде "12-0-40" сақтайтын мәтіндік блок бар делік, ал сіздің бөлетін таңбаңыз "-".  Егер сіз позицияға 1 қойсаңыз, ол 12-ні қайтарады.  Егер сіз 40 алғыңыз келсе, онда сіз позицияға 2-ден өтесіз.</comment>

     <value name="VALUE">
       <block type="text">
         <field name="TEXT">blue,red,green</field>
       </block>
     </value>
     <value name="POSITION">
       <block type="math_number">
         <field name="NUM">1</field>
       </block>
     </value>
   </block>

   <block type="number_to_string">
   <comment pinned="false" h="190" w="460">Бұл блок санды мәтіндік блокқа айналдырады.  Дәлдік санның қанша ондық бөлшегі мәтінге айналатынын басқарады.    
   
Айталық, сізде 5.23234 бар, ал дәлдік үшін 2-ні көрсетесіз.  Бұл блок "5.23"қайтаратын мәтіндік блок.</comment>
     <value name="NUMBER">
       <block type="math_number">
         <field name="NUM">5.23234</field>
       </block>
     </value>
   </block>
   <block type="text_isEmpty">
   <comment pinned="false" h="60" w="460">Мәтін блогының ішінде ештеңе болмаса, true мәнін қайтарады.</comment>
     <value name="VALUE">
       <block type="text">
         <field name="TEXT"></field>
       </block>
     </value>
   </block>
   <block type="text_changeCase">
     <value name="TEXT">
       <block type="text">
         <field name="TEXT">abc</field>
       </block>
     </value>
   </block>
   </category>
`;
const passiveBuzzerXMLString = `
<category name="Пассивті дыбыстық сигнал" colour="${COLOR_THEME.COMPONENTS}" >
       
       <block type="passive_buzzer_tone">
       <value name="TONE">
                   <block type="math_number">
                       <field name="NUM">123</field>
                   </block>
               </value>
        <comment pinned="false" h="60" w="460">Бұл пассивті дыбыстық сигналды қалаған кез келген тонға орнатады. </comment>
       </block>

       <block type="passive_buzzer_note">
       <field name="TONE">131</field>
        <comment pinned="false" h="60" w="460">Бұл пассивті сигналды қалаған жазбаға орнатады..</comment>
       </block>
       </category>
`;
const stepperMotorXMLString = `
<category name="Қадамдық қозғалтқыш" colour="${COLOR_THEME.COMPONENTS}" >
       
       <block type="stepper_motor_setup">
             <field name="PIN_1">11</field>
             <field name="PIN_2">10</field>
             <field name="PIN_3">9</field>
             <field name="PIN_4">8</field>
             <field name="SPEED">10</field>
             <field name="TOTAL_STEPS">200</field>

        <comment pinned="false" h="140" w="460">Бұл блок қадамдық қозғалтқышты орнатады. Қадамдық қозғалтқыш оның айналу күйін басқаруға мүмкіндік береді.

Әрбір қадамның қаншалықты үлкен болатынын бақылау үшін қадамдар санын пайдаланыңыз. Сан неғұрлым аз болса, қадам соғұрлым үлкен болады.   </comment>
       </block>

       <block type="stepper_motor_move">
       <value name="STEPS">
                   <block type="math_number">
                       <field name="NUM">3</field>
                   </block>
               </value>
        <comment pinned="false" h="80" w="460">Бұл блоктар қадамдық қозғалтқыш қозғалатын көптеген қадамдарды басқарады</comment>
       </block>
       </category>

`;
const digitalDisplayXMLString = `<category name="Digit Display" colour="${COLOR_THEME.COMPONENTS}">
       <block type="digital_display_setup">
            <comment pinned="false" h="150" w="460">Сандық дисплейде сандар мен әріптер көрсетіледі.  Тек 7 жарықдиодты сызық болғандықтан, кейбір таңбалар шектеулі болуы мүмкін</comment>
           <field name="CLK_PIN">10</field>
    <field name="DIO_PIN">11</field>

       </block>
       <block type="digital_display_set">
            <comment pinned="false" h="70" w="460">Мәтінді орнатады және түстерді қосады және өшіреді.</comment>
            <value name="TEXT">
                <block type="text">
                    <field name="TEXT">Робот</field>
                </block>
            </value>
       </block>
   </category>`;
const joystickXMLString = `<category name="Джойстик" colour="${COLOR_THEME.SENSOR}">
   <block type="joystick_setup">
    <field name="PIN_X">A1</field>
    <field name="PIN_Y">A3</field>
    <field name="PIN_BUTTON">9</field>

    <comment pinned="false" h="400" w="460" >X және Y түйреуіштері қуаныш таяқшасының қай жерде орналасқанын анықтау үшін пайдаланылады. Түймешік түйреуіш джойстик басылып жатқанын анықтау үшін қолданылады.
    ${whatIsAPin}${virtualCircuitComment}
    </comment>
   </block>

    <block type="joystick_angle">
            <comment pinned="false" h="70" w="460" >Джойстик орналасқан бұрышты қайтарыңыз.
        </comment>
    </block>

    <block type="joystick_engaged">
            <comment pinned="false" h="80" w="460" >Біреу джойстикті бір орынға жылжытып жатқанда, шын екенін қайтарады.
        </comment>
    </block>
   <block type="joystick_button">
            <comment pinned="false" h="80" w="460" >Егер біреу джойстикті басып тұрса, шын екенін қайтарады.
        </comment>
    </block>
</category>`;
const thermistorXMLString = `
<category name="Термистор" colour="${COLOR_THEME.SENSOR}" >
       <block type="thermistor_setup">
            <comment pinned="false" h="180" w="460">Бұл блок температураны өлшеу үшін қолданылатын термисторды орнатады.${virtualCircuitComment}</comment>
            <field name="PIN">A0</field>

       </block>

       <block type="thermistor_read">
        <comment pinned="false" h="60" w="460">Температураны Цельсий бойынша қайтарыңыз.</comment>
       </block>
       </category>
`;
[
  {
    color: COLOR_THEME.CONTROL,
    category: "NONE",
    name: "TOP_LEVEL",
    toolBoxEntries: [
      {
        name: "Logic",
        xml: logicXMLString
      },
      {
        name: "Loop",
        xml: loopXMLString
      },
      {
        name: "My Blocks",
        xml: functionXMLString
      },
      {
        name: "Variables",
        xml: variablesXMLString
      },
      {
        name: "List",
        xml: listXMLString
      },
      {
        name: "Color",
        xml: colorXMLString
      },
      {
        name: "Math",
        xml: mathXMLString
      },
      {
        name: "Text",
        xml: textXMLString
      },
      {
        name: "Code",
        xml: arduinoXMLString
      },
      {
        name: "Message",
        xml: messageXMLString
      },
      {
        name: "Time",
        xml: timeXMLString
      }
    ]
  },
  {
    color: COLOR_THEME.COMPONENTS,
    category: "Component",
    name: "Қосымша құрылғылар",
    toolBoxEntries: [
      { name: "Bluetooth", xml: bluetoothXMLString },
      { name: "Digital Display", xml: digitalDisplayXMLString },
      { name: "FastLED", xml: fastLEDXMLString },
      { name: "LCD Screen", xml: lcdScreenXMLString },
      { name: "Led", xml: ledXMLString },
      { name: "Led Matrix", xml: ledMatrixXMLString },
      { name: "Motor", xml: motorXMLString },
      //   { name: "Neo Pixel", xml: neoPixelXMLString },
      { name: "Passive Buzzer", xml: passiveBuzzerXMLString },
      { name: "Pins", xml: writePinXMLString },
      { name: "RBG Led", xml: rgbLedXMLString },
      { name: "Servos", xml: servoXMLString },
      { name: "Stepper Motors", xml: stepperMotorXMLString }
    ]
  },
  {
    color: COLOR_THEME.SENSOR,
    category: "Sensors",
    name: "Сенсорлар",
    toolBoxEntries: [
      { name: "Analog", xml: analogSensorXMLString },
      { name: "Button", xml: buttonXMLString },
      { name: "Digital Sensor", xml: digitalSensorXMLString },
      { name: "IR Remote", xml: irRmoteXMLString },
      { name: "JoyStick", xml: joystickXMLString },
      { name: "Motion Sensor", xml: ultraSonicXMLString },
      { name: "RFID", xml: rfidXMLString },
      { name: "Temperature/Humidity", xml: temperatureXMLString },
      { name: "Thermistor", xml: thermistorXMLString }
    ]
  }
];
const currentFrameStore = writable(void 0);
const currentFrameStore$1 = {
  subscribe: currentFrameStore.subscribe,
  set: currentFrameStore.set
};
var PortState = /* @__PURE__ */ ((PortState2) => {
  PortState2["CLOSE"] = "CLOSE";
  PortState2["CLOSING"] = "CLOSING";
  PortState2["OPEN"] = "OPEN";
  PortState2["OPENNING"] = "OPENNING";
  PortState2["UPLOADING"] = "UPLOADING";
  return PortState2;
})(PortState || {});
const storeStatus = writable(
  "CLOSE"
  /* CLOSE */
);
const arduinoStore = {
  subscribe: storeStatus.subscribe,
  set: storeStatus.set
};
class SerialPort {
  constructor(options, onMessage2) {
    this.onMessage = onMessage2;
    this.options = options || {};
    this.browser = true;
    this.path = this.options.path;
    this.isOpen = false;
    this.port = null;
    this.writer = null;
    this.reader = null;
    this.baudRate = this.options.baudRate;
    this.requestOptions = this.options.requestOptions || {};
    this.messageRaw = "";
    if (this.options.autoOpen)
      this.open();
  }
  browser;
  options;
  path;
  isOpen;
  port;
  writer;
  reader;
  baudRate;
  requestOptions;
  messageRaw;
  chunks = "";
  list(callback) {
    return navigator.serial.getPorts().then((list) => {
      if (callback) {
        return callback(null, list);
      }
    }).catch((error) => {
      if (callback) {
        return callback(error);
      }
    });
  }
  open(callback) {
    window.navigator.serial.requestPort(this.requestOptions).then((serialPort2) => {
      this.port = serialPort2;
      if (this.isOpen)
        return;
      return this.port.open({ baudRate: this.baudRate || 57600, baudrate: this.baudRate || 57600 });
    }).then(() => this.writer = this.port.writable.getWriter()).then(() => this.reader = this.port.readable.getReader()).then(async () => {
      this.isOpen = true;
      callback(null);
      while (this.port.readable.locked) {
        try {
          const { value, done } = await this.reader.read();
          if (done) {
            break;
          }
          let textDecoder = new TextDecoder();
          this.chunks += textDecoder.decode(value);
          const lines = this.chunks.split("\n");
          this.chunks = lines.pop();
          lines.forEach((line) => this.onMessage(line));
        } catch (e) {
          console.error(e);
        }
      }
    }).catch((error) => {
      callback(error);
    });
  }
  async close(callback) {
    try {
      await this.reader.cancel();
      await this.reader.releaseLock();
      await this.writer.releaseLock();
      await this.port.close();
      this.isOpen = false;
      this.chunks = "";
    } catch (error) {
      if (callback)
        return callback(error);
      throw error;
    }
    callback && callback(null);
  }
  async set(props = {}, callback) {
    try {
      const signals = {};
      if (Object.prototype.hasOwnProperty.call(props, "dtr")) {
        signals.dataTerminalReady = props.dtr;
      }
      if (Object.prototype.hasOwnProperty.call(props, "rts")) {
        signals.requestToSend = props.rts;
      }
      if (Object.prototype.hasOwnProperty.call(props, "brk")) {
        signals.break = props.brk;
      }
      if (Object.keys(signals).length > 0) {
        await this.port.setSignals(signals);
      }
    } catch (error) {
      if (callback)
        return callback(error);
      throw error;
    }
    if (callback)
      return callback(null);
  }
  write(message, callback) {
    let textEncoder = new TextEncoder();
    this.writer.write(textEncoder.encode(message));
    if (callback)
      return callback(null);
  }
  async read(callback) {
    let buffer;
    try {
      buffer = await this.reader.read();
    } catch (error) {
      if (callback)
        return callback(error);
      throw error;
    }
    if (callback)
      callback(null, buffer);
  }
  // TODO: is this correct?
  flush(callback) {
    console.warn("flush method is a NOP right now");
    if (callback)
      return callback(null);
  }
  // TODO: is this correct?
  drain(callback) {
    console.warn("drain method is a NOP right now");
    if (callback)
      return callback(null);
  }
}
let serialPort;
const arduinoMessageStore = writable(void 0);
const onMessage = (message) => {
  arduinoMessageStore.set({
    message,
    type: "Arduino",
    id: (/* @__PURE__ */ new Date()).getTime() + "_" + Math.random().toString(),
    time: (/* @__PURE__ */ new Date()).toLocaleTimeString()
  });
  wait(20);
};
const connect = async (baudRate) => {
  serialPort = new SerialPort(
    {
      requestOptions: {
        // Filter on devices with the Arduino USB vendor ID.
        // filters: [{ usbVendorId: 0x2341 }], // todo mega arduino
      },
      baudRate
    },
    onMessage
  );
  return new Promise((res, rej) => {
    serialPort.open((err) => {
      console.log(err);
      if (!err) {
        res(void 0);
        return;
      }
      rej(err);
    });
  });
};
const closePort = async () => {
  await serialPort.close((info) => console.log("closed", info));
};
const sendMessage = async (message) => {
  await serialPort.write(message, (err) => {
    if (err) {
      console.log(err, "sendmessage");
    }
    arduinoMessageStore.set({
      message,
      type: "Computer",
      id: (/* @__PURE__ */ new Date()).getTime() + "_" + Math.random().toString(),
      time: (/* @__PURE__ */ new Date()).toLocaleTimeString()
    });
  });
};
const arduionMessageStore = {
  subscribe: arduinoMessageStore.subscribe,
  connect,
  closePort,
  sendMessage
};
const updateLoopBlockStore = writable(1);
({
  subscribe: updateLoopBlockStore.subscribe,
  update: updateLoopBlockStore.update
});
export {
  PortState as P,
  WindowType as W,
  arduinoStore as a,
  arduionMessageStore as b,
  getBlockById as c,
  arduinoLoopBlockShowNumberOfTimesThroughLoop as d,
  currentFrameStore$1 as e,
  frameStore as f,
  getAllBlocks as g,
  rgbToHex as h,
  resizeStore as r
};
