import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Category() {
  // TODO: IMPLEMENT
  /**
   * @param {string} category
   * @return {Array} categories items
   * there would be only one category shown in the list of categories
   * according to the category name passed
   *useEffect would be getting the category name from the paramete
   *
   *
   **/

   const { category } = useParams();
   const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      // this would mimic the fetching of categories
      try {
        const response = await axios.get(
          // {TODO: IF WE ONLY HAD THIS END POINT}
          `https://your-api.com/products?category=${category}`
        );
        setProducts(response.data);
        console.log(products)
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [products , category]);

  return (
    <React.Fragment>
      <h1>There would be list of items from a specific category <span style={{color:"red"}}>{category}</span></h1>
    </React.Fragment>
  );
}
