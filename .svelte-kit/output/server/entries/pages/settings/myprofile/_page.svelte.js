import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../../../chunks/ssr.js";
import { B as Button } from "../../../../chunks/Button.js";
import { F as FormGroup, I as Input } from "../../../../chunks/Input.js";
import { L as Label } from "../../../../chunks/Label.js";
import "../../../../chunks/Theme.svelte_svelte_type_style_lang.js";
import { L as Login } from "../../../../chunks/Login.js";
import { a as authStore } from "../../../../chunks/model.js";
import "blockly";
import "firebase/firestore";
import "firebase/storage";
import "firebase/app";
import { F as FlashMessage } from "../../../../chunks/FlashMessage.js";
import "sweetalert";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $authStore, $$unsubscribe_authStore;
  $$unsubscribe_authStore = subscribe(authStore, (value) => $authStore = value);
  let username = "";
  let bio = "";
  let showMessage = false;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${$authStore.isLoggedIn ? `<div class="row"><div class="col">${validate_component(FormGroup, "FormGroup").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Label, "Label").$$render($$result, { for: "username" }, {}, {
          default: () => {
            return `Username`;
          }
        })} ${validate_component(Input, "Input").$$render(
          $$result,
          {
            type: "text",
            id: "username",
            value: username
          },
          {
            value: ($$value) => {
              username = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      }
    })}</div></div> <div class="row"><div class="col">${validate_component(FormGroup, "FormGroup").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Label, "Label").$$render($$result, { for: "bio" }, {}, {
          default: () => {
            return `Bio`;
          }
        })} ${validate_component(Input, "Input").$$render(
          $$result,
          {
            type: "textarea",
            name: "text",
            id: "bio",
            value: bio
          },
          {
            value: ($$value) => {
              bio = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      }
    })}</div></div> <div class="row"><div class="col">${validate_component(Button, "Button").$$render($$result, { color: "success", type: "button" }, {}, {
      default: () => {
        return `Save`;
      }
    })}</div></div> <div class="row"><div class="col">${validate_component(FlashMessage, "FlashMessage").$$render(
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
    )}</div></div>` : `<div class="row"><div class="col"><p data-svelte-h="svelte-4ylroj">To access my profile you must login.</p> ${validate_component(Login, "Login").$$render($$result, {}, {}, {})}</div></div>`}`;
  } while (!$$settled);
  $$unsubscribe_authStore();
  return $$rendered;
});
export {
  Page as default
};
