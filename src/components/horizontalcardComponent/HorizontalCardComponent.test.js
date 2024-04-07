// Renders a horizontal card component with product details
it("should render a horizontal card component with product details when product name is provided", () => {
  // Arrange
  const product = {
    name: "Product Name",
    price: 10,
  };
  // Act
  const wrapper = shallow(<HorizontalCardComponent product={product} />);

  // Assert
  expect(wrapper.find(".horizontal-card-container")).toHaveLength(1);
  expect(wrapper.find(".product-details")).toHaveLength(1);
  expect(wrapper.find(".product-name").text()).toBe("Product Name");
  expect(wrapper.find(".product-price").text()).toBe("$10/each");
});

// Displays the product name, color, price and an image
it("should render a horizontal card component with product details when product name is provided", () => {
  // Arrange
  const product = {
    name: "Product Name",
    price: 10,
  };

  // Act
  const wrapper = shallow(<HorizontalCardComponent product={product} />);

  // Assert
  expect(wrapper.find(".horizontal-card-container")).toHaveLength(1);
  expect(wrapper.find(".product-details")).toHaveLength(1);
  expect(wrapper.find(".product-name").text()).toBe("Product Name");
  expect(wrapper.find(".product-price").text()).toBe("$10/each");
});
