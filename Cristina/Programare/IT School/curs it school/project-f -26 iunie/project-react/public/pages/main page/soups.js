function showRecipe(recipe) {
  var overlay = document.getElementById("recipe-overlay");
  var title = document.getElementById("recipe-title");
  var description = document.getElementById("recipe-description");
  var ingredients = document.getElementById("recipe-ingredients");

  if (recipe === "seafood-soup") {
    title.textContent = "Seafood Soup";
    description.textContent = "Delicious and hearty seafood soup.";
    ingredients.innerHTML =
      "<li>1 lb mixed seafood (such as shrimp, mussels, and fish)</li><li>1 onion, diced</li><li>2 cloves garlic, minced</li><li>1 carrot, diced</li><li>1 celery stalk, diced</li><li>2 cups fish or vegetable broth</li><li>1 cup diced tomatoes</li><li>1/2 cup heavy cream</li><li>2 tablespoons butter</li><li>Salt and pepper to taste</li><li>Fresh parsley for garnish</li>";
  } else if (recipe === "tomato-basil-cream-soup") {
    title.textContent = "Tomato Basil Cream Soup";
    description.textContent =
      "Rich and creamy tomato basil soup with a hint of fresh basil.";
    ingredients.innerHTML =
      "<li>2 lbs ripe tomatoes</li><li>1 onion, diced</li><li>2 cloves garlic, minced</li><li>1/4 cup fresh basil leaves</li><li>2 cups vegetable broth</li><li>1 cup heavy cream</li><li>2 tablespoons olive oil</li><li>Salt and pepper to taste</li><li>Croutons for serving</li>";
  } else if (recipe === "beef-tomato-soup") {
    title.textContent = "Beef Tomato Soup";
    description.textContent = "Hearty tomato soup with tender beef chunks.";
    ingredients.innerHTML =
      "<li>1 lb beef stew meat, cubed</li><li>1 onion, diced</li><li>2 cloves garlic, minced</li><li>2 carrots, diced</li><li>2 celery stalks, diced</li><li>2 cups beef broth</li><li>1 cup crushed tomatoes</li><li>1 tablespoon tomato paste</li><li>1 teaspoon dried thyme</li><li>Salt and pepper to taste</li><li>Fresh parsley for garnish</li>";
  } else if (recipe === "mushroom-cream-soup") {
    title.textContent = "Mushroom Cream Soup";
    description.textContent =
      "Creamy mushroom soup with a rich and earthy flavor.";
    ingredients.innerHTML =
      "<li>1 lb mushrooms, sliced</li><li>1 onion, diced</li><li>2 cloves garlic, minced</li><li>4 cups vegetable broth</li><li>1 cup heavy cream</li><li>2 tablespoons butter</li><li>1 tablespoon all-purpose flour</li><li>1 teaspoon dried thyme</li><li>Salt and pepper to taste</li><li>Chopped chives for garnish</li>";
  } else if (recipe === "broccoli-cheddar-cream-soup") {
    title.textContent = "Broccoli Cheddar Cream Soup";
    description.textContent =
      "Cheesy and creamy broccoli soup with cheddar cheese.";
    ingredients.innerHTML =
      "<li>2 cups broccoli florets</li><li>1 onion, diced</li><li>2 cloves garlic, minced</li><li>4 cups vegetable broth</li><li>1 cup shredded cheddar cheese</li><li>1 cup heavy cream</li><li>2 tablespoons butter</li><li>Salt and pepper to taste</li><li>Croutons for serving</li>";
  } else if (recipe === "vegetables-cream-soup") {
    title.textContent = "Vegetables Cream Soup";
    description.textContent = "Creamy and flavorful vegetable soup.";
    ingredients.innerHTML =
      "<li>2 carrots, diced</li><li>2 celery stalks, diced</li><li>1 onion, diced</li><li>2 cloves garlic, minced</li><li>4 cups vegetable broth</li><li>1 cup heavy cream</li><li>2 tablespoons butter</li><li>Salt and pepper to taste</li><li>Fresh herbs for garnish</li>";
  } else if (recipe === "green-vegetables-cream-soup") {
    title.textContent = "Green Vegetables Cream Soup";
    description.textContent =
      "Creamy soup packed with nutritious green vegetables.";
    ingredients.innerHTML =
      "<li>2 cups green peas</li><li>1 cup spinach leaves</li><li>1 zucchini, diced</li><li>1 onion, diced</li><li>2 cloves garlic, minced</li><li>4 cups vegetable broth</li><li>1 cup heavy cream</li><li>2 tablespoons butter</li><li>Salt and pepper to taste</li><li>Chopped parsley for garnish</li>";
  } else if (recipe === "cream-soup-sour-cream-aromatic-herbs") {
    title.textContent = "Cream Soup with Sour Cream and Aromatic Herbs";
    description.textContent =
      "Creamy soup flavored with sour cream and aromatic herbs.";
    ingredients.innerHTML =
      "<li>2 potatoes, peeled and diced</li><li>1 onion, diced</li><li>2 cloves garlic, minced</li><li>4 cups vegetable broth</li><li>1 cup sour cream</li><li>2 tablespoons butter</li><li>1 teaspoon dried thyme</li><li>1 teaspoon dried rosemary</li><li>Salt and pepper to taste</li><li>Fresh dill for garnish</li>";
  } else if (recipe === "pea-cream-soup") {
    title.textContent = "Pea Cream Soup";
    description.textContent =
      "Smooth and velvety pea soup with a touch of cream.";
    ingredients.innerHTML =
      "<li>2 cups green peas</li><li>1 onion, diced</li><li>2 cloves garlic, minced</li><li>4 cups vegetable broth</li><li>1/2 cup heavy cream</li><li>2 tablespoons butter</li><li>1 teaspoon dried thyme</li><li>Salt and pepper to taste</li><li>Croutons for serving</li>";
  } else if (recipe === "chicken-soup") {
    title.textContent = "Chicken Soup";
    description.textContent =
      "Comforting chicken soup with tender chicken and vegetables.";
    ingredients.innerHTML =
      "<li>1 lb chicken breasts, cooked and shredded</li><li>2 carrots, diced</li><li>2 celery stalks, diced</li><li>1 onion, diced</li><li>2 cloves garlic, minced</li><li>6 cups chicken broth</li><li>1 teaspoon dried thyme</li><li>Salt and pepper to taste</li><li>Fresh parsley for garnish</li>";
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
