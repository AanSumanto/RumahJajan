import "./item-meal.js";

class listMeal extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }
    set meals(meals) {
        this._meals = meals;
        this.render();
    }
    renderError(message) {
        this.shadowDOM.innerHTML = `
      <style>
          .placeholder {
             font-weight: lighter;
             color: #a50303;
             user-select: none;
          }
      </style> 
      `;
        this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
    render() {
        this.shadowDOM.innerHTML = "";
        this._meals.forEach(meal => {
            const mealItemElement = document.createElement("item-meal");
            mealItemElement.meal = meal;
            this.shadowDOM.appendChild(mealItemElement);
        });
    }
}

customElements.define("list-meal", listMeal);