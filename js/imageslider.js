var i=0;
var image = [];
var time = 2500;


image[0] = "icon/slide/1.png";
image[1] = "icon/slide/2.png";
image[2] = "icon/slide/3.png";
image[3] = "icon/slide/4.png";
image[4] = "icon/slide/5.png";
image[5] = "icon/slide/6.png";
image[6] = "icon/slide/7.png";
image[7] = "icon/slide/8.png";
image[8] = "icon/slide/9.png";
image[9] = "icon/slide/10.png";
image[10] = "icon/slide/11.png";


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
