class HamburgerNav extends HTMLDivElement {
	constructor() {
		super();
		const template = document.createElement('template') as HTMLTemplateElement;
		template.innerHTML = `
			<template>
				<slot id="children"></slot>
			</template>
			`;
	}
}

customElements.define('hamburger-nav', HamburgerNav);
