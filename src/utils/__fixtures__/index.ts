import {
  ReducedTokens,
  ComponentTokenPicks,
  ComponentTokenValues,
} from "../../design-interfaces";

export const REDUCED_TOKENS: ReducedTokens = {
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

export const COMPONENT_TEST_PICKS: ComponentTokenPicks = {
  panelBackgroundColor: ["colors", "backgrounds", "main"],
  panelBoundaryColor: ["colors", "boundaries", "divider"],
  titleTextSize: ["fonts", "title", "size"],
};

export const COMPONENT_TEST_VALUES: ComponentTokenValues = {
  panelBackgroundColor: "#CCC",
  panelBoundaryColor: "#AAF",
  titleTextSize: "20px",
};
