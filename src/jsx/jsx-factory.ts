declare namespace JSX {

    interface Element {
    }

    interface ElementClass {
        render(): any;
    }

    interface ElementAttributesProperty {
        props: any;
    }

    interface ElementChildrenAttribute {
        children: Element;  // specify children name to use
    }

    interface HTMLAttributs {
        name?: string;
        id?: string;
        class?: string;
        disabled?: string | boolean;
        readonly?: string | boolean;
        placeholder?: string;
        [attr: string]: any;
    }

    interface HTMLInputAttributs extends HTMLAttributs {
        type?: 'text' | 'checkbox' | 'radio' | 'buttom' | 'submit' | 'date' | 'datetime-local' | 'number' | 'password' | 'tel' | 'email' | 'color' | 'file' | 'hidden';
        value?: number | string;
        onchange?: (eevent: Event) => void;
    }

    interface IntrinsicElements {
        img: HTMLAttributs;
        header: HTMLAttributs;
        section: HTMLAttributs;
        div: HTMLAttributs;
        small: HTMLAttributs;
        button: HTMLAttributs;
        span: HTMLAttributs;
        form: HTMLAttributs;
        input: HTMLInputAttributs;
        select: HTMLAttributs;
        option: HTMLAttributs;
        label: HTMLAttributs;
        table: HTMLAttributs;
        thead: HTMLAttributs;
        tbody: HTMLAttributs;
        tr: HTMLAttributs;
        th: HTMLAttributs;
        td: HTMLAttributs;
        p: HTMLAttributs;
        pre: HTMLAttributs;
        a: HTMLAttributs;
        i: HTMLAttributs;
        b: HTMLAttributs;
        ul: HTMLAttributs;
        li: HTMLAttributs;
        h1: HTMLAttributs;
        h2: HTMLAttributs;
        h3: HTMLAttributs;
        h4: HTMLAttributs;
        h5: HTMLAttributs;
        h6: HTMLAttributs;
        hr: HTMLAttributs;
        iframe: HTMLAttributs;
        textarea: HTMLAttributs;
        ol: HTMLAttributs;
        fieldset: HTMLAttributs;
        legend: HTMLAttributs;
        dl: HTMLAttributs;
        dt: HTMLAttributs;
        dd: HTMLAttributs;
        nav: HTMLAttributs;
        br: HTMLAttributs;
        // ...
    }
}

declare var React: AppFactory;

class AppFactory {
    /**
     * React-like createElement function so we can use JSX in our TypeScript/JavaScript code.
     */
    public createElement(tag: string | Function, attrs: any, children: any): HTMLElement {

        if (tag instanceof Function) {
            var args = (Object as any).assign({}, attrs);
            args.children = children;

            if (tag.prototype.render) {
                const component = new (tag as any)(args);
                return component.render();
            }

            return tag(args);
        }

        var element: HTMLElement = document.createElement(tag);
        for (let name in attrs) {
            if (name && attrs.hasOwnProperty(name)) {
                var value: string | null | boolean = attrs[name];

                if (typeof value === 'function' && name.indexOf('on') === 0) {
                    element.addEventListener(name.replace('on', ''), value);
                }
                else if (value === true) {
                    element.setAttribute(name, name);
                } else if (value !== false && value != null) {
                    element.setAttribute(name, value.toString());
                }
            }
        }
        for (let i: number = 2; i < arguments.length; i++) {
            let child: any = arguments[i];

            if (child === null || child === undefined)
                continue;

            if (Array.isArray(child)) {

                for (const childItem of child) {

                    element.appendChild(
                        childItem.nodeType == null ?
                            document.createTextNode(childItem.toString()) : childItem);
                }
            }
            else {
                element.appendChild(
                    child.nodeType == null ?
                        document.createTextNode(child.toString()) : child);
            }
        }

        return element;
    }
}

/**
 * Basic services available throughout YetaWF.
 */
(window as any).React = new AppFactory();