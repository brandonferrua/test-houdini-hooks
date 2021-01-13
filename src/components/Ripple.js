import { ids, render, template } from "elix/src/base/internal.js";
import { templateFrom } from "elix/src/core/htmlLiterals";
import ReactiveElement from "elix/src/core/ReactiveElement.js";

export default class WorkletRipple extends ReactiveElement {
  [render](changed) {
    super[render](changed);
    const canvas = this[ids].canvas;
    let start = performance.now();
    let x, y;
    canvas.addEventListener("click", (e) => {
      canvas.setAttribute("animating", true);
      [x, y] = [e.offsetX, e.offsetY];
      start = performance.now();
      requestAnimationFrame(function raf(now) {
        const count = Math.floor(now - start);
        canvas.style.cssText = `--ripple-x: ${x}; --ripple-y: ${y}; --animation-tick: ${count}; `;
        if (count > 1000) {
          canvas.removeAttribute("animating");
          canvas.style.cssText = `--animation-tick: 0`;
          return;
        }
        requestAnimationFrame(raf);
      });
    });
  }
  get [template]() {
    return templateFrom.html`
      <div id="canvas"></div>
      <style>
        :host {
          display: block;
          width: 100%;
          height: 100%;
          position: relative;
        }
        ::part(button) {
          background-image: paint(ripple);
        }
        #canvas {
          width: 100%;
          height: 100%;
          background-color: var(--sds-g-color-brand-base-contrast-2);
          display: flex;
          justify-content: space-around;
          align-items: center;
          color: white;
          text-align: center;
          cursor: pointer;

          /* Required for animation by the worklet */
          --ripple-x: 0;
          --ripple-y: 0;
          --ripple-color: var(--sds-g-color-brand-inverse-contrast-2);
          --animation-tick: 0;
        }
        #canvas[animating="true"] {
          background-image: paint(ripple);
        }
      </style>
    `;
  }
}

customElements.define("worklet-ripple", WorkletRipple);
