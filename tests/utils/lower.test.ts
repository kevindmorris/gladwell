import { lower } from "../../src";

test("Converts string to lowercase.", () => {
  const result = lower("Hello, World!");
  expect(result).toBe("hello, world!");
});
