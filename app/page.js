"use client";
import React, { useEffect, useState } from "react";
import MealItem from "./components/MealItem";
import MealBtn from "./components/MealBtn";
import { fetchMealsByCategory } from "./api/api";
import Header from "./components/Header";

const page = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [meals, setMeals] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [resultPerPage, setResultPerPage] = useState(6);

  const myCategories = [
    "FRUITS AND VEGETABLES",
    "BAKERY",
    "MEAT AND SEAFOOD",
    "BEVERAGE",
    "BISCUITS AND SNACKS",
  ];

  // Define a mapping between your frontend category names and API category names
  const categoryMapping = {
    "FRUITS AND VEGETABLES": "Vegetarian",
    "MEAT AND SEAFOOD": "Beef",
    BAKERY: "Breakfast",
    "BISCUITS AND SNACKS": "Chicken",
    BEVERAGE: "Seafood",
  };

  useEffect(() => {
    // Fetch initial meals based on the first category in myCategories
    const fetchInitialMeals = async () => {
      const data = await fetchMealsByCategory(categoryMapping[myCategories[0]]);
      // console.log(data);
      setMeals(data);
      setActiveCategory(myCategories[0]);
    };

    if (myCategories.length > 0) {
      fetchInitialMeals();
    }
  }, []); // Only fetch once on component mount

  const indexOflastDish = currentPage * resultPerPage;
  const indexOfFirstDish = indexOflastDish - resultPerPage;
  const currentDish = meals.slice(indexOfFirstDish, indexOflastDish);

  const handleCategoryClick = async (categoryName) => {
    setActiveCategory(categoryName);
    const data = await fetchMealsByCategory(categoryMapping[categoryName]);
    setMeals(data);
  };

  return (
    <>
      <Header />
      <div className=" bottomContainer">
        <div className="containerTitle">
          <h3>Shop by Category</h3>
          <h1>Top Category Of Organic Food</h1>
          <MealBtn
            myCategories={myCategories}
            handleCategoryClick={handleCategoryClick}
            activeCategory={activeCategory}
          />
        </div>
        <MealItem meals={currentDish} />
      </div>
    </>
  );
};

export default page;
