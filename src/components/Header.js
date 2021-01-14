import {
  defaultState,
  render,
  ids,
  setState,
  state,
  template,
} from "elix/src/base/internal.js";
import { templateFrom } from "elix/src/core/htmlLiterals";
import ReactiveElement from "elix/src/core/ReactiveElement.js";

export default class WorkletHeader extends ReactiveElement {
  get [defaultState]() {
    return Object.assign(super[defaultState], {
      page: null,
      nav: null,
    });
  }
  get page() {
    return this[state].page;
  }
  set page(page) {
    this[setState]({
      page: page,
    });
  }

  [render](changed) {
    super[render](changed);
  }
  get [template]() {
    return templateFrom.html`
      <header>
        <h1>Styling Hooks Worklets and APIs</h1>
        <span>→</span>
        <sds-select id="nav" selectedItem=${this[state].page}>
          <div value="api">CSS Properties and Values API</div>
          <div value="paint">CSS Painting API</div>
          <div value="layout">CSS Layout API</div>
          <div value="animation">Animation API</div>
        </sds-select>
        <a rel="github" href="https://github.com/brandonferrua/test-houdini-hooks">
          <svg version="1.1" viewBox="0 0 33 32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <defs>
            <polygon id="a" points="8.1315e-20 -3.5527e-15 8.1315e-20 31.775 32.579 31.775 32.579 3.5527e-15"/>
          </defs>
          <g fill-rule="evenodd">
          <mask id="b" fill="white"><use xlink:href="#a"/></mask>
          <path d="m16.289-3.5527e-15c-8.995 0-16.289 7.293-16.289 16.291 0 7.196 4.667 13.301 11.141 15.456 0.815 0.149 1.112-0.354 1.112-0.786 0-0.386-0.014-1.411-0.022-2.77-4.531 0.984-5.487-2.184-5.487-2.184-0.741-1.882-1.809-2.382-1.809-2.382-1.479-1.011 0.112-0.991 0.112-0.991 1.635 0.116 2.495 1.679 2.495 1.679 1.453 2.489 3.812 1.77 4.741 1.354 0.148-1.053 0.568-1.771 1.034-2.178-3.617-0.411-7.42-1.809-7.42-8.051 0-1.778 0.635-3.232 1.677-4.371-0.168-0.412-0.727-2.068 0.159-4.311 0 0 1.368-0.438 4.48 1.67 1.299-0.362 2.693-0.542 4.078-0.549 1.383 7e-3 2.777 0.187 4.078 0.549 3.11-2.108 4.475-1.67 4.475-1.67 0.889 2.243 0.33 3.899 0.162 4.311 1.044 1.139 1.675 2.593 1.675 4.371 0 6.258-3.809 7.635-7.438 8.038 0.585 0.503 1.106 1.497 1.106 3.017 0 2.177-0.02 3.934-0.02 4.468 0 0.436 0.293 0.943 1.12 0.784 6.467-2.159 11.131-8.26 11.131-15.454 0-8.998-7.294-16.291-16.291-16.291" mask="url(#b)"/>
          </g>
          </svg>
        </a>
      </header>
      <style>
        header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          display: flex;
          height: var(--headerHeight);
          align-items: center;
          z-index: 2;
          background: var(--sds-g-color-neutral-base-1);
          padding: 0 1rem;
        }
        h1 {
          font-size: 0.75rem;
        }
        span {
          padding: 0 0.5rem;
        }
        [rel="github"] {
          margin-left: auto;
          width: 20px;
          fill: var(--sds-g-color-brand-base-contrast-2);
        }
      </style>
    `;
  }
}

customElements.define("worklet-header-bar", WorkletHeader);
