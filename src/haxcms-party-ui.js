

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
            margin: var(--ddd-spacing-2);
            
          }
          
          .container
          {
            display: inline-flex;
            flex-direction: row;
            
            
          }
          .mainBody {
            max-width: 680px;
            min-width: 250px;
            background-color: var(--ddd-theme-default-skyLight);
            z-index:1;
            align-items: center;
            border: var(--ddd-border-lg);
            border-color: var(--ddd-theme-default-navy40)
            
          }
          .partCont
          {
            display:flex;
            flex-direction:row;
            margin-right: var(--ddd-spacing-15);
            height: 150px;
            min-width: 100px;
            max-width: 650px;
            margin-bottom: var(--ddd-spacing-2);
            
          }
        

          .buttonCont
          {
            width:100%;
            display:flex;
            flex-direction:row;
          }
.openPop 
{
  width: 30%;
  
}
.saveButton
{
  width: 30%;
  
}

#big-break
{
  width:10%;
}
#small-break
{
  width:20%;
}
#rpg
{
width:100px;
height:95px;
}

rpg-character{
  width: 100px;
  height: 100%;
}
    
          .popUp {
            
            display: flex;
            flex-direction: column;
            border-bottom: var(--ddd-border-lg);
            border-top: var(--ddd-border-lg);
            border-right: var(--ddd-border-lg);
            background-color: var(--ddd-theme-default-skyLight); 
            border-color: var(--ddd-theme-default-navy40);
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
            margin-top: var(--ddd-spacing-8);
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
            margin: var(--ddd-spacing-8);
            
        }
        .header
        {
            background-color:var(--ddd-theme-default-slateLight);
            color: black;
            text-align: center;
        }

        :host([opened]) .popUp
        {
          right:0;
          opacity: 1;
        }
        
      

      .tooltip {
        position: relative;
        display: inline-block; /* Add a dotted bottom border to indicate hoverable area */
        cursor: pointer; /* Change cursor to indicate hoverable area */
        margin-bottom:var(--ddd-spacing-2);;
    }
    
    /* Define styles for the tooltip text */
    .tooltip .tooltiptext {
        visibility: hidden;
        width: 60px;
        background-color: var(--ddd-theme-default-coalyGray);
        color: var(--ddd-theme-default-white);
        text-align: center;
        border-radius: 6px;
        padding: 10px 0;
        z-index: 1;
        bottom: 125%;
        left: 50%;
        margin-left: -90px;
        opacity: 0;
        transition: opacity 0.3s;
        font-size:12px;
    }
    
    /* Show the tooltip text when hovering over the tooltip container */
    .tooltip:hover .tooltiptext {
        visibility: visible;
        opacity: 1;
    }
      
    .charectername
    {
      font: var(Roboto Slab (ddd-font-secondary) [--ddd-font-secondary]);
     font-size:16px;
      text-align:center;
      margin-top: -32px;
      margin-left:var(--ddd-spacing-2);
      z-index:0;
      
    }
    .header1
    {
      background-color: var(--ddd-theme-default-coalyGray);
      visibility: visible;
    }
        
        `];
      }
      addToParty(event)
      {
        
        for(let i = 0; i < this.party.length; i++){

          if(this.party[i].name === this.personName){
            alert('This name is already used');
            return;
          }
      }
        const randomNumber = globalThis.crypto.getRandomValues(new Uint32Array(1))[0];

        const member = 
        {
          name: this.personName,
          id: randomNumber,
        }
        if(this.personName.length ===0)
        {
          alert(`empty name is not allowed`);
          return;

        }
        this.party.push(member);
        this.requestUpdate();

        this.shadowRoot.getElementById("nameInput").value = "";
        this.shadowRoot.getElementById("nameInput").focus();
        
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
      
      handleInput(event)
      {
        var userInput = event.target.value;
        userInput = userInput.slice(0,7);

        const invalidChar = userInput.match(/[^a-z0-9]/g)
        console.log(userInput.length)
        if(invalidChar)
        {
          alert(`The character '${invalidChar[0]}' is not allowed`);
          userInput = userInput.replace(invalidChar[0], '');

        }

        event.target.value = userInput;

      }

      openClick()
      {
        
        this.opened = !this.opened;
      }
   
      updateName(event)
      {
          this.personName = event.target.value;
      }
     
      saveFunction()
      {
        this.makeItRain();

        var nameList = "";
        for(let i = 0; i < this.party.length; i++){
          nameList +=  ` ${this.party[i].name},`
        }
        
        alert(nameList.slice(0,nameList.length-1));
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
      <confetti-container id="confetti">
        <div class="header">
           Build Your Party
        </div>
        <div class="partCont" data-tooltip = "Click to Delete">
        
        ${this.party.map((member) => html`
        <div class="tooltip">
        <rpg-character id="${member.id}" @click="${this.targetClicked}" seed = "${member.name}" >  </rpg-character>
        <span class="tooltiptext">Click to Delete</span>
        <div class="charectername"> ${member.name}</div>
</div>
        `)}
    
        </div>
        <div class="buttonCont">
        <div id="big-break"></div>
        <button class="openPop"   @click="${this.openClick}" > Add character</button>
        <div id="small-break"></div>
        <button class="saveButton"  @click = "${this.saveFunction}" > Save</button>
        <div id="big-break"></div>
      </div>
        </confetti-container>
      </div>
      
      <div class="sidebar">
      
        <div class=popUp>
        
            <input id="nameInput" type="text" value=${this.personName} @input=${this.updateName} @keyup=${this.handleInput}>
            <rpg-character id="rpg" seed= ${this.personName}  > </rpg-character>
            
            <button class= "rpgAdd" @click="${this.addToParty}" ?disabled="${this.party.length >=5}"> Add to Party</button>
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

