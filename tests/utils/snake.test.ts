import { snake } from "../../src";

test("Converts string to snakecase.", () => {
  const result = snake("Hello, World!");
  expect(result).toBe("HELLO,_WORLD!");
});
