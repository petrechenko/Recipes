import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div>
      <h1 className={style.recipe}>{title}</h1>
      <p>Calories: {calories}</p>
      <ol>
        {ingredients.map(i => (
          <li>{i.text}</li>
        ))}
      </ol>
      <img src={image} alt="image" />
    </div>
  );
};

export default Recipe;
