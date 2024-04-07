import axios from "axios";

/**
 * Fetches a specific album and its associated products from an API.
 * @returns {Promise<Array>} A promise that resolves to an array of product data.
 */
const Product = async () => {
  try {
    // Fetch album data
    const albumResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/albums/1"
    );
    const album = albumResponse.data;

    // Fetch product data
    const productsResponse = await axios.get(
      `https://jsonplaceholder.typicode.com/photos?albumId=${album.id}`
    );
    const products = productsResponse.data;

    // Display product data
    products.forEach((product) => {
      console.log(`Product Name: ${product.title}`);
      console.log(`Product Image: ${product.url}`);
    });

    return products;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Error fetching data, please try again", error);
  }
};

export default Product;
