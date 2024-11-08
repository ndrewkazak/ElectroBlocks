import { c as create_ssr_component, e as escape } from "./ssr.js";
const css = {
  code: "#message.svelte-1n219rv{width:75%;display:block;margin:20px auto;border-radius:4px;padding:10px;text-align:center;border:solid black 1px}",
  map: '{"version":3,"file":"FlashMessage.svelte","sources":["FlashMessage.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { fade } from \\"svelte/transition\\";\\nexport let message;\\nexport let delay = 2e3;\\nexport let show = false;\\nlet showMessageQueue = [];\\nfunction addSaveMessage() {\\n  showMessageQueue = [1, ...showMessageQueue];\\n  setTimeout(() => {\\n    showMessageQueue.pop();\\n    showMessageQueue = showMessageQueue;\\n  }, delay);\\n}\\n$:\\n  if (show) {\\n    addSaveMessage();\\n    show = false;\\n  }\\n<\/script>\\n\\n<style>\\n    #message {\\n        width: 75%;\\n        display: block;\\n        margin: 20px auto;\\n        border-radius: 4px;\\n        padding: 10px;\\n        text-align: center;\\n        border: solid black 1px;\\n    }\\n</style>\\n\\n{#if showMessageQueue.length > 0}\\n    <div class=\\"row\\" transition:fade id=\\"message\\" >\\n        {message}\\n    </div>\\n{/if}"],"names":[],"mappings":"AAoBI,uBAAS,CACL,KAAK,CAAE,GAAG,CACV,OAAO,CAAE,KAAK,CACd,MAAM,CAAE,IAAI,CAAC,IAAI,CACjB,aAAa,CAAE,GAAG,CAClB,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,MAAM,CAClB,MAAM,CAAE,KAAK,CAAC,KAAK,CAAC,GACxB"}'
};
const FlashMessage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { message } = $$props;
  let { delay = 2e3 } = $$props;
  let { show = false } = $$props;
  let showMessageQueue = [];
  function addSaveMessage() {
    showMessageQueue = [1, ...showMessageQueue];
    setTimeout(
      () => {
        showMessageQueue.pop();
        showMessageQueue = showMessageQueue;
      },
      delay
    );
  }
  if ($$props.message === void 0 && $$bindings.message && message !== void 0)
    $$bindings.message(message);
  if ($$props.delay === void 0 && $$bindings.delay && delay !== void 0)
    $$bindings.delay(delay);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  $$result.css.add(css);
  {
    if (show) {
      addSaveMessage();
      show = false;
    }
  }
  return `${showMessageQueue.length > 0 ? `<div class="row svelte-1n219rv" id="message">${escape(message)}</div>` : ``}`;
});
export {
  FlashMessage as F
};
