getAll(urlTable, displayTables);
function displayTables(data) {
    const tables = document.querySelector(".tables")
    data.forEach((value, index, array) => {
        let img = value.status ? "../img/meeting.png" : "../img/dining-room.png"
        let add = value.status ? `<div class="add d-flex">
                                                <i class="fa-solid fa-plus"></i>
                                                <p>Add</p>
                                            </div>
                                            <div class="cart d-flex">
                                                <i class="fa-solid fa-cart-shopping"></i>
                                                <p>Cart</p>
                                            </div>` : `<div class="booking d-flex" data-bs-toggle="modal" data-bs-target="#booking">
                                                <i class="fa-regular fa-calendar-plus"></i>
                                                <p>BOOKING</p>
                                            </div>`
        tables.innerHTML += `<div class="col">
                                    <div class="card">
                                        <img src= ${img} alt="...">
                                        <h4>${value.id}</h4>
                                        <div class="card-body d-flex">
                                          ${add}
                                        </div>
                                    </div>
                                </div>`;
        

    })

}