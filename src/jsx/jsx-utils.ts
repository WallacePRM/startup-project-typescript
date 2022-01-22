
export function jsxRaw(html: string, wrapperTag: string = 'div') {

    const wrapper = document.createElement('div');
    wrapper.innerHTML = html;

    if (wrapper.children.length === 1)
        return wrapper.children[0];

    return wrapper;
}

export function jsxHtml(element: JSX.Element) {

    return (element as HTMLElement).outerHTML;
}

export function jsxAttrs(element: JSX.Element, attrs: Record<string, string>) {

    for(const key in attrs) {

        (element as HTMLElement).setAttribute(key, attrs[key]);
    }

    return element;
}