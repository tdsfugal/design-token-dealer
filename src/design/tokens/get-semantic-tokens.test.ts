import getSemanticTokens from "./get-semantic-tokens";

describe.skip("getSemanticTokens", () => {
  it("returns the baseline semantic tokens", () => {
    expect(getSemanticTokens()).toEqual(
      require("@/design/baseline/semantic-tokens.json")
    );
  });
});
