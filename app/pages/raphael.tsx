import { View } from "react-native";
import { root_style } from "@/styles/style";
import React from "react";

import ProfileContext from "./shared/profile_context";
import Header from "./shared/header";

export default function RaphaelPage() {
  var img_src = require("@/assets/images/src/raph_pp.jpg");
  var info = [
    "Raphael H. Bellosillo",
    "22",
    "raphael.bellosillo@ctu.edu.ph",
    "0915 889 7777",
    "Mandaue City, Cebu",
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
