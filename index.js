//Get a random image from Unsplash and set it as the background
// URL: https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature
// (Change the "query" at the end to preferred theme)
// Change the body's backgroundImage to: `url(<insert the URL of the image from the API here>)`
const author = document.getElementById("author")

fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=textures-patterns")
    .then(response => response.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.full})`
        //display author's name
        author.textContent = `Photo by: ${data.user.name}`
    })
    .catch(err => {
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1613679169453-ef00f3730ed4?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjcyNzM2NjF8&ixlib=rb-4.0.3&q=85)`
        author.textContent = `Photo by: Wolfgang Hasselmann`
    })

