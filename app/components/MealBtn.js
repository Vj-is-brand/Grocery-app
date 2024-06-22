import React from "react";

const MealBtn = ({ myCategories, handleCategoryClick, activeCategory }) => {
  return (
    <div className="mealCategory">
      <div className="categoryWrapper">
        {myCategories.map((category) => (
          <button
            key={category}
            className={activeCategory === category ? "buttonActive" : "btn"}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MealBtn;
