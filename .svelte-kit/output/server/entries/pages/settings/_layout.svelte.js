import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { F as FormGroup, I as Input } from "../../../chunks/Input.js";
import { L as Label } from "../../../chunks/Label.js";
import "../../../chunks/Theme.svelte_svelte_type_style_lang.js";
import "../../../chunks/client.js";
const css = {
  code: "main.svelte-1v7wzhb{overflow-y:hidden;overflow-x:hidden;margin-top:10px;margin-bottom:10px}",
  map: '{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { FormGroup, Input, Label } from \\"@sveltestrap/sveltestrap\\";\\nexport let segment;\\nimport { goto } from \\"$app/navigation\\";\\n;\\nimport { onMount } from \\"svelte\\";\\nlet value;\\nasync function navigate(e) {\\n  await goto(e.target.value);\\n}\\nonMount(() => {\\n  value = segment ? \\"/settings/\\" + segment : \\"/settings\\";\\n});\\n$:\\n  if (segment) {\\n    value = segment ? \\"/settings/\\" + segment : \\"/settings\\";\\n  }\\n<\/script>\\n\\n<main class=\\"container-fluid\\">\\n  <div class=\\"row\\">\\n    <div class=\\"col\\">\\n      <h2>Settings</h2>\\n    </div>\\n  </div>\\n  <div class=\\"row\\">\\n    <div class=\\"col\\">\\n      <FormGroup>\\n        <Label for=\\"exampleSelect\\">Navigation</Label>\\n        <Input\\n          bind:value\\n          type=\\"select\\"\\n          name=\\"select\\"\\n          on:change={navigate}\\n          id=\\"exampleSelect\\"\\n        >\\n          <option value=\\"/settings\\">Circuit</option>\\n          <option value=\\"/settings/myprofile\\">My Profile</option>\\n          <option value=\\"/settings/about\\">About</option>\\n          <option value=\\"/settings/support\\">Support</option>\\n          <option value=\\"/settings/feature-request\\">Feature Requests</option>\\n          <option value=\\"/settings/bugs\\">Report a bug</option>\\n\\n          <option value=\\"/settings/privacy-policy\\">Privacy Policy</option>\\n        </Input>\\n      </FormGroup>\\n    </div>\\n  </div>\\n  <hr />\\n\\n  <slot />\\n</main>\\n\\n<style>\\n  main {\\n    overflow-y: hidden;\\n    overflow-x: hidden;\\n    margin-top: 10px;\\n    margin-bottom: 10px;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAqDE,mBAAK,CACH,UAAU,CAAE,MAAM,CAClB,UAAU,CAAE,MAAM,CAClB,UAAU,CAAE,IAAI,CAChB,aAAa,CAAE,IACjB"}'
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { segment } = $$props;
  let value;
  if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0)
    $$bindings.segment(segment);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if (segment) {
        value = segment ? "/settings/" + segment : "/settings";
      }
    }
    $$rendered = `<main class="container-fluid svelte-1v7wzhb"><div class="row" data-svelte-h="svelte-18fffkp"><div class="col"><h2>Settings</h2></div></div> <div class="row"><div class="col">${validate_component(FormGroup, "FormGroup").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Label, "Label").$$render($$result, { for: "exampleSelect" }, {}, {
          default: () => {
            return `Navigation`;
          }
        })} ${validate_component(Input, "Input").$$render(
          $$result,
          {
            type: "select",
            name: "select",
            id: "exampleSelect",
            value
          },
          {
            value: ($$value) => {
              value = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `<option value="/settings" data-svelte-h="svelte-mjwakf">Circuit</option> <option value="/settings/myprofile" data-svelte-h="svelte-1hiyv4v">My Profile</option> <option value="/settings/about" data-svelte-h="svelte-1lx9upn">About</option> <option value="/settings/support" data-svelte-h="svelte-1hpj8ij">Support</option> <option value="/settings/feature-request" data-svelte-h="svelte-7y4li1">Feature Requests</option> <option value="/settings/bugs" data-svelte-h="svelte-1r2uz1">Report a bug</option> <option value="/settings/privacy-policy" data-svelte-h="svelte-txf6g0">Privacy Policy</option>`;
            }
          }
        )}`;
      }
    })}</div></div> <hr> ${slots.default ? slots.default({}) : ``} </main>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Layout as default
};
