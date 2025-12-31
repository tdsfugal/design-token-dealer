import React, { PropsWithChildren } from "react";

import { useFonts, NotoMusic_400Regular } from "@expo-google-fonts/noto-music";

export default function FontLoader(props: PropsWithChildren) {
  let [fontsLoaded] = useFonts({
    NotoMusic_400Regular,
  });

  return fontsLoaded ? <>{props.children}</> : null;
}
