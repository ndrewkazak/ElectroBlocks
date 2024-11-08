import { c as create_ssr_component, v as validate_component, b as add_attribute, d as each, e as escape } from "../../../chunks/ssr.js";
import { B as Button } from "../../../chunks/Button.js";
import { F as FormGroup, I as Input } from "../../../chunks/Input.js";
import { L as Label } from "../../../chunks/Label.js";
import "../../../chunks/Theme.svelte_svelte_type_style_lang.js";
import { a as authStore } from "../../../chunks/model.js";
import "blockly";
import "firebase/firestore";
import "firebase/storage";
import "firebase/app";
import { s as settingsStore } from "../../../chunks/arduino-component-id.js";
import { F as FlashMessage } from "../../../chunks/FlashMessage.js";
import "lodash";
import "sweetalert";
import { M as MicroControllerType } from "../../../chunks/microcontroller.js";
import { m as ledColors } from "../../../chunks/virtual-circuit.js";
const css = {
  code: ".color.svelte-192s5fr{flex:1;margin:2px;height:30px;cursor:pointer}.color-container.svelte-192s5fr{display:flex}.selected.svelte-192s5fr{border:black 10px dashed}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { FormGroup, Input, Label, Button } from \\"@sveltestrap/sveltestrap\\";\\nimport { defaultSetting } from \\"../../firebase/model\\";\\nimport { fbSaveSettings } from \\"../../firebase/db\\";\\nimport authStore from \\"../../stores/auth.store\\";\\nimport settingsStore from \\"../../stores/settings.store\\";\\nimport FlashMessage from \\"../../components/electroblocks/ui/FlashMessage.svelte\\";\\nimport _ from \\"lodash\\";\\nimport { onErrorMessage } from \\"../../help/alerts\\";\\nimport { MicroControllerType } from \\"../../core/microcontroller/microcontroller\\";\\nimport { ledColors } from \\"../../blocks/led/virtual-circuit\\";\\nlet uid;\\nlet settings;\\nlet showMessage = false;\\nlet previousSettings = null;\\nsettingsStore.subscribe((newSettings) => {\\n  settings = newSettings;\\n});\\nasync function onSaveSettings() {\\n  await saveSettings(settings);\\n}\\nasync function onReset() {\\n  await saveSettings(defaultSetting);\\n}\\nfunction changeLedColor(e) {\\n  settings.ledColor = e.target.getAttribute(\\"data-color\\");\\n}\\nasync function saveSettings(settings2) {\\n  if (_.isEqual(previousSettings, settings2)) {\\n    showMessage = true;\\n    console.log(\\"blocked saved\\", previousSettings, settings2);\\n    return;\\n  }\\n  if (uid) {\\n    try {\\n      await fbSaveSettings(uid, settings2);\\n      console.log(\\"saved settings\\", settings2);\\n    } catch (e) {\\n      onErrorMessage(\\"Please try again in 5 minutes.\\", e);\\n    }\\n  }\\n  settingsStore.set(settings2);\\n  previousSettings = { ...settings2 };\\n  showMessage = true;\\n}\\nauthStore.subscribe((auth) => {\\n  uid = auth.uid;\\n});\\n<\/script>\\n\\n{#if settings}\\n  <div class=\\"row\\">\\n    <div class=\\"col\\">\\n      <FormGroup>\\n        <Label for=\\"boardType\\">MicroController</Label>\\n        <Input bind:value={settings.boardType} type=\\"select\\" id=\\"boardType\\">\\n          <option value={MicroControllerType.ARDUINO_UNO}>Arduino Uno</option>\\n          <option value={MicroControllerType.ARDUINO_MEGA}>Arduino Mega</option>\\n        </Input>\\n      </FormGroup>\\n    </div>\\n  </div>\\n\\n  <div class=\\"row\\">\\n    <div class=\\"col\\">\\n      <FormGroup>\\n        <Label for=\\"max-time-per-move\\">Milliseconds Per Move</Label>\\n        <Input\\n          bind:value={settings.maxTimePerMove}\\n          type=\\"number\\"\\n          id=\\"max-time-per-move\\"\\n        />\\n      </FormGroup>\\n    </div>\\n  </div>\\n\\n  <div class=\\"row\\">\\n    <div class=\\"col\\">\\n      <Input\\n        type=\\"switch\\"\\n        bind:checked={settings.customLedColor}\\n        label=\\"Custom Led Color\\"\\n      />\\n    </div>\\n  </div>\\n\\n  <div class=\\"row\\">\\n    <div class=\\"col\\">\\n      {#if settings.customLedColor}\\n        <div class=\\"row\\">\\n          <div class=\\"col color-container\\">\\n            {#each ledColors as color (color)}\\n              <!-- svelte-ignore a11y-click-events-have-key-events -->\\n              <!-- svelte-ignore a11y-no-static-element-interactions -->\\n              <div\\n                class=\\"color {color}\\"\\n                on:click={changeLedColor}\\n                style=\\"background-color: {color};\\"\\n                data-color={color}\\n                class:selected={settings.ledColor == color}\\n                id={color}\\n              ></div>\\n            {/each}\\n          </div>\\n        </div>\\n      {/if}\\n    </div>\\n  </div>\\n\\n  <div class=\\"row\\">\\n    <div class=\\"col\\">\\n      <FormGroup>\\n        <Label for=\\"touch-skin-color\\">Touch sensor's finger color</Label>\\n        <Input\\n          bind:value={settings.touchSkinColor}\\n          type=\\"color\\"\\n          id=\\"touch-skin-color\\"\\n        />\\n      </FormGroup>\\n    </div>\\n  </div>\\n\\n  <div class=\\"row\\">\\n    <div class=\\"col\\">\\n      <FormGroup>\\n        <Label for=\\"background-color\\">Arduino's Background Color</Label>\\n        <Input\\n          bind:value={settings.backgroundColor}\\n          type=\\"color\\"\\n          id=\\"background-color\\"\\n        />\\n      </FormGroup>\\n    </div>\\n  </div>\\n\\n  <div class=\\"row\\">\\n    <div class=\\"col\\">\\n      <Button type=\\"button\\" color=\\"success\\" on:click={onSaveSettings}>\\n        Save\\n      </Button>\\n      <Button type=\\"button\\" color=\\"warning\\" on:click={onReset}>Reset</Button>\\n    </div>\\n  </div>\\n{/if}\\n\\n<FlashMessage bind:show={showMessage} message=\\"Successfully Save.\\" />\\n\\n<svelte:head>\\n  <title>ElectroBlocks - Virtual Circuit</title>\\n</svelte:head>\\n\\n<style>\\n  .color {\\n    flex: 1;\\n    margin: 2px;\\n    height: 30px;\\n    cursor: pointer;\\n  }\\n  .color-container {\\n    display: flex;\\n  }\\n  .selected {\\n    border: black 10px dashed;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAuJE,qBAAO,CACL,IAAI,CAAE,CAAC,CACP,MAAM,CAAE,GAAG,CACX,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,OACV,CACA,+BAAiB,CACf,OAAO,CAAE,IACX,CACA,wBAAU,CACR,MAAM,CAAE,KAAK,CAAC,IAAI,CAAC,MACrB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let settings;
  let showMessage = false;
  settingsStore.subscribe((newSettings) => {
    settings = newSettings;
  });
  authStore.subscribe((auth) => {
    auth.uid;
  });
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${settings ? `<div class="row"><div class="col">${validate_component(FormGroup, "FormGroup").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Label, "Label").$$render($$result, { for: "boardType" }, {}, {
          default: () => {
            return `MicroController`;
          }
        })} ${validate_component(Input, "Input").$$render(
          $$result,
          {
            type: "select",
            id: "boardType",
            value: settings.boardType
          },
          {
            value: ($$value) => {
              settings.boardType = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `<option${add_attribute("value", MicroControllerType.ARDUINO_UNO, 0)} data-svelte-h="svelte-59ddc1">Arduino Uno</option> <option${add_attribute("value", MicroControllerType.ARDUINO_MEGA, 0)} data-svelte-h="svelte-13ydzmb">Arduino Mega</option>`;
            }
          }
        )}`;
      }
    })}</div></div> <div class="row"><div class="col">${validate_component(FormGroup, "FormGroup").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Label, "Label").$$render($$result, { for: "max-time-per-move" }, {}, {
          default: () => {
            return `Milliseconds Per Move`;
          }
        })} ${validate_component(Input, "Input").$$render(
          $$result,
          {
            type: "number",
            id: "max-time-per-move",
            value: settings.maxTimePerMove
          },
          {
            value: ($$value) => {
              settings.maxTimePerMove = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      }
    })}</div></div> <div class="row"><div class="col">${validate_component(Input, "Input").$$render(
      $$result,
      {
        type: "switch",
        label: "Custom Led Color",
        checked: settings.customLedColor
      },
      {
        checked: ($$value) => {
          settings.customLedColor = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div> <div class="row"><div class="col">${settings.customLedColor ? `<div class="row"><div class="col color-container svelte-192s5fr">${each(ledColors, (color) => {
      return `  <div class="${[
        "color " + escape(color, true) + " svelte-192s5fr",
        settings.ledColor == color ? "selected" : ""
      ].join(" ").trim()}" style="${"background-color: " + escape(color, true) + ";"}"${add_attribute("data-color", color, 0)}${add_attribute("id", color, 0)}></div>`;
    })}</div></div>` : ``}</div></div> <div class="row"><div class="col">${validate_component(FormGroup, "FormGroup").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Label, "Label").$$render($$result, { for: "touch-skin-color" }, {}, {
          default: () => {
            return `Touch sensor&#39;s finger color`;
          }
        })} ${validate_component(Input, "Input").$$render(
          $$result,
          {
            type: "color",
            id: "touch-skin-color",
            value: settings.touchSkinColor
          },
          {
            value: ($$value) => {
              settings.touchSkinColor = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      }
    })}</div></div> <div class="row"><div class="col">${validate_component(FormGroup, "FormGroup").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Label, "Label").$$render($$result, { for: "background-color" }, {}, {
          default: () => {
            return `Arduino&#39;s Background Color`;
          }
        })} ${validate_component(Input, "Input").$$render(
          $$result,
          {
            type: "color",
            id: "background-color",
            value: settings.backgroundColor
          },
          {
            value: ($$value) => {
              settings.backgroundColor = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      }
    })}</div></div> <div class="row"><div class="col">${validate_component(Button, "Button").$$render($$result, { type: "button", color: "success" }, {}, {
      default: () => {
        return `Save`;
      }
    })} ${validate_component(Button, "Button").$$render($$result, { type: "button", color: "warning" }, {}, {
      default: () => {
        return `Reset`;
      }
    })}</div></div>` : ``} ${validate_component(FlashMessage, "FlashMessage").$$render(
      $$result,
      {
        message: "Successfully Save.",
        show: showMessage
      },
      {
        show: ($$value) => {
          showMessage = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${$$result.head += `<!-- HEAD_svelte-1dwwrco_START -->${$$result.title = `<title>ElectroBlocks - Virtual Circuit</title>`, ""}<!-- HEAD_svelte-1dwwrco_END -->`, ""}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
