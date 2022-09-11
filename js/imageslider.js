var i=0;
var image = [];
var time = 2500;


image[0] = "icon/photo/1.png";
image[1] = "icon/photo/2.png";
image[2] = "icon/photo/3.png";
image[3] = "icon/photo/4.png";
image[4] = "icon/photo/5.png";
image[5] = "icon/photo/6.png";
image[6] = "icon/photo/7.png";
image[7] = "icon/photo/8.png";
image[8] = "icon/photo/9.png";
image[9] = "icon/photo/10.png";
image[10] = "icon/photo/11.png";


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
