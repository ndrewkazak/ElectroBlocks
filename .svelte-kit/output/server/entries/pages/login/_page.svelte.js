import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { L as Login } from "../../../chunks/Login.js";
const css = {
  code: "h1.svelte-12jxkkd{text-align:center;margin-top:20px}p.svelte-12jxkkd{width:80%;margin-left:10%;text-align:center;margin-top:20px}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n  import Login from \\"../../components/auth/Login.svelte\\";\\n<\/script>\\n\\n<h1>Login Options</h1>\\n\\n<Login />\\n\\n<p>\\n  We might include more options in the future, but for now we are sticking with\\n  google.\\n</p>\\n<svelte:head>\\n  <title>ElectroBlocks - Login</title>\\n</svelte:head>\\n\\n<style>\\n  h1 {\\n    text-align: center;\\n    margin-top: 20px;\\n  }\\n  p {\\n    width: 80%;\\n    margin-left: 10%;\\n    text-align: center;\\n    margin-top: 20px;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAiBE,iBAAG,CACD,UAAU,CAAE,MAAM,CAClB,UAAU,CAAE,IACd,CACA,gBAAE,CACA,KAAK,CAAE,GAAG,CACV,WAAW,CAAE,GAAG,CAChB,UAAU,CAAE,MAAM,CAClB,UAAU,CAAE,IACd"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<h1 class="svelte-12jxkkd" data-svelte-h="svelte-2oa2vn">Login Options</h1> ${validate_component(Login, "Login").$$render($$result, {}, {}, {})} <p class="svelte-12jxkkd" data-svelte-h="svelte-1bf52n6">We might include more options in the future, but for now we are sticking with
  google.</p> ${$$result.head += `<!-- HEAD_svelte-dfwha9_START -->${$$result.title = `<title>ElectroBlocks - Login</title>`, ""}<!-- HEAD_svelte-dfwha9_END -->`, ""}`;
});
export {
  Page as default
};
