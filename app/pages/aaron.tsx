import ProfileContext from "./shared/profile_context";
import { root_style } from "@/styles/style";
import { View } from "react-native";

import Header from "./shared/header";
import React from "react";

export default function AaronPage() {
  return (
    <View style={[root_style.container]}>
      <Header header_subtext="Find you friends with one click!" />
      <ProfileContext
        name="Aaron (Adams) Pinote"
        email="aaron.pinote@ctu.edu.ph"
        phone="0915 889 1253"
        address="Barangay Sawang Calero, Cebu City"
        img_src={require("@/assets/images/src/aaron.jpg")}
        age={21}
      />
    </View>
  );
}
