import { LitElement, html, css } from 'lit';

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
    this.button='pokedex'
    this.link='#'
  }

  static get styles() 
  {
    return css`
      
#cardlist
{
  display:inline-flex;
}


.card {
  padding: 8px;
  margin: 8px;  
  background-color: orange;
  
}

.card.color-change
{
  background-color: blue;
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

  render() {
    return html`<div class="control-wrapper">

  </div>
    
  <div id="cardlist">
    <div class="card">
      <div class="heading">${this.title}</div>
      <img src= ${this.image} class = "image" width = 120px height = 120px>
    <p class="para">${this.para}</p>
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
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
