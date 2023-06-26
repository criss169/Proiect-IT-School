function showRecipe(recipe) {
  var overlay = document.getElementById("recipe-overlay");
  var title = document.getElementById("recipe-title");
  var description = document.getElementById("recipe-description");
  var ingredients = document.getElementById("recipe-ingredients");

  if (recipe === "avocado-toast") {
    title.textContent = "Avocado Toast";
    description.textContent = "Simple and delicious avocado toast.";
    ("<li>2 slices of bread</li><li>1 ripe avocado</li><li>Salt and pepper to taste</li>");
  } else if (recipe === "blueberry-pancakes") {
    title.textContent = "Blueberry Pancakes";
    description.textContent =
      "Fluffy blueberry pancakes served with maple syrup.";
    ingredients.innerHTML =
      "<li>1 cup all-purpose flour</li><li>1 tablespoon sugar</li><li>1 teaspoon baking powder</li><li>1/2 teaspoon salt</li><li>1 cup milk</li><li>1 egg</li><li>1 tablespoon melted butter</li><li>1 cup fresh blueberries</li>";
  } else if (recipe === "french-toast") {
    title.textContent = "French Toast";
    description.textContent =
      "Classic French toast recipe topped with powdered sugar and maple syrup.";
    ingredients.innerHTML =
      "<li>4 slices of bread</li><li>2 eggs</li><li>1/2 cup milk</li><li>1/2 teaspoon vanilla extract</li><li>Butter for frying</li><li>Powdered sugar</li><li>Maple syrup</li>";
  } else if (recipe === "eggs-benedict") {
    title.textContent = "Eggs Benedict";
    description.textContent = "Eggs Benedict recipe with hollandaise sauce.";
    ingredients.innerHTML =
      "<li>2 English muffins</li><li>4 eggs</li><li>4 slices of Canadian bacon</li><li>Hollandaise sauce</li><li>Chives for garnish</li>";
  } else if (recipe === "omelette") {
    title.textContent = "Omelette";
    description.textContent =
      "Fluffy omelette filled with your choice of ingredients.";
    ingredients.innerHTML =
      "<li>3 eggs</li><li>2 tablespoons milk</li><li>Salt and pepper to taste</li><li>Fillings of your choice (e.g., cheese, vegetables, ham)</li><li>Butter for frying</li>";
  } else if (recipe === "breakfast-burrito") {
    title.textContent = "Breakfast Burrito";
    description.textContent =
      "Hearty breakfast burrito filled with eggs, bacon, and cheese.";
    ingredients.innerHTML =
      "<li>4 large tortillas</li><li>6 eggs</li><li>4 slices of bacon, cooked and crumbled</li><li>1/2 cup shredded cheddar cheese</li><li>Salt and pepper to taste</li><li>Salsa for serving</li>";
  } else if (recipe === "banana-pancakes") {
    title.textContent = "Banana Pancakes";
    description.textContent =
      "Fluffy banana pancakes served with sliced bananas and honey.";
    ingredients.innerHTML =
      "<li>1 cup all-purpose flour</li><li>1 tablespoon sugar</li><li>1 teaspoon baking powder</li><li>1/2 teaspoon baking soda</li><li>1/4 teaspoon salt</li><li>1 cup buttermilk</li><li>1 ripe banana, mashed</li><li>1 egg</li><li>2 tablespoons melted butter</li><li>Sliced bananas and honey for serving</li>";
  } else if (recipe === "granola-parfait") {
    title.textContent = "Granola Parfait";
    description.textContent =
      "Healthy and delicious granola parfait with yogurt and berries.";
    ingredients.innerHTML =
      "<li>1 cup Greek yogurt</li><li>1 cup granola</li><li>1 cup mixed berries (e.g., strawberries, blueberries, raspberries)</li><li>Honey for drizzling</li>";
  } else if (recipe === "croissant-sandwich") {
    title.textContent = "Croissant Sandwich";
    description.textContent =
      "Delicious croissant sandwich filled with ham, cheese, and vegetables.";
    ingredients.innerHTML =
      "<li>2 croissants</li><li>4 slices of ham</li><li>2 slices of cheese</li><li>Lettuce and tomato</li><li>Mayonnaise and mustard</li>";
  } else if (recipe === "vegetable-frittata") {
    title.textContent = "Vegetable Frittata";
    description.textContent =
      "Savory vegetable frittata loaded with colorful vegetables.";
    ingredients.innerHTML =
      "<li>6 eggs</li><li>1/4 cup milk</li><li>Salt and pepper to taste</li><li>1 tablespoon olive oil</li><li>1/2 cup diced onion</li><li>1 bell pepper, diced</li><li>1 zucchini, diced</li><li>1 cup spinach leaves</li><li>1/2 cup shredded cheese</li>";
  } else if (recipe === "smoothie-bowl") {
    title.textContent = "Smoothie Bowl";
    description.textContent =
      "Refreshing smoothie bowl topped with fresh fruits and granola.";
    ingredients.innerHTML =
      "<li>1 frozen banana</li><li>1 cup frozen mixed berries</li><li>1/2 cup almond milk</li><li>1 tablespoon honey</li><li>Toppings: sliced fruits, granola, coconut flakes</li>";
  } else if (recipe === "breakfast-quiche") {
    title.textContent = "Breakfast Quiche";
    description.textContent =
      "Delicious breakfast quiche with a flaky crust and savory filling.";
    ingredients.innerHTML =
      "<li>1 pie crust</li><li>6 eggs</li><li>1/2 cup milk</li><li>Salt and pepper to taste</li><li>1 cup shredded cheese</li><li>1/2 cup cooked bacon or ham, chopped</li><li>1/2 cup diced onion</li><li>1/2 cup diced bell peppers</li><li>1/2 cup chopped spinach</li>";
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
