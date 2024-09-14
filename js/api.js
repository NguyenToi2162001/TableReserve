const urlTable = "http://localhost:3000/tables";
const urlFood =" http://localhost:3000/foods"

function getAll (url, callback){
    fetch(url)
    .then((response) => response.json())
    .then((data)=> callback(data))
    .catch((error) =>console.error("Lỗi:" , error));
}
// sửa data
function edit(url,id,object) {
    fetch(`${url}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(object),
      })
      .then(response => response.json())
      .then(data => {
      })
      .catch(error => console.error('Lỗi khi cập nhật đơn hàng', error));
}
