const handleLoadUser = ()=>{
    fetch('https://jsonplaceholder.typicode.com/users').
    then(res=>res.json()).
    then(data=>displayUser(data))
}

const displayUser = (users)=>{
    for (const user of users) {
        console.log(user)
    }
}