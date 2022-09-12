var i=0;
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


function changeImg() {
    document.slide.src = image[i]
    if(i < image.length -1) {
        i++;
    } else {
        i=0;
    }
    setTimeout("changeImg()" , time)
}
window.onload = changeImg;
