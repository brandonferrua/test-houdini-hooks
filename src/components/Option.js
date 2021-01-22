import { template } from "elix/src/base/internal.js";
import Option from "elix/src/base/Option.js";
import { fragmentFrom } from "elix/src/core/htmlLiterals";

export default class SdsOption extends Option {
  get [template]() {
    const result = super[template];

    result.content.append(fragmentFrom.html`

    `);

    return result;
  }
}

customElements.define("sds-option", SdsOption);
