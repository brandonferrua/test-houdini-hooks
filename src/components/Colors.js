import {
  defaultState,
  ids,
  render,
  state,
  template,
} from "elix/src/base/internal.js";
import { templateFrom } from "elix/src/core/htmlLiterals";
import ReactiveElement from "elix/src/core/ReactiveElement.js";
import * as utils from "../lib/utils";

export default class WorkletColors extends ReactiveElement {
  constructor() {
    super();
    this._getProps();
  }

  _getProps() {
    const targetNode = document.documentElement.computedStyleMap();
    targetNode.forEach((el, prop, arr) => {
      const value = getComputedStyle(document.documentElement).getPropertyValue(
        prop
      );
      this[state].props.push({ prop, value: utils.rgbToHex(value) });
    });
  }

  get [defaultState]() {
    return Object.assign(super[defaultState], {
      props: [],
      hooks: null,
    });
  }

  [render](changed) {
    super[render](changed);
    if (changed.props) {
      const { props } = this[state];
      const results = this[ids].results;
      const hooks = props.filter((props) => /(^--.+)/.test(props.prop));
      for (let hook of hooks) {
        results.insertAdjacentHTML(
          "afterbegin",
          `<worklet-color prop=${hook.prop} value=${hook.value}></worklet-color>`
        );
      }
    }
  }
  get [template]() {
    return templateFrom.html`
      <div id="results"></div>
      <style>
        div {
          display: grid;
          grid-template-columns: repeat(8, minmax(100px, 150px));
          margin: 1rem 0;
        }
      </style>
    `;
  }
}

customElements.define("worklet-colors", WorkletColors);
