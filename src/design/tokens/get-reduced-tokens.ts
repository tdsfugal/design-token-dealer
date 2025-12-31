import {
  ColorMode,
  DesignTheme,
  ReducedTokens,
  PrimitiveToken,
} from "../design-interfaces";

import getPrimitiveTokens from "./get-primitive-tokens";
import getSemanticTokens from "./get-semantic-tokens";

export default function getReducedTokens(
  mode: ColorMode,
  theme: DesignTheme
): ReducedTokens {
  // make a copy of the defaul tokens
  const primitiveTokens = getPrimitiveTokens(mode, theme);
  const semanticTokens = getSemanticTokens();

  // Create a new object for the reduced tokens
  const reduced: ReducedTokens = {};
  for (const f in semanticTokens) {
    const foundation = semanticTokens[f];
    if (!foundation) console.log("Foundation error.  f = ", f);

    // Create a new object for this foundation
    reduced[f] = {};

    for (const p in foundation) {
      const property = foundation[p];
      if (!property) console.log("Property error.  p = ", f, p);

      // Create a new object for this property
      reduced[f][p] = {};

      for (const m in property) {
        const pt: PrimitiveToken = property[m];
        if (!pt) console.log("Modifier error.  m = ", f, p, m);

        // Extract the raw value from the primitive token
        const rawF = primitiveTokens[pt[0]];
        if (!rawF) console.log("Primitive Token foundation Error ", pt);
        const rawC = rawF[pt[1]];
        if (!rawC) console.log("Primitive Token category Error ", pt);
        const rawV = rawC[pt[2]];
        if (!rawV) console.log("Primitive Token value Error ", pt);

        // Create a new key:value pair for this modifier:value token
        reduced[f][p][m] = rawV;
      }
    }
  }

  return reduced;
}

// TODO - Take dimensions and proportions out of JSON inputs. They should be
// algorithms that parse strings.  The trick is figuring out which of these
//  primitive tokens are called for in the semantic token set.
