import { ColorMode, DesignTheme } from "../../design-interfaces";

import {
  PRIMITIVE_TEST_TOKENS_DARK,
  PRIMITIVE_TEST_TOKENS_LIGHT,
} from "../__fixtures__";

const getPrimitiveTokens = jest.fn((mode: ColorMode, _theme?: DesignTheme) => {
  switch (mode) {
    case "light":
      return PRIMITIVE_TEST_TOKENS_LIGHT;
    case "dark":
      return PRIMITIVE_TEST_TOKENS_DARK;
    default:
      throw new Error(`Test case for mode: ${mode}`);
  }
});

export default getPrimitiveTokens;
