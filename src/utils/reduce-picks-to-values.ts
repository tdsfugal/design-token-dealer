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
    if (!Array.isArray(pt)) {
      console.log("Error, token is not array", token, pt);
      continue;
    }

    const f = reduced[pt[0]];
    if (!f || !isObject(f)) {
      console.log("Error, f is not object ", f, pt, reduced);
      continue;
    }

    const c = f[pt[1]];
    if (!c || !isObject(c)) {
      console.log("Error, c is not an object ", c, pt, f);
      continue;
    }

    const v = c[pt[2]];
    if (!v || typeof v !== "string") {
      console.log("Error, v is not string ", v, pt, c);
      continue;
    }

    values[token] = v;
  }
  return values;
}
