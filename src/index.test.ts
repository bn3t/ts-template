import { helloWorld, helloWorldAsync } from ".";

describe("Test index.ts", () => {
  it("should be Hello, world!", () => {
    const actual = helloWorld();
    expect(actual).toBe("Hello, world!");
  });

  it("should be Hello, world! - Async", async () => {
    const actual = await helloWorldAsync();
    expect(actual).toBe("Hello, async world!");
  });
});
