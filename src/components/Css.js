import {
  defaultState,
  ids,
  render,
  setState,
  state,
  template
} from "elix/src/base/internal.js";
import { templateFrom } from "elix/src/core/htmlLiterals";
import ReactiveElement from "elix/src/core/ReactiveElement.js";

export default class WorkletCss extends ReactiveElement {
  constructor() {
    super();
    this._getProps(props => {
      this[setState]({
        css: props.replace(/(;)/g, ';\n')
      })
    });
  }

  _getProps(cb) {
    const targetNode = document.documentElement;
    const observerOptions = { attributes: true }
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, observerOptions);

    function callback(mutationList, observer) {
      mutationList.forEach((mutation) => {
        switch(mutation.type) {
          case 'attributes':
            if (mutation.attributeName === 'style') {
              if (typeof cb === "function") cb(targetNode.style.cssText);
            }
            break;
        }
      });
    }
  }

  get [defaultState]() {
    return Object.assign(super[defaultState], {
      css: ''
    });
  }

  [render](changed) {
    super[render](changed);
    if (changed.css) {
      const textarea = this[ids].css;
      textarea.innerHTML = `:root {\n /* SDS overrides below */\n ${this[state].css}}`;
    }
  }

  get [template]() {
    return templateFrom.html`
      <sds-button variant="neutral">Copy CSS</sds-button>
      <textarea id="css"></textarea>
      <style>
        textarea {
          background: var(--sds-g-color-neutral-base-1);
          box-sizing: border-box;
          height: 250px;
          width: 100%;
          padding: 1rem;
          border: 0;
          border-radius: 6px;
          resize: vertical;
          margin: 1rem 0;
          min-height: 100px;
          height: auto;
        }
        ::part(button) {
          position: absolute;
          top: 10px;
          right: 50px;
          z-index: 3;
          font-size: 0.75rem;
        }
      </style>
    `;
  }
}

customElements.define('worklet-css', WorkletCss);