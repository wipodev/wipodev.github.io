export const d = document;

export const $ = (selector, context = d) => context.querySelector(selector);

export const $$ = (selector, context = d) => context.querySelectorAll(selector);
