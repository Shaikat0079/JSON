// fetch('https://jsonplaceholder.typicode.com/users').
// then(res=>res.json())
// .then(data=>console.log(data[0]))

const handleLoadUser = () =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>console.log(data[0]))
}