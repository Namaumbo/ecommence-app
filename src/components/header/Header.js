import React from "react";
import { Card, CardBody, Heading } from "@chakra-ui/react";
import "./header.css"
export default function Header() {
  return (
    <React.Fragment>
      <div className="header">
      <Card >
        <CardBody>
          <Heading>
            <span className="cart">E</span>commerce
          </Heading>
        </CardBody>
      </Card>
      </div>
    </React.Fragment>
  );
}
