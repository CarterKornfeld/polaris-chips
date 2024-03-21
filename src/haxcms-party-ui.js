

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
        this.opened = true;
        this.party = [];
      }
    
      static get styles() {
        return [
          super.styles,
          css`
          :host {
            display: block;
            margin: 10px;
            
          }
          
          .container
          {
            display: inline-flex;
            flex-direction: row;

          }
          .mainBody {
            height: 200px;
            width: 200px;
            max-width: 400px;
            max-height: 400px;
            display: flex;
            flex-direction: column;
            background-color: var(--ddd-theme-default-beaverBlue);
            border: var(--ddd-border-lg);
            color: var(--ddd-theme-default-keystoneYellow);
           
        z-index:1;
          }
          .sidebar
          {
            max-width: 400px;
            max-height: 400px;
            height: 200px;
            width: 200px;
          }
          .popUp {
            
            display: flex;
            flex-direction: column;
            background-color: var(--ddd-theme-default-potential0);
            border: var(--ddd-border-lg);
            color: var(--ddd-theme-default-keystoneYellow);
            position: relative;
            right:200px; /* Initially hidden to the right */
            transition: right 0.8s ease;
            opacity: 0;
            z-index:0;
            
          }
          #nameInput
          {
            width:50%;
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
            width: 50%;
            display: inline-flex;
            
            margin: var(--ddd-spacing-6);
            
        }
        .header
        {
            background-color:var(--ddd-theme-default-keystoneYellow);
            color: blue;
            font: var(Roboto (ddd-font-primary) [--ddd-font-primary]);
            
        }

        
        :host([opened]) .popUp
        {
          right:0;
          opacity: 1;
        }
      .headers
      {
        margin:10px;
        
      }
      .rpgcharecter
      {
        display:block;
      }

      .partyCont
      {
        display:flex;
        flex-direction:row;
        
      }
        rpg-character
        {
          max-width: 10vw;
          max-height: 10vh;
          padding: 8px;
          margin: 8px;
        }
        `];
      }
      addToParty()
      {
        const member = 
        {
          name: this.personName,
        }
        this.party.push(member);
        this.requestUpdate();


      }
      openClick()
      {
        
        this.opened = !this.opened;
      }
   
      updateName(event)
      {
    
        this.personName = event.target.value;
        
      }
      
      main()
      {
        return html`
    
    <div class ="container">
        <div class="mainBody">
        <div class="header">
           place holder
        </div>
        <button class="openPop"  @click="${this.openClick}" > Add character</button>
        <div class="partCont">
        ${this.party.map((member) => html`
        
        <rpg-character id="${member.name}" seed = "${member.name}" > </rpg-character>
        `)}
        </div>
      </div>
      <div class="sidebar">
            <div class=popUp>
              <div class=headers>     </div>
              <input id="nameInput" type="text" value=${this.personName} @input=${this.updateName}>
             <rpg-character id="rpg" seed= ${this.personName}  > </rpg-character>
            <button class= "rpgAdd" @click="${this.addToParty}" > Add to Party</button>
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
        opened: {type: Boolean, reflect:true},
        party: {type: Array},
        };
      }
}

globalThis.customElements.define(PartyUI.tag, PartyUI);

