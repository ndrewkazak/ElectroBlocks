

export const index = 15;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/settings/feature-request/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/15.BP_860eQ.js","_app/immutable/chunks/scheduler.ydM6q-DU.js","_app/immutable/chunks/index.DrhsS78m.js"];
export const stylesheets = [];
export const fonts = [];
