import { c as create_ssr_component, e as escape } from "../../chunks/ssr.js";
const css = {
  code: "h1.svelte-17w3omn{margin:0 auto}h1.svelte-17w3omn{font-size:2.8em;font-weight:700;margin:0 0 0.5em 0}@media(min-width: 480px){h1.svelte-17w3omn{font-size:4em}}",
  map: '{"version":3,"file":"+error.svelte","sources":["+error.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let status;\\nexport let error;\\nconst dev = process.env.NODE_ENV === \\"development\\";\\n<\/script>\\n\\n<style>\\n  h1,\\n  p {\\n    margin: 0 auto;\\n  }\\n\\n  h1 {\\n    font-size: 2.8em;\\n    font-weight: 700;\\n    margin: 0 0 0.5em 0;\\n  }\\n\\n  p {\\n    margin: 1em auto;\\n  }\\n\\n  @media (min-width: 480px) {\\n    h1 {\\n      font-size: 4em;\\n    }\\n  }\\n</style>\\n\\n<svelte:head>\\n  <title>{status}</title>\\n</svelte:head>\\n\\n<h1>{status}</h1>\\n\\n<!-- <p>{error?.message}</p> -->\\n\\n<!-- {#if dev && error.stack}\\n  <pre>{error.stack}</pre>\\n{/if} -->\\n"],"names":[],"mappings":"AAME,iBACE,CACA,MAAM,CAAE,CAAC,CAAC,IACZ,CAEA,iBAAG,CACD,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,GAAG,CAChB,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,CACpB,CAMA,MAAO,YAAY,KAAK,CAAE,CACxB,iBAAG,CACD,SAAS,CAAE,GACb,CACF"}'
};
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { status } = $$props;
  let { error } = $$props;
  process.env.NODE_ENV === "development";
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1moakz_START -->${$$result.title = `<title>${escape(status)}</title>`, ""}<!-- HEAD_svelte-1moakz_END -->`, ""} <h1 class="svelte-17w3omn">${escape(status)}</h1>  `;
});
export {
  Error as default
};
