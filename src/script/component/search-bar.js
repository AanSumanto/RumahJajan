class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({
      mode: "open"
    });
  }
  connectedCallback() {
    this.render();
  }
  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }
  get value() {
    return this.shadowDOM.querySelector("#searchElement").value;
  }
  render() {
    this.shadowDOM.innerHTML = `
        <style>
        .btn {
            background-color: #4CAF50;
            border: none;
            color: white;
            padding: 10px 25px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
            border-radius: 12px;
          }
        
        input[type=search]{
            padding: 10px 20px;
            margin: 8px 0;
            display: inline-block;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
          }
                 
          input[type=search]:hover {
            background-color: #D32626;
          }

        </style>

            <input id="searchElement" type="search" placeholder="Cari Jajanan">
            <button id="searchButtonElement" class="btn" type="submit">Cari</button>
        
    `;
    this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
  }
}
customElements.define("search-bar", SearchBar);
