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