import React from "react";
import { Card, CardBody, Heading } from "@chakra-ui/react";
export default function Header() {
  return (
    <React.Fragment>
      <Card>
        <CardBody>
          <Heading>
            <span className="cart">E</span>commerce
          </Heading>
        </CardBody>
      </Card>
    </React.Fragment>
  );
}
