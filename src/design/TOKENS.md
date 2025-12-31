# Tokens

## Raw Values

**string**

Raw values are always a string. How the string should be interpreted is encoded in the path to the value. For example, a color would have a string "#a4d599", but a type font.size would be in pixels and a font.weight in something like "bold"

## Primitive Tokens

**[ foundation: string, category: string, option: string]**

Primitive tokens are paths to a raw token value. These paths are fixed for a perticular version of the clock.
Different themes are implemented by changing the raw values in the leaf position of the primitive token tree.

### Schema:

Primitive tokens are the paths in a primitive token tree that carry the raw values as leaves.
1 - Foundation: This is the base that separates the main types - color, font, spacing, etc.  
2 - Category: The category terms are foundation specific.
3 - Option: These are the abstract names of specific raw values.

### Examples:

- The primary blue color two shades darker than default blue is ["color", "primary". "background"]
- The medium font size for headers is ["font", "size", "medium"]

## Semantic Tokens

**[ foundation, property, modifier]**

Semantic tokens map use cases against primitive token values.

### Schema

1 - Foundation: These match the primitive token foundations. They are categories like color, font, spaceing
2 - Property: The property feild defines the scope of the token
2 - The modifier field specializes the scope to a particular use case. Modifiers can be multivalued, with the values separated by periods.

### Examples:

- ["color", "button", "radio.small.selected"] - describes the color of a small radio button that has been selected
- []
