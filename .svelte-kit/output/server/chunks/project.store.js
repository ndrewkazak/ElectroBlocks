import { w as writable } from "./index.js";
import { a as authStore } from "./model.js";
const projectStore = writable({
  project: null,
  projectId: null
});
authStore.subscribe((auth) => {
  if (!auth.isLoggedIn) {
    projectStore.set({ project: null, projectId: null });
  }
});
const projectStore$1 = {
  subscribe: projectStore.subscribe,
  set: projectStore.set
};
export {
  projectStore$1 as p
};
