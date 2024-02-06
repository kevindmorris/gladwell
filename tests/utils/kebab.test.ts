import { kebab } from "../../src";

test("Converts string to kebabcase.", () => {
  const result = kebab("Hello, World!");
  expect(result).toBe("hello,-world!");
});
