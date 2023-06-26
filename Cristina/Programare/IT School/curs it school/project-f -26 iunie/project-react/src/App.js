import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Main Page/Home";
import HomeApi from "./components/home/HomeApi";
// eslint-disable-next-line
import Categories from "./components/categories/Categories";
import RecipeDetails from "./components/recipeDetails/RecipeDetails";
import { Routes, Route } from "react-router-dom";
// eslint-disable-next-line
import Footer from "./components/Footer";
import Hero from "./components/hero/Hero";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Hero />
      <Routes>
        <Route path="/meal" element={<HomeApi />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
