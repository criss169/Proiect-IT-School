function showRecipe(recipe) {
  var overlay = document.getElementById("recipe-overlay");
  var title = document.getElementById("recipe-title");
  var description = document.getElementById("recipe-description");
  var ingredients = document.getElementById("recipe-ingredients");

  if (recipe === "creamy-spinach-dip") {
    title.textContent = "Creamy Spinach Dip";
    description.textContent =
      "Delicious creamy spinach dip, perfect for dipping chips or veggies.";
    ingredients.innerHTML =
      "<li>1 cup frozen spinach, thawed and drained</li><li>8 oz cream cheese, softened</li><li>1/2 cup sour cream</li><li>1/2 cup mayonnaise</li><li>1/2 cup grated Parmesan cheese</li><li>1/4 cup chopped onion</li><li>2 cloves garlic, minced</li><li>1/2 teaspoon salt</li><li>1/4 teaspoon black pepper</li>";
  } else if (recipe === "zesty-avocado-salsa") {
    title.textContent = "Zesty Avocado Salsa";
    description.textContent =
      "Fresh and zesty salsa with avocado, tomatoes, onions, and lime.";
    ingredients.innerHTML =
      "<li>2 avocados, diced</li><li>1 cup diced tomatoes</li><li>1/4 cup chopped red onion</li><li>1/4 cup chopped cilantro</li><li>1 jalapeno, seeded and minced</li><li>2 cloves garlic, minced</li><li>1 lime, juiced</li><li>Salt and pepper to taste</li>";
  } else if (recipe === "chicken-alfredo-dip") {
    title.textContent = "Chicken Alfredo Dip";
    description.textContent =
      "Creamy chicken alfredo dip, great for parties and gatherings.";
    ingredients.innerHTML =
      "<li>2 cups cooked chicken, shredded</li><li>8 oz cream cheese, softened</li><li>1 cup Alfredo sauce</li><li>1/2 cup shredded mozzarella cheese</li><li>1/4 cup grated Parmesan cheese</li><li>1/4 cup chopped fresh parsley</li><li>1/2 teaspoon garlic powder</li><li>1/2 teaspoon onion powder</li><li>1/4 teaspoon black pepper</li>";
  } else if (recipe === "quattro-formaggi-dip") {
    title.textContent = "Quattro Formaggi Dip";
    description.textContent =
      "Four-cheese dip with a blend of Parmesan, Gorgonzola, Fontina, and Mozzarella.";
    ingredients.innerHTML =
      "<li>1 cup grated Parmesan cheese</li><li>1/2 cup crumbled Gorgonzola cheese</li><li>1/2 cup shredded Fontina cheese</li><li>1/2 cup shredded Mozzarella cheese</li><li>1 cup sour cream</li><li>1/2 cup mayonnaise</li><li>2 cloves garlic, minced</li><li>1/4 teaspoon black pepper</li><li>Chopped fresh basil for garnish</li>";
  } else if (recipe === "bruschetta-with-tomato-and-basil") {
    title.textContent = "Bruschetta with Tomato and Basil";
    description.textContent =
      "Classic bruschetta with fresh tomatoes, basil, and garlic.";
    ingredients.innerHTML =
      "<li>4 slices Italian bread</li><li>2 tomatoes, diced</li><li>1/4 cup chopped fresh basil</li><li>2 cloves garlic, minced</li><li>1 tablespoon olive oil</li><li>Salt and pepper to taste</li>";
  } else if (recipe === "smoked-salmon-and-cream-cheese-roll-ups") {
    title.textContent = "Smoked Salmon and Cream Cheese Roll-Ups";
    description.textContent =
      "Delicate smoked salmon rolled with cream cheese and fresh herbs.";
    ingredients.innerHTML =
      "<li>8 slices smoked salmon</li><li>4 oz cream cheese, softened</li><li>2 tablespoons chopped fresh dill</li><li>2 tablespoons chopped fresh chives</li><li>1 tablespoon lemon juice</li><li>Salt and pepper to taste</li>";
  } else if (recipe === "mini-spinach-and-blue-cheese-puffs") {
    title.textContent = "Mini Spinach and Blue Cheese Puffs";
    description.textContent =
      "Flaky pastry puffs filled with spinach and creamy blue cheese.";
    ingredients.innerHTML =
      "<li>1 sheet frozen puff pastry, thawed</li><li>1 cup frozen spinach, thawed and drained</li><li>1/2 cup crumbled blue cheese</li><li>1/4 cup grated Parmesan cheese</li><li>1/4 cup chopped onion</li><li>1 clove garlic, minced</li><li>1/4 teaspoon black pepper</li><li>1 egg, beaten</li>";
  } else if (recipe === "baked-brie-with-cranberry-sauce") {
    title.textContent = "Baked Brie with Cranberry Sauce";
    description.textContent =
      "Warm and gooey baked Brie cheese topped with tangy cranberry sauce.";
    ingredients.innerHTML =
      "<li>1 wheel of Brie cheese</li><li>1/2 cup cranberry sauce</li><li>1/4 cup chopped pecans</li><li>1 tablespoon honey</li><li>Crackers or bread for serving</li>";
  } else if (recipe === "raw-vegetable-salad") {
    title.textContent = "Raw Vegetable Salad";
    description.textContent =
      "Refreshing salad with a mix of raw vegetables and a light dressing.";
    ingredients.innerHTML =
      "<li>2 cups mixed salad greens</li><li>1 cucumber, sliced</li><li>1 carrot, grated</li><li>1 bell pepper, sliced</li><li>1/4 cup sliced red onion</li><li>1/4 cup cherry tomatoes, halved</li><li>2 tablespoons olive oil</li><li>1 tablespoon lemon juice</li><li>1 teaspoon Dijon mustard</li><li>Salt and pepper to taste</li>";
  } else if (recipe === "boeuf-salad") {
    title.textContent = "Boeuf Salad";
    description.textContent =
      "French-inspired salad with thinly sliced beef, mixed greens, and vinaigrette.";
    ingredients.innerHTML =
      "<li>8 oz beef tenderloin, thinly sliced</li><li>4 cups mixed salad greens</li><li>1/2 cup cherry tomatoes, halved</li><li>1/4 cup sliced red onion</li><li>1/4 cup chopped fresh parsley</li><li>2 tablespoons red wine vinegar</li><li>1 tablespoon Dijon mustard</li><li>1 clove garlic, minced</li><li>1/4 cup olive oil</li><li>Salt and pepper to taste</li>";
  } else if (recipe === "oriental-salad") {
    title.textContent = "Oriental Salad";
    description.textContent =
      "Oriental salad is a potato salad with onions, olives and boiled eggs, very dear to Romanians. The dressing is very important because it is the one that seasons the entire dish.";
    ingredients.innerHTML =
      "<li>1 kg boiled potatoes in their skins</li><li>3-4 red onions</li><li>4 boiled eggs</li><li>Coarse sea salt</li><li>Ground black pepper</li><li>A few pitted black olives</li><li>Juice from ½ lemon (can be replaced with 30 ml plain vinegar)</li><li>A few slices of grated lemon peel (optional)</li><li>100 ml of olive or sunflower oil</li><li>50 ml cold water</li><li>Salt and pepper</li><li>½ teaspoon honey or brown sugar</li><li>2 teaspoons of mustard (preferably with whole seeds)</li>";
  } else if (recipe === "mimosa-salad") {
    title.textContent = "Mimosa Salad";
    description.textContent =
      "Layered salad with eggs, cheese, and vegetables, topped with a creamy dressing.";
    ingredients.innerHTML =
      "<li>4 hard-boiled eggs, grated</li><li>1 cup grated cheese (Cheddar or Gouda)</li><li>1 cup cooked and cooled vegetables (peas, carrots, corn, etc.)</li><li>1/4 cup diced pickles</li><li>1/4 cup mayonnaise</li><li>1/4 cup sour cream</li><li>1 tablespoon mustard</li><li>Salt and pepper to taste</li><li>Chopped fresh parsley for garnish</li>";
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
