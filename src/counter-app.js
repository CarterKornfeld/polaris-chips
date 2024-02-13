
import { LitElement, html, css } from 'lit';

export class CounterApp extends LitElement {

  static get tag() {
    return 'counter-app';
  }
 
  constructor() {
    super();

  }

  
  static get styles() {
    
    return css`
   
      :host {
        /* Always make sure that your element has a default way of being displayed */
        display: inline-flex;

      }

      span{
        background-color: blue;
        color: black;
        font-size: 24px;
        padding: 16px;
        margin: 8px;
      }

      span:hover{
        background-color: grey;
        border: 1px solid black;
      }

    `;
  }
  render() {
    
    return html`<a href="${this.link}"><span>${this.title}</span></a>`;
  }


  static get properties() {
    return {
      
      title: { type: String },
    };
  }
}

globalThis.customElements.define(CounterApp.tag, CounterApp);
