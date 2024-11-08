import { Line } from "@svgdotjs/svg.js";
import { b as ANALOG_PINS, c as arduinoComponentStateToId } from "./arduino-component-id.js";
import "lodash";
const findComponentConnection = (element, connectionId) => {
  const connection = findSvgElement(connectionId, element);
  return {
    x: connection.cx() + element.x(),
    y: connection.y() + connection.height() + element.y()
  };
};
const findArduinoConnectionCenter = (element, connectionId) => {
  const connection = findSvgElement(connectionId, element);
  if (connection instanceof Line) {
    return {
      x: connection.cx() + element.x(),
      y: connection.plot()[0][1] + element.y()
    };
  }
  return {
    x: connection.cx() + element.x(),
    y: connection.cy() + element.y()
  };
};
const findSvgElement = (id, draw) => {
  return draw.findOne("#" + id);
};
const findMicronControllerEl = (draw) => {
  return draw.findOne("#microcontroller_main_svg");
};
var LED_COLORS = /* @__PURE__ */ ((LED_COLORS2) => {
  LED_COLORS2["LED_ON"] = "#ffa922";
  LED_COLORS2["LED_OFF"] = "#F2F2F2";
  LED_COLORS2["POWER_ON"] = "#49ff7e";
  return LED_COLORS2;
})(LED_COLORS || {});
const colorBrightnessAdjuster = (hex, lum) => {
  hex = String(hex).replace(/[^0-9a-f]/gi, "");
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  lum = lum || 0;
  var rgb = "#", c, i;
  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
    rgb += ("00" + c).substr(c.length);
  }
  return rgb;
};
const positionComponent = (element, arduino, draw, hole, isDown, connectionId) => {
  const holeId = `pin${hole}${isDown ? "E" : "F"}`;
  element.x(
    arduino.x() + findSvgElement(holeId, draw).cx() - findSvgElement(connectionId, element).cx()
  );
  element.y(
    arduino.y() + findSvgElement("breadboard", arduino).y() - 5 - element.height()
  );
};
const resistorSvg = '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="6" height="16.25" viewBox="0 0 6 16.25">\n  <g id="WIRE_2">\n    <line x1="3" y1="1" x2="3" y2="3" style="fill: none;stroke: #999;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2px"/>\n  </g>\n  <g id="WIRE_1">\n    <line x1="3" y1="11.75" x2="3" y2="15.25" style="fill: none;stroke: #999;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 2px"/>\n  </g>\n  <g id="base">\n    <rect y="2.57" width="6" height="10" style="fill: #efd49e"/>\n  </g>\n  <line id="BAND_4" x1="6" y1="11" y2="11" style="fill: #c1272d;stroke: #ffff4d;stroke-miterlimit: 10"/>\n  <line id="BAND_3" x1="6" y1="8.52" y2="8.52" style="fill: #c1272d;stroke: #93581c;stroke-miterlimit: 10"/>\n  <line id="BAND_2" x1="6" y1="6.26" y2="6.26" style="fill: #c1272d;stroke: #1d9135;stroke-miterlimit: 10"/>\n  <line id="BAND_1" x1="6" y1="4" y2="4" style="fill: #c1272d;stroke: #93581c;stroke-miterlimit: 10"/>\n</svg>\n';
const horizontalResistorSvg = '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="16.25" height="6" viewBox="0 0 16.25 6">\n  <g id="WIRE_2">\n    <line x1="1" y1="3" x2="3" y2="3" style="fill: none;stroke: #999;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2px"/>\n  </g>\n  <g id="WIRE_1">\n    <line x1="11.75" y1="3" x2="15.25" y2="3" style="fill: none;stroke: #999;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 2px"/>\n  </g>\n  <g id="base">\n    <rect x="2.57" width="10" height="6" style="fill: #efd49e"/>\n  </g>\n  <line id="BAND_4" x1="11" x2="11" y2="6" style="fill: #c1272d;stroke: #ffff4d;stroke-miterlimit: 10"/>\n  <line id="BAND_3" x1="8.52" x2="8.52" y2="6" style="fill: #c1272d;stroke: #93581c;stroke-miterlimit: 10"/>\n  <line id="BAND_2" x1="6.26" x2="6.26" y2="6" style="fill: #c1272d;stroke: #1d9135;stroke-miterlimit: 10"/>\n  <line id="BAND_1" x1="4" x2="4" y2="6" style="fill: #c1272d;stroke: #93581c;stroke-miterlimit: 10"/>\n</svg>\n';
const resistorIndex = [
  "BLACK",
  "BROWN",
  "RED",
  "ORANGE",
  "YELLOW",
  "GREEN",
  "BLUE",
  "PURPLE",
  "GRAY",
  "WHITE"
];
const resistorColor = {
  BROWN: "#964B00",
  RED: "#FF0000",
  ORANGE: "#FFA500",
  YELLOW: "#FFFF00",
  GREEN: "#00FF00",
  BLUE: "#0000FF",
  PURPLE: "#AA00AA",
  GRAY: "#101010",
  WHITE: "#FFFFFF",
  BLACK: "#000000"
};
const ohmsToBands = (ohms) => {
  const firstColor = resistorColor[resistorIndex[+ohms.toString()[0]]];
  const secondColor = resistorColor[resistorIndex[+ohms.toString()[1]]];
  let thirdColor = "";
  if (ohms < 100) {
    thirdColor = resistorColor.BLACK;
  } else {
    thirdColor = resistorColor[resistorIndex[ohms.toString().length - 2]];
  }
  return [firstColor, secondColor, thirdColor];
};
const createWireFromArduinoToBreadBoard = (pin, arduinoEl, draw, breadBoardHoleId, componentId, board) => {
  showPin(draw, pin);
  const hole = findBreadboardHoleXY(breadBoardHoleId, arduinoEl, draw);
  const pinConnection = board.pinConnections[pin];
  const arduinoPin = findArduinoConnectionCenter(arduinoEl, pinConnection.id);
  const line = draw.line().plot(hole.x, hole.y, arduinoPin.x, arduinoPin.y).stroke({ width: 2, color: pinConnection.color, linecap: "round" });
  line.data("component-id", componentId);
  line.data("type", "wire");
  line.data("update-wire", false);
};
const createWireComponentToBreadboard = (holeId, componentEl, draw, arduinoEl, componentConnectionId, componentId, color) => {
  const hole = findBreadboardHoleXY(holeId, arduinoEl, draw);
  const componentPin = findComponentConnection(
    componentEl,
    componentConnectionId
  );
  const line = draw.line().plot(hole.x, hole.y, componentPin.x, componentPin.y).stroke({ width: 2, color, linecap: "round" });
  line.data("connection-id", componentConnectionId);
  line.data("component-id", componentId);
  line.data("type", "wire");
  line.data("update-wire", true);
  line.data("hole-id", holeId);
};
const createWireBreadboard = (holeIdA, holeIdB, color, draw, arduinoEl, componentId) => {
  const holeA = findBreadboardHoleXY(holeIdA, arduinoEl, draw);
  const holeB = findBreadboardHoleXY(holeIdB, arduinoEl, draw);
  const line = draw.line().plot(holeA.x, holeA.y, holeB.x, holeB.y).stroke({ width: 2, color, linecap: "round" });
  line.data("component-id", componentId);
  line.data("type", "wire");
  line.data("update-wire", false);
};
const getGroundorPowerWireLetter = (isDown, type) => {
  if (isDown && type === "power") {
    return "W";
  }
  if (isDown && type === "ground") {
    return "X";
  }
  if (!isDown && type === "power") {
    return "Y";
  }
  return "Z";
};
const createGroundOrPowerWire = (hole, isDown, componentEl, draw, arduino, componentId, type) => {
  const groundHole = `pin${hole}${isDown ? "E" : "F"}`;
  const pinConnectionId = type === "ground" ? "PIN_GND" : "PIN_POWER";
  const color = type === "ground" ? "#000" : "#AA0000";
  const breadBoardHoleA = `pin${hole}${isDown ? "A" : "J"}`;
  const breadBoardHoleB = `pin${hole}${getGroundorPowerWireLetter(
    isDown,
    type
  )}`;
  createWireComponentToBreadboard(
    groundHole,
    componentEl,
    draw,
    arduino,
    pinConnectionId,
    componentId,
    color
  );
  createWireBreadboard(
    breadBoardHoleA,
    breadBoardHoleB,
    color,
    draw,
    arduino,
    componentId
  );
};
const createComponentWire = (hole, isDown, componentEl, pin, draw, arduino, componentId, connectionId, board) => {
  const holeId = `pin${hole}${isDown ? "E" : "F"}`;
  const breadboardHoleIdToBoard = `pin${hole}${isDown ? "A" : "J"}`;
  const color = board.pinConnections[pin].color;
  createWireComponentToBreadboard(
    holeId,
    componentEl,
    draw,
    arduino,
    connectionId,
    componentId,
    color
  );
  createWireFromArduinoToBreadBoard(
    pin,
    arduino,
    draw,
    breadboardHoleIdToBoard,
    componentId,
    board
  );
};
const findBreadboardHoleXY = (pinHoleId, arduino, draw) => {
  const hole = findSvgElement(pinHoleId, draw);
  return {
    x: hole.cx() + arduino.x(),
    y: hole.cy() + arduino.y()
  };
};
const findResistorBreadboardHoleXY = (holeId, arduino, draw) => {
  const hole = findSvgElement(holeId, draw);
  window.hole = hole;
  return {
    x: hole.cx() + arduino.x(),
    y: hole.findOne("circle").cy() + arduino.y() - 1
  };
};
const createResistor = (arduino, draw, hole, isConnecting, componentId, direction, ohms) => {
  const svgString = direction === "vertical" ? resistorSvg : horizontalResistorSvg;
  const resistorEl = draw.svg(svgString).last();
  const [bandColor1, bandColor2, bandColor3] = ohmsToBands(ohms);
  resistorEl.findOne("#BAND_1").node.style.stroke = bandColor1;
  resistorEl.findOne("#BAND_2").node.style.stroke = bandColor2;
  resistorEl.findOne("#BAND_3").node.style.stroke = bandColor3;
  resistorEl.data("component-id", componentId);
  const holeId = `pin${hole}${isConnecting ? "F" : "D"}`;
  const { x, y } = findResistorBreadboardHoleXY(holeId, arduino, draw);
  if (direction === "vertical") {
    resistorEl.cx(x);
    resistorEl.y(y);
  } else {
    resistorEl.x(x - 1);
    resistorEl.y(y - 2);
  }
  if (isConnecting) {
    createWireComponentToBreadboard(
      `pin${hole}E`,
      resistorEl,
      draw,
      arduino,
      "WIRE_1",
      componentId,
      "#999"
    );
  }
};
const showPin = (draw, pin) => {
  if (ANALOG_PINS.includes(pin)) {
    const wire = draw.findOne(`#${pin}`);
    if (wire) {
      wire.show();
    }
  }
};
const ledColors = [
  "red",
  "green",
  "blue",
  "yellow",
  "white",
  "purple",
  "orange"
];
const lightColorsShades = {
  red: "#ff8080",
  green: "#80ff80",
  blue: "#8080ff",
  yellow: "#ffff80",
  orange: "#ffcf80",
  white: "#ffffff",
  purple: "#ff80ff"
};
const ledCreate = (state, ledEl, arduinoEl, draw, board, settings) => {
  changeLedColor(state, ledEl);
  const pinText = ledEl.findOne("#PIN_NUMBER");
  pinText.node.innerHTML = state.pin;
  const ledText = ledEl.findOne("#LED_TEXT");
  ledText.node.innerHTML = "";
  ledEl.findOne("#LIGHT_ON").node.style.opacity = state.state.toString();
};
const ledPosition = (state, ledEl, arduinoEl, draw, board, area) => {
  const { holes, isDown } = area;
  positionComponent(ledEl, arduinoEl, draw, holes[3], isDown, "POWER");
};
const updateLed = (state, ledEl, draw) => {
  const ledText = ledEl.findOne("#LED_TEXT");
  if (!state.fade) {
    ledText.node.innerHTML = state.state === 1 ? "on" : "off";
    ledEl.findOne("#LIGHT_ON").node.style.opacity = state.state.toString();
  }
  if (state.fade) {
    ledText.node.innerHTML = `${state.state}`;
    ledEl.findOne("#LIGHT_ON").node.style.opacity = (state.state / 125).toString();
  }
  ledText.cx(23);
  changeLedColor(state, ledEl);
};
const resetLed = (componentEl) => {
  const ledText = componentEl.findOne("#LED_TEXT");
  ledText.node.innerHTML = "";
  componentEl.findOne("#LIGHT_ON").node.style.opacity = "0";
};
const createWiresLed = (state, draw, ledEl, arduino, id, board, area) => {
  const { holes, isDown } = area;
  createGroundOrPowerWire(holes[1], isDown, ledEl, draw, arduino, id, "ground");
  const color = board.pinConnections[state.pin].color;
  createWireComponentToBreadboard(
    `pin${holes[2]}${isDown ? "E" : "F"}`,
    ledEl,
    draw,
    arduino,
    "POWER",
    id,
    color
  );
  createResistor(
    arduino,
    draw,
    holes[2],
    false,
    arduinoComponentStateToId(state),
    "horizontal",
    300
  );
  const holeId = `pin${holes[4]}${isDown ? "A" : "J"}`;
  createWireFromArduinoToBreadBoard(
    state.pins[0],
    arduino,
    draw,
    holeId,
    id,
    board
  );
};
const changeLedColor = (state, ledEl) => {
  const hexColor = state.color;
  const mapColor = {
    "#ff0000": "red",
    "#008000": "green",
    "#0000ff": "blue",
    "#ffff00": "yellow",
    "#ffffff": "white",
    "#800080": "purple",
    "#ffa500": "orange"
  };
  let ledColor = mapColor[hexColor];
  let ledLightColor = lightColorsShades[ledColor];
  ledEl.data("pin-number", state.pin);
  ledEl.data("color", ledColor);
  const mainColor = ledEl.findOne("#MAIN_COLOR");
  mainColor.fill(ledColor);
  const secondColorEl = ledEl.findOne("#SECOND_COLOR");
  secondColorEl.fill(ledLightColor);
};
export {
  LED_COLORS as L,
  createGroundOrPowerWire as a,
  createResistor as b,
  createComponentWire as c,
  createWireComponentToBreadboard as d,
  createWireFromArduinoToBreadBoard as e,
  createWireBreadboard as f,
  findMicronControllerEl as g,
  findSvgElement as h,
  colorBrightnessAdjuster as i,
  createWiresLed as j,
  ledCreate as k,
  ledPosition as l,
  ledColors as m,
  positionComponent as p,
  resetLed as r,
  updateLed as u
};
