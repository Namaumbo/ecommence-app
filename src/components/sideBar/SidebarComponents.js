import React from "react";
import { OrderedList, ListItem } from "@chakra-ui/react";
import * as github from "react-icons/go";
import "./SideBar.css";
import { NavLink } from "react-router-dom";

export default function SidebarComponent() {
  const links = [
    {
      name: "LandingPage",
      icon: <github.GoArchive />,
      path: "/",
    },
    {
      name: "ProductList",
      icon: <github.GoRows />,
      path: "/product-list-page",
    },
    {
      name: "Cart",
      icon: <github.GoProjectSymlink />,
      path: "/cart-page",
    },
  ];
  return (
    <React.Fragment>
      <div className="side-main">
        <OrderedList>
        <div className="side-main-container ">

       
          {links.map((menu) => {
            return (
              <NavLink to={menu.path} key={menu.path}>
                <ListItem className="items">
                  {menu.icon}
                  {menu.name}
                </ListItem>
              </NavLink>
            );
          })}
          </div>
        </OrderedList>
      </div>

      <></>
    </React.Fragment>
  );
}
