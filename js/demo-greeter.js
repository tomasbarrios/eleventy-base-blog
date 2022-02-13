import {LitElement, html, css} from 'lit';

class DemoGreeter extends LitElement {
  static styles = css`
    b { color: red; }
  `;

  static properties = {
    name: {},
  };

  render() {
    return html`Hello <b>${this.name}</b>!`;
  }
}
customElements.define('demo-greeter', DemoGreeter);
