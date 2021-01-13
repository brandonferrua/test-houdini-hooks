import {
  defaultState,
  template
} from "elix/src/base/internal.js";
import { templateFrom } from "elix/src/core/htmlLiterals";
import ReactiveElement from "elix/src/core/ReactiveElement.js";

export default class SdsButton extends ReactiveElement {
  get [defaultState]() {
    return Object.assign(super[defaultState], {
      prop: null
    });
  }

  get [template]() {
    return templateFrom.html`
      <button part="button">
        <slot name="start"></slot>
        <slot></slot>
        <slot name="end"></slot>
      </button>
      <style>
        @import url('/src/components/Button.css');
      </style>
    `;
  }
}

customElements.define('sds-button', SdsButton);