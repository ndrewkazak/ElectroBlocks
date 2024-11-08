import { w as writable } from "./index.js";
const lessonOpenStore = writable(false);
const showLessonStore = {
  subscribe: lessonOpenStore.subscribe,
  set: lessonOpenStore.set,
  update: lessonOpenStore.update
};
export {
  showLessonStore as s
};
