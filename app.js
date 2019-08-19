// console.log("it worked"); open up dev tools to see if it printed
const dropDown = document.querySelector("select")
const button = document.querySelector("#cat-me")
const catpic = document.querySelector("#try-pic")
const apiKey = "77806dc9-db25-45af-a3ef-910a5f64695d"

const getCategories = async () => {
  const response = await axios.get("https://api.thecatapi.com/v1/categories", 
    {
      "x-api-key": apiKey
    })
  const categories = response.data
  for (let i = 0; i < categories.length; i++) {
    dropDown.innerHTML += `<option id=${categories[i].id}>${categories[i].name}</option>`
  }
}

getCategories();

button.addEventListener("click", async () => {
  const categoryId = dropDown[dropDown.selectedIndex].id
  const response = await axios.get(`https://api.thecatapi.com/v1/images/search?category_ids=${categoryId}`,
    {
      "x-api-key": apiKey
})
  const pic = response.data[0].url
  catpic.innerHTML = `<img src=${pic} />`

})
  // console.log("click");
  // another example.  document.addEventListener("keydown", (ev) => {
  // console.log(e.keyCode);
  // }

