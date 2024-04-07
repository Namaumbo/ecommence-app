import React from 'react';
import { render } from '@testing-library/react';
import CardComponent from './CardComponent'; // Import the component to be tested

// Describe block can be used to group related test cases
describe('CardComponent', () => {
  it('should render a card component with product information when product object is provided', () => {
    // Arrange
    const product = {
      name: "Green double couch",
      price: 100,
      picture: "path/to/picture.jpg"
    };

    // Act
    const { getByText, getByAltText } = render(<CardComponent product={product} />);

    // Assert
    expect(getByText(product.name)).toBeInTheDocument();
    expect(getByText(`$${product.price}`)).toBeInTheDocument();
    expect(getByAltText("Green double couch with wooden legs")).toBeInTheDocument();
  });
});
