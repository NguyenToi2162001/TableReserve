getAll(urlFood, displayFood);
const storage = firebase.storage();
let listFood;
function displayFood(data) {
  listFood = data;
  const food = document.querySelector(".foods");
  data.forEach((value) => {
    let item = document.createElement("div");
    item.classList.add("col");
    item.innerHTML = `<div class="card pt-2" >
                                        <div class="name d-flex">
                                            <p>${value.id}</p>
                                            <h3>${value.nameFood}</h3>
                                        
                                        <div>
                                            <i onclick="deletefood(${value.id}, '${value.img}')" data-bs-toggle="modal" data-bs-target="#deleteFood" class="fa-solid fa-trash-can me-2"></i>
                                            <i class="fa-solid fa-pen-to-square"></i>
                                        </div>
                                       
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
    plus.addEventListener("click", () => {
      input.value = parseInt(input.value) + 1;
    })

  })
}
document.getElementById("image-food").addEventListener("change", (elemen) => {
  const file = elemen.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("img-food").src = e.target.result;
    }
    reader.readAsDataURL(file);
  }
})
document.getElementById("add-food").addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const imgUrl = await uploadImage();
  const newFood = {
    nameFood: name,
    img: imgUrl,
    price: price
  }
  add(urlFood, newFood);
})
function uploadImage() {
  return new Promise((resolve, reject) => {
    const file = document.getElementById("image-food").files[0];
    if (file) {
      const imgPath = "images/" + file.name;
      const storageRef = storage.ref(imgPath);
      const uploadTask = storageRef.put(file);

      uploadTask.on(
        "state_changed",
        null,
        (error) => {
          reject(error); // Handle errors
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            resolve(downloadURL); // Resolve the promise with the downloadURL
          });
        }
      );
    } else {
      reject(new Error("No file selected"));
    }
  });
}
function deleted(url,id) {
  fetch(`${url}/${id}`, {
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => {      
    })
    .catch(error => console.error('Lỗi khi cập nhật đơn hàng', error));
}
let idxoa;
function deletefood(id,img) {
  idxoa = id;
  document.getElementById("img-delete").src = img ;
  
}

document.getElementById("xoa-food").addEventListener("click",  () => {
  deleted(urlFood,idxoa);
})