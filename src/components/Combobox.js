import AutoCompleteComboBox from "elix/src/base/AutoCompleteComboBox.js";
import {
  defaultState,
  render,
  rendered,
  ids,
  renderDataToElement,
  state,
  stateEffects,
  setState,
  template,
} from "elix/src/base/internal.js";
import { templateFrom, fragmentFrom } from "elix/src/core/htmlLiterals";

export default class SdsCombobox extends AutoCompleteComboBox {
  get [defaultState]() {
    return Object.assign(super[defaultState], {
      acceptTyping: false,
      data: null,
      itemPartType: "div",
    });
  }

  get options() {
    return this[state].data;
  }
  set options(options) {
    this[setState]({
      data: options,
    });
  }

  [rendered](changed) {
    super[rendered](changed);
    if (changed.data || changed.itemPartType) {
      const { data, itemPartType } = this[state];
      // TODO: Reuse existing items array if present, just invoke
      // `renderDataToElement` to update data.
      if (data) {
        const items = data.map((entry) => {
          const item = createElement(itemPartType);
          this[renderDataToElement](entry, item);
          return item;
        });
        dom.updateChildNodes(this, items);
      }
    }
  }

  [renderDataToElement](entry, item) {
    const { label, value } = entry;
    item.textContent = label;
    item.setAttribute("value", value);
  }

  get [template]() {
    const result = super[template];

    result.content.append(fragmentFrom.html`
      <style>
        ::part(frame) {
          background: var(--sds-g-color-neutral-base-1);
          width: 100%;
          border-bottom-left-radius: 4px;
          border-bottom-right-radius: 4px;
          box-shadow: 0 3px 12px rgba(53,71,90,.2);
        }
        ::part(input) {
          width: 250px;
          border: 1px solid var(--sds-g-color-neutral-base-4);
          border-radius: 4px;
          padding: 0.25rem;
        }
        ::slotted([role="option"]) {
          padding: 0.25rem 1rem;
        }
      </style>
    `);

    return result;
  }
}

customElements.define("sds-combobox", SdsCombobox);
