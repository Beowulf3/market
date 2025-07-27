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
