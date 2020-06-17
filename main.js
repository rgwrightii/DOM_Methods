// HTML button in the body
// HTML main with IMG and ANCHOR
const mainElement = document.querySelector("main")
const button = document.createElement("BUTTON")
const main = document.createElement("main")
const section = document.createElement("section")
const body = document.querySelector("body")

document.body.appendChild(button)
button.append("remove")
button.addEventListener("click", function(){
    console.log("button")
    main.remove(button)
})

let inputBox = document.createElement("input")
inputBox.append("input")
body.append(inputBox)

let imgElement = document.createElement("img")
imgElement.src = "https://specials-images.forbesimg.com/imageserve/1173775779/960x0.jpg?fit=scale"
imgElement.append("img")
body.append(imgElement)

let anchorElement = document.createElement("a")
anchorElement.href = "https://www.forbes.com/sites/alistaircharlton/2020/06/15/lamborghini-explains-why-it-will-no-longer-attend-motor-shows/#5b4681d538bb"
anchorElement.append("a")
body.append(anchorElement)

