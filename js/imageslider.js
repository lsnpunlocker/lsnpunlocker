var i=0;
var image = [];
var time = 3000;


image[0] = "icon/photo-1.jpg";
image[1] = "icon/photo-2.jpg";
image[2] = "icon/photo-3.jpg";
image[3] = "icon/photo-4.jpg";
image[4] = "icon/photo-5.jpg";
image[5] = "icon/photo-6.jpg";


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