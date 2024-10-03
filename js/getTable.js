getAll(urlTable, displayTables);
function displayTables(data) {
    const tables = document.querySelector(".tables")
    data.forEach((value) => {
        const selectfood = document.querySelector(".order-table");
        const selectpaybill = document.querySelector(".order-paybill");
        if(value.status){
            selectfood.innerHTML +=`<option value = "${value.id}"> Table ${value.id}</option>`;
            selectpaybill.innerHTML +=`<option value = "${value.id}"> Table ${value.id}</option>`
        }
        let img = value.status ? "../img/meeting.png" : "../img/dining-room.png"
        let add = value.status ? `<div onclick=addFood(${value.id}) class="add d-flex">
                                                <i class="fa-solid fa-plus"></i>
                                                <p>Add</p>
                                            </div>
                                            <div onclick=showCart(${value.id}) class="cart d-flex"  data-bs-toggle="modal" data-bs-target="#cart">
                                                <i class="fa-solid fa-cart-shopping"></i>
                                                <p>Cart</p>
                                            </div>` : `<div onclick=getID(${value.id}) class="booking d-flex" data-bs-toggle="modal" data-bs-target="#booking">
                                                <i class="fa-regular fa-calendar-plus"></i>
                                                <p>BOOKING</p>
                                            </div>`;
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
var idTable;
function getID (id){
    idTable = id ;
}
console.log(document.getElementById("booking"));

document.getElementById("booking").addEventListener("submit", (e) =>{
    e.preventDefault();
    console.log("svdsv");
    
    if(!e.target.checkValidity()){
        console.log("Validation error");
        return;
    }
    var customerNames = document.getElementById("customer-Name").value;
    var quantitys = document.getElementById("quantity").value;
    var object = { id :idTable, customerName: customerNames, quantity:quantitys, status: true }
    edit(urlTable,idTable,object)
})

let idPaybill ;
function showCart(id) {
    idPaybill=id;
    const cart = document.getElementById("list-cart");
    cart.innerHTML = "";
     const order = orders.find((a) => a.id == id);
     order.items.forEach((item,index) => {
         const food = listFood.find(a => a.id == item.idFood);
       cart.innerHTML += `
           <tr>
              <th scope="row">${index + 1}</th>
              <td>
                <img style="width: 50px;" src=${food.img} alt="">
              </td>
              <td>${food.nameFood}</td>
              <td>${food.price}</td>
              <td>${item.quantity}</td>
            </tr>
       `
     })   
}
const paybill = document.querySelector(".order-paybill") ;
paybill.addEventListener("change", () => {
    console.log(paybill.value);
    const order = orders.find(a => a.id ==  paybill.value );
    console.log(order);
    
    const listpay = document.getElementById("list-bill");
    listpay.innerHTML = "";
    order.items.forEach((a,index)=>{
        let food =listFood.find(b => b.id ==a.idFood);
        listpay.innerHTML += `
        <tr>
              <th scope="row">${index + 1}</th>
              <td>
                <img style="width: 50px;" src=${food.img} alt="">
              </td>
              <td>${food.nameFood}</td>
              <td>${a.quantity}</td>
              <td>${food.price}</td>
              
            </tr>
       `
    }
)
})
function showBill(){
    deleted(urlFood,paybill.value);
    const table = {  customerName: "",  quantity: "",status: false };
    edit(urlTable,paybill.value,table);
}