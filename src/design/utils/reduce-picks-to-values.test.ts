import {
  REDUCED_TOKENS,
  COMPONENT_TEST_PICKS,
  COMPONENT_TEST_VALUES,
} from "./__fixtures__";

import reducePicksToValues from "./reduce-picks-to-values";

// TODO - this funciton is not robust yet. Put in edge cases.
describe("reducePicksToValues", () => {
  it("reduces component picks to component values", () => {
    expect(reducePicksToValues(COMPONENT_TEST_PICKS, REDUCED_TOKENS)).toEqual(
      COMPONENT_TEST_VALUES
    );
  });
});
