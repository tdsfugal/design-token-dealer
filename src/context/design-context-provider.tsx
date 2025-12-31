import { PropsWithChildren } from "react";

import {
  ColorMode,
  DesignTheme,
  DesignContextType,
} from "../design-interfaces";

import DesignContext from "./_design-context";

import getReducedTokens from "../tokens/get-reduced-tokens";

const DesignContextProvider = (props: PropsWithChildren) => {
  // TODO: Implement color scheme detection for web
  // For now, defaulting to light mode
  const mode: ColorMode = "light";
  const theme: DesignTheme = "default";

  // At the component level a hook compares mode and theme with the prior values. If they
  // differ a function mines the reducedTokens tree for its new values.
  const value: DesignContextType = {
    mode,
    theme,
    reducedTokens: getReducedTokens(mode, theme),
  };

  return (
    <DesignContext.Provider value={value}>
      {props.children}
    </DesignContext.Provider>
  );
};

export default DesignContextProvider;
