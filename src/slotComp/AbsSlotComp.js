export class AbsSlotComp extends HTMLElement {
    setup(template) {
        const cTemp = document.createElement('template');
        cTemp.innerHTML = template;
        this.sr = this.attachShadow({ mode: 'open' });
        this.sr.appendChild(cTemp.content.cloneNode(true));
    }
    getInputsValue(inputs) {
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
}
