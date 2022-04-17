import hamburgerNavStyles from './hamburgerNav.styles.scss';

class HamburgerNav extends HTMLElement {
	template: HTMLTemplateElement;
	constructor() {
		super();

		const shadowRoot = this.attachShadow({ mode: 'open' });

		this.template = document.createElement('template') as HTMLTemplateElement;
		this.template.innerHTML = `
				<section class="hamburger-nav__menu hidden">
					<ul class="hamburger-nav__menu-content">
						<li><a href="#">Features</a></li>
						<li><a href="#">Pricing</a></li>
						<li><a href="#">Resources</a></li>
						<hr />
						<li>
							<button class="hamburger-nav__btn hamburger-nav__login">Login</button>
						</li>
						<li>
							<button class="hamburger-nav__btn hamburger-nav__signup">Sign up</button>
						</li>
					</ul>
				</section>
		`;
		const style = document.createElement('style');
		style.textContent = hamburgerNavStyles;

		// Copy the nodes in the template:
		// Append Node:
		shadowRoot.appendChild(style);
		shadowRoot.appendChild(this.template.content.cloneNode(true));

		console.log(this.template.content.querySelector('.hamburger-btn'));

		shadowRoot.querySelector('.hamburger-btn').addEventListener('click', () => {
			shadowRoot
				.querySelector('.hamburger-nav__menu')
				.classList.toggle('hidden');
		});
	}
}

window.customElements.define('hamburger-nav', HamburgerNav);
