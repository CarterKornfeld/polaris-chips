import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js";
import { MemeMaker } from '@lrnwebcomponents/meme-maker/meme-maker.js';
/**
 * Now it's your turn. Here's what we need to try and do
 * 1. 
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = 'Pokemon';
    this.image='';
    this.para='I love pokemon';
    this.button='pokedex';
    this.link='#';
    this.fancy = false;
    this.toptext = "";
    this.bottomtext="";
  }

  static get styles() 
  {
    return css`
     
  :host([fancy]) 
  {
  display: block;
  background-color: pink;
  border: 2px solid fuchsia;
  box-shadow: 10px 5px 5px red;
  }

  details summary {
    text-align: left;
    font-size: 20px;
    padding: 8px 0;
  }

  details[open] summary {
    font-weight: bold;
  }
  
  details div {
    border: 2px solid black;
    text-align: left;
    padding: 8px;
    height: 70px;
    overflow: auto;
  }

     
#cardlist
{
  display:inline-flex;
}


.card {
  padding: 8px;
  margin: 8px;  
  background-color: orange;
  
}

.change-color {
        background-color: #70707047;
      }

.heading{
  font-size: 40px;
  color: black;
  text-align: center;
}
.image {
  float: left; 
  margin: 8px 4px 4px 10px;
}
.para{
  padding: 4px; 
  font-size: 14px;
  width: 130px;
  float: right;
  margin: 20px 8px 4px 4px;
}

.btn{
  background-color: blue;
  color : white;
  font-size: 28px;
  border-radius:10%;
  margin: 8px 16px
  
  
}
.btn:focus,  
.btn:hover{
  background-color: lightgreen;
}

    `;
  }

  // put this anywhere on the MyCard class; just above render() is probably good
  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }
  
  render() {
    return html`<div class="control-wrapper">

  </div>
  <div id="cardlist">
    <div class="card">
      <div class="heading">${this.title}</div>
      <meme-maker alt="Cat stalking a small toy" image-url="${this.image}" top-text="${this.toptext}" bottom-text="${this.bottomtext}">
</meme-maker>
    <!-- put this in your render method where you had details -->
  <details ?open="${this.fancy}" @toggle="${this.openChanged}">
  <summary>PokeDex </summary>
   <div>
    <slot>${this.para}</slot>
   </div>
  </details>
    <a href="${this.link}">
      <button class="btn">${this.button}</button>
      </a>
        </div>
  </div>
    
  </div>`;
  }

  static get properties() {
    return {
      title: { type: String },
      image: {type: Image},
      para: {type: String},
      button: {type: String},
      link: {type: String },
      fancy: { type: Boolean, reflect: true },
      toptext:{type:String},
      bottomtext:{type:String},
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
