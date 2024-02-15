
import { LitElement, html, css } from 'lit';

export class CounterApp extends LitElement {

  static get tag() {
    return 'counter-app';
  }
 
  constructor() {
    super();
    this.nums = 1;
    this.min = 0;
    this.max = 10;
  }

   
  


  static get styles() {
    
    return css`
   #cardlist
{
  display:inline-flex;
}

#confetti
{
  height: 100%;
  width: 100%;
}

.card {
  padding: 16px;
  margin: 16px;  
  background-color: orange;
  
}


.heading{
  font-size: 40px;
  color: black;
  text-align: center;
}


.minus{
  background-color: blue;
  color : white;
  font-size: 28px;
  border-radius:10%;
  margin: 8px 16px
  
  
}

.plus{
  background-color: blue;
  color : white;
  font-size: 28px;
  border-radius:10%;
  margin: 8px 16px
  
  
}
.plus:focus,  
.plus:hover{
  background-color: lightgreen;
}

.minus:focus,  
.minus:hover{
  background-color: lightgreen;
}




    `;
  }


  plusClick() 
  {
    this.nums++;

  }

  minusClick()
  {
    this.nums--;
  }

 
updated(changedProperties) {
  if (changedProperties.has('nums') && this.nums === 21) {
    this.makeItRain();
  }
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
  
  render() {


    var container = "";
    if(this.nums === 18)
    {
      container = 'red';
    }
    else if(this.nums === 21)
    {
      container = 'blue';
    }
    else if(this.nums == this.max)
    {
      container = "green";
    }
    else if(this.nums == this.min)
    {
      container = "white";
    }
    else
    {
      container = 'Purple';
    }


    
    
    
    return html`
    
  
  <div id="cardlist">
  <confetti-container id="confetti">

  <div class="card">
    <div class="heading" style='color:${container}'>${this.nums}</div>
    <button class="plus" @click = ${this.plusClick} ?disabled="${this.max === this.nums}">+</button>
    <button class="minus"  @click="${this.minusClick}" ?disabled="${this.min === this.nums}">-</button>
  </div>

  </confetti-container>
  </div>



  </div>`;
  }


  static get properties() 
  {
    return {
      nums: { type: Number, Reflect: true },
      min: { type: Number},
      max: {type: Number},
    };
  }
}

globalThis.customElements.define(CounterApp.tag, CounterApp);
