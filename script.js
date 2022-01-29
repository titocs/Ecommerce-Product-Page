/* trolly icon in top header */
const trollyIcon = document.querySelector(".trolly-icon");
const cartDesc = document.querySelector(".cart-description");
const empty = document.querySelector(".empty");

/* close and open menu mobile */
const menu = document.querySelector("header > svg");
const overlay = document.querySelector(".overlay");
const closeButton = document.querySelector(".mobile-menu > svg");

/* next button and previous button for changing mobile image */
const nextButton = document.querySelector(".button-next");
const prevButton = document.querySelector(".button-previous");

/* plus minus counter */
const plus = document.querySelector("#plus-icon");
const minus = document.querySelector("#minus-icon");
const count = document.querySelector(".count-value > p");

/* Counter trolly & cart button */
const counterIcon = document.querySelector(".counter");
const counterTrolly = document.querySelector(".counter > p");
const cartButton = document.querySelector(".cart-button");

/* navigator hover */
const nav = document.querySelectorAll("nav a");

/* display filled trolly */
const filled = document.querySelector(".filled-cart");

/* changing image by click thumbnail */
const thumbnail = document.querySelectorAll(".image-thumbnail");
const mainImage = document.querySelector(".image-container > img");
const childImage = document.querySelectorAll(".image-thumbnail > img");

/* Button overlay desktop */
const closeOverlay = document.querySelector(".lightbox > svg");
const overlayDesktop = document.querySelector(".overlay-desktop");
const nextButtonDesktop = document.querySelector(".button-next-desktop");
const prevButtonDesktop = document.querySelector(".button-prev-desktop");

/* thumbnail Overlay Desktop */
const thumbnailLightbox = document.querySelectorAll(".image-thumbnail-lightbox");
const mainImageLightbox = document.querySelector(".main-image-lightbox > img");
const childLightboxThumbnail = document.querySelectorAll(".image-thumbnail-lightbox > img");

/* buy product */
const jumlah = document.querySelector(".caption-product em");
const finalResult = document.querySelector(".caption-product span");

/* delete button */
const productBuy = document.querySelector(".product-buy");

/* mobile menu */
menu.addEventListener("click", function(){
    overlay.classList.toggle("displayNone");
})

closeButton.addEventListener("click", function(){
    overlay.classList.toggle("displayNone");
})

/* next and previous button */
let slide = 2;
nextButton.addEventListener("click", function(){
    mainImage.setAttribute("src", "images/image-product-" + slide + ".jpg");
    if(slide === 4){
        nextButton.style.opacity = "0.5";
        nextButton.disabled = true;
    }
    else{
        slide += 1;
        nextButton.style.opacity = "1";
    }
})

prevButton.addEventListener("click", function(){
    mainImage.setAttribute("src", "images/image-product-" + slide + ".jpg");
    if(slide === 1){
        prevButton.style.opacity = "0.5";
        prevButton.disabled = true;
    }
    else{
        slide -= 1;
        prevButton.style.opacity = "1";
    }
})

/* Event for Overlay Desktop */
closeOverlay.addEventListener("click", function(){
    overlayDesktop.classList.toggle("displayNone");
})

mainImage.addEventListener("click", function(){
    overlayDesktop.classList.toggle("displayNone");
})

/* event plus minus counter */
let clickValue = 0;
plus.addEventListener("click", function(){
    clickValue += 1;
    count.innerHTML = clickValue;
})

minus.addEventListener("click", function(){
    clickValue -= 1;
    if(clickValue <= 0){
        clickValue = 0;
    }
    count.innerHTML = clickValue;
})

/* Event for cart button */
let temp = 0;
cartButton.addEventListener("click", function(){
    temp += clickValue;
    counterTrolly.innerHTML = temp;
    if(clickValue <= 0){
        counterIcon.style.visibility = "hidden";
    }
    else{
        counterIcon.style.visibility = "visible";
        // clickValue = 0;
        // count.innerHTML = clickValue;
    }
})

/* event for displaying cart */
trollyIcon.addEventListener("click", function(){
    if(temp <= 0){
        cartDesc.classList.toggle("displayNone");
        empty.classList.toggle("displayNone");
        filled.classList.add("displayNone");
    }
    else{
        cartDesc.classList.toggle("displayNone");
        filled.innerHTML = `
        <div class="product-buy">
            <img class="image-buy" src="images/image-product-1-thumbnail.jpg" alt="">
            <div class="caption-product">
                <h1>Autumn Limited Edition...</h1>
                <p>$125.00 x <em>${temp}</em> <span>$${(temp * 125) + ".00"}</span></p>
            </div>
            <img class="tombol-trash" src="images/icon-delete.svg" alt="trash">
        </div>
        <div class="fix-button">
            <h1>Checkout</h1>
        </div>`
        filled.classList.remove("displayNone");
    }
});

/* event binding if the trash button  */
document.addEventListener("click", function(e){
    if(e.target.classList.contains("tombol-trash")){
        temp = 0;
        counterIcon.style.visibility = "hidden";
    }
})

/* hide all menus if clicked outside menus */
document.addEventListener("click", function(){
    cartDesc.classList.add("displayNone");
    empty.classList.add("displayNone");
    // filled.classList.add("displayNone");
    // overlayDesktop.classList.add("displayNone");
    overlay.classList.add("displayNone");
})

trollyIcon.addEventListener("click", function(e){
    e.stopPropagation();
})

closeOverlay.addEventListener("click", function(e){
    e.stopPropagation();
})

mainImage.addEventListener("click", function(e){
    e.stopPropagation();
})

menu.addEventListener("click", function(e){
    e.stopPropagation();
})

/* Changing main image by click thumbnail */
for(let i=0; i<thumbnail.length; i++){
    thumbnail[i].addEventListener("click", function(){
        thumbnail.forEach(function(thumb){
            if(thumb.classList.contains("imageThumbnailHoverDiv")){
                thumb.classList.remove("imageThumbnailHoverDiv");
            }
        });
        childImage.forEach(function(child){
            if(child.classList.contains("imageThumbnailHover")){
                child.classList.remove("imageThumbnailHover");
            }
        });
        thumbnail[i].classList.add("imageThumbnailHoverDiv");
        childImage[i].classList.add("imageThumbnailHover");
        mainImage.setAttribute("src", "images/image-product-" + (i + 1) + ".jpg");
    })
}

/* Event for Lightbox Desktop */
let desktopSlide = 2;
nextButtonDesktop.addEventListener("click", function(){
    mainImageLightbox.setAttribute("src", "images/image-product-" + desktopSlide + ".jpg");
    thumbnailLightbox[desktopSlide-1].classList.add("thumbnailLightboxDiv");
    childLightboxThumbnail[desktopSlide-1].classList.add("thumbnailLightboxChild");

    thumbnailLightbox[desktopSlide-2].classList.remove("thumbnailLightboxDiv");
    childLightboxThumbnail[desktopSlide-2].classList.remove("thumbnailLightboxChild");
    if(desktopSlide === 4){
        nextButtonDesktop.style.opacity = "0.5";
        nextButtonDesktop.disabled = true;
    }
    else{
        desktopSlide += 1;
        nextButtonDesktop.style.opacity = "1";
    }
})

prevButtonDesktop.addEventListener("click", function(){
    mainImageLightbox.setAttribute("src", "images/image-product-" + (desktopSlide - 1) + ".jpg");
    thumbnailLightbox[desktopSlide-1].classList.remove("thumbnailLightboxDiv");
    childLightboxThumbnail[desktopSlide-1].classList.remove("thumbnailLightboxChild");

    thumbnailLightbox[desktopSlide-2].classList.add("thumbnailLightboxDiv");
    childLightboxThumbnail[desktopSlide-2].classList.add("thumbnailLightboxChild");
    console.log(desktopSlide);
    if(desktopSlide === 2){
        prevButtonDesktop.style.opacity = "0.5";
        prevButtonDesktop.disabled = true;
    }
    else{
        desktopSlide -= 1;
        prevButtonDesktop.style.opacity = "1";
    }
})
