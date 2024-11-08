import { c as create_ssr_component } from "../../../../chunks/ssr.js";
const css = {
  code: "h2.svelte-jisjgq{margin-top:20px}a.svelte-jisjgq{text-decoration:underline;color:blue}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<svelte:head>\\n  <title>ElectroBlocks - Support</title>\\n</svelte:head>\\n<div class=\\"row\\">\\n  <div class=\\"col\\">\\n    <h2>Getting Help</h2>\\n    <p>\\n      The fastest way to get help is join our\\n      <a href=\\"https://discord.gg/8fq8Dj5BtA\\">discord</a>\\n      channel. Post any related question you have there and we'll be happy to\\n      answer them.\\n    </p>\\n\\n    <h2>Lessons & Docs</h2>\\n\\n    <p>\\n      There is also an\\n      <a href=\\"https://electroblocks.github.io/docs/\\"> ElectroBlock Docs</a>,\\n      which contains all the lessons in webpage form. We also have a page full\\n      of\\n      <a href=\\"/lessons\\">lessons</a>\\n      as well.\\n    </p>\\n\\n    <h2>Training</h2>\\n    <p>\\n      All training will be scheduled ElectroBlock's\\n      <a href=\\"https://www.downtomeet.com/ElectroBlocks/events\\">Down to Meet.</a>\\n      We'll be using either zoom or google hangouts. Anything you want to be\\n      trained on please let us know. :)\\n    </p>\\n    <h2>Filling Bugs</h2>\\n    <p>\\n      If you want to file a bug you can use the built\\n      <a href=\\"/settings/bugs\\">bug form</a>\\n      or\\n      <a href=\\"https://github.com/phptuts/ElectroBlocksV3/issues\\">Github Issues</a>.\\n    </p>\\n  </div>\\n</div>\\n\\n<style>\\n  h2 {\\n    margin-top: 20px;\\n  }\\n  a {\\n    text-decoration: underline;\\n    color: blue;\\n  }\\n</style>\\n"],"names":[],"mappings":"AA0CE,gBAAG,CACD,UAAU,CAAE,IACd,CACA,eAAE,CACA,eAAe,CAAE,SAAS,CAC1B,KAAK,CAAE,IACT"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-4tybqj_START -->${$$result.title = `<title>ElectroBlocks - Support</title>`, ""}<!-- HEAD_svelte-4tybqj_END -->`, ""} <div class="row" data-svelte-h="svelte-k7qg1l"><div class="col"><h2 class="svelte-jisjgq">Getting Help</h2> <p>The fastest way to get help is join our
      <a href="https://discord.gg/8fq8Dj5BtA" class="svelte-jisjgq">discord</a>
      channel. Post any related question you have there and we&#39;ll be happy to
      answer them.</p> <h2 class="svelte-jisjgq">Lessons &amp; Docs</h2> <p>There is also an
      <a href="https://electroblocks.github.io/docs/" class="svelte-jisjgq">ElectroBlock Docs</a>,
      which contains all the lessons in webpage form. We also have a page full
      of
      <a href="/lessons" class="svelte-jisjgq">lessons</a>
      as well.</p> <h2 class="svelte-jisjgq">Training</h2> <p>All training will be scheduled ElectroBlock&#39;s
      <a href="https://www.downtomeet.com/ElectroBlocks/events" class="svelte-jisjgq">Down to Meet.</a>
      We&#39;ll be using either zoom or google hangouts. Anything you want to be
      trained on please let us know. :)</p> <h2 class="svelte-jisjgq">Filling Bugs</h2> <p>If you want to file a bug you can use the built
      <a href="/settings/bugs" class="svelte-jisjgq">bug form</a>
      or
      <a href="https://github.com/phptuts/ElectroBlocksV3/issues" class="svelte-jisjgq">Github Issues</a>.</p></div> </div>`;
});
export {
  Page as default
};
