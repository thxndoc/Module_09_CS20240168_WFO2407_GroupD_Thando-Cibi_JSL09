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
        author.textContent = `By: ${data.user.name}`
    })

