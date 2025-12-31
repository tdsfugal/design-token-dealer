jest.mock("./get-primitive-tokens");
jest.mock("./get-semantic-tokens");

import getPrimitiveTokens from "./get-primitive-tokens";
import getSemanticTokens from "./get-semantic-tokens";

import getReducedTokens from "./get-reduced-tokens";

describe("getReducedTokens", () => {
  it("returns dark set of reduced tokens if mode is set to dark", () => {
    const expected = require("./__fixtures__").REDUCED_TOKENS_DARK;
    const actual = getReducedTokens("dark", "default");
    expect(getPrimitiveTokens).toHaveBeenCalledWith("dark", "default");
    expect(getSemanticTokens).toHaveBeenCalledWith();
    expect(actual).toEqual(expected);
  });

  it("returns light set of reduced tokens if mode is set to light", () => {
    const expected = require("./__fixtures__").REDUCED_TOKENS_LIGHT;
    const actual = getReducedTokens("light", "default");
    expect(getPrimitiveTokens).toHaveBeenCalledWith("dark", "default");
    expect(getSemanticTokens).toHaveBeenCalledWith();
    expect(actual).toEqual(expected);
  });

  it("throws error if mode is not in the enum set ", () => {
    expect(() => getReducedTokens("not a color mode", "default")).toThrow();
  });
});
