function showRecipe(recipe) {
  var overlay = document.getElementById("recipe-overlay");
  var title = document.getElementById("recipe-title");
  var description = document.getElementById("recipe-description");
  var ingredients = document.getElementById("recipe-ingredients");

  if (recipe === "creamy-tuscan-garlic-chicken") {
    title.textContent = "Creamy Tuscan Garlic Chicken";
    description.textContent =
      "Delicious chicken cooked in a creamy garlic sauce with sun-dried tomatoes and spinach.";
    ingredients.innerHTML =
      "<li>4 boneless, skinless chicken breasts</li><li>Salt and pepper to taste</li><li>1 tablespoon olive oil</li><li>3 cloves garlic, minced</li><li>1 cup chicken broth</li><li>1 cup heavy cream</li><li>1/2 cup grated Parmesan cheese</li><li>1/2 cup sun-dried tomatoes, chopped</li><li>2 cups fresh spinach</li>";
  } else if (recipe === "creamy-parmesan-garlic-mushroom-chicken") {
    title.textContent = "Creamy Parmesan Garlic Mushroom Chicken";
    description.textContent =
      "Tender chicken breasts cooked in a creamy garlic sauce with mushrooms and Parmesan cheese.";
    ingredients.innerHTML =
      "<li>4 boneless, skinless chicken breasts</li><li>Salt and pepper to taste</li><li>1 tablespoon olive oil</li><li>3 cloves garlic, minced</li><li>8 oz mushrooms, sliced</li><li>1 cup chicken broth</li><li>1 cup heavy cream</li><li>1/2 cup grated Parmesan cheese</li><li>1 teaspoon Italian seasoning</li>";
  } else if (recipe === "meatballs-with-sauce") {
    title.textContent = "Meatballs with Sauce";
    description.textContent =
      "Juicy meatballs cooked in a flavorful tomato sauce, perfect for pasta or sandwiches.";
    ingredients.innerHTML =
      "<li>1 lb ground beef</li><li>1/2 cup breadcrumbs</li><li>1/4 cup grated Parmesan cheese</li><li>1/4 cup milk</li><li>1/4 cup chopped parsley</li><li>1 egg</li><li>2 cloves garlic, minced</li><li>1 teaspoon salt</li><li>1/2 teaspoon black pepper</li><li>1 tablespoon olive oil</li><li>1 onion, chopped</li><li>2 cloves garlic, minced</li><li>1 can (14 oz) crushed tomatoes</li><li>1 can (8 oz) tomato sauce</li><li>1 teaspoon dried basil</li><li>1 teaspoon dried oregano</li>";
  } else if (recipe === "creamy-mushroom-risotto") {
    title.textContent = "Creamy Mushroom Risotto";
    description.textContent =
      "Classic Italian risotto cooked with mushrooms, Parmesan cheese, and white wine.";
    ingredients.innerHTML =
      "<li>1 cup Arborio rice</li><li>4 cups vegetable broth</li><li>1 cup sliced mushrooms</li><li>1/2 cup grated Parmesan cheese</li><li>1/4 cup white wine</li><li>2 tablespoons butter</li><li>1 small onion, chopped</li><li>2 cloves garlic, minced</li><li>1 tablespoon olive oil</li><li>Salt and pepper to taste</li><li>Chopped parsley for garnish</li>";
  } else if (recipe === "lemon-garlic-shrimp-pasta") {
    title.textContent = "Lemon Garlic Shrimp Pasta";
    description.textContent =
      "Tender shrimp sautéed in a lemon garlic sauce, served over pasta.";
    ingredients.innerHTML =
      "<li>8 oz spaghetti</li><li>1 lb shrimp, peeled and deveined</li><li>Salt and pepper to taste</li><li>2 tablespoons butter</li><li>4 cloves garlic, minced</li><li>1/4 cup chicken broth</li><li>1/4 cup heavy cream</li><li>1 lemon, juiced and zested</li><li>Chopped parsley for garnish</li>";
  } else if (recipe === "chicken-and-vegetable-stir-fry") {
    title.textContent = "Chicken and Vegetable Stir-Fry";
    description.textContent =
      "Quick and easy stir-fry with tender chicken and a colorful mix of vegetables.";
    ingredients.innerHTML =
      "<li>2 boneless, skinless chicken breasts, sliced</li><li>2 tablespoons soy sauce</li><li>2 tablespoons oyster sauce</li><li>1 tablespoon cornstarch</li><li>2 tablespoons vegetable oil</li><li>2 cloves garlic, minced</li><li>1 bell pepper, sliced</li><li>1 zucchini, sliced</li><li>1 carrot, sliced</li><li>1 cup broccoli florets</li><li>Salt and pepper to taste</li><li>Sesame seeds for garnish</li>";
  } else if (recipe === "pesto-chicken-pasta") {
    title.textContent = "Pesto Chicken Pasta";
    description.textContent =
      "Delicious pasta dish with grilled chicken and a flavorful pesto sauce.";
    ingredients.innerHTML =
      "<li>8 oz penne pasta</li><li>2 boneless, skinless chicken breasts</li><li>Salt and pepper to taste</li><li>2 tablespoons olive oil</li><li>3 tablespoons pesto sauce</li><li>1/4 cup grated Parmesan cheese</li><li>Cherry tomatoes for garnish</li><li>Chopped basil for garnish</li>";
  } else if (recipe === "pepper-steak-stir-fry") {
    title.textContent = "Pepper Steak Stir Fry";
    description.textContent =
      "Tender slices of beef cooked with bell peppers in a savory sauce.";
    ingredients.innerHTML =
      "<li>1 lb flank steak, thinly sliced</li><li>1/4 cup soy sauce</li><li>2 tablespoons cornstarch</li><li>1 tablespoon vegetable oil</li><li>1 onion, sliced</li><li>2 bell peppers, sliced</li><li>3 cloves garlic, minced</li><li>1/4 cup beef broth</li><li>2 tablespoons oyster sauce</li><li>1 tablespoon hoisin sauce</li><li>1 tablespoon brown sugar</li><li>Sesame seeds for garnish</li>";
  } else if (recipe === "greek-salad") {
    title.textContent = "Greek Salad";
    description.textContent =
      "Refreshing salad with tomatoes, cucumbers, olives, and feta cheese.";
    ingredients.innerHTML =
      "<li>2 tomatoes, diced</li><li>1 cucumber, diced</li><li>1/2 red onion, thinly sliced</li><li>1/2 cup Kalamata olives</li><li>1/2 cup crumbled feta cheese</li><li>2 tablespoons olive oil</li><li>1 tablespoon red wine vinegar</li><li>1 teaspoon dried oregano</li><li>Salt and pepper to taste</li>";
  } else if (recipe === "thai-beef-salad") {
    title.textContent = "Thai Beef Salad";
    description.textContent =
      "Zesty salad with grilled beef, fresh herbs, and a tangy dressing.";
    ingredients.innerHTML =
      "<li>1 lb beef sirloin steak</li><li>4 cups mixed salad greens</li><li>1/2 cucumber, sliced</li><li>1/2 cup cherry tomatoes, halved</li><li>1/4 cup fresh mint leaves</li><li>1/4 cup fresh cilantro leaves</li><li>1/4 cup chopped peanuts</li><li>2 tablespoons fish sauce</li><li>2 tablespoons lime juice</li><li>1 tablespoon soy sauce</li><li>1 tablespoon brown sugar</li><li>1 clove garlic, minced</li><li>1 Thai chili, minced (optional)</li>";
  } else if (recipe === "chicken-caesar-salad") {
    title.textContent = "Chicken Caesar Salad";
    description.textContent =
      "Classic Caesar salad with grilled chicken and homemade dressing.";
    ingredients.innerHTML =
      "<li>2 boneless, skinless chicken breasts</li><li>Salt and pepper to taste</li><li>2 tablespoons olive oil</li><li>4 cups chopped romaine lettuce</li><li>1/4 cup grated Parmesan cheese</li><li>1/4 cup croutons</li><li>1/4 cup Caesar dressing</li><li>1 lemon, juiced</li>";
  } else if (recipe === "tuna-nicoise-salad") {
    title.textContent = "Tuna Nicoise Salad";
    description.textContent =
      "Classic French salad with seared tuna, boiled eggs, and vegetables.";
    ingredients.innerHTML =
      "<li>2 tuna steaks</li><li>Salt and pepper to taste</li><li>2 tablespoons olive oil</li><li>4 cups mixed salad greens</li><li>1/2 cup cherry tomatoes, halved</li><li>1/4 cup sliced red onion</li><li>1/4 cup Kalamata olives</li><li>2 boiled eggs, halved</li><li>2 tablespoons red wine vinegar</li><li>1 tablespoon Dijon mustard</li><li>1 clove garlic, minced</li><li>1/4 cup olive oil</li>";
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
