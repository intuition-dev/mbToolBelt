import { EventFlux } from 'https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v8.4.14/eventFlux/EventFlux.min.js';
export class AbsSlotCustel extends HTMLElement {
    constructor() {
        super(...arguments);
        this.defTemplate = `<slot></slot>`;
    }
    setup(template) {
        EventFlux.init();
        const cTemp = document.createElement('template');
        cTemp.innerHTML = template;
        this.sr = this.attachShadow({ mode: 'open' });
        this.sr.appendChild(cTemp.content.cloneNode(true));
    }
    addScript(src, callback, attr, attrValue, id) {
        var s = document.createElement('script');
        s.setAttribute('src', src);
        if (attr)
            s.setAttribute(attr, attrValue);
        if (id)
            s.id = id;
        if (callback)
            s.onload = callback;
        s.async = false;
        document.getElementsByTagName('head')[0].appendChild(s);
    }
    static getInputsValue(inputs) {
        const obj = {};
        for (var input in inputs) {
            const value = inputs[input].value;
            const key = inputs[input].id;
            if (!key)
                continue;
            obj[key] = value;
        }
        return obj;
    }
    getSlotElById(id) {
        let ret;
        this.slotEls.map(function (n) {
            if (n.id == id)
                ret = n;
        });
        return ret;
    }
    get slotEls() {
        return this.sr.querySelector('slot').assignedElements();
    }
}
