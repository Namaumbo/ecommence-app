    // Fetches album data and returns product data
    it('should fetch album data and return product data', async () => {
        const albumResponse = { data: { id: 1 } };
        const productsResponse = { data: [{ title: 'Product 1', url: 'https://example.com/product1' }, { title: 'Product 2', url: 'https://example.com/product2' }] };
  
        jest.spyOn(axios, 'get')
          .mockResolvedValueOnce(albumResponse)
          .mockResolvedValueOnce(productsResponse);
  
        const result = await Product();
  
        expect(axios.get).toHaveBeenCalledTimes(2);
        expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/albums/1');
        expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/photos?albumId=1');
        expect(result).toEqual(productsResponse.data);
      });