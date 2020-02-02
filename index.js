    
// let getPosts = fetch('https://instaclonefji.herokuapp.com/posts');

// getPosts.then(posts => posts.json())
// .then((posts) => {
//     let output = document.querySelector('#output');
//     for(let post of posts) {
//         // output.innerHTML += `<li>${post.place}</li>`
        
//     }
// })




const colors = ['red', 'green']
console.log(colors)
colors.push('Black');
colors.unshift('Black')

for(let i = 0; i < colors.length; i++) {
    
    console.log(colors[i])
}


