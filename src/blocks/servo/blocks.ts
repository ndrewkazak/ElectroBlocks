import { selectBoardBlockly } from "../../core/microcontroller/selectBoard";
import Blockly from "blockly";
import { COLOR_THEME } from "../../core/blockly/constants/colors";

Blockly.Blocks["rotate_servo"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("./blocks/servo/servo.png", 15, 15))
      .appendField("Сервоны айналдыру");
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Пин# ")
      .appendField(
        new Blockly.FieldDropdown(() => {
          return selectBoardBlockly().digitalPins;
        }),
        "PIN"
      );
    this.appendValueInput("DEGREE")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Градус:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);

    this.setColour(COLOR_THEME.COMPONENTS);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
