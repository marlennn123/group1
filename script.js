const open = document.querySelector('.click')
const close = document.querySelector('.click1')
const container = document.querySelector('.container')

open.addEventListener("click",()=>{
 container.style.display = "block"
 container.style.display = "flex"
 container.style.alignItems = "center"

})
close.addEventListener('click',()=>{
 container.style.display = "none"

})