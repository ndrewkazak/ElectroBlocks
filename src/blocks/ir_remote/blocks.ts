import Blockly from "blockly";
import loopTimes from "../../core/blockly/helpers/looptimes";
import { COLOR_THEME } from "../../core/blockly/constants/colors";
import { selectBoardBlockly } from "../../core/microcontroller/selectBoard";

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
        flipRtl: false,
      },
    ],
    output: "Boolean",
    colour: COLOR_THEME.SENSOR,
    tooltip: "",
    helpUrl: "",
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
        flipRtl: false,
      },
    ],
    output: "String",
    colour: COLOR_THEME.SENSOR,
    tooltip: "",
    helpUrl: "",
  },
]);

const irSetupBlock: any = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage("./blocks/ir_remote/ir_remote.png", 15, 15)
      )
      .appendField("IR қашықтан басқару құралын орнату");
    this.appendDummyInput()
      .appendField("Аналогты Pin# ")
      .appendField(
        new Blockly.FieldDropdown(() => selectBoardBlockly().analogPins),
        "PIN"
      );
    this.appendDummyInput("SHOW_CODE_VIEW").appendField(
      "-----------------------------"
    );
    this.appendDummyInput()
      .appendField("Қайталау саны")
      .appendField(
        new Blockly.FieldDropdown(() => {
          return loopTimes();
        }),
        "LOOP"
      );
    this.appendDummyInput()
      .appendField("Жаңа код сканерлене ме? ")
      .appendField(
        new Blockly.FieldCheckbox("TRUE", (value) => {
          if ("FALSE" === value) {
            this.getField("code").setValue("");
          }
          return value;
        }),
        "scanned_new_code"
      );   
    this.appendDummyInput()
      .appendField("Код")
      .appendField(
        new Blockly.FieldTextInput("E932B", (value) => {
          if (this.getFieldValue("scanned_new_code") === "FALSE") {
            return null;
          }
          return value;
        }),
        "code"
      )
    this.appendDummyInput("COPY_ALL")
      .appendField("Барлығын көшіру: ")
      .appendField(new Blockly.FieldCheckbox(false), "COPY_SAME");
    this.setColour(COLOR_THEME.SENSOR);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["ir_remote_setup"] = irSetupBlock;
