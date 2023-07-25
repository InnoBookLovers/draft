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
	() => import('./nodes/9')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/blog": [3],
		"/bookCrossing": [4],
		"/bookCrossing/books/[id]": [5],
		"/events": [6],
		"/login": [7],
		"/logout": [8],
		"/signup": [9]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';