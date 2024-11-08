import { c as create_ssr_component } from "./ssr.js";
import "firebase/auth";
import "./client.js";
import "sweetalert";
const css = {
  code: "img.svelte-fy61oa{display:block;margin:auto;width:200px;margin-top:20px}",
  map: '{"version":3,"file":"Login.svelte","sources":["Login.svelte"],"sourcesContent":["\\n\\n<script lang=\\"ts\\">import { loginGoogleUser } from \\"../../firebase/auth\\";\\nimport { goto } from \\"$app/navigation\\";\\nimport { onErrorMessage } from \\"../../help/alerts\\";\\nasync function googleLogin() {\\n  try {\\n    await loginGoogleUser();\\n    await goto(\\"/\\");\\n  } catch (e) {\\n    if (e.code === \\"auth/cancelled-popup-request\\") {\\n      return;\\n    }\\n    onErrorMessage(\\"Sorry, please try again in 5 minutes. :)\\", e);\\n  }\\n}\\n<\/script>\\n\\n<style>\\n    img {\\n    display: block;\\n    margin: auto;\\n    width: 200px;\\n    margin-top: 20px;\\n}\\n</style>\\n\\n<img src=\\"/signin-btn.png\\" on:click={googleLogin} alt=\\"google sign\\">\\n"],"names":[],"mappings":"AAmBI,iBAAI,CACJ,OAAO,CAAE,KAAK,CACd,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,KAAK,CACZ,UAAU,CAAE,IAChB"}'
};
const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<img src="/signin-btn.png" alt="google sign" class="svelte-fy61oa">`;
});
export {
  Login as L
};
