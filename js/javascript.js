// control open / close btn
const Header_Container = document.querySelector(".header-container");
const Open_Bar = document.getElementById("open-bar");
const Close_Bar = document.getElementById("close-bar");

Open_Bar.addEventListener("click" ,() => {
    Header_Container.classList.add("active");
});

Close_Bar.addEventListener("click",() => {
    Header_Container.classList.remove("active");
})

//loop text and image//

var i = 0;
var image = [];
var time = 2500;

image[0] = "icon/slidephoto/photo1.png";
image[1] = "icon/slidephoto/photo2.png";
image[2] = "icon/slidephoto/photo3.png";
image[3] = "icon/slidephoto/photo4.png";
image[4] = "icon/slidephoto/photo5.png";
image[5] = "icon/slidephoto/photo6.png";
image[6] = "icon/slidephoto/photo7.png";
image[7] = "icon/slidephoto/photo8.png";
image[8] = "icon/slidephoto/photo9.png";
image[8] = "icon/slidephoto/photo10.png";
image[8] = "icon/slidephoto/photo11.png";

function changeImg() {
    document.slide.src = image[i]
    if(i < image.length -1) {
        i++;
    }
    else {
        i = 0 ;
    }
    setTimeout("changeImg()" , time)
}
window.onload = changeImg

//text looping...//
const typing = new Typed (".slide-text",{
    strings:["....","Lsnp Unlocker Tool is the Best Service Tool",
    "Supported Brand Model","Supported Brand Model Oppo",
    "Supported Brand Model Vivo ","Supported Brand Model Huawei",
    "Supported Brand Model Xiaomi","Supported Brand Model Meizu",
    "Supported Brand Model Poco" ,"Supported Brand Model Nokia",
"Loading..."],
    typeSpeed : 250 ,
    backSpeed : 250 ,
    loop : true,
});

// Load More Button Control
let LoadMoreButton = document.querySelector('#load-more');
let currentItem = 4;

LoadMoreButton.onclick = () => {
    let boxes = [...document.querySelectorAll('.driver-info .box-container .box')];
    for(var i = currentItem; i < currentItem+4; i++){
        boxes[i].style.display = 'inline-block';
    }
    currentItem += 4

    if(currentItem >= boxes.length) {
        LoadMoreButton.style.display = 'none';
    }
}

