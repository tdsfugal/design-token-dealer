import { useContext, useState, useEffect } from "react";

import DesignContext from "../context/_design-context";
import {
  ComponentTokenPicks,
  ComponentTokenValues,
} from "../design-interfaces";

import reducePicksToValues from "../utils/reduce-picks-to-values";

export default function useTokens(
  picks: ComponentTokenPicks
): ComponentTokenValues | null {
  // This stores the component tokens between renders.
  const [componentTokens, setComponentTokens] =
    useState<ComponentTokenValues | null>(null);
  // These values are provided via a Provider.
  const { mode, theme, reducedTokens } = useContext(DesignContext);

  // On initial load and when parameters change the tokens are recalculated
  useEffect(() => {
    if (mode && theme && reducedTokens) {
      const newTokens: ComponentTokenValues = reducePicksToValues(
        picks,
        reducedTokens
      );
      setComponentTokens(newTokens);
    }
  }, [mode, theme, reducedTokens]);

  return componentTokens;
}
