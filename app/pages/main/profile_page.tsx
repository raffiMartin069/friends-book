import { root_style } from "@/styles/style";
import { View } from "react-native";
import React from "react";

import Header from "../shared/header";
import Body from "./body";

export default function ProfilePage() {
  return (
    <View style={[root_style.container]}>
      <Header header_subtext="Scan through you friend list!" />
      <Body />
    </View>
  );
}
