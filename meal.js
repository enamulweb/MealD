const MealShow = (searchTerm) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;
  //console.log(url);
   fetch(url)
    .then(res =>res.json())
    .then(data => Menu(data.meals))

}

const Menu = parts => {
    const MainDiv = document.getElementById('MealContainer')
    MainDiv.innerHTML =''
parts.forEach(element => {
    console.log(element.strMealThumb
        )
    const divn = document.createElement('div')
    divn.classList.add('col');
    divn.innerHTML =`
    <div class="card h-100">
                <img src="${element.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${element.strMeal}</h5>
                  <button onclick="loadDetails(${element.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Details
</button>
                  
                </div>
              </div>
    `
    MainDiv.appendChild(divn)
});
}

const ButtonFact =()=>{
    const ButtonValue = document.getElementById('InputValue').value;
   // console.log(ButtonValue)
    MealShow(ButtonValue);
}

const loadDetails = loadd =>{
    const url2 = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${loadd}`
    fetch(url2)
    .then(res => res.json())
    .then(data => displayMealdata(data.meals[0]))
}
const displayMealdata = meal=> {
const exampleModalLabelll =document.getElementById('exampleModalLabel')
exampleModalLabelll.innerText =meal.strMeal;
const imagebodyyy= document.getElementById('imagebody')
imagebodyyy.innerHTML = `
<img class="img-fluid" src="${meal.strMealThumb}">
`
}


  
MealShow();


