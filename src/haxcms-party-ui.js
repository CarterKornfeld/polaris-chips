

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
            padding: 8px;
            margin: 8px;
            
            
          }
          .mainBody {
            max-width: 100%;
            display: flex;
            flex-direction: column;
            background-color: var(--ddd-theme-default-beaverBlue);
            border: var(--ddd-border-lg);
            color: var(--ddd-theme-default-keystoneYellow);
            z-index:1;
          }
          
          .popUp {
            
            display: flex;
            flex-direction: column;
            background-color: var(--ddd-theme-default-potential0);
            border: var(--ddd-border-lg);
            color: var(--ddd-theme-default-keystoneYellow);

            /* in and out transtion stuff*/
            position: relative;
            right:200px; /* Initially hidden to the right */
            transition: right 1s ease;
            opacity: 0;
            z-index:0;
            
          }
          #nameInput
          {
            width:50%;
            display: inline-flex;
            align-self: center;
            margin-top: 8px;
          }
          #rpg
          {
            display: inline-flex;
            align-self: center;
            margin-top : -8px;
          }
          .rpgAdd
          {
            width: 50%;
            display: inline-flex;
            align-self: center;
            margin: 16px;
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
      #underName
      {
        align-self:center;
      }

      .partyCont
      {
        display:flex;
        flex-direction:row;
        flex-shrink: 2;
      }
        rpg-character
        {
          max-width: 100px;
          max-height: 100px;
          padding: 8px;
          margin: 8px;
          height:100%;
          width:100%;
        }
        
        `];
      }
      addToParty()
      {
        
        const randomNumber = globalThis.crypto.getRandomValues(new Uint32Array(1))[0];

        const member = 
        {
          name: this.personName,
          id: randomNumber,
        }
        this.party.push(member);
        this.makeItRain();
        this.requestUpdate();
      }
      targetClicked(e) {
        let value = e.target.id;
        // console.log(this.party);
        // console.log(e.target.id);

        for(let i = 0; i < this.party.length; i++){

            if(this.party[i].id == e.target.id){
              this.party.splice(i, 1);
              this.requestUpdate();
              break;
            }
        }
      }
      


      openClick()
      {
        
        this.opened = !this.opened;
      }
   
      updateName(event)
      {
    
        this.personName = event.target.value;
        
      }

      
      makeItRain() {
        // this is called a dynamic import. It means it won't import the code for confetti until this method is called
        // the .then() syntax after is because dynamic imports return a Promise object. Meaning the then() code
        // will only run AFTER the code is imported and available to us
        import("@lrnwebcomponents/multiple-choice/lib/confetti-container.js").then(
          (module) => {
            // This is a minor timing 'hack'. We know the code library above will import prior to this running
            // The "set timeout 0" means "wait 1 microtask and run it on the next cycle.
            // this "hack" ensures the element has had time to process in the DOM so that when we set popped
            // it's listening for changes so it can react
            setTimeout(() => {
              // forcibly set the poppped attribute on something with id confetti
              // while I've said in general NOT to do this, the confetti container element will reset this
              // after the animation runs so it's a simple way to generate the effect over and over again
              this.shadowRoot.querySelector("#confetti").setAttribute("popped", "");
            }, 0);
          }
        );
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
        
        <rpg-character id="${member.id}" @click="${this.targetClicked}" seed = "${member.name}" > </rpg-character>
        <div style= 'font-size:16px; text-align:center; margin-top:4px;' > ${member.name}</div>
        `)}
        </div>
      </div>
      <div class="sidebar">
      <confetti-container id="confetti">
        <div class=popUp>
        
            <input id="nameInput" type="text" value=${this.personName} @input=${this.updateName}>
            <rpg-character id="rpg" seed= ${this.personName}  > </rpg-character>
            
            <button class= "rpgAdd" @click="${this.addToParty}" > Add to Party</button>
            
        </div>
        </confetti-container>
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

