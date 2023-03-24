//This JavaScript file is for the filter functionality between the filter dropdown menu and for the keywords in the genre list/array (on products.html page)

// This variable is assigned the value of the genre filter dropdown menu element.
const genreFilter = document.getElementById("genre-filter");

// This variable is assigned a list of all the elements with the class "card".
const productCards = document.querySelectorAll(".card");

// This event listener listens for changes in the value of the genre filter dropdown menu.
genreFilter.addEventListener("change", () => {
  // This forEach loop iterates through all the elements with the class "card" and performs the filter.
  productCards.forEach((card) => {
    // This code extracts the genre(s) of the current card element, converts them to lowercase, trims white spaces, and splits them into an array.
    const genres = card
      .querySelector(".genre")
      .textContent.toLowerCase()
      .trim()
      .slice("genre:".length)
      .split(", ");
    // This variable is assigned the lowercase value of the selected option in the genre filter dropdown menu.
    const selectedGenre = genreFilter.value.toLowerCase();

    // This code checks if the genres array of the current card includes the selectedGenre.
    // If it does, the card is displayed by setting its display property to "block".
    // If not, the card is hidden by setting its display property to "none".
    if (genres.includes(selectedGenre)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
