import React from "react";
import classes from "./hero.module.css";
import meal from "../../assets/meal1.jpg";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const URL1 =
    "https:/www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast";
  const URL2 = "https://www.themealdb.com/api/json/v1/1/search.php?s=Burger";
  const [chickenRecipe, setChickenRecipe] = useState("");
  const [burgerRecipe, setBurgerRecipe] = useState("");

  useEffect(() => {
    const fetchChickenRecipe = async () => {
      try {
        const res = await fetch(URL1);
        const data = await res.json();

        setChickenRecipe(data.meals[0]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchChickenRecipe();
  }, []);

  useEffect(() => {
    const fetchBurgerRecipe = async () => {
      try {
        const res = await fetch(URL2);
        const data = await res.json();
        console.log(data.meals[0].strMeal);
        setBurgerRecipe(data.meals[0]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBurgerRecipe();
  }, []);

  const navigate = useNavigate();
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <h2>
            Craving some <br />
            delicious meals
          </h2>
          <h5>Feeling the cooking vibe</h5>
          <p className={classes.firstDesc}>
            You've come to the right place for some tasty recipes
          </p>
          <p className={classes.secondDesc}>Just see what we have for you</p>
          <div className={classes.buttons}>
            <button onClick={() => navigate("/meal")}>Get Started</button>
            <button onClick={() => navigate("/meal")}>Explore recipes</button>
          </div>
        </div>
        <div className={classes.right}>
          <img src={meal} alt="meal" />
          <div className={classes.chickenMeal}>
            <div className={classes.imgContainer}>
              <img src={chickenRecipe?.strMealThumb} alt="" />
            </div>
            <h5>{chickenRecipe?.strMeal}</h5>
          </div>
          <div className={classes.burgerMeal}>
            <div className={classes.imgContainer}>
              <img src={burgerRecipe?.strMealThumb} alt="" />
            </div>
            <h5>{burgerRecipe?.strMeal}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
