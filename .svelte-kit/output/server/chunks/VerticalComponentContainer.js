import { c as create_ssr_component, b as add_attribute, e as escape } from "./ssr.js";
import "./model.js";
import "./project.store.js";
import "firebase/auth";
import "blockly";
import "sweetalert";
import "firebase/firestore";
import "firebase/storage";
import "firebase/app";
import "./client.js";
import "./Blockly.svelte_svelte_type_style_lang.js";
import "./arduino-component-id.js";
import { w as writable } from "./index.js";
const currentFrameNumber = writable(0);
const currentStepStore = {
  subscribe: currentFrameNumber.subscribe,
  set: currentFrameNumber.set
};
const css = {
  code: "main.svelte-1mt15mf{height:100%}#bottom.svelte-1mt15mf{overflow-y:scroll}#grabber.svelte-1mt15mf{height:20px;width:100%;cursor:row-resize;background-color:#eff0f1;background-position:center center;background-repeat:no-repeat;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFCAMAAABl/6zIAAAABlBMVEUAAADMzMzIT8AyAAAAAXRSTlMAQObYZgAAABRJREFUeAFjYGRkwIMJSeMHlBkOABP7AEGzSuPKAAAAAElFTkSuQmCC)}",
  map: `{"version":3,"file":"VerticalComponentContainer.svelte","sources":["VerticalComponentContainer.svelte"],"sourcesContent":["<script>\\n  import { onMount } from 'svelte';\\n  import Nav from '../../components/electroblocks/Nav.svelte';\\n  import Blockly from '../../components/electroblocks/Blockly.svelte';\\n  import Player from '../../components/electroblocks/home/Player.svelte';\\n  import { resizeStore } from '../../stores/resize.store';\\n\\n  // flex size of top window\\n  let top = 0;\\n  // flex size of bottom window\\n  let bottom = 200;\\n  // true if resizing windows\\n  let isResizing = false;\\n  // container element\\n  let mainSection;\\n\\n  let previousMainHeight = 0;\\n\\n  /**\\n   * Event is on grabber on is trigger by a mouse down event\\n   */\\n\\n  function startResize() {\\n    isResizing = true;\\n  }\\n\\n  /**\\n   * Event is on the body so that all mouse up events stop resizing\\n   */\\n\\n  function stopResize() {\\n    isResizing = false;\\n  }\\n\\n  const onResize = (e) => {\\n    resize(e.clientY);\\n  };\\n\\n  function onResizeWindow(e) {\\n    setTimeout(() => {\\n      console.log(\\n        Math.abs(previousMainHeight - mainSection.clientHeight),\\n        'resize dif'\\n      );\\n      if (Math.abs(previousMainHeight - mainSection.clientHeight) < 100) {\\n        return;\\n      }\\n\\n      previousMainHeight = mainSection.clientHeight;\\n\\n      top = mainSection.clientHeight - 180;\\n      bottom = 160;\\n      // Trigger an side windows that need to be resized\\n      resizeStore.sideWindow();\\n    }, 5);\\n  }\\n\\n  /**\\n   * This is a mouse move event on the main section of the html\\n   * It will resize the 2 windows,\\n   * Slight Trottling with debounce\\n   */\\n  const resize = (clientY) => {\\n    if (!isResizing) {\\n      return;\\n    }\\n\\n    // hack not the best way to go\\n    const navBarHeight = document.querySelector('nav').clientHeight + 10;\\n\\n    const clientRelativeToWindow = clientY - navBarHeight;\\n\\n    // Height of the main area where we are dividing\\n    const mainHeight = mainSection.clientHeight;\\n\\n    // If the either window size is less than 200 px don't resize window\\n    if (\\n      clientRelativeToWindow < 100 ||\\n      mainHeight - clientRelativeToWindow < 100\\n    ) {\\n      return;\\n    }\\n\\n    // Derive the from bottom flex calculation\\n    // Reason we are not doing reactive variable is because we want to make it obvious\\n    top = clientRelativeToWindow - 10;\\n    bottom = mainHeight - top - 17;\\n\\n    // Trigger an side windows that need to be resized\\n    resizeStore.sideWindow();\\n  };\\n\\n  onMount(() => {\\n    setTimeout(() => {\\n      top = mainSection.clientHeight - 180;\\n      bottom = 160;\\n      previousMainHeight = top;\\n    }, 1);\\n  });\\n<\/script>\\n\\n<svelte:body on:mouseup={stopResize} />\\n\\n<main\\n  on:mouseleave={stopResize}\\n  on:mousemove={onResize}\\n  bind:this={mainSection}\\n  id=\\"split-container\\"\\n>\\n  <section style=\\"height: {top}px\\" id=\\"top\\">\\n    <slot class=\\"sections\\" name=\\"top\\" />\\n  </section>\\n  <div on:mousedown={startResize} id=\\"grabber\\" />\\n  <section style=\\"height: {bottom}px\\" id=\\"bottom\\">\\n    <slot name=\\"bottom\\" />\\n  </section>\\n</main>\\n<svelte:window on:resize={onResizeWindow} />\\n\\n<style>\\n  main {\\n    height: 100%;\\n  }\\n\\n  #bottom {\\n    overflow-y: scroll;\\n  }\\n\\n  /** the div used to resize the windows */\\n  #grabber {\\n    height: 20px;\\n    width: 100%;\\n    cursor: row-resize;\\n    background-color: #eff0f1;\\n    background-position: center center;\\n    background-repeat: no-repeat;\\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFCAMAAABl/6zIAAAABlBMVEUAAADMzMzIT8AyAAAAAXRSTlMAQObYZgAAABRJREFUeAFjYGRkwIMJSeMHlBkOABP7AEGzSuPKAAAAAElFTkSuQmCC);\\n  }\\n</style>\\n"],"names":[],"mappings":"AAwHE,mBAAK,CACH,MAAM,CAAE,IACV,CAEA,sBAAQ,CACN,UAAU,CAAE,MACd,CAGA,uBAAS,CACP,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,UAAU,CAClB,gBAAgB,CAAE,OAAO,CACzB,mBAAmB,CAAE,MAAM,CAAC,MAAM,CAClC,iBAAiB,CAAE,SAAS,CAC5B,gBAAgB,CAAE,2KACpB"}`
};
const VerticalComponentContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let top = 0;
  let bottom = 200;
  let mainSection;
  $$result.css.add(css);
  return ` <main id="split-container" class="svelte-1mt15mf"${add_attribute("this", mainSection, 0)}><section style="${"height: " + escape(top, true) + "px"}" id="top">${slots.top ? slots.top({ class: "sections" }) : ``}</section> <div id="grabber" class="svelte-1mt15mf"></div> <section style="${"height: " + escape(bottom, true) + "px"}" id="bottom" class="svelte-1mt15mf">${slots.bottom ? slots.bottom({}) : ``}</section></main> `;
});
export {
  VerticalComponentContainer as V,
  currentStepStore as c
};
