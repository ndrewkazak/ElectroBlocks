

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/block/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.DBo55y82.js","_app/immutable/chunks/scheduler.ydM6q-DU.js","_app/immutable/chunks/index.DrhsS78m.js"];
export const stylesheets = [];
export const fonts = [];
