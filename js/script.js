const button = document.querySelectorAll("#image-picker li")
const img = document.querySelector("#product-img")

button.forEach((btn) =>{
    btn.addEventListener("click",(e) =>{
        button.forEach((btn) => {
        btn.querySelector(".color").classList.remove("selected")
    });
    const btn = e.target
    const id = btn.getAttribute("id")
    btn.querySelector(".color").classList.add("selected")
    img.classList.add("changing")
    img.setAttribute("src", `\img/iphone_${id}.jpg`)

    setTimeout(() =>{
       img.classList.toggle("changing")  
    },400)
    })
    
})