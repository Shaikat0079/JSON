const handlePost = ()=>{
    fetch("https://jsonplaceholder.typicode.com/posts").
    then(res => res.json()).
    then(data=>displayPost(data))
}

const displayPost = (posts) =>{
    // console.log(posts)
    const postContainer = document.getElementById('postContainer');
    for (const post of posts) {
        // console.log(post.title)
        const div = document.createElement('div');
        div.classList.add("card")
        div.innerHTML = 
        `
        <h1>${post.title}</h1>
        <p>${post.body}</p>
        <button>Details</button>
        
        `;
        postContainer.appendChild(div)
    }
}

handlePost()