export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18')
];

export const server_loads = [];

export const dictionary = {
		"/": [3],
		"/arduino": [4],
		"/block": [5],
		"/block/[blocktype]": [6],
		"/code": [7],
		"/download": [8],
		"/login": [9],
		"/open": [10],
		"/project-settings": [11],
		"/settings": [12,[2]],
		"/settings/about": [13,[2]],
		"/settings/bugs": [14,[2]],
		"/settings/feature-request": [15,[2]],
		"/settings/myprofile": [16,[2]],
		"/settings/privacy-policy": [17,[2]],
		"/settings/support": [18,[2]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.svelte';