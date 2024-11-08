import { c as create_ssr_component, s as setContext, b as add_attribute, f as compute_rest_props, h as spread, i as escape_object, v as validate_component, j as escape_attribute_value, d as each, a as subscribe, o as onDestroy, e as escape } from "../../../chunks/ssr.js";
import { B as Button } from "../../../chunks/Button.js";
import { F as FormGroup, I as Input } from "../../../chunks/Input.js";
import { L as Label } from "../../../chunks/Label.js";
import "../../../chunks/Theme.svelte_svelte_type_style_lang.js";
import { c as classnames } from "../../../chunks/utils.js";
import "../../../chunks/client.js";
import { L as Login } from "../../../chunks/Login.js";
import "blockly";
import { a as authStore } from "../../../chunks/model.js";
import "firebase/firestore";
import "firebase/storage";
import "firebase/app";
import "sweetalert";
import "../../../chunks/project.store.js";
const Colgroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  setContext("colgroup", true);
  return `<colgroup>${slots.default ? slots.default({}) : ``}</colgroup>`;
});
const ResponsiveContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let responsiveClassName;
  let { class: className = "" } = $$props;
  let { responsive = false } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.responsive === void 0 && $$bindings.responsive && responsive !== void 0)
    $$bindings.responsive(responsive);
  responsiveClassName = classnames(className, {
    "table-responsive": responsive === true,
    [`table-responsive-${responsive}`]: typeof responsive === "string"
  });
  return `${responsive ? `<div${add_attribute("class", responsiveClassName, 0)}>${slots.default ? slots.default({}) : ``}</div>` : `${slots.default ? slots.default({}) : ``}`}`;
});
const TableFooter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  setContext("footer", true);
  return `<tfoot${spread([escape_object($$restProps)], {})}><tr>${slots.default ? slots.default({}) : ``}</tr></tfoot>`;
});
const TableHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  setContext("header", true);
  return `<thead${spread([escape_object($$restProps)], {})}><tr>${slots.default ? slots.default({}) : ``}</tr></thead>`;
});
const Table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "size", "bordered", "borderless", "striped", "hover", "responsive", "rows"]);
  let { class: className = "" } = $$props;
  let { size = "" } = $$props;
  let { bordered = false } = $$props;
  let { borderless = false } = $$props;
  let { striped = false } = $$props;
  let { hover = false } = $$props;
  let { responsive = false } = $$props;
  let { rows = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.bordered === void 0 && $$bindings.bordered && bordered !== void 0)
    $$bindings.bordered(bordered);
  if ($$props.borderless === void 0 && $$bindings.borderless && borderless !== void 0)
    $$bindings.borderless(borderless);
  if ($$props.striped === void 0 && $$bindings.striped && striped !== void 0)
    $$bindings.striped(striped);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.responsive === void 0 && $$bindings.responsive && responsive !== void 0)
    $$bindings.responsive(responsive);
  if ($$props.rows === void 0 && $$bindings.rows && rows !== void 0)
    $$bindings.rows(rows);
  classes = classnames(className, "table", size ? "table-" + size : false, bordered ? "table-bordered" : false, borderless ? "table-borderless" : false, striped ? "table-striped" : false, hover ? "table-hover" : false);
  return `${validate_component(ResponsiveContainer, "ResponsiveContainer").$$render($$result, { responsive }, {}, {
    default: () => {
      return `<table${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}>${rows ? `${validate_component(Colgroup, "Colgroup").$$render($$result, {}, {}, {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      })} ${validate_component(TableHeader, "TableHeader").$$render($$result, {}, {}, {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      })} <tbody>${each(rows, (row) => {
        return `<tr>${slots.default ? slots.default({ row }) : ``} </tr>`;
      })}</tbody> ${validate_component(TableFooter, "TableFooter").$$render($$result, {}, {}, {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      })}` : `${slots.default ? slots.default({}) : ``}`}</table>`;
    }
  })}`;
});
const css = {
  code: "main.svelte-1b28qtk{width:90%;margin:10px auto}input[type='file'].svelte-1b28qtk{display:none}.fa-trash.svelte-1b28qtk{color:#a30d11;font-size:30px;cursor:pointer;text-align:center;width:100%}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { Table, Button, FormGroup, Input, Label } from \\"@sveltestrap/sveltestrap\\";\\nimport { onMount, onDestroy } from \\"svelte\\";\\nimport { goto } from \\"$app/navigation\\";\\n;\\nimport Login from \\"../../components/auth/Login.svelte\\";\\nimport { loadProject } from \\"../../core/blockly/helpers/workspace.helper\\";\\nimport authStore from \\"../../stores/auth.store\\";\\nimport {\\n  deleteProject,\\n  getFile,\\n  getProject,\\n  getProjects\\n} from \\"../../firebase/db\\";\\nimport { onConfirm, onErrorMessage } from \\"../../help/alerts\\";\\nimport projectStore from \\"../../stores/project.store\\";\\nconst unSubList = [];\\nlet projectList = [];\\nlet searchList = [];\\nlet searchTerm = \\"\\";\\n$:\\n  filterSearch(searchTerm);\\nfunction filterSearch(term) {\\n  if (term === \\"\\") {\\n    searchList = [...projectList];\\n    return;\\n  }\\n  searchList = searchList.filter(\\n    ([p, id]) => p.name.toLowerCase().includes(term.toLowerCase())\\n  );\\n}\\nasync function changeProject(e) {\\n  const file = e.target.files[0];\\n  if (!file) {\\n    return;\\n  }\\n  if (!await onConfirm(\\n    `Do you want to load ${file.name}, this will erase everything that you have done.`\\n  )) {\\n    return;\\n  }\\n  const reader = new FileReader();\\n  reader.onload = function(evt) {\\n    if (evt.target.readyState != 2)\\n      return;\\n    if (evt.target.error) {\\n      onErrorMessage(\\"Please upload a valid electroblock file.\\", e);\\n      return;\\n    }\\n    projectStore.set({ project: null, projectId: null });\\n    loadProject(evt.target.result);\\n  };\\n  reader.readAsText(file);\\n}\\nonMount(() => {\\n  const unSubAuth = authStore.subscribe(async (auth) => {\\n    if (auth.isLoggedIn) {\\n      await updateProjectList();\\n      return;\\n    }\\n    projectList = [];\\n  });\\n  unSubList.push(unSubAuth);\\n});\\nasync function updateProjectList() {\\n  try {\\n    projectList = await getProjects($authStore.uid);\\n    projectList = [...projectList];\\n    searchList = [...projectList];\\n  } catch (e) {\\n    onErrorMessage(\\"Please refresh the page and try again.\\", e);\\n  }\\n}\\nonDestroy(() => {\\n  unSubList.forEach((s) => s());\\n});\\nfunction formatDate(timestamp) {\\n  if (timestamp instanceof Date) {\\n    return timestamp.toDateString();\\n  }\\n  const date = new Date(timestamp.seconds * 1e3);\\n  return date.toDateString();\\n}\\nasync function onDeleteProject(projectId) {\\n  if (!await onConfirm(\\"Are you want to delete this project?\\")) {\\n    return;\\n  }\\n  try {\\n    await deleteProject(projectId, $authStore.uid);\\n    await updateProjectList();\\n  } catch (e) {\\n    onErrorMessage(\\"Please try agian in 5 minutes.\\", e);\\n  }\\n}\\nasync function openProject(projectId) {\\n  const project = await getProject(projectId);\\n  const file = await getFile(projectId, $authStore.uid);\\n  loadProject(file);\\n  projectStore.set({ project, projectId });\\n  await goto(`/?projectid=${projectId}`);\\n}\\n<\/script>\\n\\n<main>\\n  <h2>Your Projects</h2>\\n  {#if $authStore.isLoggedIn}\\n    {#if projectList.length > 0}\\n      <FormGroup>\\n        <Label for=\\"search\\">Search</Label>\\n        <Input bind:value={searchTerm} type=\\"text\\" id=\\"search\\" />\\n      </FormGroup>\\n\\n      <Table hover bordered>\\n        <thead>\\n          <tr>\\n            <th>Name</th>\\n            <th>Modified</th>\\n            <th />\\n            <th />\\n          </tr>\\n        </thead>\\n        <tbody>\\n          {#each searchList as project}\\n            <tr>\\n              <td>{project[0].name}</td>\\n              <td>{formatDate(project[0].updated)}</td>\\n              <td>\\n                <Button\\n                  color=\\"info\\"\\n                  class=\\"w-100\\"\\n                  on:click={() => openProject(project[1])}\\n                >\\n                  Open\\n                </Button>\\n              </td>\\n              <td>\\n                <i\\n                  on:click={() => onDeleteProject(project[1])}\\n                  class=\\"fa fa-trash\\"\\n                />\\n              </td>\\n            </tr>\\n          {/each}\\n        </tbody>\\n      </Table>\\n    {:else}\\n      <h2>Once you save a project it will appear here.</h2>\\n    {/if}\\n    <hr />\\n    <h3>Load project from your computer</h3>\\n    <label for=\\"file-upload\\" class=\\"form custom-file-upload\\">\\n      <i class=\\"fa fa-cloud-upload\\" />\\n      Choose Project\\n    </label>\\n    <input on:change={changeProject} id=\\"file-upload\\" type=\\"file\\" />\\n  {:else}\\n    <p>Login to see your saved projects.</p>\\n    <Login />\\n  {/if}\\n</main>\\n<svelte:head>\\n  <title>ElectroBlocks - Open Projects</title>\\n</svelte:head>\\n\\n<style>\\n  main {\\n    width: 90%;\\n    margin: 10px auto;\\n  }\\n  input[type=\'file\'] {\\n    display: none;\\n  }\\n\\n  .fa-trash {\\n    color: #a30d11;\\n    font-size: 30px;\\n    cursor: pointer;\\n    text-align: center;\\n    width: 100%;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAoKE,mBAAK,CACH,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,IAAI,CAAC,IACf,CACA,KAAK,CAAC,IAAI,CAAC,MAAM,gBAAE,CACjB,OAAO,CAAE,IACX,CAEA,wBAAU,CACR,KAAK,CAAE,OAAO,CACd,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,OAAO,CACf,UAAU,CAAE,MAAM,CAClB,KAAK,CAAE,IACT"}'
};
function formatDate(timestamp) {
  if (timestamp instanceof Date) {
    return timestamp.toDateString();
  }
  const date = new Date(timestamp.seconds * 1e3);
  return date.toDateString();
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $authStore, $$unsubscribe_authStore;
  $$unsubscribe_authStore = subscribe(authStore, (value) => $authStore = value);
  const unSubList = [];
  let projectList = [];
  let searchList = [];
  let searchTerm = "";
  function filterSearch(term) {
    if (term === "") {
      searchList = [...projectList];
      return;
    }
    searchList = searchList.filter(([p, id]) => p.name.toLowerCase().includes(term.toLowerCase()));
  }
  onDestroy(() => {
    unSubList.forEach((s) => s());
  });
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      filterSearch(searchTerm);
    }
    $$rendered = `<main class="svelte-1b28qtk"><h2 data-svelte-h="svelte-13j6jln">Your Projects</h2> ${$authStore.isLoggedIn ? `${projectList.length > 0 ? `${validate_component(FormGroup, "FormGroup").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Label, "Label").$$render($$result, { for: "search" }, {}, {
          default: () => {
            return `Search`;
          }
        })} ${validate_component(Input, "Input").$$render(
          $$result,
          {
            type: "text",
            id: "search",
            value: searchTerm
          },
          {
            value: ($$value) => {
              searchTerm = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      }
    })} ${validate_component(Table, "Table").$$render($$result, { hover: true, bordered: true }, {}, {
      default: () => {
        return `<thead data-svelte-h="svelte-1ukc4cn"><tr><th>Name</th> <th>Modified</th> <th></th> <th></th></tr></thead> <tbody>${each(searchList, (project) => {
          return `<tr><td>${escape(project[0].name)}</td> <td>${escape(formatDate(project[0].updated))}</td> <td>${validate_component(Button, "Button").$$render($$result, { color: "info", class: "w-100" }, {}, {
            default: () => {
              return `Open
                `;
            }
          })}</td> <td><i class="fa fa-trash svelte-1b28qtk"></i></td> </tr>`;
        })}</tbody>`;
      }
    })}` : `<h2 data-svelte-h="svelte-jz6tj5">Once you save a project it will appear here.</h2>`} <hr> <h3 data-svelte-h="svelte-18may53">Load project from your computer</h3> <label for="file-upload" class="form custom-file-upload" data-svelte-h="svelte-148fuu6"><i class="fa fa-cloud-upload"></i>
      Choose Project</label> <input id="file-upload" type="file" class="svelte-1b28qtk">` : `<p data-svelte-h="svelte-1gic3rr">Login to see your saved projects.</p> ${validate_component(Login, "Login").$$render($$result, {}, {}, {})}`}</main> ${$$result.head += `<!-- HEAD_svelte-r5kyfy_START -->${$$result.title = `<title>ElectroBlocks - Open Projects</title>`, ""}<!-- HEAD_svelte-r5kyfy_END -->`, ""}`;
  } while (!$$settled);
  $$unsubscribe_authStore();
  return $$rendered;
});
export {
  Page as default
};
