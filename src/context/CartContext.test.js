it('should initialize cart as an empty array when CartProvider is invoked', () => {
    const wrapper = mount(
      <CartProvider>
        <ChildComponent />
      </CartProvider>
    );
    expect(wrapper.find(CartContext.Provider).prop('value').cart).toEqual([]);
  });
  
  it('should add a product to the cart when addToCart is called', () => {
    const wrapper = mount(
      <CartProvider>
        <ChildComponent />
      </CartProvider>
    );

    const product = { name: 'Product 1', price: 10 };
    const callback = jest.fn();

    wrapper.find(CartContext.Provider).prop('value').addToCart(product, callback);

    expect(wrapper.find(CartContext.Provider).prop('value').cart).toEqual([product]);
    expect(callback).toHaveBeenCalledWith(product);
  });