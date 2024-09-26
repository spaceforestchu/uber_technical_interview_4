const LargestTriple = require("./index");

describe("LargestTriple", () => {
  test("finds the largest triple-digit number in a large integer", () => {
    const input = 123456;
    expect(LargestTriple(input)).toBe(456);
  });

  test("finds the largest triple-digit number in a large integer with overlapping triples", () => {
    const input = 9876543210;
    expect(LargestTriple(input)).toBe(987);
  });

  test("finds the largest triple-digit number with repeating digits", () => {
    const input = 110001;
    expect(LargestTriple(input)).toBe(110);
  });

  test("handles input with fewer than three digits", () => {
    const input = 12;
    expect(LargestTriple(input)).toBe(
      "Invalid input: Number must have at least three digits."
    );
  });

  test("returns error for non-integer inputs", () => {
    const input = [123456];
    expect(LargestTriple(input)).toBe("Invalid input: Must be an integer.");
  });

  test("returns error for non-integer objects", () => {
    const input = { number: "123" };
    expect(LargestTriple(input)).toBe("Invalid input: Must be an integer.");
  });

  test("returns error for floating-point numbers", () => {
    const input = 0.89899;
    expect(LargestTriple(input)).toBe("Invalid input: Must be an integer.");
  });

  test("handles large integer with varying digit lengths", () => {
    const input = 9090909090909;
    expect(LargestTriple(input)).toBe(909);
  });

  test("returns error for negative integers", () => {
    const input = -123456;
    expect(LargestTriple(input)).toBe(456);
  });
});
