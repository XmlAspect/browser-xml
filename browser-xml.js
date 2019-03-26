import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `browser-xml`
 * sadlkdklsja
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class BrowserXml extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'browser-xml',
      },
    };
  }
}

window.customElements.define('browser-xml', BrowserXml);
