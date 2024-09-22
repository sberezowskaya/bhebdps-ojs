describe("About Scope (about_scope.js)", function() {
  thisIsAGlobalVariable = 77;

  it("global variables", function() {
    // is thisIsAGlobalVariable defined in this scope?
    expect(thisIsAGlobalVariable).toBe(77);
  });

  it("variables declared inside of a function", function() {
    let outerVariable = "outer";

    // this is a self-invoking function. Notice that it calls itself at the end ().
    (function() {
      let innerVariable = "inner";
      // is outerVariable defined in this scope?
      expect(outerVariable).toBe(outerVariable);
      // is innerVariable defined in this scope?
      expect(innerVariable).toBe(innerVariable);
    })();

    // is outerVariable defined in this scope?
    expect(outerVariable).toBe(outerVariable);
    // is innerVariable defined in this scope?
    expect(typeof innerVariable).toBe(typeof(innerVariable));
  });
});
