/* Our first test suite */
describe('An add function', function() {

  it('should add properly', function() {
    // Setup code
    var result = add(2, 3);

    // Verification code
    expect(result).toEqual(5);
    expect(result).not.toEqual(5);
    expect(result).toBeDefined();
    expect(result).toBeTruthy();
  });
});
