const modalOverlay = document.querySelector('.modal-overlay');

const pratos = document.querySelectorAll('.prato');

for (let prato of pratos){
    prato.addEventListener("click", function(){
        const id = prato.getAttribute("id")
        const img = prato.querySelector(`#${id} img`).getAttribute("src")
        const title = prato.querySelector(`#${id} .title`).childNodes[0].nodeValue
        const chef = prato.querySelector(`#${id} p`).childNodes[0].nodeValue

        console.log(title)
        console.log(chef)
        const chefModal = modalOverlay.querySelector(".chefModal")
        const titleModal = modalOverlay.querySelector(".titleModal")        
        
 
        modalOverlay.classList.add('active');
        modalOverlay.querySelector("img").src=`${img}`
        titleModal.innerHTML=title
        chefModal.innerHTML=chef 

    });
}

document.querySelector('.modal-close').addEventListener("click", function(){
    modalOverlay.classList.remove("active");
});
