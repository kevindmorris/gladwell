import { upper } from "../../src";

test("Converts string to uppercase.", () => {
  const result = upper("Hello, World!");
  expect(result).toBe("HELLO, WORLD!");
});
