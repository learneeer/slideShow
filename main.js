var img_container = '';
var nav_container = '';

for (i = 1; i < 5; i++) {
    img_container += '<div class="slide delay"><img src="img/img' + i + '.jpg" /></div>';
    nav_container += '<span class="select" onclick="currentSlide(' + i + ')"></span>';
}
img_container += '<a class="arrow prev" onclick="plusSlide(-1)">&#10094</a><a class = "arrow next" onclick = "plusSlide(1)" > &#10095</a>';

document.getElementsByClassName("slideshow-container")[0].innerHTML = img_container;
document.getElementsByClassName("nav")[0].innerHTML = nav_container;






var slideIndex = 1;
showSlide(slideIndex);


function plusSlide(n) {
    showSlide(slideIndex += n);
}


function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    var slides = document.getElementsByClassName("slide");
    var my_select = document.getElementsByClassName("select");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (var i = 0; i < my_select.length; i++) {
        my_select[i].className = my_select[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    my_select[slideIndex - 1].className += " active";
}