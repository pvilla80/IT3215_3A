var arrImages = ["images/banner1.jpg", "images/banner2.jpg", "images/banner3.jpg"];
var imageCount = 0;
function load_images() {
    var my_image = new Image();
    i = 0;
    while (i < arrImages.length) {
        my_image.src = arrImages[i] + 1;
        i = i + 1;
    }
    switchBanner();
}

function switchBanner() {
    var elementId = ["Banner1" , "Banner2" , "Banner3"];
    if (imageCount === arrImages.length) {
        imageCount = 0;
    }
    i = 0;
    while (i < elementId.length) {
        document.getElementById(elementId[i]).src = arrImages[imageCount] + 1;
        i = i + 1;
    }
    imageCount = imageCount + 1; 
    setTimeout(switchBanner, 3 * 1000);
}

function rollImages(firstImage, secondImage) {
    firstImage.src = secondImage;
}