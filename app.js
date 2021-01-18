console.log("loaded js")

//Changes the contents of the h1 to "HACKED!"

let h1 = document.querySelector("h1")
h1.textContent = "HACKED! BITCH!"

// Change the href of all the links to https://thebadguys.com


function changeLinks() {
    let links = document.querySelectorAll('a')
    links.forEach((link) => {
        link.href = "https://thebadguys.com"
    })
}
changeLinks()

// Adds this image to the beginning of the body: 
// https://s3.amazonaws.com/ceblog/wp-content/uploads/2016/04/22110359/youve-been-hacked.png
let image = document.createElement("img")
image.src = "https://s3.amazonaws.com/ceblog/wp-content/uploads/2016/04/22110359/youve-been-hacked.png"
document.body.prepend(image)

// Deletes the paragraph tags that are direct children of <main>
function removeMainParagraphs(){
    let main = document.querySelector("main")
    let children = main.childNodes
    children.forEach((child) => {
        if (child.tagName == 'P') {
            main.removeChild(child)
        }
    })
}
removeMainParagraphs()

// Reset the days counter to 0
let span = document.querySelector("span")
span.textContent = 0

// Adds a paragraph tag to the end of the document that says "Your account has been compromised."
let p = document.createElement("p")
p.textContent = "Your account has been compromised."
document.body.appendChild(p)