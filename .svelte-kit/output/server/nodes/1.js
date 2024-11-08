

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.B4Utwz_8.js","_app/immutable/chunks/scheduler.ydM6q-DU.js","_app/immutable/chunks/index.DrhsS78m.js"];
export const stylesheets = ["_app/immutable/assets/1.HAiSqiWS.css"];
export const fonts = [];
