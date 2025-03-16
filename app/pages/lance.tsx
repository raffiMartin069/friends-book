import { root_style } from "@/styles/style";
import { View } from "react-native";
import React from "react";

import ProfileContext from "./shared/profile_context";
import Header from "./shared/header";

export default function LancePage() {
  var img_src = require("@/assets/images/src/lj.jpg");
  var info = [
    "Lance Joseph Lines",
    "23",
    "lance.lines@ctu.edu.ph",
    "0915 889 2316",
    "Miller, Barangay Taboan, Cebu City",
  ];

  return (
    <View style={[root_style.container]}>
      <Header header_subtext="Find you friends with one click!" />
      <ProfileContext
        name={info[0]}
        email={info[2]}
        phone={info[3]}
        address={info[4]}
        img_src={img_src}
        age={parseInt(info[1])}
      />
    </View>
  );
}
