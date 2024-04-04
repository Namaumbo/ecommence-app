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
      icon: <github.GoArchive />,
      path: "/product-list-page",
    },
    {
      name: "Cart",
      icon: <github.GoArchive />,
      path: "/cart-page",
    },
  ];
  return (
    <React.Fragment>
      <div className="side-main">
        <OrderedList>
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
        </OrderedList>
      </div>

      <></>
    </React.Fragment>
  );
}
