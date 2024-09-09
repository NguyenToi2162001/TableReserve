const urlTable = "http://localhost:3000/tables";

function getAll (url, callback){
    fetch(url)
    .then((response) => response.json())
    .then((data)=> callback(data))
    .catch((error) =>console.error("Lỗi:" , error));
}