import React, { PropsWithChildren } from "react";
import { useColorScheme, ColorSchemeName } from "react-native";

import {
  ColorMode,
  DesignTheme,
  DesignContextType,
} from "../design-interfaces";

import DesignContext from "./_design-context";

import getReducedTokens from "../tokens/get-reduced-tokens";

const DesignContextProvider = (props: PropsWithChildren) => {
  const colorScheme: ColorSchemeName = useColorScheme();

  const mode: ColorMode = colorScheme || "light";
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
