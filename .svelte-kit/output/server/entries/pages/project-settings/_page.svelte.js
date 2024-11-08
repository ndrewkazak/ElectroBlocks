import { c as create_ssr_component, a as subscribe, o as onDestroy, v as validate_component } from "../../../chunks/ssr.js";
import { B as Button } from "../../../chunks/Button.js";
import { F as FormGroup, I as Input } from "../../../chunks/Input.js";
import { L as Label } from "../../../chunks/Label.js";
import "../../../chunks/Theme.svelte_svelte_type_style_lang.js";
import { a as authStore } from "../../../chunks/model.js";
import { p as projectStore } from "../../../chunks/project.store.js";
import { L as Login } from "../../../chunks/Login.js";
import "blockly";
import "firebase/firestore";
import "firebase/storage";
import "firebase/app";
import { F as FlashMessage } from "../../../chunks/FlashMessage.js";
import "sweetalert";
import { c as codeStore } from "../../../chunks/code.store.js";
import "file-saver";
const css = {
  code: "main.svelte-1ykk0qv{margin:10px auto}.row.svelte-1ykk0qv{margin-bottom:10px}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { FormGroup, Input, Label, Button } from \\"@sveltestrap/sveltestrap\\";\\nimport authStore from \\"../../stores/auth.store\\";\\nimport projectStore from \\"../../stores/project.store\\";\\nimport Login from \\"../../components/auth/Login.svelte\\";\\nimport { addProject, saveProject } from \\"../../firebase/db\\";\\nimport { onDestroy } from \\"svelte\\";\\nimport FlashMessage from \\"../../components/electroblocks/ui/FlashMessage.svelte\\";\\nimport { wait } from \\"../../helpers/wait\\";\\nimport { onErrorMessage } from \\"../../help/alerts\\";\\nimport { workspaceToXML } from \\"../../core/blockly/helpers/workspace.helper\\";\\nimport codeStore from \\"../../stores/code.store\\";\\nimport { saveAs } from \\"file-saver\\";\\nlet showMessage = false;\\nlet projectName = \\"\\";\\nlet projectDescription = \\"\\";\\nlet canSave = true;\\nconst unSubProjectStore = projectStore.subscribe((projectInfo) => {\\n  if (projectInfo.project) {\\n    projectName = projectInfo.project.name;\\n    projectDescription = projectInfo.project.description;\\n  }\\n});\\nonDestroy(() => {\\n  if (unSubProjectStore) {\\n    unSubProjectStore();\\n  }\\n});\\nasync function saveFile() {\\n  if (!canSave)\\n    return;\\n  canSave = false;\\n  try {\\n    if (!$projectStore.projectId) {\\n      const { projectId, project } = await addProject({\\n        name: projectName,\\n        description: projectDescription,\\n        userId: $authStore.uid,\\n        updated: null,\\n        created: null,\\n        canShare: false\\n      });\\n      projectStore.set({ project, projectId });\\n      showMessage = true;\\n      wait(400);\\n      canSave = true;\\n      return;\\n    }\\n    const projectToSave = {\\n      ...$projectStore.project,\\n      name: projectName,\\n      description: projectDescription\\n    };\\n    await saveProject(projectToSave, $projectStore.projectId);\\n    projectStore.set({\\n      projectId: $projectStore.projectId,\\n      project: projectToSave\\n    });\\n    showMessage = true;\\n    canSave = true;\\n  } catch (e) {\\n    onErrorMessage(\\"Please try again in 5 minutes\\", e);\\n    canSave = true;\\n  }\\n}\\nlet code;\\nlet unsubCodeStore = codeStore.subscribe((newCode) => {\\n  code = newCode.code;\\n});\\nfunction downlaodCode() {\\n  const blob = new Blob([code], { type: \\"text/plain;charset=utf-8\\" });\\n  saveAs(blob, \\"electroblocks_code.ino\\");\\n}\\nfunction downloadProject() {\\n  const blob = new Blob([workspaceToXML()], {\\n    type: \\"application/xml;charset=utf-8\\"\\n  });\\n  saveAs(blob, \\"electroblocks_project.xml\\");\\n}\\nonDestroy(() => {\\n  unsubCodeStore();\\n});\\n<\/script>\\n\\n<main class=\\"container\\">\\n  {#if $authStore.isLoggedIn}\\n    <div class=\\"row\\">\\n      <div class=\\"col\\">\\n        <h2>Project Settings</h2>\\n      </div>\\n    </div>\\n    <div class=\\"row\\">\\n      <div class=\\"col\\">\\n        <FormGroup>\\n          <Label for=\\"project-name\\">Name</Label>\\n          <Input\\n            bind:value={projectName}\\n            type=\\"text\\"\\n            name=\\"text\\"\\n            id=\\"project-name\\"\\n          />\\n        </FormGroup>\\n      </div>\\n    </div>\\n\\n    <div class=\\"row\\">\\n      <div class=\\"col\\">\\n        <FormGroup>\\n          <Label for=\\"project-description\\">Description</Label>\\n          <Input\\n            bind:value={projectDescription}\\n            type=\\"textarea\\"\\n            name=\\"text\\"\\n            id=\\"project-description\\"\\n          />\\n        </FormGroup>\\n      </div>\\n    </div>\\n\\n    <div class=\\"row\\">\\n      <div class=\\"col\\">\\n        <Button class=\\"w-100\\" color=\\"success\\" on:click={saveFile}>Save</Button>\\n      </div>\\n    </div>\\n    <div class=\\"row\\">\\n      <div class=\\"col\\">\\n        <FlashMessage bind:show={showMessage} message=\\"Saved Project.\\" />\\n      </div>\\n    </div>\\n    <div class=\\"row\\">\\n      <div class=\\"col\\">\\n        <Button class=\\"w-100\\" color=\\"info\\" on:click={downloadProject}>\\n          Download Project\\n        </Button>\\n      </div>\\n    </div>\\n    <div class=\\"row\\">\\n      <div class=\\"col\\">\\n        <Button class=\\"w-100\\" color=\\"info\\" on:click={downlaodCode}>\\n          Download Code\\n        </Button>\\n      </div>\\n    </div>\\n  {:else}\\n    <div class=\\"row\\">\\n      <div class=\\"col\\">\\n        <p>\\n          To Save project you must be logged in. If you don't want to login you\\n          can go to the\\n          <a href=\\"/projects/download\\">download page</a>\\n          to download the code or project onto your computer.\\n        </p>\\n        <Login />\\n      </div>\\n    </div>\\n  {/if}\\n</main>\\n\\n<svelte:head>\\n  <title>ElectroBlocks - Project Settings</title>\\n</svelte:head>\\n\\n<style>\\n  main {\\n    margin: 10px auto;\\n  }\\n  .row {\\n    margin-bottom: 10px;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAkKE,mBAAK,CACH,MAAM,CAAE,IAAI,CAAC,IACf,CACA,mBAAK,CACH,aAAa,CAAE,IACjB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_projectStore;
  let $authStore, $$unsubscribe_authStore;
  $$unsubscribe_projectStore = subscribe(projectStore, (value) => value);
  $$unsubscribe_authStore = subscribe(authStore, (value) => $authStore = value);
  let showMessage = false;
  let projectName = "";
  let projectDescription = "";
  const unSubProjectStore = projectStore.subscribe((projectInfo) => {
    if (projectInfo.project) {
      projectName = projectInfo.project.name;
      projectDescription = projectInfo.project.description;
    }
  });
  onDestroy(() => {
    if (unSubProjectStore) {
      unSubProjectStore();
    }
  });
  let unsubCodeStore = codeStore.subscribe((newCode) => {
    newCode.code;
  });
  onDestroy(() => {
    unsubCodeStore();
  });
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<main class="container svelte-1ykk0qv">${$authStore.isLoggedIn ? `<div class="row svelte-1ykk0qv" data-svelte-h="svelte-xx28iu"><div class="col"><h2>Project Settings</h2></div></div> <div class="row svelte-1ykk0qv"><div class="col">${validate_component(FormGroup, "FormGroup").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Label, "Label").$$render($$result, { for: "project-name" }, {}, {
          default: () => {
            return `Name`;
          }
        })} ${validate_component(Input, "Input").$$render(
          $$result,
          {
            type: "text",
            name: "text",
            id: "project-name",
            value: projectName
          },
          {
            value: ($$value) => {
              projectName = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      }
    })}</div></div> <div class="row svelte-1ykk0qv"><div class="col">${validate_component(FormGroup, "FormGroup").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Label, "Label").$$render($$result, { for: "project-description" }, {}, {
          default: () => {
            return `Description`;
          }
        })} ${validate_component(Input, "Input").$$render(
          $$result,
          {
            type: "textarea",
            name: "text",
            id: "project-description",
            value: projectDescription
          },
          {
            value: ($$value) => {
              projectDescription = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      }
    })}</div></div> <div class="row svelte-1ykk0qv"><div class="col">${validate_component(Button, "Button").$$render($$result, { class: "w-100", color: "success" }, {}, {
      default: () => {
        return `Save`;
      }
    })}</div></div> <div class="row svelte-1ykk0qv"><div class="col">${validate_component(FlashMessage, "FlashMessage").$$render(
      $$result,
      {
        message: "Saved Project.",
        show: showMessage
      },
      {
        show: ($$value) => {
          showMessage = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div> <div class="row svelte-1ykk0qv"><div class="col">${validate_component(Button, "Button").$$render($$result, { class: "w-100", color: "info" }, {}, {
      default: () => {
        return `Download Project`;
      }
    })}</div></div> <div class="row svelte-1ykk0qv"><div class="col">${validate_component(Button, "Button").$$render($$result, { class: "w-100", color: "info" }, {}, {
      default: () => {
        return `Download Code`;
      }
    })}</div></div>` : `<div class="row svelte-1ykk0qv"><div class="col"><p data-svelte-h="svelte-2vnygn">To Save project you must be logged in. If you don&#39;t want to login you
          can go to the
          <a href="/projects/download">download page</a>
          to download the code or project onto your computer.</p> ${validate_component(Login, "Login").$$render($$result, {}, {}, {})}</div></div>`}</main> ${$$result.head += `<!-- HEAD_svelte-1c5mfea_START -->${$$result.title = `<title>ElectroBlocks - Project Settings</title>`, ""}<!-- HEAD_svelte-1c5mfea_END -->`, ""}`;
  } while (!$$settled);
  $$unsubscribe_projectStore();
  $$unsubscribe_authStore();
  return $$rendered;
});
export {
  Page as default
};
