import { c as create_ssr_component, a as subscribe, e as escape, o as onDestroy, b as add_attribute, v as validate_component, d as each } from "../../chunks/ssr.js";
import _ from "lodash";
import "firebase/auth";
import { a as authStore } from "../../chunks/model.js";
import { p as projectStore } from "../../chunks/project.store.js";
import Blockly from "blockly";
import "sweetalert";
import "firebase/firestore";
import "firebase/storage";
import "firebase/app";
import "../../chunks/client.js";
import { p as page } from "../../chunks/stores.js";
import { r as resizeStore, W as WindowType, a as arduinoStore, b as arduionMessageStore, g as getAllBlocks, c as getBlockById, d as arduinoLoopBlockShowNumberOfTimesThroughLoop } from "../../chunks/Blockly.svelte_svelte_type_style_lang.js";
import "../../chunks/arduino-component-id.js";
import { s as showLessonStore } from "../../chunks/showLessons.store.js";
import { F as FormGroup, I as Input } from "../../chunks/Input.js";
import "../../chunks/Theme.svelte_svelte_type_style_lang.js";
import "firebase/analytics";
function isPathOnHomePage(path) {
  if (path === "/" || path === void 0) {
    return true;
  }
  const pathParts = path.split("/").slice(1);
  return pathParts.length === 2 && pathParts[0] === "project";
}
const css$5 = {
  code: "nav.svelte-sf3700.svelte-sf3700{width:100%;overflow:auto;border-bottom:1px solid gray;height:56px}nav.svelte-sf3700 .fa.svelte-sf3700{color:#505bda}nav.svelte-sf3700 a .fa.svelte-sf3700,nav.svelte-sf3700 span .fa.svelte-sf3700,nav.svelte-sf3700 .disabled .fa.svelte-sf3700{opacity:0.5}nav.svelte-sf3700 .active .fa.svelte-sf3700{color:#505bda !important;opacity:1}nav.svelte-sf3700 a.svelte-sf3700,nav.svelte-sf3700 span.svelte-sf3700,label.svelte-sf3700.svelte-sf3700{float:left;width:11.11111%;text-align:center;padding:2px 0;transition:all 0.3s ease;color:white;font-size:3rem;cursor:pointer;line-height:1px;margin-bottom:0;margin-top:3px}nav.small.svelte-sf3700 a.svelte-sf3700,nav.small.svelte-sf3700 span.svelte-sf3700,nav.small.svelte-sf3700 label.svelte-sf3700{width:12.5%}#saved.svelte-sf3700.svelte-sf3700{position:absolute;left:50%;top:100px;background:#2c75e6;text-align:center;vertical-align:middle;padding:10px;transform:translateX(-50%);z-index:21;color:#fff}.tooltip.nav-tooltip{margin-top:42px}",
  map: '{"version":3,"file":"Nav.svelte","sources":["Nav.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let segment;\\nconst navTooltipStyle = {\\n  position: \\"bottom\\",\\n  align: \\"center\\",\\n  animation: \\"slide\\",\\n  theme: \\"nav-tooltip\\"\\n};\\nimport authStore from \\"../../stores/auth.store\\";\\nimport projectStore from \\"../../stores/project.store\\";\\nimport { isPathOnHomePage } from \\"../../helpers/is-path-on-homepage\\";\\nimport { fade } from \\"svelte/transition\\";\\nimport { logout } from \\"../../firebase/auth\\";\\nimport { loadNewProjectFile } from \\"../../helpers/open-project-file\\";\\nimport {\\n  arduinoLoopBlockShowLoopForeverText,\\n  arduinoLoopBlockShowNumberOfTimesThroughLoop\\n} from \\"../../core/blockly/helpers/arduino_loop_block.helper\\";\\nimport { resetWorkspace } from \\"../../core/blockly/helpers/workspace.helper\\";\\nimport { saveProject } from \\"../../firebase/db\\";\\nimport { wait } from \\"../../helpers/wait\\";\\nimport { onConfirm, onErrorMessage } from \\"../../help/alerts\\";\\nimport { goto } from \\"$app/navigation\\";\\nimport { page } from \\"$app/stores\\";\\nimport { tooltip } from \\"@svelte-plugins/tooltips\\";\\nlet isOpeningFile = false;\\nlet fileUpload;\\nlet canSave = true;\\nlet showSaveSuccess = false;\\nlet params = \\"\\";\\nprojectStore.subscribe((p) => {\\n  if (p.projectId) {\\n    params = `?projectid=${p.projectId}`;\\n  } else {\\n    params = \\"\\";\\n  }\\n});\\nasync function onNewFileAuth() {\\n  if (!$projectStore.project) {\\n    onNewFileNoAuth();\\n    return;\\n  }\\n  const confirmNewFile = await onConfirm(\\n    \\"We are about to save your current project and create a new one? Would you like to continue?\\"\\n  );\\n  if (!confirmNewFile) {\\n    return;\\n  }\\n  try {\\n    await saveProject($projectStore.project, $projectStore.projectId);\\n    projectStore.set({ projectId: null, project: null });\\n    await goto(\\"/\\");\\n    resetWorkspace();\\n  } catch (e) {\\n    onErrorMessage(\\"Error saving your project please try agian.\\", e);\\n  }\\n}\\nasync function onNewFileNoAuth() {\\n  const confirmNewFile = await onConfirm(\\n    \\"You are creating a new file, which will delete your work.  Would you like to continue?\\"\\n  );\\n  if (!confirmNewFile) {\\n    return;\\n  }\\n  resetWorkspace();\\n}\\nasync function onSaveClick() {\\n  if (!$projectStore.projectId) {\\n    await goto(\\"/project-settings\\");\\n    return;\\n  }\\n  if (!canSave)\\n    return;\\n  try {\\n    await saveProject($projectStore.project, $projectStore.projectId);\\n    showSaveSuccess = true;\\n    await wait(1500);\\n    canSave = true;\\n    showSaveSuccess = false;\\n  } catch (e) {\\n    onErrorMessage(\\"Error saving your project please try agian.\\", e);\\n  }\\n}\\nasync function onSignOut() {\\n  try {\\n    await logout();\\n  } catch (e) {\\n    onErrorMessage(\\"Please try again in 5 minutes\\", e);\\n  }\\n}\\nasync function openFile(e) {\\n  isOpeningFile = true;\\n  const file = fileUpload.files[0];\\n  if (!file) {\\n    return;\\n  }\\n  try {\\n    await loadNewProjectFile(file);\\n  } catch (e2) {\\n    onErrorMessage(\\"Please make sure you uploaded a valid file.\\", e2);\\n  }\\n  isOpeningFile = false;\\n  if (isPathOnHomePage($page.url.pathname)) {\\n    arduinoLoopBlockShowNumberOfTimesThroughLoop();\\n  } else {\\n    arduinoLoopBlockShowLoopForeverText();\\n  }\\n}\\n<\/script>\\n\\n<nav class:small={!$authStore.isLoggedIn}>\\n  {#if $authStore.isLoggedIn}\\n    <a\\n      title=\\"Home\\"\\n      use:tooltip={navTooltipStyle}\\n      href=\\"/{params}\\"\\n      class:active={isPathOnHomePage($page.url.pathname)}\\n    >\\n      <i class=\\"fa fa-home\\" title=\\"Simulator\\" use:tooltip={navTooltipStyle} />\\n    </a>\\n\\n    <a\\n      href=\\"/code{params}\\"\\n      title=\\"Code\\"\\n      use:tooltip={navTooltipStyle}\\n      class:active={$page.url.pathname.includes(\\"code\\")}\\n    >\\n      <i class=\\"fa fa-code\\" />\\n    </a>\\n    <a\\n      href=\\"/arduino{params}\\"\\n      use:tooltip={navTooltipStyle}\\n      title=\\"Upload\\"\\n      class:active={$page.url.pathname.includes(\\"arduino\\")}\\n    >\\n      <i class=\\"fa fa-microchip\\" />\\n    </a>\\n\\n    <a\\n      href=\\"/open\\"\\n      use:tooltip={navTooltipStyle}\\n      title=\\"My Projects\\"\\n      class:active={segment === \\"open\\"}\\n    >\\n      <i\\n        class=\\"fa\\"\\n        class:fa-folder-open-o={segment !== \\"open\\"}\\n        class:fa-folder-open={segment === \\"open\\"}\\n      />\\n    </a>\\n    <span\\n      title=\\"New File/Blank File\\"\\n      use:tooltip={navTooltipStyle}\\n      on:click={onNewFileAuth}\\n    >\\n      <i class=\\"fa fa-file-o\\" />\\n    </span>\\n    <span\\n      title=\\"Save Project\\"\\n      use:tooltip={navTooltipStyle}\\n      on:click={onSaveClick}><i class=\\"fa fa-floppy-o\\" /></span\\n    >\\n    <a\\n      title=\\"Project Settings\\"\\n      href=\\"/project-settings\\"\\n      use:tooltip={navTooltipStyle}\\n      class:active={$page.url.pathname.includes(\\"project-settings\\")}\\n    >\\n      <i class=\\"fa fa-wrench\\" aria-hidden=\\"true\\" />\\n    </a>\\n    <a\\n      title=\\"Settings\\"\\n      use:tooltip={navTooltipStyle}\\n      href=\\"/settings\\"\\n      class:active={segment === \\"settings\\"}\\n    >\\n      <i class=\\"fa fa-gears\\" />\\n    </a>\\n    <span use:tooltip={navTooltipStyle} on:click={onSignOut} title=\\"Sign Out\\">\\n      <i class=\\"fa fa-sign-out\\" title=\\"Sign Out\\" aria-hidden=\\"true\\" />\\n    </span>\\n  {/if}\\n\\n  {#if !$authStore.isLoggedIn}\\n    <a\\n      href=\\"/\\"\\n      title=\\"Home\\"\\n      use:tooltip={navTooltipStyle}\\n      class:active={isPathOnHomePage($page.url.pathname)}\\n    >\\n      <i class=\\"fa fa-home\\" />\\n    </a>\\n\\n    <a\\n      href=\\"/code\\"\\n      title=\\"Code\\"\\n      use:tooltip={navTooltipStyle}\\n      class:active={$page.url.pathname.includes(\\"code\\")}\\n    >\\n      <i class=\\"fa fa-code\\" />\\n    </a>\\n    <a\\n      href=\\"/arduino\\"\\n      use:tooltip={navTooltipStyle}\\n      title=\\"Upload\\"\\n      class:active={$page.url.pathname.includes(\\"arduino\\")}\\n    >\\n      <i class=\\"fa fa-microchip\\" />\\n    </a>\\n\\n    <label\\n      use:tooltip={navTooltipStyle}\\n      title=\\"Open File\\"\\n      class:active={segment === \\"open\\"}\\n    >\\n      <i\\n        class=\\"fa\\"\\n        class:fa-folder-open-o={!isOpeningFile}\\n        class:fa-folder-open={isOpeningFile}\\n      />\\n      <input\\n        on:change={openFile}\\n        type=\\"file\\"\\n        accept=\\"text/xml\\"\\n        style=\\"display:none\\"\\n        bind:this={fileUpload}\\n      />\\n    </label>\\n    <span\\n      use:tooltip={navTooltipStyle}\\n      title=\\"New File/Blank File\\"\\n      on:click={onNewFileNoAuth}\\n      class=\\"active\\"\\n    >\\n      <i class=\\"fa fa-file-o\\" />\\n    </span>\\n    <a\\n      href=\\"/download\\"\\n      use:tooltip={navTooltipStyle}\\n      title=\\"Download\\"\\n      class:active={$page.url.pathname.includes(\\"download\\")}\\n    >\\n      <i class=\\"fa fa-download\\" />\\n    </a>\\n    <a\\n      href=\\"/settings\\"\\n      use:tooltip={navTooltipStyle}\\n      title=\\"Settings\\"\\n      class:active={$page.url.pathname.includes(\\"settings\\")}\\n    >\\n      <i class=\\"fa fa-gears\\" />\\n    </a>\\n    <a\\n      href=\\"/login\\"\\n      use:tooltip={navTooltipStyle}\\n      title=\\"Login\\"\\n      class:active={$page.url.pathname.includes(\\"login\\")}\\n    >\\n      <i class=\\"fa fa-sign-in\\" />\\n    </a>\\n  {/if}\\n</nav>\\n{#if showSaveSuccess}\\n  <p transition:fade id=\\"saved\\">project saved</p>\\n{/if}\\n\\n<style>\\n  nav {\\n    width: 100%;\\n    overflow: auto;\\n    border-bottom: 1px solid gray;\\n    height: 56px;\\n  }\\n\\n  nav .fa {\\n    color: #505bda;\\n  }\\n\\n  nav a .fa,\\n  nav span .fa,\\n  nav .disabled .fa {\\n    opacity: 0.5;\\n  }\\n\\n  nav .active .fa {\\n    color: #505bda !important;\\n    opacity: 1;\\n  }\\n\\n  nav a,\\n  nav span,\\n  label {\\n    float: left;\\n    width: 11.11111%;\\n    text-align: center;\\n    padding: 2px 0;\\n    transition: all 0.3s ease;\\n    color: white;\\n    font-size: 3rem;\\n    cursor: pointer;\\n    line-height: 1px;\\n    margin-bottom: 0;\\n    margin-top: 3px;\\n  }\\n  nav.small a,\\n  nav.small span,\\n  nav.small label {\\n    width: 12.5%;\\n  }\\n  #saved {\\n    position: absolute;\\n    left: 50%;\\n    top: 100px;\\n    background: #2c75e6;\\n    text-align: center;\\n    vertical-align: middle;\\n    padding: 10px;\\n    transform: translateX(-50%);\\n    z-index: 21;\\n    color: #fff;\\n  }\\n\\n  :global(.tooltip.nav-tooltip) {\\n    margin-top: 42px;\\n  }\\n</style>\\n"],"names":[],"mappings":"AA0QE,+BAAI,CACF,KAAK,CAAE,IAAI,CACX,QAAQ,CAAE,IAAI,CACd,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CAC7B,MAAM,CAAE,IACV,CAEA,iBAAG,CAAC,iBAAI,CACN,KAAK,CAAE,OACT,CAEA,iBAAG,CAAC,CAAC,CAAC,iBAAG,CACT,iBAAG,CAAC,IAAI,CAAC,iBAAG,CACZ,iBAAG,CAAC,SAAS,CAAC,iBAAI,CAChB,OAAO,CAAE,GACX,CAEA,iBAAG,CAAC,OAAO,CAAC,iBAAI,CACd,KAAK,CAAE,OAAO,CAAC,UAAU,CACzB,OAAO,CAAE,CACX,CAEA,iBAAG,CAAC,eAAC,CACL,iBAAG,CAAC,kBAAI,CACR,iCAAM,CACJ,KAAK,CAAE,IAAI,CACX,KAAK,CAAE,SAAS,CAChB,UAAU,CAAE,MAAM,CAClB,OAAO,CAAE,GAAG,CAAC,CAAC,CACd,UAAU,CAAE,GAAG,CAAC,IAAI,CAAC,IAAI,CACzB,KAAK,CAAE,KAAK,CACZ,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,OAAO,CACf,WAAW,CAAE,GAAG,CAChB,aAAa,CAAE,CAAC,CAChB,UAAU,CAAE,GACd,CACA,GAAG,oBAAM,CAAC,eAAC,CACX,GAAG,oBAAM,CAAC,kBAAI,CACd,GAAG,oBAAM,CAAC,mBAAM,CACd,KAAK,CAAE,KACT,CACA,kCAAO,CACL,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,GAAG,CACT,GAAG,CAAE,KAAK,CACV,UAAU,CAAE,OAAO,CACnB,UAAU,CAAE,MAAM,CAClB,cAAc,CAAE,MAAM,CACtB,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,WAAW,IAAI,CAAC,CAC3B,OAAO,CAAE,EAAE,CACX,KAAK,CAAE,IACT,CAEQ,oBAAsB,CAC5B,UAAU,CAAE,IACd"}'
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $$unsubscribe_projectStore;
  let $authStore, $$unsubscribe_authStore;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_projectStore = subscribe(projectStore, (value) => value);
  $$unsubscribe_authStore = subscribe(authStore, (value) => $authStore = value);
  let { segment } = $$props;
  let params = "";
  projectStore.subscribe((p) => {
    if (p.projectId) {
      params = `?projectid=${p.projectId}`;
    } else {
      params = "";
    }
  });
  if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0)
    $$bindings.segment(segment);
  $$result.css.add(css$5);
  $$unsubscribe_page();
  $$unsubscribe_projectStore();
  $$unsubscribe_authStore();
  return `<nav class="${["svelte-sf3700", !$authStore.isLoggedIn ? "small" : ""].join(" ").trim()}">${$authStore.isLoggedIn ? `<a title="Home" href="${"/" + escape(params, true)}" class="${["svelte-sf3700", isPathOnHomePage($page.url.pathname) ? "active" : ""].join(" ").trim()}"><i class="fa fa-home svelte-sf3700" title="Simulator"></i></a> <a href="${"/code" + escape(params, true)}" title="Code" class="${["svelte-sf3700", $page.url.pathname.includes("code") ? "active" : ""].join(" ").trim()}"><i class="fa fa-code svelte-sf3700"></i></a> <a href="${"/arduino" + escape(params, true)}" title="Upload" class="${["svelte-sf3700", $page.url.pathname.includes("arduino") ? "active" : ""].join(" ").trim()}"><i class="fa fa-microchip svelte-sf3700"></i></a> <a href="/open" title="My Projects" class="${["svelte-sf3700", segment === "open" ? "active" : ""].join(" ").trim()}"><i class="${[
    "fa svelte-sf3700",
    (segment !== "open" ? "fa-folder-open-o" : "") + " " + (segment === "open" ? "fa-folder-open" : "")
  ].join(" ").trim()}"></i></a> <span title="New File/Blank File" class="svelte-sf3700" data-svelte-h="svelte-1w5bhaj"><i class="fa fa-file-o svelte-sf3700"></i></span> <span title="Save Project" class="svelte-sf3700" data-svelte-h="svelte-1j693r7"><i class="fa fa-floppy-o svelte-sf3700"></i></span> <a title="Project Settings" href="/project-settings" class="${[
    "svelte-sf3700",
    $page.url.pathname.includes("project-settings") ? "active" : ""
  ].join(" ").trim()}" data-svelte-h="svelte-1jnpyfz"><i class="fa fa-wrench svelte-sf3700" aria-hidden="true"></i></a> <a title="Settings" href="/settings" class="${["svelte-sf3700", segment === "settings" ? "active" : ""].join(" ").trim()}" data-svelte-h="svelte-1bufgy0"><i class="fa fa-gears svelte-sf3700"></i></a> <span title="Sign Out" class="svelte-sf3700" data-svelte-h="svelte-z0x391"><i class="fa fa-sign-out svelte-sf3700" title="Sign Out" aria-hidden="true"></i></span>` : ``} ${!$authStore.isLoggedIn ? `<a href="/" title="Home" class="${["svelte-sf3700", isPathOnHomePage($page.url.pathname) ? "active" : ""].join(" ").trim()}" data-svelte-h="svelte-1d8pni2"><i class="fa fa-home svelte-sf3700"></i></a> <a href="/code" title="Code" class="${["svelte-sf3700", $page.url.pathname.includes("code") ? "active" : ""].join(" ").trim()}" data-svelte-h="svelte-1erxqun"><i class="fa fa-code svelte-sf3700"></i></a> <a href="/arduino" title="Upload" class="${["svelte-sf3700", $page.url.pathname.includes("arduino") ? "active" : ""].join(" ").trim()}" data-svelte-h="svelte-kjd7g2"><i class="fa fa-microchip svelte-sf3700"></i></a> <label title="Open File" class="${["svelte-sf3700", segment === "open" ? "active" : ""].join(" ").trim()}"><i class="${[
    "fa svelte-sf3700",
    "fa-folder-open-o "
  ].join(" ").trim()}"></i> <input type="file" accept="text/xml" style="display:none"></label> <span title="New File/Blank File" class="active svelte-sf3700" data-svelte-h="svelte-1vo0nwf"><i class="fa fa-file-o svelte-sf3700"></i></span> <a href="/download" title="Download" class="${["svelte-sf3700", $page.url.pathname.includes("download") ? "active" : ""].join(" ").trim()}" data-svelte-h="svelte-1rmmqh5"><i class="fa fa-download svelte-sf3700"></i></a> <a href="/settings" title="Settings" class="${["svelte-sf3700", $page.url.pathname.includes("settings") ? "active" : ""].join(" ").trim()}" data-svelte-h="svelte-9865yu"><i class="fa fa-gears svelte-sf3700"></i></a> <a href="/login" title="Login" class="${["svelte-sf3700", $page.url.pathname.includes("login") ? "active" : ""].join(" ").trim()}" data-svelte-h="svelte-55ku19"><i class="fa fa-sign-in svelte-sf3700"></i></a>` : ``}</nav> ${``}`;
});
const css$4 = {
  code: "#blockly.svelte-3hr48s{height:100%}",
  map: `{"version":3,"file":"Blockly.svelte","sources":["Blockly.svelte"],"sourcesContent":["<script>\\n  import Blockly from 'blockly';\\n  import { onMount, onDestroy } from 'svelte';\\n\\n  import { WindowType, resizeStore } from '../../stores/resize.store';\\n  import startBlocly from '../../core/blockly/startBlockly';\\n  import currentFrameStore from '../../stores/currentFrame.store';\\n  import arduinoStore from '../../stores/arduino.store';\\n  import arduinoMessageStore from '../../stores/arduino-message.store';\\n\\n  import {\\n    arduinoLoopBlockShowLoopForeverText,\\n    arduinoLoopBlockShowNumberOfTimesThroughLoop,\\n  } from '../../core/blockly/helpers/arduino_loop_block.helper';\\n\\n  import {\\n    getAllBlocks,\\n    getBlockById,\\n  } from '../../core/blockly/helpers/block.helper';\\n  import updateLoopblockStore from '../../stores/update-loopblock.store';\\n\\n  // Controls whether to show the arduino loop block shows\\n  // the  loop forever text or loop number of times text\\n  export let showLoopExecutionTimesArduinoStartBlock = true;\\n\\n  // The elment that contains blockly\\n  let blocklyElement;\\n\\n  let workspaceInitialize = false;\\n\\n  const unsubscribes = [];\\n\\n  // This is ran whenever the showLoopExecutionTimesArduinoStartBlock changeq\\n  // and blocklyWorkspace is initialized\\n  $: if (showLoopExecutionTimesArduinoStartBlock && workspaceInitialize) {\\n    arduinoLoopBlockShowNumberOfTimesThroughLoop();\\n  } else if (workspaceInitialize) {\\n    arduinoLoopBlockShowLoopForeverText();\\n  }\\n\\n  onMount(() => {\\n    // Hack for debugging blockly\\n    window.Blockly = Blockly;\\n\\n    startBlocly(blocklyElement);\\n\\n    workspaceInitialize = true;\\n\\n    // Hack to make sure that once blockly loads it gets resized\\n    setTimeout(() => {\\n      resizeBlockly();\\n    }, 200);\\n\\n    unsubscribes.push(\\n      currentFrameStore.subscribe((frame) => {\\n        if (!frame) return;\\n        getAllBlocks().forEach((b) => b.unselect());\\n        const selectedBlock = getBlockById(frame.blockId);\\n        if (selectedBlock) {\\n          selectedBlock.select();\\n        }\\n      })\\n    );\\n\\n    unsubscribes.push(\\n      updateLoopblockStore.subscribe(() => {\\n        if (showLoopExecutionTimesArduinoStartBlock && workspaceInitialize) {\\n          arduinoLoopBlockShowNumberOfTimesThroughLoop();\\n        } else if (workspaceInitialize) {\\n          arduinoLoopBlockShowLoopForeverText();\\n        }\\n      })\\n    );\\n  });\\n\\n  // List for resize main window event and resize blockly\\n  unsubscribes.push(\\n    resizeStore.subscribe((event) => {\\n      if (event.type == WindowType.MAIN) {\\n        resizeBlockly();\\n        return;\\n      }\\n    })\\n  );\\n\\n  // Tells us the state of the port we always want to subscribe to this\\n  // while blockly is running. Even though the message component is the only one that should\\n  // set this\\n  unsubscribes.push(\\n    arduinoStore.subscribe((m) =>\\n      console.log(m, 'arduino store blockly component')\\n    )\\n  );\\n\\n  unsubscribes.push(\\n    arduinoMessageStore.subscribe((m) => {\\n      if (!m) {\\n        return;\\n      }\\n\\n      if (m.type === 'Computer') {\\n        return;\\n      }\\n\\n      if (m.message.indexOf('DEBUG_BLOCK_') === -1) {\\n        return;\\n      }\\n\\n      const blockId = m.message.replace('DEBUG_BLOCK_', '').trim();\\n\\n      getAllBlocks().forEach((b) => b.unselect());\\n      const selectedBlock = getBlockById(blockId);\\n      if (selectedBlock) {\\n        selectedBlock.select();\\n      } else {\\n        console.log(blockId, 'blockId');\\n      }\\n    })\\n  );\\n\\n  // The function to resize blockly main window\\n  function resizeBlockly() {\\n    Blockly.svgResize(Blockly.getMainWorkspace());\\n  }\\n\\n  onDestroy(() => {\\n    unsubscribes.forEach((unSubFunc) => unSubFunc());\\n  });\\n<\/script>\\n\\n<section bind:this={blocklyElement} id=\\"blockly\\" />\\n\\n<style>\\n  #blockly {\\n    height: 100%;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAqIE,sBAAS,CACP,MAAM,CAAE,IACV"}`
};
const Blockly_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { showLoopExecutionTimesArduinoStartBlock = true } = $$props;
  let blocklyElement;
  let workspaceInitialize = false;
  const unsubscribes = [];
  unsubscribes.push(resizeStore.subscribe((event) => {
    if (event.type == WindowType.MAIN) {
      resizeBlockly();
      return;
    }
  }));
  unsubscribes.push(arduinoStore.subscribe((m) => console.log(m, "arduino store blockly component")));
  unsubscribes.push(arduionMessageStore.subscribe((m) => {
    if (!m) {
      return;
    }
    if (m.type === "Computer") {
      return;
    }
    if (m.message.indexOf("DEBUG_BLOCK_") === -1) {
      return;
    }
    const blockId = m.message.replace("DEBUG_BLOCK_", "").trim();
    getAllBlocks().forEach((b) => b.unselect());
    const selectedBlock = getBlockById(blockId);
    if (selectedBlock) {
      selectedBlock.select();
    } else {
      console.log(blockId, "blockId");
    }
  }));
  function resizeBlockly() {
    Blockly.svgResize(Blockly.getMainWorkspace());
  }
  onDestroy(() => {
    unsubscribes.forEach((unSubFunc) => unSubFunc());
  });
  if ($$props.showLoopExecutionTimesArduinoStartBlock === void 0 && $$bindings.showLoopExecutionTimesArduinoStartBlock && showLoopExecutionTimesArduinoStartBlock !== void 0)
    $$bindings.showLoopExecutionTimesArduinoStartBlock(showLoopExecutionTimesArduinoStartBlock);
  $$result.css.add(css$4);
  {
    if (showLoopExecutionTimesArduinoStartBlock && workspaceInitialize) {
      arduinoLoopBlockShowNumberOfTimesThroughLoop();
    }
  }
  return `<section id="blockly" class="svelte-3hr48s"${add_attribute("this", blocklyElement, 0)}></section>`;
});
const videoLessons = [
  {
    id: "introduction",
    title: "Кіріспе",
    videoUrl: "https://storage.googleapis.com/electroblocks/videos/1-introduction.mp4",
    lessonUrl: "https://electroblocks.github.io/docs/"
  },
  {
    id: "what-is-arduino",
    title: "What's an Arduino?",
    videoUrl: "https://storage.googleapis.com/electroblocks/videos/2-arduino.mp4",
    lessonUrl: "https://electroblocks.github.io/docs/lessons/what-is-an-arduino/"
  },
  {
    id: "blink",
    title: "LED Blink",
    videoUrl: "https://storage.googleapis.com/electroblocks/videos/3-blink.mp4",
    lessonUrl: "https://electroblocks.github.io/docs/lessons/blink/"
  },
  {
    id: "sending-messages",
    title: "Sending Messages",
    videoUrl: "https://storage.googleapis.com/electroblocks/videos/4-sending-messages.mp4",
    lessonUrl: "https://electroblocks.github.io/docs/lessons/sending-messages/"
  },
  {
    id: "high-five",
    title: "Servo - High Five",
    videoUrl: "https://storage.googleapis.com/electroblocks/videos/5-high-five.mp4",
    lessonUrl: "https://electroblocks.github.io/docs/lessons/highfive/"
  },
  {
    id: "wave",
    title: "Servo - Wave",
    videoUrl: "https://storage.googleapis.com/electroblocks/videos/6-wave.mp4",
    lessonUrl: "https://electroblocks.github.io/docs/lessons/wave/"
  },
  {
    id: "rgbled",
    title: "RGB LED",
    videoUrl: "https://storage.googleapis.com/electroblocks/videos/7-rbgled.mp4",
    lessonUrl: "https://electroblocks.github.io/docs/lessons/rgbled/"
  },
  {
    id: "intro-FastLED",
    title: "Intro - FastLED",
    videoUrl: "https://storage.googleapis.com/electroblocks/videos/8-intro-rgb-light-strip.mp4",
    lessonUrl: "https://electroblocks.github.io/docs/lessons/fastled/"
  },
  {
    id: "fastLED-alternating-pattern",
    title: "FastLED - Alternating Colors",
    videoUrl: "https://storage.googleapis.com/electroblocks/videos/9-FastLED-Alternating-Pattern.mp4",
    lessonUrl: "https://electroblocks.github.io/docs/lessons/fastled/"
  },
  {
    id: "fastLED-snake-pattern",
    title: "FastLED - Snake",
    videoUrl: "https://storage.googleapis.com/electroblocks/videos/9-FastLED-Alternating-Pattern.mp4",
    lessonUrl: "https://electroblocks.github.io/docs/lessons/fastled/"
  }
];
const starterLessons = [
  {
    id: "blink",
    title: "Blink",
    pictureUrl: "https://storage.googleapis.com/electroblocks/starters/blink/picture.png",
    projectUrl: "https://storage.googleapis.com/electroblocks/starters/blink/project.xml",
    lessonUrl: "https://electroblocks.github.io/docs/lessons/blink/"
  },
  {
    id: "double-blink",
    title: "Double Blink",
    pictureUrl: "https://storage.googleapis.com/electroblocks/starters/double-blink/picture.png",
    projectUrl: "https://storage.googleapis.com/electroblocks/starters/double-blink/project.xml",
    lessonUrl: "https://electroblocks.github.io/docs/lessons/blink/"
  },
  {
    id: "alernating-blink",
    title: "Alternating Blink",
    pictureUrl: "https://storage.googleapis.com/electroblocks/starters/alternating-blink/picture.png",
    projectUrl: "https://storage.googleapis.com/electroblocks/starters/alternating-blink/project.xml",
    lessonUrl: "https://electroblocks.github.io/docs/lessons/blink/"
  },
  {
    id: "high-five",
    title: "High Five",
    pictureUrl: "https://storage.googleapis.com/electroblocks/starters/highfive/picture.png",
    projectUrl: "https://storage.googleapis.com/electroblocks/starters/highfive/project.xml",
    lessonUrl: "https://electroblocks.github.io/docs/lessons/highfive/"
  }
];
const css$3 = {
  code: "img.svelte-ufdal9{width:100%;display:'block';cursor:pointer}a.svelte-ufdal9{display:block;color:darkblue;text-decoration:underline;margin-top:20px}.lesson.svelte-ufdal9{border-bottom:solid gray 1px;padding:2px;margin-bottom:20px}",
  map: `{"version":3,"file":"StarterLesson.svelte","sources":["StarterLesson.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { loadProjectFromUrl } from \\"../../../core/blockly/helpers/workspace.helper\\";\\nimport updateLoopblockStore from \\"../../../stores/update-loopblock.store\\";\\nexport let lesson;\\nasync function getLesson() {\\n  await loadProjectFromUrl(lesson.projectUrl);\\n  updateLoopblockStore.update((n) => n + 1);\\n}\\n<\/script>\\n\\n<div class=\\"lesson\\">\\n  <h2>{lesson.title}</h2>\\n  <img on:click={getLesson} src={lesson.pictureUrl} alt={lesson.title} />\\n  <a target=\\"_blank\\" href={lesson.lessonUrl}>Support Page</a>\\n</div>\\n\\n<style>\\n  img {\\n    width: 100%;\\n    display: 'block';\\n    cursor: pointer;\\n  }\\n  a {\\n    display: block;\\n    color: darkblue;\\n    text-decoration: underline;\\n    margin-top: 20px;\\n  }\\n  .lesson {\\n    border-bottom: solid gray 1px;\\n    padding: 2px;\\n    margin-bottom: 20px;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAgBE,iBAAI,CACF,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,OAAO,CAChB,MAAM,CAAE,OACV,CACA,eAAE,CACA,OAAO,CAAE,KAAK,CACd,KAAK,CAAE,QAAQ,CACf,eAAe,CAAE,SAAS,CAC1B,UAAU,CAAE,IACd,CACA,qBAAQ,CACN,aAAa,CAAE,KAAK,CAAC,IAAI,CAAC,GAAG,CAC7B,OAAO,CAAE,GAAG,CACZ,aAAa,CAAE,IACjB"}`
};
const StarterLesson = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { lesson } = $$props;
  if ($$props.lesson === void 0 && $$bindings.lesson && lesson !== void 0)
    $$bindings.lesson(lesson);
  $$result.css.add(css$3);
  return `<div class="lesson svelte-ufdal9"><h2>${escape(lesson.title)}</h2> <img${add_attribute("src", lesson.pictureUrl, 0)}${add_attribute("alt", lesson.title, 0)} class="svelte-ufdal9"> <a target="_blank"${add_attribute("href", lesson.lessonUrl, 0)} class="svelte-ufdal9">Support Page</a> </div>`;
});
const css$2 = {
  code: ".lesson.svelte-lspdq3{border-bottom:solid gray 1px;padding:2px;margin-bottom:20px}video.svelte-lspdq3{width:100%;display:block}a.svelte-lspdq3{display:block;color:darkblue;text-decoration:underline;margin-top:20px}",
  map: '{"version":3,"file":"VideoLesson.svelte","sources":["VideoLesson.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let lesson;\\n<\/script>\\n\\n<div class=\\"lesson\\">\\n  <h2 id=\\"lesson-video-{lesson.id}\\">{lesson.title}</h2>\\n  <video controls>\\n    <track kind=\\"captions\\" />\\n    <source src={lesson.videoUrl} />\\n  </video>\\n  <a target=\\"_blank\\" href={lesson.lessonUrl}>Support Page</a>\\n</div>\\n\\n<style>\\n  .lesson {\\n    border-bottom: solid gray 1px;\\n    padding: 2px;\\n    margin-bottom: 20px;\\n  }\\n  video {\\n    width: 100%;\\n    display: block;\\n  }\\n  a {\\n    display: block;\\n    color: darkblue;\\n    text-decoration: underline;\\n    margin-top: 20px;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAaE,qBAAQ,CACN,aAAa,CAAE,KAAK,CAAC,IAAI,CAAC,GAAG,CAC7B,OAAO,CAAE,GAAG,CACZ,aAAa,CAAE,IACjB,CACA,mBAAM,CACJ,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,KACX,CACA,eAAE,CACA,OAAO,CAAE,KAAK,CACd,KAAK,CAAE,QAAQ,CACf,eAAe,CAAE,SAAS,CAC1B,UAAU,CAAE,IACd"}'
};
const VideoLesson = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { lesson } = $$props;
  if ($$props.lesson === void 0 && $$bindings.lesson && lesson !== void 0)
    $$bindings.lesson(lesson);
  $$result.css.add(css$2);
  return `<div class="lesson svelte-lspdq3"><h2 id="${"lesson-video-" + escape(lesson.id, true)}">${escape(lesson.title)}</h2> <video controls class="svelte-lspdq3"><track kind="captions"><source${add_attribute("src", lesson.videoUrl, 0)}></video> <a target="_blank"${add_attribute("href", lesson.lessonUrl, 0)} class="svelte-lspdq3">Support Page</a> </div>`;
});
const css$1 = {
  code: ".lessons-container.svelte-17f88k9{padding:15px;position:relative;margin-bottom:1000px}#close.svelte-17f88k9{width:20px;height:20px;background-color:#aa0000;color:white;text-align:center;right:0;top:0;position:absolute;cursor:pointer;user-select:none}a.svelte-17f88k9{color:darkblue;text-decoration:underline}",
  map: `{"version":3,"file":"Lessons.svelte","sources":["Lessons.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { FormGroup, Input } from \\"@sveltestrap/sveltestrap\\";\\nimport { starterLessons, videoLessons } from \\"../../../lessons/lessons\\";\\nimport StarterLesson from \\"../lessons/StarterLesson.svelte\\";\\nimport VideoLesson from \\"../lessons/VideoLesson.svelte\\";\\nimport showLessonStore from \\"../../../stores/showLessons.store\\";\\nimport { resizeStore } from \\"../../../stores/resize.store\\";\\nimport { tick } from \\"svelte\\";\\nlet category = \\"video\\";\\nlet videoLessonFiltered = videoLessons;\\nlet starterLessonsFiltered = starterLessons;\\nasync function close() {\\n  showLessonStore.set(false);\\n  await tick();\\n  await tick();\\n  resizeStore.mainWindow();\\n}\\n<\/script>\\n\\n<div class=\\"lessons-container\\">\\n  <div on:click={close} id=\\"close\\">X</div>\\n  <h2>Lessons</h2>\\n\\n  <FormGroup>\\n    <Input type=\\"select\\" bind:value={category} name=\\"select\\" id=\\"Category\\">\\n      <option value=\\"video\\">Videos</option>\\n      <option value=\\"starter\\">Starters</option>\\n    </Input>\\n  </FormGroup>\\n  {#if category == 'video'}\\n    <p>\\n      Instructions for building the circuit are on the support page linkd.\\n      Please consider taking our\\n      <a\\n        target=\\"_blank\\"\\n        href=\\"https://docs.google.com/forms/d/1LngdF9DGPjRZfSl4uLvGfpX4WK_7CHlUw2y9-vIg1fY/prefill\\"\\n      >anonymous survey</a>.\\n    </p>\\n    {#each videoLessonFiltered as videoLesson}\\n      <VideoLesson lesson={videoLesson} />\\n    {/each}\\n  {/if}\\n\\n  {#if category == 'starter'}\\n    <p>\\n      Click on the picture to see code. Instructions for building the circuit\\n      are on the support page linked.\\n    </p>\\n    {#each starterLessonsFiltered as starterLesson}\\n      <StarterLesson lesson={starterLesson} />\\n    {/each}\\n  {/if}\\n</div>\\n\\n<style>\\n  .lessons-container {\\n    padding: 15px;\\n    position: relative;\\n    margin-bottom: 1000px;\\n  }\\n\\n  #close {\\n    width: 20px;\\n    height: 20px;\\n    background-color: #aa0000;\\n    color: white;\\n    text-align: center;\\n    right: 0;\\n    top: 0;\\n    position: absolute;\\n    cursor: pointer;\\n    user-select: none;\\n  }\\n  a {\\n    color: darkblue;\\n    text-decoration: underline;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAsDE,iCAAmB,CACjB,OAAO,CAAE,IAAI,CACb,QAAQ,CAAE,QAAQ,CAClB,aAAa,CAAE,MACjB,CAEA,qBAAO,CACL,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,KAAK,CACZ,UAAU,CAAE,MAAM,CAClB,KAAK,CAAE,CAAC,CACR,GAAG,CAAE,CAAC,CACN,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,OAAO,CACf,WAAW,CAAE,IACf,CACA,gBAAE,CACA,KAAK,CAAE,QAAQ,CACf,eAAe,CAAE,SACnB"}`
};
const Lessons = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let category = "video";
  let videoLessonFiltered = videoLessons;
  let starterLessonsFiltered = starterLessons;
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="lessons-container svelte-17f88k9"><div id="close" class="svelte-17f88k9" data-svelte-h="svelte-17qe4v2">X</div> <h2 data-svelte-h="svelte-1vphqod">Lessons</h2> ${validate_component(FormGroup, "FormGroup").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Input, "Input").$$render(
          $$result,
          {
            type: "select",
            name: "select",
            id: "Category",
            value: category
          },
          {
            value: ($$value) => {
              category = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `<option value="video" data-svelte-h="svelte-tm9mt7">Videos</option> <option value="starter" data-svelte-h="svelte-9okg9z">Starters</option>`;
            }
          }
        )}`;
      }
    })} ${category == "video" ? `<p data-svelte-h="svelte-116oz6">Instructions for building the circuit are on the support page linkd.
      Please consider taking our
      <a target="_blank" href="https://docs.google.com/forms/d/1LngdF9DGPjRZfSl4uLvGfpX4WK_7CHlUw2y9-vIg1fY/prefill" class="svelte-17f88k9">anonymous survey</a>.</p> ${each(videoLessonFiltered, (videoLesson) => {
      return `${validate_component(VideoLesson, "VideoLesson").$$render($$result, { lesson: videoLesson }, {}, {})}`;
    })}` : ``} ${category == "starter" ? `<p data-svelte-h="svelte-18p7bp8">Click on the picture to see code. Instructions for building the circuit
      are on the support page linked.</p> ${each(starterLessonsFiltered, (starterLesson) => {
      return `${validate_component(StarterLesson, "StarterLesson").$$render($$result, { lesson: starterLesson }, {}, {})}`;
    })}` : ``} </div>`;
  } while (!$$settled);
  return $$rendered;
});
const css = {
  code: "main.svelte-1kz1uk9{width:100%;display:flex;box-sizing:border-box}.grabber.svelte-1kz1uk9{flex:1;cursor:col-resize;background-color:#eff0f1;background-position:center center;background-repeat:no-repeat;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==)}#right_panel.svelte-1kz1uk9{overflow:hidden}#right_panel.scroll.svelte-1kz1uk9{overflow-y:scroll}.hide.svelte-1kz1uk9{opacity:0.01}",
  map: `{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { onMount, tick } from \\"svelte\\";\\nimport _ from \\"lodash\\";\\nimport { getAuth, onAuthStateChanged } from \\"firebase/auth\\";\\nimport config from \\"../env\\";\\nimport { isPathOnHomePage } from \\"../helpers/is-path-on-homepage\\";\\nimport Nav from \\"../components/electroblocks/Nav.svelte\\";\\nimport Blockly from \\"../components/electroblocks/Blockly.svelte\\";\\nimport { resizeStore } from \\"../stores/resize.store\\";\\nimport { page } from \\"$app/stores\\";\\nimport authStore from \\"../stores/auth.store\\";\\nimport projectStore from \\"../stores/project.store\\";\\nimport { getFile, getProject } from \\"../firebase/db\\";\\nimport { loadProject } from \\"../core/blockly/helpers/workspace.helper\\";\\nimport showLessonStore from \\"../stores/showLessons.store\\";\\nimport {\\n  arduinoLoopBlockShowLoopForeverText,\\n  arduinoLoopBlockShowNumberOfTimesThroughLoop\\n} from \\"../core/blockly/helpers/arduino_loop_block.helper\\";\\nimport swal from \\"sweetalert\\";\\nimport Lessons from \\"../components/electroblocks/home/Lessons.svelte\\";\\nimport { initializeAnalytics } from \\"firebase/analytics\\";\\nimport { initializeApp } from \\"firebase/app\\";\\nexport let segment = \\"\\";\\nlet showScrollOnRightSide = false;\\nlet showLoopExecutionTimesArduinoStartBlock;\\n$:\\n  showLoopExecutionTimesArduinoStartBlock = isPathOnHomePage($page.url.pathname);\\nlet height = \\"500px\\";\\nlet middleFlex = 59.5;\\nlet rightFlex = 39.5;\\nlet leftFlex = 0;\\nlet isResizingLeft = false;\\nlet isResizingRight = false;\\nfunction startResize(side) {\\n  if (side == \\"right\\") {\\n    isResizingRight = true;\\n  } else {\\n    isResizingLeft = true;\\n  }\\n}\\nfunction stopResize() {\\n  isResizingRight = false;\\n  isResizingLeft = false;\\n}\\nconst resize = (side) => {\\n  return (e) => {\\n    if (!isResizingLeft && side == \\"left\\") {\\n      return;\\n    }\\n    if (!isResizingRight && side == \\"right\\") {\\n      return;\\n    }\\n    const windowWidth = window.innerWidth;\\n    if (e.clientX < 20 || windowWidth - e.clientX < 20) {\\n      return;\\n    }\\n    if (side == \\"right\\") {\\n      rightFlex = (windowWidth - e.clientX) / windowWidth * 100;\\n    } else {\\n      leftFlex = e.clientX / windowWidth * 100;\\n    }\\n    if (!$showLessonStore) {\\n      leftFlex = 0;\\n    }\\n    middleFlex = 100 - rightFlex - leftFlex - 1;\\n    resizeStore.mainWindow();\\n  };\\n};\\nconst resizeRightSide = _.debounce(resize(\\"right\\"), 2);\\nconst resizeLeftSide = _.debounce(resize(\\"left\\"), 2);\\nfunction resizeHeight() {\\n  const navBarHeight = 56;\\n  height = window.innerHeight - navBarHeight + \\"px\\";\\n  setTimeout(() => {\\n    resizeStore.mainWindow();\\n  }, 5);\\n}\\nonMount(() => {\\n  const app = initializeApp(config.firebase);\\n  initializeAnalytics(app);\\n  localStorage.removeItem(\\"no_alert\\");\\n  page.subscribe(({ url }) => {\\n    if ([\\"open\\", \\"settings\\", \\"lessons\\", \\"code\\"].reduce((found, value) => {\\n      return found || url.pathname.indexOf(value) >= 0;\\n    }, false)) {\\n      showScrollOnRightSide = true;\\n    } else {\\n      showScrollOnRightSide = false;\\n    }\\n    resizeHeight();\\n  });\\n  showLessonStore.subscribe(async (showLesson) => {\\n    if (showLesson) {\\n      middleFlex = 39;\\n      rightFlex = 29;\\n      leftFlex = 31;\\n    } else {\\n      middleFlex = 59.5;\\n      rightFlex = 39.5;\\n      leftFlex = 0;\\n    }\\n    await tick();\\n    await tick();\\n    await tick();\\n    resizeStore.mainWindow();\\n  });\\n  let loadedProject = false;\\n  if (localStorage.getItem(\\"reload_once_workspace\\")) {\\n    const xmlText = localStorage.getItem(\\"reload_once_workspace\\");\\n    localStorage.removeItem(\\"reload_once_workspace\\");\\n    loadProject(xmlText);\\n    loadedProject = true;\\n  }\\n  const auth = getAuth();\\n  onAuthStateChanged(auth, async (user) => {\\n    if (!user) {\\n      authStore.set({\\n        isLoggedIn: false,\\n        uid: null,\\n        firebaseControlled: true\\n      });\\n      return;\\n    }\\n    authStore.set({\\n      isLoggedIn: true,\\n      uid: user.uid,\\n      firebaseControlled: true\\n    });\\n    if ($projectStore.projectId === $page.url.searchParams.get(\\"projectid\\") || !$page.url.searchParams.get(\\"projectid\\") || loadedProject) {\\n      return;\\n    }\\n    swal({\\n      title: \\"Loading your project\\",\\n      allowEscapeKey: false,\\n      allowOutsideClick: false,\\n      onOpen: () => {\\n        swal.showLoading();\\n      }\\n    });\\n    const project = await getProject($page.url.searchParams.get(\\"projectid\\"));\\n    const file = await getFile($page.url.searchParams.get(\\"projectid\\"), $authStore.uid);\\n    loadProject(file);\\n    projectStore.set({ project, projectId: $page.url.searchParams.get(\\"projectid\\") });\\n    if (isPathOnHomePage($page.url.pathname)) {\\n      arduinoLoopBlockShowNumberOfTimesThroughLoop();\\n    } else {\\n      arduinoLoopBlockShowLoopForeverText();\\n    }\\n    swal.close();\\n    return;\\n  });\\n});\\n<\/script>\\n\\n<Nav {segment} />\\n<svelte:body on:mouseup={stopResize} />\\n<main\\n  style=\\"height: {height}\\"\\n  on:mousemove={resizeLeftSide}\\n  on:mousemove={resizeRightSide}\\n>\\n  {#if $showLessonStore}\\n    <div style=\\"flex: {leftFlex}; overflow-y: scroll;\\">\\n      <Lessons />\\n    </div>\\n    <div class=\\"grabber\\" on:mousedown={() => startResize('left')} />\\n  {/if}\\n  <div style=\\"flex: {middleFlex}\\" id=\\"middle_panel\\">\\n    <Blockly {showLoopExecutionTimesArduinoStartBlock} />\\n  </div>\\n  <div on:mousedown={() => startResize('right')} class=\\"grabber\\" />\\n  <div\\n    style=\\"flex: {rightFlex}\\"\\n    class:scroll={showScrollOnRightSide}\\n    class:hide={rightFlex < 15}\\n    id=\\"right_panel\\"\\n  >\\n    <slot />\\n  </div>\\n</main>\\n\\n<svelte:window on:resize={resizeHeight} />\\n\\n<!-- This means we are on the home page and need to display the player component -->\\n<style>\\n  /** the container of all the elements */\\n  main {\\n    width: 100%;\\n    display: flex;\\n    box-sizing: border-box; /** */\\n  }\\n\\n  /** div used to resize both items */\\n  .grabber {\\n    flex: 1;\\n    cursor: col-resize;\\n    background-color: #eff0f1;\\n    background-position: center center;\\n    background-repeat: no-repeat;\\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==);\\n  }\\n  #right_panel {\\n    overflow: hidden;\\n  }\\n  #right_panel.scroll {\\n    overflow-y: scroll;\\n  }\\n  .hide {\\n    opacity: 0.01;\\n  }\\n</style>\\n"],"names":[],"mappings":"AA0LE,mBAAK,CACH,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,UACd,CAGA,uBAAS,CACP,IAAI,CAAE,CAAC,CACP,MAAM,CAAE,UAAU,CAClB,gBAAgB,CAAE,OAAO,CACzB,mBAAmB,CAAE,MAAM,CAAC,MAAM,CAClC,iBAAiB,CAAE,SAAS,CAC5B,gBAAgB,CAAE,uJACpB,CACA,2BAAa,CACX,QAAQ,CAAE,MACZ,CACA,YAAY,sBAAQ,CAClB,UAAU,CAAE,MACd,CACA,oBAAM,CACJ,OAAO,CAAE,IACX"}`
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $$unsubscribe_authStore;
  let $$unsubscribe_projectStore;
  let $showLessonStore, $$unsubscribe_showLessonStore;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_authStore = subscribe(authStore, (value) => value);
  $$unsubscribe_projectStore = subscribe(projectStore, (value) => value);
  $$unsubscribe_showLessonStore = subscribe(showLessonStore, (value) => $showLessonStore = value);
  let { segment = "" } = $$props;
  let showLoopExecutionTimesArduinoStartBlock;
  let height = "500px";
  let middleFlex = 59.5;
  let rightFlex = 39.5;
  let leftFlex = 0;
  const resize = (side) => {
    return (e) => {
      if (side == "left") {
        return;
      }
      if (side == "right") {
        return;
      }
      const windowWidth = window.innerWidth;
      if (e.clientX < 20 || windowWidth - e.clientX < 20) {
        return;
      }
      if (side == "right") {
        rightFlex = (windowWidth - e.clientX) / windowWidth * 100;
      } else {
        leftFlex = e.clientX / windowWidth * 100;
      }
      if (!$showLessonStore) {
        leftFlex = 0;
      }
      middleFlex = 100 - rightFlex - leftFlex - 1;
      resizeStore.mainWindow();
    };
  };
  _.debounce(resize("right"), 2);
  _.debounce(resize("left"), 2);
  if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0)
    $$bindings.segment(segment);
  $$result.css.add(css);
  showLoopExecutionTimesArduinoStartBlock = isPathOnHomePage($page.url.pathname);
  $$unsubscribe_page();
  $$unsubscribe_authStore();
  $$unsubscribe_projectStore();
  $$unsubscribe_showLessonStore();
  return `${validate_component(Nav, "Nav").$$render($$result, { segment }, {}, {})}  <main style="${"height: " + escape(height, true)}" class="svelte-1kz1uk9">${$showLessonStore ? `<div style="${"flex: " + escape(leftFlex, true) + "; overflow-y: scroll;"}">${validate_component(Lessons, "Lessons").$$render($$result, {}, {}, {})}</div> <div class="grabber svelte-1kz1uk9"></div>` : ``} <div style="${"flex: " + escape(middleFlex, true)}" id="middle_panel">${validate_component(Blockly_1, "Blockly").$$render($$result, { showLoopExecutionTimesArduinoStartBlock }, {}, {})}</div> <div class="grabber svelte-1kz1uk9"></div> <div style="${"flex: " + escape(rightFlex, true)}" id="right_panel" class="${[
    "svelte-1kz1uk9",
    " " + (rightFlex < 15 ? "hide" : "")
  ].join(" ").trim()}">${slots.default ? slots.default({}) : ``}</div></main>  `;
});
export {
  Layout as default
};
