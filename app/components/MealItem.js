import React from "react";

const MealItem = ({ meals }) => {
  return (
    <div className="mealItemsContainer">
      {meals.map((meal) => (
        <div className="mealItem" key={meal.idMeal}>
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <div className="mealDetails">
            <div className="mealStyle">
              <p>{meal.strMeal}</p>
              <span>$8.50</span>
            </div>
            <hr className="sepearator" />
            <div className="mealDescription">
              <p>Lorem ipsum, dolor sit amet consectetur</p>
              <span>SHOP NOW &rarr;</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MealItem;
