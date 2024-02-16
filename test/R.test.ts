describe('DummyController', () => {
  describe('getTest', () => {
    it('should return a message', () => {
      const result = 'Hello';
      expect(result).toEqual('Hello');
    });

    it('Should send a request using supertest', async () => {
      const result = 15;
      expect(result).toEqual(15);
    });
  });
});
