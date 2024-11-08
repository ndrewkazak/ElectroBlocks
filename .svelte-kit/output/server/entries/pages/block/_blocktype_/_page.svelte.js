import { c as create_ssr_component, e as escape, b as add_attribute, a as subscribe, v as validate_component } from "../../../../chunks/ssr.js";
import _ from "lodash";
import { p as page } from "../../../../chunks/stores.js";
var HelpType = /* @__PURE__ */ ((HelpType2) => {
  HelpType2["PICTURE"] = "PICTURE";
  HelpType2["YOUTUBE"] = "YOUTUBE";
  return HelpType2;
})(HelpType || {});
const css$1 = {
  code: "h1.svelte-1qytdcr{text-align:center;margin:20px auto}img.svelte-1qytdcr,iframe.svelte-1qytdcr{display:block;margin:10px auto}img.svelte-1qytdcr{width:80%;max-height:60vh}p.svelte-1qytdcr{margin:20px auto;font-size:1.2em}p.youtube.svelte-1qytdcr{width:560px}p.picture.svelte-1qytdcr{width:80%}",
  map: '{"version":3,"file":"help.svelte","sources":["help.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { HelpType } from \\"../../../help/help-model\\";\\nimport _ from \\"lodash\\";\\nexport let help;\\nlet pictureUrl = _.get(help, \\"help.data.url\\");\\nlet altText = _.get(help, \\"help.data.alt\\");\\nlet youtubeId = _.get(help, \\"help.data.youtubeid\\");\\n<\/script>\\n\\n<style>\\n    h1 {\\n        text-align: center;\\n        margin: 20px auto;\\n    }\\n    img, iframe {\\n        display: block;\\n        margin: 10px auto;\\n    }\\n    img {\\n        width: 80%;\\n        max-height: 60vh;\\n    }\\n    p {\\n        margin: 20px auto;\\n        font-size: 1.2em;\\n    }\\n    p.youtube {\\n        width: 560px;\\n    }\\n    p.picture {\\n        width: 80%;\\n    }\\n    \\n</style>\\n\\n<h1>{help.blockName} Block</h1>\\n\\n{#if help.type === HelpType.PICTURE}\\n    <img src={pictureUrl} alt={altText} />\\n{/if}\\n\\n{#if help.type === HelpType.YOUTUBE}\\n  <iframe title=\\"{help.blockName}\\" width=\\"560\\" height=\\"315\\" src=\\"https://www.youtube.com/embed/{youtubeId}\\" frameborder=\\"0\\" allow=\\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\\" allowfullscreen></iframe>\\n\\n{/if}\\n\\n<p \\nclass:youtube={help.type === HelpType.YOUTUBE}\\nclass:picture={help.type === HelpType.PICTURE}\\n>{help.information}</p>\\n\\n"],"names":[],"mappings":"AASI,iBAAG,CACC,UAAU,CAAE,MAAM,CAClB,MAAM,CAAE,IAAI,CAAC,IACjB,CACA,kBAAG,CAAE,qBAAO,CACR,OAAO,CAAE,KAAK,CACd,MAAM,CAAE,IAAI,CAAC,IACjB,CACA,kBAAI,CACA,KAAK,CAAE,GAAG,CACV,UAAU,CAAE,IAChB,CACA,gBAAE,CACE,MAAM,CAAE,IAAI,CAAC,IAAI,CACjB,SAAS,CAAE,KACf,CACA,CAAC,uBAAS,CACN,KAAK,CAAE,KACX,CACA,CAAC,uBAAS,CACN,KAAK,CAAE,GACX"}'
};
const Help = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { help } = $$props;
  let pictureUrl = _.get(help, "help.data.url");
  let altText = _.get(help, "help.data.alt");
  let youtubeId = _.get(help, "help.data.youtubeid");
  if ($$props.help === void 0 && $$bindings.help && help !== void 0)
    $$bindings.help(help);
  $$result.css.add(css$1);
  return `<h1 class="svelte-1qytdcr">${escape(help.blockName)} Block</h1> ${help.type === HelpType.PICTURE ? `<img${add_attribute("src", pictureUrl, 0)}${add_attribute("alt", altText, 0)} class="svelte-1qytdcr">` : ``} ${help.type === HelpType.YOUTUBE ? `<iframe${add_attribute("title", help.blockName, 0)} width="560" height="315" src="${"https://www.youtube.com/embed/" + escape(youtubeId, true)}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="svelte-1qytdcr"></iframe>` : ``} <p class="${[
    "svelte-1qytdcr",
    (help.type === HelpType.YOUTUBE ? "youtube" : "") + " " + (help.type === HelpType.PICTURE ? "picture" : "")
  ].join(" ").trim()}">${escape(help.information)}</p>`;
});
const debugHelp = {
  information: "The debug block will pause your code and print all all the variables when running in the arduino.  Watch the video to learn more.",
  data: { youtubeId: "0bxIg3M_MHY" },
  // data: { url: 'https://opencircuit.shop/resources/content/2ed9317749689/crop/1700-850/TowerPro-SG90-9G-micro-servo-motor.webp', alt: 'fake' },
  blockName: "Debug",
  type: HelpType.YOUTUBE
};
const helpList = {
  debug: debugHelp
};
const getBlockHelp = (blockName) => {
  if (helpList[blockName]) {
    return helpList[blockName];
  }
  return void 0;
};
const css = {
  code: "h1.svelte-1rnwunw{text-align:center;margin-top:20px}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n    import Help from '../../../components/electroblocks/block-help/help.svelte'\\n    import { getBlockHelp } from '../../../help/help-block-list';\\n    import { page } from '$app/stores';\\n    const { blocktype } = $page.params;\\n    const help = getBlockHelp(blocktype);\\n    \\n<\/script>\\n<style>\\n    h1 {\\n        text-align: center;\\n        margin-top: 20px;\\n    }\\n</style>\\n{#if help}\\n<Help {help} />\\n{:else}\\n<h1>No help found for {blocktype}.</h1>\\n{/if}\\n\\n\\n"],"names":[],"mappings":"AASI,iBAAG,CACC,UAAU,CAAE,MAAM,CAClB,UAAU,CAAE,IAChB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const { blocktype } = $page.params;
  const help = getBlockHelp(blocktype);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${help ? `${validate_component(Help, "Help").$$render($$result, { help }, {}, {})}` : `<h1 class="svelte-1rnwunw">No help found for ${escape(blocktype)}.</h1>`}`;
});
export {
  Page as default
};
