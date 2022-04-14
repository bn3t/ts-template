import { helloWorld } from ".";

describe("Test index.ts", () => {
  it("should be Hello, world!", () => {
    const actual = helloWorld();
    expect(actual).toBe("Hello, world!");
  });
});
