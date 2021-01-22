import DropdownList from "elix/src/base/DropdownList.js";
import PopupToggleMixin from "elix/src/base/PopupToggleMixin";
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
import SdsPopupToggle from "./Toggle";

export default class SdsSelect extends PopupToggleMixin(DropdownList) {
  get [defaultState]() {
    return Object.assign(super[defaultState], {
      horizontalAlign: "stretch",
      popupTogglePartType: SdsPopupToggle,
    });
  }

  get [template]() {
    const result = super[template];

    result.content.append(fragmentFrom.html`
      <style>
        [part~="source"] {
          width: 220px;
          background: var(--sds-g-color-neutral-base-1);
          border: 1px solid var(--sds-g-color-neutral-base-4);
          border-radius: 4px;
          padding: 0.25rem;
        }
        ::part(frame) {
          background: var(--sds-g-color-neutral-base-1);
          width: 100%;
          border-bottom-left-radius: 4px;
          border-bottom-right-radius: 4px;
          box-shadow: 0 3px 12px rgba(53,71,90,.2);
        }
        ::slotted([role="menuitem"]) {
          padding: 0.25rem 1rem;
        }
        ::slotted([current]) {
          background: var(--sds-g-color-brand-base-2);
        }
      </style>
    `);

    return result;
  }
}

customElements.define("sds-select", SdsSelect);
