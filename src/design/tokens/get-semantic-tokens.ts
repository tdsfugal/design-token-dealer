import { SemanticTokens } from "../design-interfaces";

import baseTokens from "@/design/semantic/_base-semantics.json";

export default function getSemanticTokens(): SemanticTokens {
  const semanticTokens: SemanticTokens = baseTokens;

  return semanticTokens;
}
