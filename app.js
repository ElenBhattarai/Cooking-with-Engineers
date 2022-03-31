let foodName = []

const fetchAPI = async() => {
    console.log("HI")
    let res = await fetch('https://api.spoonacular.com/recipes/findByIngredients?ingredients=chicken,+egg,+vegetables,+cloves&number=10&apiKey=25c19ca358ea48d8a1e478cd55ffed3f')
    let data = await res.json()
    console.log(data)
}

let fetchButton = document.querySelector("#fetch")

fetchButton.addEventListener("click", ()=>fetchAPI())

console.log(array[1].missedIngredientCount)




