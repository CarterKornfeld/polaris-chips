

import { LitElement, html, css } from 'lit';

export class CampusAlerts extends LitElement {

  static get tag() {
    return 'campus-alerts';
  }
 
  constructor() {
    super();
    
  }

   
  


  static get styles() {
    
    return css`
.container {
  width:100%;
  height: 100px;
  background-color:blue;
.alert-message-wrap
{
    
    width:90%;
    height:90%;
    background-color: orange;
    transform: skew(20deg);
}

  
}


   
    `;
  }


 
  
  render() {    
    return html`



    <div class="container">
        <div class="alerts-content-wrap">
                <div class="date">
                <p>
                 Febuary 22, 2024
                 2:08 PM.   
                </p>
                </div>
                <div class = "alert-message-wrap">
                    <img />
                    <div class="alert-message">
                        <p>hello </p>
                    </div>
            </div>
        
        </div>
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
