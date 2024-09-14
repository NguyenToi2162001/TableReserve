getAll(urlFood, displayFood);
function displayFood(data) {
    const food = document.querySelector(".foods")
    console.log(food);
    
    data.forEach((value) => {
        food.innerHTML += `<div class="col">
                                    <div class="card pt-2" >
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
                                            <input type="text" >
                                            <i class="fa-solid fa-plus"></i>
                                          </div>         
                                        </div>
                                      </div>
                                </div>`;
        

    })

}