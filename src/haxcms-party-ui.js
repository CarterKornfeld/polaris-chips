

import { html, css } from "lit";
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";
import "@lrnwebcomponents/rpg-character/rpg-character.js";

export class PartyUI extends DDD {

    static get tag() {
        return 'haxcms-party-ui';
      }
    
      constructor() {
        super();
        this.personName = "";
        this.opened
      }
    
      static get styles() {
        return [
          super.styles,
          css`
          :host {
            display: block;
          }
          .container
          {
            display: inline-flex;
            flex-direction: row;
            

          }
          .mainBody {
            height:250px;
            width:200px;
            display: flex;
            flex-direction: column;
            background-color: var(--ddd-theme-default-beaverBlue);
            border: var(--ddd-border-lg);
           
            color: var(--ddd-theme-default-keystoneYellow);
           
        
          }
          .sidebar
          {
            width:130px;
            height:200px;
          }
          .popUp {
            height:250px;
            display: flex;
            flex-direction: column;
            background-color: var(--ddd-theme-default-potential0);
            border: var(--ddd-border-lg);
            color: var(--ddd-theme-default-keystoneYellow);
            position: fixed;
  right: -200px; /* Initially hidden to the right */
  top: 0;
  bottom: 0;
  transition: right 0.3s ease;
          }
          #nameInput
          {
            margin-top:16px;
            display: inline-flex;
            margin: var(--ddd-spacing-1)
          }
          #rpg
          {
            display: inline-flex;
            margin: var(--ddd-spacing-3)
          }
          .rpgAdd
          {
            display: inline-flex;
            margin: var(--ddd-spacing-6)
            
        }
        .header
        {
            background-color:var(--ddd-theme-default-keystoneYellow);
            color: blue;
            font: var(Roboto (ddd-font-primary) [--ddd-font-primary]);
            
        }
        .popUp.open
        {
            
        right:0;
        }
        
        `];
      }
      openClick()
      {
        
      }
   
      updateName(event)
      {
    
        this.personName = event.target.value;
        
      }
      
     /*  popOut()
      {
        return html`<div class="control-wrapper">
    
      </div>
       <div class=popUp>
        <input id="nameInput" type="text" value=${this.personName} @input=${this.updateName}>
        <rpg-character id="rpg" seed= ${this.personName} style= "height: 100px; width:100px;" >
      </rpg-character>
      <button class= "rpgAdd"> Add to Party</button>
      </div>

      
        
      </div>`;
      }
 */
      main()
      {
        return html`
    
    <div class ="container">
        <div class="mainBody">
        <div class="header">
           place holder
        </div>
        <button class="openPop" > Add character</button>
      </div>
      <div class="sidebar">
            <div class=popUp>
             <input id="nameInput" type="text" value=${this.personName} @input=${this.updateName}>
             <rpg-character id="rpg" seed= ${this.personName} style= "height: 100px; width:100px;" > </rpg-character>
            <button class= "rpgAdd" @click="${this.openClick}"> Add to Party</button>
        </div>
        </div>
        
    </div>

      
        `;
      }
       
       render() {    
           
        return this.main();
       }
    
      static get properties() {
        return {
        personName:{type: String, reflect: true},
        };
      }
}

globalThis.customElements.define(PartyUI.tag, PartyUI);

