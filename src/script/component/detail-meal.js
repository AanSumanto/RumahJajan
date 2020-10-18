class detailMeal extends HTMLElement {
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
                       
                  `;
    }
}
customElements.define("detail-meal", detailMeal);