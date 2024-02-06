import gladwell from "../../src";

test("Converts string to kebabcase.", () => {
  const result = gladwell.kebab("Hello, World!");
  expect(result).toBe("hello,-world!");
});

test("Converts string to lowercase.", () => {
  const result = gladwell.lower("Hello, World!");
  expect(result).toBe("hello, world!");
});

test("Converts string to snakecase.", () => {
  const result = gladwell.snake("Hello, World!");
  expect(result).toBe("HELLO,_WORLD!");
});

test("Converts string to uppercase.", () => {
  const result = gladwell.upper("Hello, World!");
  expect(result).toBe("HELLO, WORLD!");
});
