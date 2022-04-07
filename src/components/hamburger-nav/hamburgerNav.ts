import style from './hamburgerNav.scss';
console.log(style);
class HamburgerNav extends HTMLElement {
	// todo : https://medium.com/swlh/web-components-with-shadow-dom-and-sass-f780ad23dd90
	template: HTMLTemplateElement;
	constructor() {
		super();
		this.template = document.createElement('template') as HTMLTemplateElement;
		this.template.innerHTML = `
			<button class="hamburger-btn">
				<div class="line"></div>
			</button>
		`;
		// Copy the nodes in the template:
		const shadowRoot = this.attachShadow({ mode: 'open' });
		// Append Node:
		shadowRoot.appendChild(this.template.content.cloneNode(true));
	}
}

window.customElements.define('hamburger-nav', HamburgerNav);
