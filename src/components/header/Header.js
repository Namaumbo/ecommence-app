import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardBody, Heading } from "@chakra-ui/react";

import "./header.css";

export default function Header() {
  const navigation = useNavigate();
  const handlethislink = () => {
    navigation("/");
  };
  return (
    <React.Fragment>
      <div className="header">
        <Card>
          <CardBody>
            <Heading>
              <div className="header-link" onClick={handlethislink}>
                <span className="cart">E</span>commerce
              </div>
            </Heading>
          </CardBody>
        </Card>
      </div>
    </React.Fragment>
  );
}
