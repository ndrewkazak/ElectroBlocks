import { c as create_ssr_component, f as compute_rest_props, h as spread, i as escape_object, j as escape_attribute_value, v as validate_component } from "../../../../chunks/ssr.js";
import { c as classnames } from "../../../../chunks/utils.js";
import "../../../../chunks/Theme.svelte_svelte_type_style_lang.js";
const ListGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "flush", "horizontal", "numbered", "theme"]);
  let { class: className = "" } = $$props;
  let { flush = false } = $$props;
  let { horizontal = false } = $$props;
  let { numbered = false } = $$props;
  let { theme = null } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.flush === void 0 && $$bindings.flush && flush !== void 0)
    $$bindings.flush(flush);
  if ($$props.horizontal === void 0 && $$bindings.horizontal && horizontal !== void 0)
    $$bindings.horizontal(horizontal);
  if ($$props.numbered === void 0 && $$bindings.numbered && numbered !== void 0)
    $$bindings.numbered(numbered);
  if ($$props.theme === void 0 && $$bindings.theme && theme !== void 0)
    $$bindings.theme(theme);
  classes = classnames(className, "list-group", {
    "list-group-flush": flush,
    "list-group-horizontal": horizontal,
    "list-group-numbered": numbered
  });
  return `${numbered ? `<ol${spread(
    [
      escape_object($$restProps),
      { class: escape_attribute_value(classes) },
      {
        "data-bs-theme": escape_attribute_value(theme)
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</ol>` : `<ul${spread(
    [
      escape_object($$restProps),
      { class: escape_attribute_value(classes) },
      {
        "data-bs-theme": escape_attribute_value(theme)
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</ul>`}`;
});
const ListGroupItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "active", "disabled", "color", "action", "href", "tag"]);
  let { class: className = "" } = $$props;
  let { active = false } = $$props;
  let { disabled = false } = $$props;
  let { color = "" } = $$props;
  let { action = false } = $$props;
  let { href = null } = $$props;
  let { tag = null } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.action === void 0 && $$bindings.action && action !== void 0)
    $$bindings.action(action);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  classes = classnames(className, "list-group-item", {
    active,
    disabled,
    "list-group-item-action": action || tag === "button",
    [`list-group-item-${color}`]: color
  });
  return `${href ? `<a${spread(
    [
      escape_object($$restProps),
      { class: escape_attribute_value(classes) },
      { href: escape_attribute_value(href) },
      { disabled: disabled || null },
      { active: escape_attribute_value(active) }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</a>` : `${tag === "button" ? `<button${spread(
    [
      escape_object($$restProps),
      { class: escape_attribute_value(classes) },
      { type: "button" },
      { disabled: disabled || null },
      { active: escape_attribute_value(active) }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</button>` : `  <li${spread(
    [
      escape_object($$restProps),
      { class: escape_attribute_value(classes) },
      { disabled: disabled || null },
      { active: escape_attribute_value(active) }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</li>`}`}`;
});
const css = {
  code: "h2.svelte-9qr7g{margin-top:20px}h3.svelte-9qr7g{margin-top:15px}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { ListGroup, ListGroupItem } from \\"@sveltestrap/sveltestrap\\";\\nimport config from \\"../../../env\\";\\n<\/script>\\n\\n<style>\\n  h2 {\\n    margin-top: 20px;\\n  }\\n  h3 {\\n    margin-top: 15px;\\n  }\\n  a {\\n    text-decoration: underline;\\n    color: blue;\\n  }\\n</style>\\n\\n<svelte:head>\\n  <title>ElectroBlocks - About</title>\\n</svelte:head>\\n\\n{#if config.site === 'electroblocks-org'}\\n  <div class=\\"row\\">\\n    <div class=\\"col\\">\\n      <h2>Back Story</h2>\\n    </div>\\n  </div>\\n  <div class=\\"row\\">\\n    <div class=\\"col\\">\\n      <p>\\n        ElectroBlocks is website for coding microcontrollers like the Arduino\\n        Uno and Arduino Mega. The basic idea is video editting for code. It\\n        allows you to create code with an easy to use drag and drop language\\n        called Blockly. I wanted to create something easy to use and fun for\\n        kids and adults to learn how to code.\\n      </p>\\n    </div>\\n  </div>\\n\\n  <div class=\\"row\\">\\n    <div class=\\"col\\">\\n      <h2>Thank you</h2>\\n    </div>\\n  </div>\\n  <div class=\\"row\\">\\n    <div class=\\"col\\">\\n      <p>\\n        I have recieved advice and help from a number of mentors and\\n        professionals while building this. None of this would have been possible\\n        without their guidance. I also have volunteer taught and tutored. The\\n        experience from working with students has greatly influenced me. They\\n        are the inspiration behind my work.\\n      </p>\\n    </div>\\n  </div>\\n\\n  <div class=\\"row\\">\\n    <div class=\\"col\\">\\n      <h2>Thank you to all Libraries</h2>\\n    </div>\\n  </div>\\n\\n  <div class=\\"row\\">\\n    <div class=\\"col\\">\\n      <p>Without you none of this would have been possible.</p>\\n    </div>\\n  </div>\\n\\n  <div class=\\"row\\">\\n    <div class=\\"col\\">\\n      <h3>Arduino Libraries</h3>\\n    </div>\\n  </div>\\n  <div class=\\"row\\">\\n    <div class=\\"col\\">\\n      <ListGroup>\\n        <ListGroupItem href=\\"https://www.arduino.cc/\\">Arduino</ListGroupItem>\\n        <ListGroupItem href=\\"https://github.com/arduino/arduino-cli\\">\\n          Arduino CLI\\n        </ListGroupItem>\\n        <ListGroupItem href=\\"https://github.com/noopkat/avrgirl-arduino\\">\\n          ArvGirl Arduino\\n        </ListGroupItem>\\n        <ListGroupItem href=\\"https://github.com/adafruit/Adafruit_NeoPixel\\">\\n          AdaFruit NeoPixel\\n        </ListGroupItem>\\n        <ListGroupItem href=\\"https://github.com/johnrickman/LiquidCrystal_I2C\\">\\n          LiquidCrystal_I2C\\n        </ListGroupItem>\\n        <ListGroupItem href=\\"https://github.com/z3t0/Arduino-IRremote\\">\\n          IRremote\\n        </ListGroupItem>\\n        <ListGroupItem href=\\"https://github.com/adafruit/DHT-sensor-library\\">\\n          DHT sensor library\\n        </ListGroupItem>\\n\\n        <ListGroupItem\\n          href=\\"https://github.com/shaai/Arduino_LED_matrix_sketch\\">\\n          LedControlMS\\n        </ListGroupItem>\\n        <ListGroupItem href=\\"https://github.com/electronicdrops/RFIDRdm630\\">\\n          RFIDRdm630\\n        </ListGroupItem>\\n        <ListGroupItem href=\\"https://github.com/arduino-libraries/Servo\\">\\n          Servo\\n        </ListGroupItem>\\n        <ListGroupItem\\n          href=\\"https://github.com/adafruit/Adafruit-Motor-Shield-library\\">\\n          Adafruit Motor Shield Library\\n        </ListGroupItem>\\n      </ListGroup>\\n    </div>\\n  </div>\\n\\n  <div class=\\"row\\">\\n    <div class=\\"col\\">\\n      <h3>Web Libraries</h3>\\n    </div>\\n  </div>\\n  <div class=\\"row\\">\\n    <div class=\\"col\\">\\n      <ListGroup>\\n        <ListGroupItem href=\\"https://developers.google.com/blockly/\\">\\n          Blockly\\n        </ListGroupItem>\\n        <ListGroupItem href=\\"https://svelte.dev/\\">Svelte</ListGroupItem>\\n        <ListGroupItem href=\\"https://getbootstrap.com\\">Bootstrap</ListGroupItem>\\n        <ListGroupItem href=\\"https://sveltestrap.js.org\\">\\n          SvelteStrap\\n        </ListGroupItem>\\n        <ListGroupItem href=\\"https://svgjs.com/docs/3.0/\\">svg.js</ListGroupItem>\\n        <ListGroupItem href=\\"https://prismjs.com/\\">prismjs</ListGroupItem>\\n        <ListGroupItem href=\\"https://lodash.com/\\">lodash</ListGroupItem>\\n        <ListGroupItem href=\\"https://github.com/eligrey/FileSaver.js#readme\\">\\n          file-saver\\n        </ListGroupItem>\\n        <ListGroupItem href=\\"https://sweetalert.js.org/guides/\\">\\n          sweetalert\\n        </ListGroupItem>\\n        <ListGroupItem href=\\"https://github.com/axios/axios\\">\\n          axios\\n        </ListGroupItem>\\n      </ListGroup>\\n    </div>\\n  </div>\\n{/if}\\n"],"names":[],"mappings":"AAKE,eAAG,CACD,UAAU,CAAE,IACd,CACA,eAAG,CACD,UAAU,CAAE,IACd"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-hvsi25_START -->${$$result.title = `<title>ElectroBlocks - About</title>`, ""}<!-- HEAD_svelte-hvsi25_END -->`, ""} ${`<div class="row" data-svelte-h="svelte-1shb7u"><div class="col"><h2 class="svelte-9qr7g">Back Story</h2></div></div> <div class="row" data-svelte-h="svelte-45vx37"><div class="col"><p>ElectroBlocks is website for coding microcontrollers like the Arduino
        Uno and Arduino Mega. The basic idea is video editting for code. It
        allows you to create code with an easy to use drag and drop language
        called Blockly. I wanted to create something easy to use and fun for
        kids and adults to learn how to code.</p></div></div> <div class="row" data-svelte-h="svelte-1xzahdx"><div class="col"><h2 class="svelte-9qr7g">Thank you</h2></div></div> <div class="row" data-svelte-h="svelte-11jj7p4"><div class="col"><p>I have recieved advice and help from a number of mentors and
        professionals while building this. None of this would have been possible
        without their guidance. I also have volunteer taught and tutored. The
        experience from working with students has greatly influenced me. They
        are the inspiration behind my work.</p></div></div> <div class="row" data-svelte-h="svelte-16amhgw"><div class="col"><h2 class="svelte-9qr7g">Thank you to all Libraries</h2></div></div> <div class="row" data-svelte-h="svelte-o15pgs"><div class="col"><p>Without you none of this would have been possible.</p></div></div> <div class="row" data-svelte-h="svelte-g7uuc5"><div class="col"><h3 class="svelte-9qr7g">Arduino Libraries</h3></div></div> <div class="row"><div class="col">${validate_component(ListGroup, "ListGroup").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, { href: "https://www.arduino.cc/" }, {}, {
        default: () => {
          return `Arduino`;
        }
      })} ${validate_component(ListGroupItem, "ListGroupItem").$$render(
        $$result,
        {
          href: "https://github.com/arduino/arduino-cli"
        },
        {},
        {
          default: () => {
            return `Arduino CLI`;
          }
        }
      )} ${validate_component(ListGroupItem, "ListGroupItem").$$render(
        $$result,
        {
          href: "https://github.com/noopkat/avrgirl-arduino"
        },
        {},
        {
          default: () => {
            return `ArvGirl Arduino`;
          }
        }
      )} ${validate_component(ListGroupItem, "ListGroupItem").$$render(
        $$result,
        {
          href: "https://github.com/adafruit/Adafruit_NeoPixel"
        },
        {},
        {
          default: () => {
            return `AdaFruit NeoPixel`;
          }
        }
      )} ${validate_component(ListGroupItem, "ListGroupItem").$$render(
        $$result,
        {
          href: "https://github.com/johnrickman/LiquidCrystal_I2C"
        },
        {},
        {
          default: () => {
            return `LiquidCrystal_I2C`;
          }
        }
      )} ${validate_component(ListGroupItem, "ListGroupItem").$$render(
        $$result,
        {
          href: "https://github.com/z3t0/Arduino-IRremote"
        },
        {},
        {
          default: () => {
            return `IRremote`;
          }
        }
      )} ${validate_component(ListGroupItem, "ListGroupItem").$$render(
        $$result,
        {
          href: "https://github.com/adafruit/DHT-sensor-library"
        },
        {},
        {
          default: () => {
            return `DHT sensor library`;
          }
        }
      )} ${validate_component(ListGroupItem, "ListGroupItem").$$render(
        $$result,
        {
          href: "https://github.com/shaai/Arduino_LED_matrix_sketch"
        },
        {},
        {
          default: () => {
            return `LedControlMS`;
          }
        }
      )} ${validate_component(ListGroupItem, "ListGroupItem").$$render(
        $$result,
        {
          href: "https://github.com/electronicdrops/RFIDRdm630"
        },
        {},
        {
          default: () => {
            return `RFIDRdm630`;
          }
        }
      )} ${validate_component(ListGroupItem, "ListGroupItem").$$render(
        $$result,
        {
          href: "https://github.com/arduino-libraries/Servo"
        },
        {},
        {
          default: () => {
            return `Servo`;
          }
        }
      )} ${validate_component(ListGroupItem, "ListGroupItem").$$render(
        $$result,
        {
          href: "https://github.com/adafruit/Adafruit-Motor-Shield-library"
        },
        {},
        {
          default: () => {
            return `Adafruit Motor Shield Library`;
          }
        }
      )}`;
    }
  })}</div></div> <div class="row" data-svelte-h="svelte-kozcej"><div class="col"><h3 class="svelte-9qr7g">Web Libraries</h3></div></div> <div class="row"><div class="col">${validate_component(ListGroup, "ListGroup").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(ListGroupItem, "ListGroupItem").$$render(
        $$result,
        {
          href: "https://developers.google.com/blockly/"
        },
        {},
        {
          default: () => {
            return `Blockly`;
          }
        }
      )} ${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, { href: "https://svelte.dev/" }, {}, {
        default: () => {
          return `Svelte`;
        }
      })} ${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, { href: "https://getbootstrap.com" }, {}, {
        default: () => {
          return `Bootstrap`;
        }
      })} ${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, { href: "https://sveltestrap.js.org" }, {}, {
        default: () => {
          return `SvelteStrap`;
        }
      })} ${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, { href: "https://svgjs.com/docs/3.0/" }, {}, {
        default: () => {
          return `svg.js`;
        }
      })} ${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, { href: "https://prismjs.com/" }, {}, {
        default: () => {
          return `prismjs`;
        }
      })} ${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, { href: "https://lodash.com/" }, {}, {
        default: () => {
          return `lodash`;
        }
      })} ${validate_component(ListGroupItem, "ListGroupItem").$$render(
        $$result,
        {
          href: "https://github.com/eligrey/FileSaver.js#readme"
        },
        {},
        {
          default: () => {
            return `file-saver`;
          }
        }
      )} ${validate_component(ListGroupItem, "ListGroupItem").$$render(
        $$result,
        {
          href: "https://sweetalert.js.org/guides/"
        },
        {},
        {
          default: () => {
            return `sweetalert`;
          }
        }
      )} ${validate_component(ListGroupItem, "ListGroupItem").$$render($$result, { href: "https://github.com/axios/axios" }, {}, {
        default: () => {
          return `axios`;
        }
      })}`;
    }
  })}</div></div>`}`;
});
export {
  Page as default
};
