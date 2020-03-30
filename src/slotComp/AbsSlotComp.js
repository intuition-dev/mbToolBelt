// . A slotable component(/module).
export class AbsSlotComp extends HTMLElement {
    setup(template) {
        const cTemp = document.createElement('template');
        cTemp.innerHTML = template;
        this.sr = this.attachShadow({ mode: 'open' });
        this.sr.appendChild(cTemp.content.cloneNode(true));
    } //cons
} //custel
