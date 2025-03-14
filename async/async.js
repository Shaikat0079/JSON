const handleUser = ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.jon())
    .then(data=>console.log(data))
    .catch(error=>console.log('error dhorse',error))
}

handleUser()

const handleUser2 = async()=> {
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
    // console.log(response)
    const data = await res.json()
    console.log(data)
    }
    catch{
        console.log("hello!")
    }
}

handleUser2()