class itemMeal extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({
      mode: "open"
    });
  }
  set meal(meal) {
    this._meal = meal;
    this.render();
  }
  render() {
    this.shadowDOM.innerHTML = `
<style>

div.gallery {
  border: 1px solid #ccc;
  margin: 15px;
}

div.gallery:hover {
  border: 1px solid #777;
}

div.gallery img {
  width: 100%;
  height: auto;
}

div.desc {
  padding: 0;
  text-align: center;
}

* {
  box-sizing: border-box;
  font-family: roboto;
}

.responsive {
  padding: 0 6px;
  float: left;
  width: 24.99999%;
}

@media only screen and (max-width: 700px) {
  .responsive {
    width: 49.99999%;
    margin: 6px 0;
  }
}

@media only screen and (max-width: 500px) {
  .responsive {
    width: 100%;
  }
}

.clearfix:after {
  content: "";
  display: table;
  clear: both;
}

</style>                   

    <div class="responsive">
        <div class="gallery"> 
            <a id="#gambar" href="#">
              <img src="${this._meal.strMealThumb}" id="img" width="600" height="400">
            </a>
            <div class="desc">
              <p>Nama Jajanan : ${this._meal.strMeal}</p>
              <p>Kategori : ${this._meal.strCategory}</p>
            </div>
        </div>  
    </div>
                              
            `;
  }
}
customElements.define("item-meal", itemMeal);
