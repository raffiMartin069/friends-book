import { root_style } from "@/styles/style";
import { View } from "react-native";

import ProfileContext from "./shared/profile_context";
import Header from "./shared/header";
import React from "react";

export default function RodniePage() {
  var img_src = require("@/assets/images/src/rodnie_pp.jpg");
  var info = [
    "Rodnie A. Caracena",
    "20",
    "rodniexcaracena@gmail.com",
    "0915 889 8485",
    "Bantayan Island, Cebu",
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
