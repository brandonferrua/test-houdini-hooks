import {
  defaultState,
  ids,
  render,
  setState,
  state,
  template,
  raiseChangeEvents
} from "elix/src/base/internal.js";
import { templateFrom } from "elix/src/core/htmlLiterals";
import ReactiveElement from "elix/src/core/ReactiveElement.js";
import * as utils from '../lib/utils';

export default class WorkletColor extends ReactiveElement {

  get [defaultState]() {
    return Object.assign(super[defaultState], {
      prop: null,
      value: null
    });
  }

  get prop() {
    return this[state].prop;
  }
  set prop(prop) {
    this[setState]({
      prop: prop,
    });
  }

  get value() {
    return this[state].value;
  }
  set value(value) {
    this[setState]({
      value: value,
    });
  }

  [render](changed) {
    super[render](changed);
    if (changed.prop && changed.value) {
      const pickerEl = this[ids].picker;
      const colorEl = this[ids].color;
      const nameEl = this[ids].name;
      const valueEl = this[ids].value;
      pickerEl.setAttribute('value', this[state].value);
      pickerEl.setAttribute('name', this[state].prop);
      // nameEl.textContent = this[state].prop.replace(/(--sds-g-color-)(\w+-)/g,'');
      nameEl.textContent = this[state].prop;
      valueEl.textContent = this[state].value;

      // Set color styles
      colorEl.style.setProperty('background-color', this[state].value);
      this._checkContrast(colorEl, this[state].value);

      // Update based on color picker
      pickerEl.addEventListener("change", (e) => {
        const nameProp = pickerEl.getAttribute('name');
        this[raiseChangeEvents] = true;
        this[setState]({
          value: e.target.value,
        });
        this[raiseChangeEvents] = false;
        document.documentElement.style.setProperty(nameProp, e.target.value);
        colorEl.style.setProperty('background-color', e.target.value);
        valueEl.textContent = e.target.value;
        this._checkContrast(colorEl, e.target.value);
      });
      pickerEl.select();
    }
  }

  _checkContrast(el, value) {
    if (utils.getContrast(value) === 'black') {
      el.style.setProperty('color', 'rgba(0,0,0,0.8)');
    } else {
      el.style.setProperty('color', 'rgba(255,255,255,0.8)');
    }
  }

  get [template]() {
    return templateFrom.html`
      <div>
        <label id="prop">
          <input type="color" id="picker" name="" value="#fff">
        </label>
        <div id="color">
          <p id="name"></p>
          <p id="value"></p>
        </div>
      </div>
      <style>
        div {
          display: flex;
          flex-direction: column;
          position: relative;
        }
        div:hover #color {
          transform: scale(1.05);
          box-shadow: 0 8px 24px rgba(53,71,90,.2);
          z-index: 1;
          border-radius: 4px;
          background-clip: border-box;
        }
        div:hover #prop,
        div:hover #name {
          visibility: visible;
          opacity: 1;
        }
        div:hover #name {
          transform: translate3d(-50%,-110%,0);
        }
        div:hover #value {
          transform: translateY(-10px);
        }
        #color {
          display: flex;
          height: var(--columnSize);
          width: var(--columnSize);
          justify-content: center;
          align-content: center;
          align-items: center;
          transition: transform .2s cubic-bezier(0.23, 1, 0.32, 1), box-shadow .2s cubic-bezier(0.23, 1, 0.32, 1);
        }
        #prop {
          position: absolute;
          bottom: 1rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          transition: visibility .2s ease, opacity .2s ease;
          visibility: hidden;
          opacity: 0;
        }
        #name {
          margin: 0;
          font-size: 0.75rem;
          position: absolute;
          top: 0;
          left: 50%;
          transform: translate3d(-50%,-80%,0);
          background: var(--sds-g-color-neutral-base-1);
          color: var(--sds-g-color-neutral-base-contrast-3);
          padding: 2px 6px;
          border-radius: 3px;
          box-shadow: 0 3px 12px rgba(53,71,90,.2);
          visibility: hidden;
          white-space: nowrap;
          opacity: 0;
          transition: visibility .2s ease, opacity .2s ease, transform .35s cubic-bezier(0.23, 1, 0.32, 1);
        }
        #name:before {
          width: 0.5rem;
          height: 0.5rem;
          position: absolute;
          transform: rotate(45deg);
          content: "";
          background-color: var(--sds-g-color-neutral-base-1);
          z-index: -1;
          bottom: -0.25rem;
          left: 50%;
          margin-left: -0.25rem;
        }
        #value {
          font-size: 0.875rem;
          font-weight: bold;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          transition: transform .25s cubic-bezier(0.23, 1, 0.32, 1);
        }
      </style>
    `;
  }
}

customElements.define('worklet-color', WorkletColor);