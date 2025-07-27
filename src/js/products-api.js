import axios from 'axios';

export async function getCategoriesList() {
  try {
    const data = await axios('https://dummyjson.com/products/category-list');
    return data.data;
  } catch (error) {
    console.log(error.message);
    throw new Error('Something went wrong!');
  }
}

export async function getProductsList(currentPage = 1) {
  try {
    const response = await axios.get(
      `https://dummyjson.com/products?limit=12&skip=${(currentPage - 1) * 12}`
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
    throw new Error('Something went wrong!');
  }
}
