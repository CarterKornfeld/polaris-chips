

import { LitElement, html, css } from 'lit';

export class CampusAlerts extends LitElement {

  static get tag() {
    return 'campus-alerts';
  }
 
  constructor() {
    super();
    this.sticky;
    this.message = "";
    this.issueLevel="welcome"
    this.date = "Febuary 27th 2024";
    this.open =true;
    if(localStorage.getItem('campus-alert-opened-state') =="false")
    {
      this.open = false;
    }

    

  }

  


  
  static get styles() {
    
    return css`

    .sticky{
        position: sticky;
        top: 0;
        z-index: 100;
        opacity: 1.0;
      }
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
          
        }
        .open-toggle-button
        {
          display:flex;
          align-items: center;
          justify-content: center;
          
        }

        
    
     `;}

toggleAlert()
{
this.open = !this.open;
localStorage.setItem('campus-alert-opened-state',this.open)

}

 openView(colorP, colorB)
 {
  return html`

<div class="opencontainer ${(this.sticky) ? "sticky" : ""}" style = 'background-color:${colorP} '  >
        <div class="box1" style = 'background-color:${colorP} '> ${this.date}</div>
        <div class="box2 " style= 'background-color:${colorB} '>
          <div  class = "alertText">
            ${this.message}
          </div>
        </div>
        <div class="box3" style= 'background-color:${colorP}'>
        <div tabindex="0"  class="open-toggle-button" @click="${this.toggleAlert}"  style= 'background-color:${colorP}'>
          ${this.open ? 'Close' : 'Open'} 
          <svg xmlns="http://www.w3.org/2000/svg" style=" height:35px; width:35px;" viewBox="0 0 24 24"><title>chevron-down</title><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>

        </div>
        </div>

    </div>
 
  </div>`;
 }

 closeView(colorP)
 {
  return html`

<div class="closedContainer ${(this.sticky) ? "sticky" : ""}" style= 'background-color:${colorP} '  >
        <div tabindex="0" class="close-toggle-button" @click="${this.toggleAlert}" >
        <svg xmlns="http://www.w3.org/2000/svg" style=" height:50px; width:50px;" viewBox="0 0 24 24"><title>alert-circle-outline</title><path d="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z" /></svg>
           ${this.issueLevel}
           <svg xmlns="http://www.w3.org/2000/svg" style=" height:35px; width:35px;" viewBox="0 0 24 24"><title>chevron-down</title><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
        </div>

    </div>
 
  </div>`;
 }
  
  render() {    
      let colorP = "white";
      let colorB= "black"
      if(this.issueLevel === "notice"){colorP = "yellow", colorB = "orange"}
      if(this.issueLevel === "warning"){colorP = "red", colorB = "green"}
      if(this.issueLevel === "alert"){colorP = "purple", colorB = "pink"}
      if(this.issueLevel === "welcome"){colorP = "#cfeceb", colorB = "#fff"}

      if(this.issueLevel === "welcome") (this.message) = "Hello Happy PSU!";
        if(this.issueLevel === "notice") (this.message) = "Watch out possible oopsie";
        if(this.issueLevel === "warning") (this.message) = "WARNING WARNING WARNING"
        if(this.issueLevel === "alert") (this.message) = "GTFO DANGER IMMENENT WE ARE ALL GOING TO DIE";


    return (this.open) ? this.openView(colorP,colorB) : this.closeView(colorP);
  }


  static get properties() 
  {
    return {
      issueLevel:{type: String, reflect: true},
      message:{type: String},
      sticky:{type: Boolean},
      open: { type: Boolean, reflect: true },
      date: { type: String },
    };
  }
}

globalThis.customElements.define(CampusAlerts.tag, CampusAlerts);
