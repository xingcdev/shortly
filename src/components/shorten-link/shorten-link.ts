import shortenLinkStyles from './shorten-link.styles.scss';

class ShortenLink extends HTMLElement {
    template: HTMLTemplateElement;

    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' });

        this.template = document.createElement('template') as HTMLTemplateElement;
        this.template.innerHTML = `
                <section class="shorten-link">
                    <section class="shorten-link__form">
                        <form>
                            <input class="shorten-link__input" type="text" name="shorten-link" placeholder="Shorten a link here..." required>
                            <button class="btn--primary shorten-link__submit-button" type="submit">Shorten it!</button>
                        </form>
                    </section>
    
                    <ul class="shorten-link__link-list">
                        <li class="shorten-link__list-item">
                            <p class="shorten-link__input-link"></p>
                            <p class="shorten-link__shortened-link"></p>
                            <button class="shorten-link__copy-button">Copy</button>
                        </li>
                    </ul>
                </section>
		`;

        const style = document.createElement('style');
        style.textContent = shortenLinkStyles;

        shadowRoot.appendChild(style);
        shadowRoot.appendChild(this.template.content.cloneNode(true));

        // shadowRoot.querySelector('.hamburger-nav__icon-btn').addEventListener('click', () => {
        //     shadowRoot
        //         .querySelector('.hamburger-nav__menu')
        //         .classList.toggle('hidden');
        // });
    }
}

window.customElements.define('shorten-link', ShortenLink);