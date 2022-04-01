let fetchButton = document.querySelector("#fetch")

let data = []

const fetchAPI = async() => {
    let res = await fetch('https://api.spoonacular.com/recipes/findByIngredients?ingredients=pork,+egg,+vegetables,+cloves&number=10&apiKey=010f07cc7be4416ea7006d8355335fcd')
    data = await res.json()
    console.log(data)
    createResultCards()
}

fetchButton.addEventListener("click", ()=>fetchAPI())

const createResultCards = () => {
    for(let i = 0; i < data.length; i++) {
        let cards = document.createElement("div")
        cards.classList.add('cards')
        document.body.appendChild(cards)
        
        let image = document.createElement("div")
        image.classList.add('image')
        cards.appendChild(image)

        let img = document.createElement("img")
        img.src = data[i].image
        image.appendChild(img)

        let title = document.createElement("div")
        title.classList.add('title')
        let header = document.createElement("h3")
        header.innerText = data[i].title
        title.appendChild(header)
        cards.appendChild(title)

        let desc = document.createElement("div")
        desc.classList.add('description')
        let p1 = document.createElement("p")
        
        p1.innerText = "Used Ingredient: "
        let k = 0
        for(let j = 0; j < data[i].usedIngredientCount; j++) {
            if(k == 0) {
                p1.innerText = p1.innerText + data[i].usedIngredients[j].name 
            } else {
                p1.innerText = p1.innerText + ", "+ data[i].usedIngredients[j].name 
            }
            k++
        }

        let p2 = document.createElement("p")

        p2.innerText = "Missed Ingredient: "
        k = 0
        for(let j = 0; j < data[i].missedIngredientCount; j++) {
            if(k == 0) {
                p2.innerText = p2.innerText + data[i].missedIngredients[j].name 
            } else {
                p2.innerText = p2.innerText + ", "+ data[i].missedIngredients[j].name 
            }
            k++
        }
        desc.appendChild(p1)
        desc.appendChild(p2)
        cards.appendChild(desc)
        
        let recipe = document.createElement("button")
        recipe.innerText = "View Recipe>>"
        desc.appendChild(recipe)
    }
}