const e=Symbol("defaultState"),t=Symbol("delegatesFocus"),o=Symbol("firstRender"),s=Symbol("focusTarget"),r=Symbol("hasDynamicTemplate"),n=Symbol("ids"),i=Symbol("nativeInternals"),a=Symbol("raiseChangeEvents"),l=Symbol("render"),c=Symbol("renderChanges"),p=Symbol("rendered"),d=Symbol("rendering"),u=Symbol("setState"),m=Symbol("shadowRoot"),b=Symbol("shadowRootMode"),g=Symbol("state"),h=Symbol("stateEffects"),v=Symbol("template"),y=Symbol("checkSize"),f=Symbol("closestAvailableItemIndex"),x=Symbol("contentSlot"),S=e,w=Symbol("defaultTabIndex"),k=t,C=Symbol("effectEndTarget"),E=o,T=s,I=Symbol("getItemText"),P=Symbol("goDown"),L=Symbol("goEnd"),z=Symbol("goFirst"),A=Symbol("goLast"),O=Symbol("goLeft"),D=Symbol("goNext"),R=Symbol("goPrevious"),j=Symbol("goRight"),M=Symbol("goStart"),W=Symbol("goToItemWithPrefix"),H=Symbol("goUp"),_=r,B=n,F=Symbol("inputDelegate"),U=Symbol("itemsDelegate"),$=Symbol("keydown"),N=Symbol("mouseenter"),q=Symbol("mouseleave"),V=i,X=a,Y=l,G=c,Z=Symbol("renderDataToElement"),J=p,K=d,Q=Symbol("scrollTarget"),ee=u,te=m,oe=b,se=Symbol("startEffect"),re=g,ne=h,ie=Symbol("swipeDown"),ae=Symbol("swipeDownComplete"),le=Symbol("swipeLeft"),ce=Symbol("swipeLeftTransitionEnd"),pe=Symbol("swipeRight"),de=Symbol("swipeRightTransitionEnd"),ue=Symbol("swipeUp"),me=Symbol("swipeUpComplete"),be=Symbol("swipeStart"),ge=Symbol("swipeTarget"),he=Symbol("tap"),ve=v,ye=Symbol("toggleSelectedFlag");"true"===new URLSearchParams(location.search).get("elixdebug")&&(window.elix={internal:{checkSize:y,closestAvailableItemIndex:f,contentSlot:x,defaultState:S,defaultTabIndex:w,delegatesFocus:k,effectEndTarget:C,firstRender:E,focusTarget:T,getItemText:I,goDown:P,goEnd:L,goFirst:z,goLast:A,goLeft:O,goNext:D,goPrevious:R,goRight:j,goStart:M,goToItemWithPrefix:W,goUp:H,hasDynamicTemplate:_,ids:B,inputDelegate:F,itemsDelegate:U,keydown:$,mouseenter:N,mouseleave:q,nativeInternals:V,event,raiseChangeEvents:X,render:Y,renderChanges:G,renderDataToElement:Z,rendered:J,rendering:K,scrollTarget:Q,setState:ee,shadowRoot:te,shadowRootMode:oe,startEffect:se,state:re,stateEffects:ne,swipeDown:ie,swipeDownComplete:ae,swipeLeft:le,swipeLeftTransitionEnd:ce,swipeRight:pe,swipeRightTransitionEnd:de,swipeUp:ue,swipeUpComplete:me,swipeStart:be,swipeTarget:ge,tap:he,template:ve,toggleSelectedFlag:ye}});const fe={html(e,...t){const o=document.createElement("template");return o.innerHTML=String.raw(e,...t),o}},xe={checked:!0,defer:!0,disabled:!0,hidden:!0,ismap:!0,multiple:!0,noresize:!0,readonly:!0,selected:!0},Se={tabindex:"tabIndex"},we={tabIndex:"tabindex"};function ke(e){if(e===HTMLElement)return[];const t=Object.getPrototypeOf(e.prototype).constructor;let o=t.observedAttributes;o||(o=ke(t));const s=Object.getOwnPropertyNames(e.prototype).filter(t=>{const o=Object.getOwnPropertyDescriptor(e.prototype,t);return o&&"function"==typeof o.set}).map(e=>function(e){let t=we[e];return t||(t=e.replace(/([A-Z])/g,"-$1").toLowerCase(),we[e]=t),t}(e)).filter(e=>o.indexOf(e)<0);return o.concat(s)}const Ce=Symbol("state"),Ee=Symbol("raiseChangeEventsInNextRender"),Te=Symbol("changedSinceLastRender");function Ie(e,t){const o={};for(const n in t)r=e[n],((s=t[n])instanceof Date&&r instanceof Date?s.getTime()===r.getTime():s===r)||(o[n]=!0);var s,r;return o}const Pe=new Map,Le=Symbol("shadowIdProxy"),ze=Symbol("proxyElement"),Ae={get(e,t){const o=e[ze][m];return o&&"string"==typeof t?o.getElementById(t):null}};function Oe(e){let t=e[r]?void 0:Pe.get(e.constructor);if(void 0===t){if(t=e[v],t&&!(t instanceof HTMLTemplateElement))throw`Warning: the [template] property for ${e.constructor.name} must return an HTMLTemplateElement.`;e[r]||Pe.set(e.constructor,t||null)}return t}const De=function(e){return class extends e{attributeChangedCallback(e,t,o){if(super.attributeChangedCallback&&super.attributeChangedCallback(e,t,o),o!==t&&!this[d]){const t=function(e){let t=Se[e];return t||(t=e.replace(/-([a-z])/g,e=>e[1].toUpperCase()),Se[e]=t),t}(e);if(t in this){const r=xe[e]?"boolean"==typeof(s=o)?s:"string"==typeof s&&(""===s||e.toLowerCase()===s.toLowerCase()):o;this[t]=r}}var s}static get observedAttributes(){return ke(this)}}}(function(t){class s extends t{constructor(){super(),this[o]=void 0,this[a]=!1,this[Te]=null,this[u](this[e])}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this[c]()}get[e](){return super[e]||{}}[l](e){super[l]&&super[l](e)}[c](){void 0===this[o]&&(this[o]=!0);const e=this[Te];if(this[o]||e){const t=this[a];this[a]=this[Ee],this[d]=!0,this[l](e),this[d]=!1,this[Te]=null,this[p](e),this[o]=!1,this[a]=t,this[Ee]=t}}[p](e){super[p]&&super[p](e)}async[u](e){this[d]&&console.warn(`${this.constructor.name} called [setState] during rendering, which you should avoid.\nSee https://elix.org/documentation/ReactiveMixin.`);const{state:t,changed:s}=function(e,t){const o=Object.assign({},e[Ce]),s={};let r=t;for(;;){const t=Ie(o,r);if(0===Object.keys(t).length)break;Object.assign(o,r),Object.assign(s,t),r=e[h](o,t)}return{state:o,changed:s}}(this,e);if(this[Ce]&&0===Object.keys(s).length)return;Object.freeze(t),this[Ce]=t,this[a]&&(this[Ee]=!0);const r=void 0===this[o]||null!==this[Te];this[Te]=Object.assign(this[Te]||{},s),this.isConnected&&!r&&(await Promise.resolve(),this[c]())}get[g](){return this[Ce]}[h](e,t){return super[h]?super[h](e,t):{}}}return"true"===new URLSearchParams(location.search).get("elixdebug")&&Object.defineProperty(s.prototype,"state",{get(){return this[g]}}),s}((Re=HTMLElement,class extends Re{get[n](){return this[Le]||(this[Le]=new Proxy({[ze]:this},Ae)),this[Le]}[l](e){if(super[l]&&super[l](e),!this[m]){const e=Oe(this);if(e){const o=this.attachShadow({delegatesFocus:this[t],mode:this[b]}),s=document.importNode(e.content,!0);o.append(s),this[m]=o}else this[m]=null}}get[b](){return"open"}})));var Re;let je,Me=e=>e;class We extends De{get[S](){return Object.assign(super[S],{prop:null,value:null})}get prop(){return this[re].prop}set prop(e){this[ee]({prop:e})}get value(){return this[re].value}set value(e){this[ee]({value:e})}[Y](e){if(super[Y](e),e.prop&&e.value){const e=this[B].picker,t=this[B].color,o=this[B].name,s=this[B].value;e.setAttribute("value",this[re].value),e.setAttribute("name",this[re].prop),o.textContent=this[re].prop,s.textContent=this[re].value,t.style.setProperty("background-color",this[re].value),this._checkContrast(t,this[re].value),e.addEventListener("change",o=>{const r=e.getAttribute("name");this[X]=!0,this[ee]({value:o.target.value}),this[X]=!1,document.documentElement.style.setProperty(r,o.target.value),t.style.setProperty("background-color",o.target.value),s.textContent=o.target.value,this._checkContrast(t,o.target.value)}),e.select()}}_checkContrast(e,t){var o;"black"==(o=(o=t).replace("#",""),(299*parseInt(o.substr(0,2),16)+587*parseInt(o.substr(2,2),16)+114*parseInt(o.substr(4,2),16))/1e3>=128?"black":"white")?e.style.setProperty("color","rgba(0,0,0,0.8)"):e.style.setProperty("color","rgba(255,255,255,0.8)")}get[ve](){return fe.html(je||(je=Me`
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
    `))}}customElements.define("worklet-color",We);let He,_e=e=>e;class Be extends De{constructor(){super(),this._getProps()}_getProps(){document.documentElement.computedStyleMap().forEach((e,t,o)=>{const s=getComputedStyle(document.documentElement).getPropertyValue(t);var r;this[re].props.push({prop:t,value:(r=s,"#"+((1<<24)+(+(r=r.replace(/[^\d,]/g,"").split(","))[0]<<16)+(+r[1]<<8)+ +r[2]).toString(16).slice(1))})})}get[S](){return Object.assign(super[S],{props:[],hooks:null})}[Y](e){if(super[Y](e),e.props){const{props:e}=this[re],t=this[B].results,o=e.filter(e=>/(^--.+)/.test(e.prop));for(let e of o)t.insertAdjacentHTML("afterbegin",`<worklet-color prop=${e.prop} value=${e.value}></worklet-color>`)}}get[ve](){return fe.html(He||(He=_e`
      <div id="results"></div>
      <style>
        div {
          display: grid;
          grid-template-columns: repeat(8, minmax(100px, 150px));
          margin: 1rem 0;
        }
      </style>
    `))}}customElements.define("worklet-colors",Be);let Fe,Ue=e=>e;class $e extends De{constructor(){super(),this._getProps(e=>{this[ee]({css:e.replace(/(;)/g,";\n")})})}_getProps(e){const t=document.documentElement;new MutationObserver(function(o,s){o.forEach(o=>{switch(o.type){case"attributes":"style"===o.attributeName&&"function"==typeof e&&e(t.style.cssText)}})}).observe(t,{attributes:!0})}get[S](){return Object.assign(super[S],{css:""})}[Y](e){super[Y](e),e.css&&(this[B].css.innerHTML=`:root {\n /* SDS overrides below */\n ${this[re].css}}`)}get[ve](){return fe.html(Fe||(Fe=Ue`
      <sds-button variant="neutral">Copy CSS</sds-button>
      <textarea id="css"></textarea>
      <style>
        textarea {
          background: var(--sds-g-color-neutral-base-1);
          box-sizing: border-box;
          height: 250px;
          width: 100%;
          padding: 1rem;
          border: 0;
          border-radius: 6px;
          resize: vertical;
          margin: 1rem 0;
          min-height: 100px;
          height: auto;
        }
        ::part(button) {
          position: absolute;
          top: 10px;
          right: 50px;
          z-index: 3;
          font-size: 0.75rem;
        }
      </style>
    `))}}customElements.define("worklet-css",$e);let Ne,qe=e=>e;class Ve extends De{get[S](){return Object.assign(super[S],{component:null})}get[ve](){return fe.html(Ne||(Ne=qe`
      <div id="toolbar">
        <label for="component-select">Select a component:</label>
        <select name="components" id="component-select">
          <option value="accordion">Accordion</option>
          <option value="badge">Badge</option>
          <option value="breadcrumb">Breadcrumb</option>
          <option value="button" selected>Button</option>
          <option value="card">Card</option>
          <option value="combobox">Combobox</option>
          <option value="dialog">Dialog</option>
          <option value="icon">Icon</option>
          <option value="input-checkbox">Input Checkbox</option>
          <option value="input-date">Input Date</option>
          <option value="input-file">Input File</option>
          <option value="input-text">Input Text</option>
          <option value="input-radio">Input Radio</option>
          <option value="input-range">Input Range</option>
          <option value="menu">Menu</option>
          <option value="summary-detail">Summary Detail</option>
          <option value="listbox">Listbox</option>
          <option value="tabset">Tabset</option>
        </select>
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
    `))}}customElements.define("worklet-preview",Ve);let Xe,Ye=e=>e;class Ge extends De{get[S](){return Object.assign(super[S],{page:null})}get page(){return this[re].page}set page(e){this[ee]({page:e})}[Y](e){if(super[Y](e),e.page){const e=this[B].nav.options;for(let t of e)t.value===this[re].page&&t.setAttribute("selected",!0)}}get[ve](){return fe.html(Xe||(Xe=Ye`
      <header>
        <h1>Styling Hooks Worklets and APIs</h1>
        <span>→</span>
        <select id="nav">
          <option value="api">Custom Properties & Values API</option>
          <option value="paint">Paint Worklet API</option>
          <option value="layout">Layout Worklet API</option>
          <option value="animation">Animation Worklet API</option>
        </select>
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
    `))}}customElements.define("worklet-header-bar",Ge);let Ze,Je=e=>e;class Ke extends De{[Y](e){super[Y](e);const t=this[B].canvas;let o,s,r=performance.now();t.addEventListener("click",e=>{t.setAttribute("animating",!0),[o,s]=[e.offsetX,e.offsetY],r=performance.now(),requestAnimationFrame(function e(n){const i=Math.floor(n-r);if(t.style.cssText=`--ripple-x: ${o}; --ripple-y: ${s}; --animation-tick: ${i}; `,i>1e3)return t.removeAttribute("animating"),void(t.style.cssText="--animation-tick: 0");requestAnimationFrame(e)})})}get[ve](){return fe.html(Ze||(Ze=Je`
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
    `))}}customElements.define("worklet-ripple",Ke);let Qe,et=e=>e;class tt extends De{get[S](){return Object.assign(super[S],{prop:null})}get[ve](){return fe.html(Qe||(Qe=et`
      <button part="button">
        <slot name="start"></slot>
        <slot></slot>
        <slot name="end"></slot>
      </button>
      <style>
        @import url('/src/components/Button.css');
      </style>
    `))}}customElements.define("sds-button",tt);var ot={__proto__:null,WorkletColor:We,WorkletColors:Be,WorkletCss:$e,WorkletPreview:Ve,WorkletHeader:Ge,WorkletRipple:Ke,SdsButton:tt};export default ot;
//# sourceMappingURL=index.modern.js.map
