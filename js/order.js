getAll(urlOder,getOrder);
let orders;
function getOrder(data){
    orders=data;
}
document.querySelector(".order").addEventListener("click" , () =>{

    const selectfood = document.querySelector(".order-table");

    const order = orders.find(element => element.id == selectfood.value);
    let items = [];
    const bills = order ? order.items : items;
    let listCol = document.querySelectorAll(".foods .col");
    listCol.forEach(a => {
      let quantity =  a.querySelector("input").value;
      if(parseInt(quantity)>0){
        let idFood = a.querySelector("p").textContent;
        const food =  bills.find(a => a.idFood == idFood);
        if (food){
            let index = bills.findIndex(a => a.idFood ==idFood);
            bills[index].quantity +=parseInt(quantity);
        }
        else{
            bills.push({idFood:idFood,quantity:parseInt(quantity)});
        }
      }
    });
    
    
    const newOrders = {
        id: selectfood.value,
        items:bills
    }
    console.log(newOrders);
    if(order){
        edit(urlOder,order.id,newOrders)
    }
    else{
        add(urlOder,newOrders);
    }
   
  })

  