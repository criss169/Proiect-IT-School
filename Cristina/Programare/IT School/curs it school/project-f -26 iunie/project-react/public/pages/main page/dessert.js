function showRecipe(recipe) {
  var overlay = document.getElementById("recipe-overlay");
  var title = document.getElementById("recipe-title");
  var description = document.getElementById("recipe-description");
  var ingredients = document.getElementById("recipe-ingredients");

  if (recipe === "salted-caramel-brownies") {
    title.textContent = "Salted Caramel Brownies";
    description.textContent = "Rich and decadent salted caramel brownies.";
    ingredients.innerHTML =
      "<li>1 cup unsalted butter</li><li>2 cups granulated sugar</li><li>1 teaspoon vanilla extract</li><li>4 large eggs</li><li>1 cup all-purpose flour</li><li>1/2 cup cocoa powder</li><li>1/2 teaspoon salt</li><li>1 cup caramel sauce</li><li>Sea salt flakes for garnish</li>";
  } else if (recipe === "raspberry-brownies") {
    title.textContent = "Raspberry Brownies";
    description.textContent =
      "Fudgy brownies with a burst of fresh raspberries.";
    ingredients.innerHTML =
      "<li>1 cup unsalted butter</li><li>2 cups granulated sugar</li><li>1 teaspoon vanilla extract</li><li>4 large eggs</li><li>1 cup all-purpose flour</li><li>1/2 cup cocoa powder</li><li>1/2 teaspoon salt</li><li>1 cup fresh raspberries</li>";
  } else if (recipe === "nutty-brownies") {
    title.textContent = "Nutty Brownies";
    description.textContent =
      "Brownies packed with your favorite nuts for extra crunch.";
    ingredients.innerHTML =
      "<li>1 cup unsalted butter</li><li>2 cups granulated sugar</li><li>1 teaspoon vanilla extract</li><li>4 large eggs</li><li>1 cup all-purpose flour</li><li>1/2 cup cocoa powder</li><li>1/2 teaspoon salt</li><li>1 cup chopped nuts (e.g., walnuts, pecans, almonds)</li>";
  } else if (recipe === "triple-chocolate-brownies") {
    title.textContent = "Triple Chocolate Brownies";
    description.textContent =
      "Indulgent brownies loaded with three kinds of chocolate.";
    ingredients.innerHTML =
      "<li>1 cup unsalted butter</li><li>2 cups granulated sugar</li><li>1 teaspoon vanilla extract</li><li>4 large eggs</li><li>1 cup all-purpose flour</li><li>1/2 cup cocoa powder</li><li>1/2 teaspoon salt</li><li>1 cup chocolate chips</li><li>1 cup chopped chocolate</li>";
  } else if (recipe === "classic-vanilla-cake") {
    title.textContent = "Classic Vanilla Cake";
    description.textContent =
      "Moist and fluffy vanilla cake with buttercream frosting.";
    ingredients.innerHTML =
      "<li>2 1/2 cups all-purpose flour</li><li>2 1/2 teaspoons baking powder</li><li>1/2 teaspoon salt</li><li>1 cup unsalted butter, softened</li><li>2 cups granulated sugar</li><li>4 large eggs</li><li>1 teaspoon vanilla extract</li><li>1 cup milk</li><li>Buttercream frosting</li>";
  } else if (recipe === "lemon-blueberry-cake") {
    title.textContent = "Lemon Blueberry Cake";
    description.textContent =
      "Zesty lemon cake studded with fresh blueberries and topped with lemon glaze.";
    ingredients.innerHTML =
      "<li>2 1/2 cups all-purpose flour</li><li>2 1/2 teaspoons baking powder</li><li>1/2 teaspoon salt</li><li>1 cup unsalted butter, softened</li><li>2 cups granulated sugar</li><li>4 large eggs</li><li>1 teaspoon vanilla extract</li><li>1 cup milk</li><li>Zest of 1 lemon</li><li>1 cup fresh blueberries</li><li>Lemon glaze</li>";
  } else if (recipe === "red-velvet-cake") {
    title.textContent = "Red Velvet Cake";
    description.textContent =
      "Classic red velvet cake with cream cheese frosting.";
    ingredients.innerHTML =
      "<li>2 1/2 cups all-purpose flour</li><li>2 tablespoons cocoa powder</li><li>1 teaspoon baking soda</li><li>1/2 teaspoon salt</li><li>1/2 cup unsalted butter, softened</li><li>1 1/2 cups granulated sugar</li><li>2 large eggs</li><li>1 teaspoon vanilla extract</li><li>1 cup buttermilk</li><li>1 tablespoon red food coloring</li><li>1 teaspoon white vinegar</li><li>1 teaspoon baking powder</li><li>Cream cheese frosting</li>";
  } else if (recipe === "chocolate-fudge-cake") {
    title.textContent = "Chocolate Fudge Cake";
    description.textContent =
      "Decadent chocolate fudge cake with rich chocolate ganache.";
    ingredients.innerHTML =
      "<li>1 3/4 cups all-purpose flour</li><li>1 1/2 teaspoons baking powder</li><li>1 1/2 teaspoons baking soda</li><li>3/4 cup cocoa powder</li><li>2 cups granulated sugar</li><li>1 teaspoon salt</li><li>2 large eggs</li><li>1 cup milk</li><li>1/2 cup vegetable oil</li><li>2 teaspoons vanilla extract</li><li>1 cup boiling water</li><li>Chocolate ganache</li>";
  } else if (recipe === "raspberry-chocolate-cake") {
    title.textContent = "Raspberry Chocolate Cake";
    description.textContent =
      "Chocolate cake layered with fresh raspberries and chocolate ganache.";
    ingredients.innerHTML =
      "<li>2 cups all-purpose flour</li><li>2 cups granulated sugar</li><li>3/4 cup cocoa powder</li><li>1 1/2 teaspoons baking powder</li><li>1 1/2 teaspoons baking soda</li><li>1 teaspoon salt</li><li>2 large eggs</li><li>1 cup milk</li><li>1/2 cup vegetable oil</li><li>2 teaspoons vanilla extract</li><li>1 cup boiling water</li><li>1 cup fresh raspberries</li><li>Chocolate ganache</li>";
  } else if (recipe === "mini-chocolate-tarts") {
    title.textContent = "Mini Chocolate Tarts";
    description.textContent =
      "Individual-sized chocolate tarts with a buttery crust.";
    ingredients.innerHTML =
      "<li>1 1/4 cups all-purpose flour</li><li>1/4 cup cocoa powder</li><li>1/2 cup unsalted butter, cold and diced</li><li>1/4 cup granulated sugar</li><li>1 large egg yolk</li><li>1/4 cup heavy cream</li><li>6 ounces dark chocolate, chopped</li><li>Assorted toppings (e.g., fresh fruits, whipped cream, nuts)</li>";
  } else if (recipe === "chocolate-cherry-tarts") {
    title.textContent = "Chocolate Cherry Tarts";
    description.textContent =
      "Flaky tart shells filled with chocolate ganache and juicy cherries.";
    ingredients.innerHTML =
      "<li>1 1/4 cups all-purpose flour</li><li>1/4 cup cocoa powder</li><li>1/2 cup unsalted butter, cold and diced</li><li>1/4 cup granulated sugar</li><li>1 large egg yolk</li><li>1/4 cup heavy cream</li><li>6 ounces dark chocolate, chopped</li><li>1 cup pitted cherries</li><li>Whipped cream for serving</li>";
  } else if (recipe === "brownie-cake") {
    title.textContent = "Brownie Cake";
    description.textContent =
      "A delightful combination of brownies and cake in one delicious treat.";
    ingredients.innerHTML =
      "<li>1 cup unsalted butter</li><li>2 cups granulated sugar</li><li>1 teaspoon vanilla extract</li><li>4 large eggs</li><li>1 cup all-purpose flour</li><li>1/2 cup cocoa powder</li><li>1/2 teaspoon salt</li><li>1 cup chocolate chips</li><li>1/2 cup chopped nuts (optional)</li>";
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
