var items = document.querySelectorAll(".item");
console.log(items);
var listmenu = document.querySelector(".list-menu")
document.querySelector(".arrow-left").addEventListener("click",() =>{
    items.forEach(items =>{
        items.classList.toggle("hidden")
        
    })
    listmenu.classList.toggle("list-menu")
    
})
var lists = document.querySelectorAll(".list");
var boxs = document.querySelectorAll(".box")
console.log(lists);

console.log(boxs);

lists.forEach((item,index) => {
    item.addEventListener("click", () => {
        lists.forEach(item => item.style.color = "white");
        item.style.color = "black";
        boxs.forEach(item => item.style.display= "none")
        boxs[index].style.display = "block";
        localStorage.setItem("key",index);
    })
   
   
})
var index = localStorage.getItem("key");
if (index) {
    lists[index].style.color="black"
    boxs[index].style.display = "block";

}


var drops = document.querySelector(".drop")

document.querySelector(".user").addEventListener("click",() =>{
    drops.classList.toggle("hiddens")
    
})
var logins = document.querySelector(".login")

