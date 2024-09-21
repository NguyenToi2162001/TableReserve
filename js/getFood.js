getAll(urlFood, displayFood);
let listFood;
function displayFood(data) {
  listFood=data;
  const food = document.querySelector(".foods");
  data.forEach((value) => {
    let item = document.createElement("div");
    item.classList.add("col");
    item.innerHTML = `<div class="card pt-2" >
                                        <div class="name d-flex">
                                            <p>${value.id}</p>
                                            <h3>${value.nameFood}</h3>
                                            <i class="fa-solid fa-pen-to-square"></i>
                                        </div>
                                        <img class="mt-3" src="${value.img}">
                                        <div class="card-body">
                                          <h5 class="card-title">${value.price}</h5>
                                          <div class="plus">
                                            <i class="fa-solid fa-minus"></i>
                                            <input value="0" type="text" >
                                            <i class="fa-solid fa-plus"></i>
                                          </div>         
                                        </div>
                                      </div>
                               `;
    food.appendChild(item);
    let minus = item.querySelector(".fa-minus");
    let plus = item.querySelector(".fa-plus");
    let input = item.querySelector("input");
    
    
    minus.addEventListener("click", () => {
      if (input.value > 0) {
        input.value = parseInt(input.value) - 1;
      }
    }
    )
    plus.addEventListener("click", () =>{
      input.value = parseInt(input.value) + 1;
    })

})}
document.querySelector(".order").addEventListener("click" , () =>{
  let items = [];
  let listCol = document.querySelectorAll(".foods .col");

  let idTable = document.querySelector(".order-table")
  listCol.forEach(a => {
    
    let quantity =  a.querySelector("input").value;
    if(parseInt(quantity)>0){
      let idFood = a.querySelector("p").textContent;
      items.push({idFood: idFood , quantity: quantity});
    }
  });
  let order = {
    id: idTable.value,
    items: items ,
  }
  add(urlOder,order);
})

