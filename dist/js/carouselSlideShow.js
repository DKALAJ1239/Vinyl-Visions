//This JavaScript file is for the carouselSlide functionality (on index.html page).

// This variable sets the index of the current slide to 1 and calls the showSlides function to display the first slide.
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
// This function adds or subtracts the value of n to the slideIndex variable and calls the showSlides function to display the next or previous slide.
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
// This function sets the slideIndex variable to the value of n and calls the showSlides function to display the corresponding slide.
function currentSlide(n) {
  showSlides((slideIndex = n));
}

// This function displays the slide with the index value of n and hides all other slides.
// It also updates the "active" class of the dot corresponding to the current slide.
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // If the value of n exceeds the number of slides, the slideIndex is set to 1 to start from the beginning.
  if (n > slides.length) {
    slideIndex = 1;
  }

  // If the value of n is less than 1, the slideIndex is set to the last slide.
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Loop through all the slides and set their display property to "none" to hide them.
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Loop through all the dots and remove the "active" class.
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Display the slide with the current slideIndex value and add the "active" class to the corresponding dot.
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
