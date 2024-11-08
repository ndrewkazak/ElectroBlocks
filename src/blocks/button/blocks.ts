  import Blockly from "blockly";
import {
  configuredPins,
  getAvailablePins,
} from "../../core/blockly/helpers/getAvialablePinsFromSetupBlock";
import loopTimes from "../../core/blockly/helpers/looptimes";
import { COLOR_THEME } from "../../core/blockly/constants/colors";
import { selectBoardBlockly } from "../../core/microcontroller/selectBoard";
import { virtualCircuitComment, whatIsAPin } from "../comment-text";
const buttonSetupBlock: any = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("./blocks/button/button.png", 15, 15))
      .appendField("Батырманы орнату");

    this.appendDummyInput()
      .appendField("Орнатылған PIN# ")
      .appendField(
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
    this.appendDummyInput()
      .appendField("Қайталау саны ")
      .appendField(
        new Blockly.FieldDropdown(() => {
          return loopTimes();
        }),
        "LOOP"
      );
    this.appendDummyInput()
      .appendField("Батырма басылулы ма: ")
      .appendField(new Blockly.FieldCheckbox("TRUE"), "is_pressed");
    
    this.appendDummyInput("COPY_ALL")
    .appendField("Барлығын көшіру: ")
    .appendField(new Blockly.FieldCheckbox(false), "COPY_SAME");
    
    this.setColour(COLOR_THEME.SENSOR);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["button_setup"] = buttonSetupBlock;

const isBtnPressedBlock: any = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage("./blocks/button/button.png", 15, 15, "*")
      )
      .appendField("Батырма")
      .appendField(
        new Blockly.FieldDropdown(() => {
          return configuredPins(
            "button_setup",
            selectBoardBlockly().digitalPins
          );
        }),
        "PIN"
      )
      .appendField("басылған ба?");
    this.setOutput(true, "Boolean");

    this.setColour(COLOR_THEME.SENSOR);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["is_button_pressed"] = isBtnPressedBlock;
