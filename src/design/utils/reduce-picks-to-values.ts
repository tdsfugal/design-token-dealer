import {
  ComponentTokenPicks,
  ComponentTokenValues,
  ReducedTokens,
} from "../design-interfaces";

function isObject(obj: any): boolean {
  return obj != null && obj.constructor.name === "Object";
}

export default function reducePicksToValues(
  picks: ComponentTokenPicks,
  reduced: ReducedTokens
): ComponentTokenValues {
  const values: ComponentTokenValues = {};
  for (const token in picks) {
    const pt = picks[token];
    if (!Array.isArray(pt)) console.log("Error, token is not array", token, pt);

    const f = reduced[pt[0]];
    if (!isObject(f)) console.log("Error, f is not object ", f, pt, reduced);

    const c = f[pt[1]];
    if (!isObject(c)) console.log("Error, c is not an object ", c, pt, f);

    const v = c[pt[2]];
    if (typeof v !== "string") console.log("Error, v is not string ", v, pt, c);

    values[token] = v;
  }
  return values;
}
