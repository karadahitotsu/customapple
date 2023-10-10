class MyHeader extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        // Импортируем содержимое из template
        const template = document.getElementById('header-template').content.cloneNode(true);

        // Добавляем содержимое в Shadow DOM
        shadow.appendChild(template);
    }
}

customElements.define('my-header', MyHeader);