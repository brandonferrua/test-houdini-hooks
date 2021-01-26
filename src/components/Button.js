import { template } from "elix/src/base/internal.js";
import { templateFrom } from "elix/src/core/htmlLiterals";
import ReactiveElement from "elix/src/core/ReactiveElement.js";
import css from "./Button.css";

console.log(css);

export default class SdsButton extends ReactiveElement {
  get [template]() {
    return templateFrom.html`
      <button part="button">
        <slot name="start"></slot>
        <slot></slot>
        <slot name="end"></slot>
      </button>
      <style>
        ${css}
      </style>
    `;
  }
}

customElements.define("sds-button", SdsButton);
