import {
  PrimitiveTokens,
  ReducedTokens,
  SemanticTokens,
} from "../../design-interfaces";

export const PRIMITIVE_TEST_TOKENS_LIGHT: PrimitiveTokens = {
  colors: {
    primary: {
      "0": "#AAF",
    },
    neutral: {
      "0": "#CCC",
    },
  },
  fonts: { size: { medium: "20px" } },
};

export const PRIMITIVE_TEST_TOKENS_DARK: PrimitiveTokens = {
  colors: {
    primary: {
      "0": "#22F",
    },
    neutral: {
      "0": "#222",
    },
  },
  fonts: { size: { medium: "22px" } },
};

export const SEMANTIC_TEST_TOKENS: SemanticTokens = {
  colors: {
    backgrounds: {
      main: ["colors", "neutral", "0"],
    },
    boundaries: {
      divider: ["colors", "primary", "0"],
    },
  },
  fonts: {
    title: {
      size: ["fonts", "size", "medium"],
    },
  },
};

export const REDUCED_TOKENS_LIGHT: ReducedTokens = {
  colors: {
    backgrounds: {
      main: "#CCC",
    },
    boundaries: {
      divider: "#AAF",
    },
  },
  fonts: {
    title: {
      size: "20px",
    },
  },
};

export const REDUCED_TOKENS_DARK: ReducedTokens = {
  colors: {
    backgrounds: {
      main: "#222",
    },
    boundaries: {
      divider: "#22F",
    },
  },
  fonts: {
    title: {
      size: "22px",
    },
  },
};
