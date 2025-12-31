// ========= Descriptors  ==================================

// System color mode
export type ColorMode = "light" | "dark";

// The theme variants have both an id and an instantiation.  This is restrected in this app to the color pallet.
export type DesignTheme = string;

// ======= Values ============================

// Raw values are strings undertood in context of the path to them.
export type RawTokenValue = string;

// ======= Primitive Tokens ============================

// Path to a particular raw value in the PrimitiveTokens tree.
// [<foundation>, <category>, <option>]
export type PrimitiveToken = [string, string, string];

// The primitive tokens map defines pallets, fonts, and other fixed values for both light and dark mode.
export interface PrimitiveTokens {
  [foundation: string]: {
    [category: string]: {
      [option: string]: RawTokenValue;
    };
  };
}

// ======= Semantic Tokens =====================

// Path to a particular primitive token in the SemanticTokens tree
export type SemanticToken = [string, string, string];

// The semantic tokens tree is static; it bridges between component needs and primitive values.
export interface SemanticTokens {
  [foundation: string]: {
    [property: string]: {
      [modifier: string]: PrimitiveToken;
    };
  };
}

// ======== Context ============================

// The reduced token tree is a pre-processed reduced set of Semantic tokens to raw values
export interface ReducedTokens {
  [foundation: string]: {
    [property: string]: {
      [modifier: string]: RawTokenValue;
    };
  };
}

// The mode and theme fields are metadata about the origins of the reduced token tree
export type DesignContextType = {
  mode?: ColorMode;
  theme?: DesignTheme;
  reducedTokens?: ReducedTokens;
};

// ======== Component Tokens =================

// Component-specific name for a design system value
export type ComponentToken = string;

// Map of component tokens to semantic tokens.  Used by components to request values on context change.
export interface ComponentTokenPicks {
  [token: ComponentToken]: SemanticToken;
}

// Map to component tokens to values. Used by components to render elements.
export interface ComponentTokenValues {
  [token: ComponentToken]: RawTokenValue;
}
