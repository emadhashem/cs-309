const curImg = document.getElementById("curImg")

function showImgInCurImg(src = "") {
    const newImg = document.createElement("img")
    newImg.id = "newImg"
    newImg.src = src
    newImg.width = "80"
    newImg.height = "100"
    curImg.appendChild(newImg)
    
}
function deleteImgInCurImg() {
    const newImg = document.getElementById("newImg")
    newImg.remove()
}

for(let i = 0; i < 3; i++) {
    const imgPreview = document.getElementById("preview" + i)
    imgPreview.addEventListener("mouseover", () => {
        showImgInCurImg(imgPreview.src)
    })
    
    imgPreview.addEventListener("mouseleave", () => {
        deleteImgInCurImg()
    })
}
const curAlt = document.getElementById('curAlt')

function showTheAlt(element, idx = "") {
    const pAlt = document.getElementById('alt__' + idx)
    pAlt.innerText = element.alt
    pAlt.style.position = "absolute"
    pAlt.style.backgroundColor = "blue"
    pAlt.style.height = "50px"
    pAlt.style.bottom = "0px"
    pAlt.style.left = "0px"
    pAlt.style.color = "white"
    pAlt.style.maxWidth = "70px"
    pAlt.style.padding = "5px"
    pAlt.style.display = "inline"
}

function removeTheAlt(imgPreview, idx = "") {
    const pAlt = document.getElementById('alt__' + idx)
    pAlt.innerText = ""
    pAlt.style.display = "none"
}

for(let i = 0; i < 3; i++) {
    const imgPreview = document.getElementById("preview" + i + "_alt")
    imgPreview.addEventListener("mouseover", () => {
        showTheAlt(imgPreview, i)
    })
    
    imgPreview.addEventListener("mouseleave", () => {
        removeTheAlt(imgPreview, i)
    })
}


