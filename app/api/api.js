import axios from "axios";

export const fetchMealsByCategory = async (categoryName) => {
  try {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
    );
    // console.log("API Response:", response.data);
    return response.data.meals || [];
  } catch (error) {
    console.error(`Error fetching meals for ${categoryName}:`, error);
    return []; // Return an empty array in case of error
  }
};
