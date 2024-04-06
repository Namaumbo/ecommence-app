import React, { createContext } from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import ProductListingPage from "./pages/ProductListingPage";
import CartPage from "./pages/CartPage";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import SidebarComponent from "./components/sideBar/SidebarComponents.js";
import Header from "./components/header/Header.js";
import ItemPage from "./pages/ItemPage.js";
// Create a new context
const MyContext = createContext();
const Layout = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-4">
            <SidebarComponent />
          </div>
          <div className="col-8">
            <Outlet />
          </div>
        </div>
      </div>
      {/* <div className="footer"><Footer /></div> */}
    </React.Fragment>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      // element: <Layout />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/product-list-page",
          element: <ProductListingPage />,
        },
        {
          path: "/cart-page",
          element: <CartPage />,
        },
        {
          path: `/product-list-page/:category`,
          element: <CartPage />,
        },
        {
          path: `/product-view/:item`,
          element: <ItemPage />,
        },
      ],
    },
  ]);
  return (
    // TODO: Follow up on the context api
    <MyContext.Provider>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </MyContext.Provider>
  );
}

export default App;
