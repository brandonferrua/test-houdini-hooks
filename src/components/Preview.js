import { defaultState, template } from "elix/src/base/internal.js";
import { templateFrom } from "elix/src/core/htmlLiterals";
import ReactiveElement from "elix/src/core/ReactiveElement.js";

export default class WorkletPreview extends ReactiveElement {
  get [defaultState]() {
    return Object.assign(super[defaultState], {
      component: null,
    });
  }

  get [template]() {
    return templateFrom.html`
      <div id="toolbar">
        <label for="component-select">Select a component:</label>
        <sds-select name="components" id="component-select">
          <div value="accordion">Accordion</div>
          <div value="badge">Badge</div>
          <div value="breadcrumb">Breadcrumb</div>
          <div value="button">Button</div>
          <div value="card">Card</div>
          <div value="combobox">Combobox</div>
          <div value="dialog">Dialog</div>
          <div value="icon">Icon</div>
          <div value="input-checkbox">Input Checkbox</div>
          <div value="input-date">Input Date</div>
          <div value="input-file">Input File</div>
          <div value="input-text">Input Text</div>
          <div value="input-radio">Input Radio</div>
          <div value="input-range">Input Range</div>
          <div value="menu">Menu</div>
          <div value="summary-detail">Summary Detail</div>
          <div value="listbox">Listbox</div>
          <div value="tabset">Tabset</div>
        </sds-select>
      </div>
      <div id="preview">
        <sds-button>Button</sds-button>
        <sds-button variant="neutral">Button</sds-button>
        <sds-button variant="brand">Button</sds-button>
      </div>
      <div id="component-props">
        <h4>Styling Hooks Available</h4>
        <p><strong>Global</strong></p>
        <ul>
          <li><code>--sds-g-color-neutral-base-1</code></li>
          <li><code>--sds-g-color-neutral-base-contrast-1</code></li>
          <li><code>--sds-g-color-brand-base-contrast-2</code></li>
          <li><code>--sds-g-color-brand-base-contrast-3</code></li>
          <li><code>--sds-g-color-brand-inverse-contrast-4</code></li>
        </ul>
        <p><strong>Shared</strong></p>
        <ul>
          <li><code>--sds-s-button-color-background</code></li>
          <li><code>--sds-s-button-text-color</code></li>
        </ul>
        <p><strong>Local</strong></p>
        <ul>
          <li><code>--sds-c-button-color-background</code></li>
          <li><code>--sds-c-button-text-color</code></li>
        </ul>
      </div>
      <style>
        :host {
          font-size: 0.75rem;
        }
        #toolbar {
          border-top-left-radius: 6px;
          border-top-right-radius: 6px;
          background: var(--sds-g-color-neutral-base-1);
          border-bottom: 1px solid var(--sds-g-color-neutral-base-3);
          padding: 0.5rem;
          margin-top: 1rem;
        }
        label {
          color: var(--sds-g-color-neutral-base-contrast-2);
        }
        #preview {
          background: white;
          padding: 2rem;
          position: sticky;
          top: var(--headerHeight);
        }
        #component-props {
          background: var(--sds-g-color-neutral-base-1);
          border-top: 1px solid var(--sds-g-color-neutral-base-3);
          padding: 0 0.5rem;
          border-bottom-left-radius: 6px;
          border-bottom-right-radius: 6px;
          max-height: 300px;
          overflow-y: auto;
        }
        h4 {
          color: var(--sds-g-color-neutral-base-contrast-2);
        }
        p {
          margin: 0;
        }
        code {
          font-size: 1rem;
        }
      </style>
    `;
  }
}

customElements.define("worklet-preview", WorkletPreview);
