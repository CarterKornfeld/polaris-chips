

import { LitElement, html, css } from 'lit';

export class CampusAlerts extends LitElement {

  static get tag() {
    return 'campus-alerts';
  }
 
  constructor() {
    super();
    this.date = "Febuary 27th 2024";
    this.alertMessage = "This is an alert";
    this.open =false;
  }

   
  


  static get styles() {
    
    return css`
.opencontainer {
            display: flex;
            background-color:orange;
        }
 
        .box1 
        {
            flex: 1;
            padding: 40px;
           background-color:orange;
           
        }
        .box2
        {
            flex: 1;
            padding: 40px;
            background-color:yellow;
            transform: skew(20deg);
        }
        .alertText
        {
          transform: skew(-20deg);
        }
        .box3 
        {
            flex: 1;
            padding: 40px;
            background-color:orange;
        }

        .closedContainer
        {
          display:flex;
          align-items: center;
          justify-content: center;
           background-color:orange;
           padding: 10px;
        }
        .close-toggle-button
        {
          display:flex;
          align-items: center;
          justify-content: center;
          padding:10px;
           background-color:orange;
        }
        .open-toggle-button
        {
          display:flex;
          align-items: center;
          justify-content: center;
           background-color:orange;
        }
   
    `;
  }

toggleAlert()
{
this.open = !this.open;
}

 openView()
 {
  return html`

<div class="opencontainer">
        <div class="box1"> ${this.date}</div>
        <div class="box2 ">
          <div class = "alertText">
            Hello
          </div>
        </div>
        <div class="box3">
        <div class="open-toggle-button" @click="${this.toggleAlert}">
          ${this.open ? 'Close' : 'Open'} Alert
          <svg xmlns="http://www.w3.org/2000/svg" style=" height:35px; width:35px;" viewBox="0 0 24 24"><title>chevron-down</title><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>

        </div>
        </div>

    </div>
 
  </div>`;
 }
 closeView()
 {
  return html`

<div class="closedContainer">
        <div class="close-toggle-button" @click="${this.toggleAlert}">
        <svg xmlns="http://www.w3.org/2000/svg" style=" height:50px; width:50px;" viewBox="0 0 24 24"><title>alert-circle-outline</title><path d="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z" /></svg>
           Alert
           <svg xmlns="http://www.w3.org/2000/svg" style=" height:35px; width:35px;" viewBox="0 0 24 24"><title>chevron-down</title><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
        </div>

    </div>
 
  </div>`;
 }
  
  render() {    
    return (this.open) ? this.openView() : this.closeView();
  }


  static get properties() 
  {
    return {
      open: { type: Boolean, reflect: true },
      date: { type: String },
    };
  }
}

globalThis.customElements.define(CampusAlerts.tag, CampusAlerts);
