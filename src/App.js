import React from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import ProductListingPage from "./pages/ProductListingPage";
import CartPage from "./pages/CartPage";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import SidebarComponent from "./components/sideBar/SidebarComponents.js";
import Header from "./components/header/Header.js";
import ItemPage from "./pages/ItemPage.js";
import Category from "./pages/Category.js";
import { CartProvider } from "./context/CartContext.js";

const Layout = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="holder-main">
        <div>
          <SidebarComponent />
        </div>
        <div className="out-let">
          <Outlet />
        </div>
      </div>
      {/* <div className="footer"><Footer /></div> */}
    </React.Fragment>
  );
};

function App() {
  const router = createBrowserRouter([
    
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      element: <Layout />,
      children: [
        {
          path: "/product-list-page",
          element: <ProductListingPage />,
        },
        {
          path: "/cart-page",
          element: <CartPage />,
        },
        {
          path: "/product-list-page/:category",
          element: <Category />,
        },
        {
          path: "/product-view/:item",
          element: <ItemPage />,
        },
      ],
    },
  ]);
  return (
    <CartProvider>
      <ChakraProvider>
      
        <RouterProvider router={router} />
      </ChakraProvider>
    </CartProvider>
  );
}

export default App;
