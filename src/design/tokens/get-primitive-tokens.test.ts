import getPrimitiveTokens from "./get-primitive-tokens";

describe.skip("getPallate", () => {
  it("returns the default dark pallette with mode set to dark and theme set to default", () => {
    expect(getPrimitiveTokens("dark", "default")).toEqual(
      require("@/design/themes/primitives-default-dark.json")
    );
  });

  it("returns the default light pallette with mode set to light and theme set to default", () => {
    expect(getPrimitiveTokens("light", "default")).toEqual(
      require("@/design/themes/primitives-default-light.json")
    );
  });

  it("throws error if mode is not in the enum set ", () => {
    expect(() => getPrimitiveTokens("not a color mode", "default")).toThrow();
  });
});
