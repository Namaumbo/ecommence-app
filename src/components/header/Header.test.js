    // Renders a header component with a card, card body, and heading.
    it('should render a header component with a card, card body, and heading', () => {
        // Arrange
  
        // Act
        const wrapper = shallow(<Header />);
  
        // Assert
        expect(wrapper.find(Card)).toHaveLength(1);
        expect(wrapper.find(CardBody)).toHaveLength(1);
        expect(wrapper.find(Heading)).toHaveLength(1);
      });