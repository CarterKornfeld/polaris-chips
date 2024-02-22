
import { LitElement, html, css } from 'lit';

export class CampusAlerts extends LitElement {

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
    height: 100px;
    background-color: blue;
    }

    `;
  }

  render() 
  {
    return html`
    
    <div class="container">
  </div>


  </div>`;
  }


  static get properties() 
  {
    return {
      
    };
  }
}

globalThis.customElements.define(CampusAlerts.tag, CampusAlerts);

