import { c as create_ssr_component } from "../../../chunks/ssr.js";
import "../../../chunks/code.store.js";
const css = {
  code: "pre.svelte-6hjv70{margin:0;padding:0;height:100vh}code.svelte-6hjv70{margin-left:10px;height:100vh;overflow:scroll}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n  import { onMount } from \\"svelte\\";\\n  import codeStore from \\"../../stores/code.store\\";\\n  import hljs from 'highlight.js/lib/core';\\n  import arduinoLang from 'highlight.js/lib/languages/arduino';\\n  import 'highlight.js/styles/arduino-light.css';\\n  import 'highlight.js/styles/a11y-light.css';\\n\\n  import { afterUpdate } from \\"svelte\\";\\n\\n  let code = \\"\\";\\n  let loaded = false;\\n  onMount(async () => {\\n    hljs.registerLanguage('arduino', arduinoLang);\\n    codeStore.subscribe(async (codeInfo) => {\\n      try\\n      {\\n        // @ts-ignore\\n        code =  hljs.highlight(codeInfo.code,{ language: 'arduino' }).value;\\n\\n      }\\n      catch(e)\\n      {\\n        console.log(e);\\n      }\\n    });\\n\\n    loaded = true;\\n  });\\n\\n  afterUpdate(() => {\\n    if (loaded) {\\n      try {\\n        hljs.highlightAll();\\n      } catch (error) {\\n        console.log(error, 'error')\\n      }\\n    }\\n  });\\n<\/script>\\n\\n<pre>\\n  <code class=\\"language-arduino\\">{@html code}</code>\\n</pre>\\n<svelte:head>\\n  <title>ElectroBlocks - Code</title>\\n</svelte:head>\\n\\n<style>\\n  pre {\\n    margin: 0;\\n    padding: 0;\\n    height: 100vh;\\n  }\\n  code {\\n    margin-left: 10px;\\n    height: 100vh;\\n    overflow: scroll;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAiDE,iBAAI,CACF,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,KACV,CACA,kBAAK,CACH,WAAW,CAAE,IAAI,CACjB,MAAM,CAAE,KAAK,CACb,QAAQ,CAAE,MACZ"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let code = "";
  $$result.css.add(css);
  return `<pre class="svelte-6hjv70">  <code class="language-arduino svelte-6hjv70"><!-- HTML_TAG_START -->${code}<!-- HTML_TAG_END --></code>
</pre> ${$$result.head += `<!-- HEAD_svelte-oqamz_START -->${$$result.title = `<title>ElectroBlocks - Code</title>`, ""}<!-- HEAD_svelte-oqamz_END -->`, ""}`;
});
export {
  Page as default
};
