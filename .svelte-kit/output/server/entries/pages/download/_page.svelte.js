import { c as create_ssr_component, o as onDestroy, v as validate_component } from "../../../chunks/ssr.js";
import "blockly";
import { c as codeStore } from "../../../chunks/code.store.js";
import { B as Button } from "../../../chunks/Button.js";
import "../../../chunks/Theme.svelte_svelte_type_style_lang.js";
const css = {
  code: "main.svelte-w8688b{width:90%;margin-left:5%}p.svelte-w8688b{text-align:center}#download-code-btn{float:left}h1.svelte-w8688b{text-align:center;margin:10px 0}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n  import { workspaceToXML } from \\"../../core/blockly/helpers/workspace.helper\\";\\n  import codeStore from \\"../../stores/code.store\\";\\n  // import { saveAs } from \\"file-saver\\";\\n  import { onDestroy } from \\"svelte\\";\\n  import { Button } from \\"@sveltestrap/sveltestrap\\";\\n  export const ssr = false;\\n\\n  let code;\\n\\n  let unsubCodeStore = codeStore.subscribe((newCode) => {\\n    code = newCode.code;\\n  });\\n\\n  function downlaodCode() {\\n    const blob = new Blob([code], { type: \\"text/plain;charset=utf-8\\" });\\n    saveAs(blob, \\"electroblocks_code.ino\\");\\n  }\\n\\n  function downloadProject() {\\n    const blob = new Blob([workspaceToXML()], {\\n      type: \\"application/xml;charset=utf-8\\",\\n    });\\n    saveAs(blob, \\"electroblocks_project.xml\\");\\n  }\\n\\n  function saveAs(blob, filename) {\\n    // Create a link element\\n    const link = document.createElement('a');\\n\\n    // Set the link's attributes including the download attribute which specifies the filename\\n    link.href = window.URL.createObjectURL(blob);\\n    link.download = filename;\\n\\n    // Simulate a click on the link to trigger the download\\n    document.body.appendChild(link);\\n    link.click();\\n\\n    // Clean up\\n    document.body.removeChild(link);\\n    window.URL.revokeObjectURL(link.href);\\n }\\n\\n  onDestroy(() => {\\n    unsubCodeStore();\\n  });\\n<\/script>\\n\\n<main class=\\"container\\">\\n  <div class=\\"row\\">\\n    <div class=\\"col\\">\\n      <h1>Download Center</h1>\\n    </div>\\n  </div>\\n  <div class=\\"row\\">\\n    <div class=\\"col\\">\\n      <p>You can download the project file or the arduino code.</p>\\n    </div>\\n  </div>\\n  <div class=\\"row\\">\\n    <div class=\\"col\\">\\n      <Button color=\\"primary\\" on:click={downloadProject}>\\n        Download Project\\n      </Button>\\n    </div>\\n    <div class=\\"col\\">\\n      <Button id=\\"download-code-btn\\" color=\\"info\\" on:click={downlaodCode}>\\n        Download Code\\n      </Button>\\n    </div>\\n  </div>\\n</main>\\n<svelte:head>\\n  <title>ElectroBlocks - Download</title>\\n</svelte:head>\\n\\n<style>\\n  main {\\n    width: 90%;\\n    margin-left: 5%;\\n  }\\n  p {\\n    text-align: center;\\n  }\\n\\n  :global(#download-code-btn) {\\n    float: left;\\n  }\\n  h1 {\\n    text-align: center;\\n    margin: 10px 0;\\n  }\\n</style>\\n"],"names":[],"mappings":"AA6EE,kBAAK,CACH,KAAK,CAAE,GAAG,CACV,WAAW,CAAE,EACf,CACA,eAAE,CACA,UAAU,CAAE,MACd,CAEQ,kBAAoB,CAC1B,KAAK,CAAE,IACT,CACA,gBAAG,CACD,UAAU,CAAE,MAAM,CAClB,MAAM,CAAE,IAAI,CAAC,CACf"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const ssr = false;
  let unsubCodeStore = codeStore.subscribe((newCode) => {
    newCode.code;
  });
  onDestroy(() => {
    unsubCodeStore();
  });
  if ($$props.ssr === void 0 && $$bindings.ssr && ssr !== void 0)
    $$bindings.ssr(ssr);
  $$result.css.add(css);
  return `<main class="container svelte-w8688b"><div class="row" data-svelte-h="svelte-ewt00f"><div class="col"><h1 class="svelte-w8688b">Download Center</h1></div></div> <div class="row" data-svelte-h="svelte-1if93yi"><div class="col"><p class="svelte-w8688b">You can download the project file or the arduino code.</p></div></div> <div class="row"><div class="col">${validate_component(Button, "Button").$$render($$result, { color: "primary" }, {}, {
    default: () => {
      return `Download Project`;
    }
  })}</div> <div class="col">${validate_component(Button, "Button").$$render($$result, { id: "download-code-btn", color: "info" }, {}, {
    default: () => {
      return `Download Code`;
    }
  })}</div></div></main> ${$$result.head += `<!-- HEAD_svelte-17fd73o_START -->${$$result.title = `<title>ElectroBlocks - Download</title>`, ""}<!-- HEAD_svelte-17fd73o_END -->`, ""}`;
});
export {
  Page as default
};
