    import "./component/list-meal.js";
    import "./component/search-bar.js";
   
    
    import DataSource from "./data-source.js";     

    const main = () => {
    const searchElement = document.querySelector("search-bar");
    const mealListElement = document.querySelector("list-meal");
       const onButtonSearchClicked = async () => {
           try {
               const result = await DataSource.searchMeal(searchElement.value);
               renderResult(result);
           } catch (message) {
               fallbackResult(message);
           }
       };
       const renderResult = results => {
           mealListElement.meals = results;
           };
       const fallbackResult = message => {
          mealListElement.renderError(message);
       };
       searchElement.clickEvent = onButtonSearchClicked;
    };
    export default main; 