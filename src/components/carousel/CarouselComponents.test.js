// Renders a slider container with images
it("should render a slider container with images when images are provided", () => {
  // Arrange
  const wrapper = shallow(<CarouselComponent />);

  // Act

  // Assert
  expect(wrapper.find(".slider-container")).toHaveLength(1);
  expect(wrapper.find(".carousel-img")).toHaveLength(4);
});
// Uses react-slick library to create a carousel
it("should render a slider container with images when images are provided", () => {
  // Arrange
  const wrapper = shallow(<CarouselComponent />);

  // Act

  // Assert
  expect(wrapper.find(".slider-container")).toHaveLength(1);
  expect(wrapper.find(".carousel-img")).toHaveLength(4);
});
