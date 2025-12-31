import { SemanticTokens } from "../design-interfaces";

import baseTokens from "@/design-example/semantic/_base-semantics.json";

export default function getSemanticTokens(): SemanticTokens {
  // Type assertion needed because JSON import doesn't preserve tuple types
  // Arrays in JSON are imported as string[] but we need them as [string, string, string] tuples
  const semanticTokens = baseTokens as unknown as SemanticTokens;

  return semanticTokens;
}
