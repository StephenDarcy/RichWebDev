//array of pink images
let pinkImages = [
    "https://www.ilovewallpaper.ie/images/new-studio-romantic-flower-floral-wallpaper-pink-purple-p7421-25226_image.jpg",
    "http://justfunfacts.com/wp-content/uploads/2021/03/pink.jpg",
    "https://i.pinimg.com/originals/4a/bf/57/4abf57afe5408d944b631f285113697e.jpg",
    "https://media1.popsugar-assets.com/files/thumbor/dh-qDG96lqrCYIOUsMMGluOGNWc/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2017/07/04/412/n/38922834/fe5470b83ca235ce_Peach/i/Baby-Pink.JPG",
];

//reverse through array of images
//getting random image from the array we created before (we use math.floor and math.random to grab a random index in the array)
const imgs = document.getElementsByTagName("img");
for (let i = 0; i < imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * pinkImages.length);
    imgs[i].src = pinkImages[randomImg];
}

//do the same for p elements
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++) {
    p[i].innerText = "This website should be pink!";
}

//changing all divs to pink border and background
const div = document.getElementsByTagName("div");
for (let i = 0; i < div.length; i++) {
    div[i].style.borderColor = "coral";
    div[i].style.backgroundColor = "pink";
}

//changing body background colour to pink
document.body.style.backgroundColor = "pink";