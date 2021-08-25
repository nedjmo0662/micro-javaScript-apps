const searchInput = document.getElementById('search-input');
const mealsHolder = document.querySelector('.meals');
const searchBtn = document.querySelector('.search-btn')

//events
mealsHolder.addEventListener('click',getRecipe);
searchBtn.addEventListener('click',getMeals);


//functions
async function getMeals(e) {
    const foodSearch = searchInput.value;
    let html = '';
    mealsHolderinnerHTML = '';
    var xhr = new XMLHttpRequest();
    xhr.open("GET", `https://www.themealdb.com/api/json/v1/1/filter.php?i=${foodSearch}`, true);
    xhr.onload = function() { 
        const {meals} =  JSON.parse(this.responseText);
        mealsHolder.classList.remove('not-found');
        if(meals == null){
            html = 'sorry there is no results!';
            mealsHolder.classList.add('not-found');
        }
    else if (this.status == 200) {
        meals.forEach(meal => {
            html+=` <div class="meal-item" id="${meal.idMeal}">
            <div class="meal-image">
            <img src="${meal.strMealThumb}" alt="" />
          </div>
          <div class="meal-content">
            <h4>${meal.strMeal}</h4>
            <button class="get-recipe">get recipe</button>
          </div>
        </div>
            `;
        });
    }
    mealsHolder.innerHTML = html;
};

xhr.send();
}

async function getRecipe(e) {
    const mealItem = e.target.parentElement.parentElement;
    if(e.target.classList.contains('get-recipe')){
        var det = "";
        var xhr = new XMLHttpRequest();
        xhr.open("GET", `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.id}`, true);
        xhr.onload = function() { 
            const {meals} =  JSON.parse(this.responseText);
            console.log(meals);
            if(this.status == 200){
            det = `
            <div class="food-info">
            <button
            type="button"
            class="btn recipe-close-btn"
            id="recipe-close-btn"
          >
            <i class="fas fa-times"></i>
          </button>
               <h2 class="recipe-title">${meals[0].strMeal}</h2>
               <p class="recipe-category">${meals[0].strCategory}</p>
               <div class="recipe-instruction">
                   <h3>Instructions:</h3>
                   <p>${meals[0].strInstructions}</p>
               </div>
               <div class="recipe-image"><img src="${meals[0].strMealThumb}" alt=""></div>
               <div class="recipe-link">
                   <a href="${meals[0].strYoutube}" target="_blanck">watch vedio</a>
               </div>
            </div>
            `
        };
        mealsHolder.innerHTML += det;
        document.querySelector('.food-info').classList.add('show-recipe');
        close();
    }
    };
    xhr.send();
}
function close(){
    const closeBtn = document.getElementById('recipe-close-btn');
    closeBtn.addEventListener('click',()=> {
        document.querySelector('.food-info').classList.remove('show-recipe');
    })
}