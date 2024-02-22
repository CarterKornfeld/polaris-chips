
import { LitElement, html, css } from 'lit';

export class Alert extends LitElement {

  static get tag() {
    return 'alert-system';
  }
 
  constructor() {
    super();
    
  }

  static get styles() {
    
    return css`
    .container
    {
    width: 100%;
    height: 16px;
    background-color: blue;
    }

    `;
  }

  render() {
    return html`
    
    <div class="container"></div>


  </div>`;
  }


  static get properties() 
  {
    return {
      
    };
  }
}

globalThis.customElements.define(Alert.tag, Alert);

