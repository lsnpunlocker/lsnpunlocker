let gird = document.querySelector(".gird");
let list = document.querySelector(".list");
let Procucts_Container = document.querySelector(".products-container");
let mic = document.getElementById("voice-search");
let search = document.querySelector("input");
let Products = document.querySelectorAll(".product");

list.onclick =() => {
    Procucts_Container.classList.add("list-display");
    list.classList.add("active");
    gird.classList.remove("active")
}
gird.onclick =() => {
    Procucts_Container.classList.remove("list-display");
    list.classList.remove("active");
    gird.classList.add("active");
}
search.onkeyup =() => {
    const x = search.value.toLowerCase();
    showItem(x);
}
function showItem(x) {
    for(let list of Products) {
        let product = list.children[1].children[0].innerHTML;
        let name = product.toLowerCase();
        if (name.indexOf(x) > -1) {
            list.style.display = "";
        }
        else{
            list.style.display = "none";
        }
}
}
mic.onclick = () => {
    mic.classList.add("record");
    let recognization = new webkitSpeechRecognition;
    recognization.lang = "en-Us";
    recognization.start();
    recognization.onresult = e => {
        const m = search.value = e.results[0][0].transcript;
        showItem(m);
        mic.classList.remove("record");
    }
}
let previewContainer = document.querySelector(".products-preview");
let previewBox = previewContainer.querySelectorAll(".preview");
document.querySelectorAll('.products-container .product').forEach(product => {
    product.onclick = () => {
       previewContainer.style.display = "flex";
       let name= product.getAttribute('data-name');
       previewBox.forEach(preview => {
         let target = preview.getAttribute('data-target');
         if(name == target) {
            preview.classList.add('active');
         }
       });
    }
});
previewBox.forEach(close => {
    close.querySelector('.fa-times').onclick = () => {
        close.classList.remove('active');
        previewContainer.style.display = "none";
    }
})
