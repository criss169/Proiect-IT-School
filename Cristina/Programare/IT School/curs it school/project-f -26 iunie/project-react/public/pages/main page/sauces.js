function showRecipe(recipe) {
  var overlay = document.getElementById("recipe-overlay");
  var title = document.getElementById("recipe-title");
  var description = document.getElementById("recipe-description");
  var ingredients = document.getElementById("recipe-ingredients");

  if (recipe === "homemade-blue-cheese-dressing") {
    title.textContent = "Homemade Blue Cheese Dressing";
    description.textContent = "Creamy and tangy blue cheese dressing.";
    ingredients.innerHTML =
      "<li>1 cup mayonnaise</li><li>1/4 cup sour cream</li><li>2 tablespoons buttermilk</li><li>2 tablespoons crumbled blue cheese</li><li>1 tablespoon lemon juice</li><li>1/2 teaspoon garlic powder</li><li>Salt and pepper to taste</li>";
  } else if (recipe === "authentic-caesar-dressing") {
    title.textContent = "Authentic Caesar Dressing";
    description.textContent = "Classic and flavorful Caesar dressing.";
    ingredients.innerHTML =
      "<li>1/2 cup mayonnaise</li><li>1/4 cup grated Parmesan cheese</li><li>2 tablespoons lemon juice</li><li>2 teaspoons Dijon mustard</li><li>2 cloves garlic, minced</li><li>1/2 teaspoon Worcestershire sauce</li><li>Salt and pepper to taste</li>";
  } else if (recipe === "homemade-BBQ-sauce") {
    title.textContent = "Homemade BBQ Sauce";
    description.textContent = "Sweet and tangy homemade BBQ sauce.";
    ingredients.innerHTML =
      "<li>1 cup ketchup</li><li>1/4 cup brown sugar</li><li>2 tablespoons apple cider vinegar</li><li>2 tablespoons Worcestershire sauce</li><li>1 tablespoon Dijon mustard</li><li>1 teaspoon garlic powder</li><li>1/2 teaspoon onion powder</li><li>1/2 teaspoon smoked paprika</li><li>Salt and pepper to taste</li>";
  } else if (recipe === "homemade-mayonnaise") {
    title.textContent = "Homemade Mayonnaise";
    description.textContent = "Creamy and rich homemade mayonnaise.";
    ingredients.innerHTML =
      "<li>1 large egg yolk</li><li>1 tablespoon Dijon mustard</li><li>1 cup vegetable oil</li><li>1 tablespoon lemon juice</li><li>1 teaspoon white vinegar</li><li>1/2 teaspoon salt</li><li>Pinch of sugar</li>";
  } else if (recipe === "homemade-cheese-sauce") {
    title.textContent = "Homemade Cheese Sauce";
    description.textContent = "Smooth and cheesy homemade cheese sauce.";
    ingredients.innerHTML =
      "<li>2 tablespoons unsalted butter</li><li>2 tablespoons all-purpose flour</li><li>1 cup milk</li><li>2 cups shredded cheddar cheese</li><li>1/2 teaspoon garlic powder</li><li>1/4 teaspoon mustard powder</li><li>Salt and pepper to taste</li>";
  } else if (recipe === "homemade-tzatziki-sauce") {
    title.textContent = "Homemade Tzatziki Sauce";
    description.textContent = "Cool and refreshing homemade tzatziki sauce.";
    ingredients.innerHTML =
      "<li>1 cup Greek yogurt</li><li>1/2 cup grated cucumber</li><li>1 clove garlic, minced</li><li>1 tablespoon lemon juice</li><li>1 tablespoon chopped fresh dill</li><li>1 tablespoon extra virgin olive oil</li><li>Salt and pepper to taste</li>";
  } else if (recipe === "strawberry-cream-cheese-fruit-dip") {
    title.textContent = "Strawberry Cream Cheese Fruit Dip";
    description.textContent = "Creamy and sweet dip for fresh fruits.";
    ingredients.innerHTML =
      "<li>8 ounces cream cheese, softened</li><li>1/2 cup powdered sugar</li><li>1 teaspoon vanilla extract</li><li>1/2 cup strawberry preserves</li>";
  } else if (recipe === "fresh-fruit-salsa-dip") {
    title.textContent = "Fresh Fruit Salsa Dip";
    description.textContent = "Colorful and refreshing dip with mixed fruits.";
    ingredients.innerHTML =
      "<li>1 cup diced strawberries</li><li>1 cup diced pineapple</li><li>1 cup diced mango</li><li>1/4 cup diced red onion</li><li>1/4 cup chopped fresh cilantro</li><li>1 jalapeno pepper, seeded and minced</li><li>Juice of 1 lime</li><li>Salt to taste</li>";
  } else if (recipe === "original-guacamole") {
    title.textContent = "Original Guacamole";
    description.textContent = "Classic and flavorful guacamole.";
    ingredients.innerHTML =
      "<li>2 ripe avocados</li><li>1/4 cup diced red onion</li><li>1/4 cup chopped fresh cilantro</li><li>1 jalapeno pepper, seeded and minced</li><li>Juice of 1 lime</li><li>1/2 teaspoon garlic powder</li><li>Salt and pepper to taste</li>";
  } else if (recipe === "corn-guacamole") {
    title.textContent = "Corn Guacamole";
    description.textContent = "Guacamole with sweet corn for added crunch.";
    ingredients.innerHTML =
      "<li>2 ripe avocados</li><li>1/4 cup diced red onion</li><li>1/4 cup chopped fresh cilantro</li><li>1 jalapeno pepper, seeded and minced</li><li>Juice of 1 lime</li><li>1/2 teaspoon garlic powder</li><li>1/2 cup cooked corn kernels</li><li>Salt and pepper to taste</li>";
  }

  overlay.classList.add("active");
}

function hideRecipe() {
  var overlay = document.getElementById("recipe-overlay");
  overlay.classList.remove("active");
}

// Show more BTN
var showMoreButton = document.getElementById("showMoreButton");
var message = document.getElementById("message");

showMoreButton.addEventListener("click", function () {
  if (message.classList.contains("hidden")) {
    message.classList.remove("hidden");
  } else {
    message.classList.add("hidden");
  }
});

// Review section
var ratingValue; // Variable to store the selected rating

// Function to set the rating value based on the selected star
function setRating(value) {
  ratingValue = value;

  // Remove active class from all stars
  var stars = document.querySelectorAll("#ratingStars label");
  stars.forEach(function (star) {
    star.classList.remove("active");
  });

  // Add active class to stars up to the selected star
  for (var i = 0; i < value; i++) {
    stars[i].classList.add("active");
  }
}

document.getElementById("reviewForm").addEventListener("submit", function (e) {
  e.preventDefault();

  var name = document.getElementById("name").value;
  var comments = document.getElementById("comments").value;
  var rating = document.querySelector('input[name="rating"]:checked').value;

  var reviewPost = document.createElement("div");
  reviewPost.innerHTML =
    "<h3>" +
    name +
    "</h3>" +
    "<p>Rating: " +
    rating +
    "/5</p>" +
    "<p>" +
    comments +
    "</p>";

  document.getElementById("reviewPosts").appendChild(reviewPost);

  // Reset the form
  document.getElementById("name").value = "";
  document.getElementById("comments").value = "";
  document.querySelector('input[name="rating"]:checked').checked = false;
});
