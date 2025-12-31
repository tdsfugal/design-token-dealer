import { DesignTheme, ColorMode, PrimitiveTokens } from "../design-interfaces";

import baselinePrimitives from "@/design/primitive/_base-primitives.json";

export default function getPrimitiveTokens(
  mode: ColorMode,
  theme: DesignTheme // Theme is curently a stub
): PrimitiveTokens {
  let variants: PrimitiveTokens = {};
  switch (mode) {
    case "dark":
      variants = require("@/design/primitive/variants/default-dark.json");
      break;
    case "light":
      variants = require("@/design/primitive/variants/default-light.json");
      break;
    default:
      throw new Error("Unknown color mode");
  }
  return { ...baselinePrimitives, ...variants };
}

// TODO - Take dimensions and proportions out of JSON inputs. They should be
// algorithms that parse strings.
