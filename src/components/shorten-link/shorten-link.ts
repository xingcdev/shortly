import shortenLinkStyles from './shorten-link.styles.scss';

class ShortenLink extends HTMLElement {
    template: HTMLTemplateElement;
    errorMsg: HTMLParagraphElement;
    shortenLinkInput: HTMLInputElement;

    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' });
        this.template = document.createElement('template') as HTMLTemplateElement;
        this.template.innerHTML = `
                <section class="shorten-link">
                    <section class="shorten-link__form">
                        <form>
                            <input class="shorten-link__input" type="text" name="shorten-link" placeholder="Shorten a link here..." required>
                            <i><small class="shorten-link__js-error-msg"></small></i>
                            <button class="btn--primary shorten-link__submit-btn" type="submit">Shorten it!</button>
                        </form>
                    </section>
    
                    <ul class="shorten-link__link-list">
                        <li class="shorten-link__list-item">
                            <p class="shorten-link__input-link">https://wsdfsdffsdafadfssdfsdfafd</p>
                            <section class="shorten-link__action-area">
                                <p class="shorten-link__output-link">https://wsdfsdffsdafadfs</p>
                                <button class="shorten-link__copy-button btn--primary">Copy</button>
                            </section>
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
        this.errorMsg = shadowRoot.querySelector(".shorten-link__js-error-msg")
        this.shortenLinkInput = shadowRoot.querySelector(".shorten-link__input")
        this.shortenLinkInput.addEventListener("input", this.handleInput)

        shadowRoot.querySelector(".shorten-link__submit-btn").addEventListener("click", this.handleClick);
    }

    handleClick = (e: Event) => {
        e.preventDefault()
        this.showError()
    }


    handleInput = (e:Event) => {
        // Disable required HTML popup
        e.preventDefault();
        this.showError()
    }

    showError = () => {
        if (this.shortenLinkInput.validity.valid) {
            if (this.errorMsg.textContent) {
                this.shortenLinkInput.classList.remove("error")
                this.errorMsg.textContent = "";
            }
        } else {
            if (!this.errorMsg.textContent) {
                this.shortenLinkInput.classList.add("error")
                this.errorMsg.textContent = "Please add a link";
            }
        }
    }


}

window.customElements.define('shorten-link', ShortenLink);