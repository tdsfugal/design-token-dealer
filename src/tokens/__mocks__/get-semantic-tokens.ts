import { SEMANTIC_TEST_TOKENS } from "../__fixtures__";

const getSemanticTokens = jest.fn(() => {
  return SEMANTIC_TEST_TOKENS;
});

export default getSemanticTokens;
