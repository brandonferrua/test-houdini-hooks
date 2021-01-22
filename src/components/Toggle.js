import { template } from "elix/src/base/internal.js";
import { templateFrom } from "elix/src/core/htmlLiterals";
import ReactiveElement from "elix/src/core/ReactiveElement.js";

export default class SdsPopupToggle extends ReactiveElement {
  get [template]() {
    return templateFrom.html`
      <style>
        :host {
          margin-left: auto;
          display: flex;
        }
        svg {
          fill: var(--sds-g-color-neutral-base-contrast-1);
          width: 12px;
          height: 12px;
        }
      </style>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><path d="M47.6 17.8L27.1 38.5c-.6.6-1.6.6-2.2 0L4.4 17.8c-.6-.6-.6-1.6 0-2.2l2.2-2.2c.6-.6 1.6-.6 2.2 0l16.1 16.3c.6.6 1.6.6 2.2 0l16.1-16.2c.6-.6 1.6-.6 2.2 0l2.2 2.2c.5.6.5 1.5 0 2.1z"></path></svg>
    `;
  }
}
