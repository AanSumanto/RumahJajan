class DataSource {
    static searchMeal (keyword) {
        return fetch (`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`) 
        .then(response =>  response.json())
        .then (responseJson => {
            if (responseJson.meals){
                return Promise.resolve(responseJson.meals);
            } else { 
               return Promise.reject(`${keyword} Tidak Ketemu`);
            }
        });
    }
}
export default DataSource; 