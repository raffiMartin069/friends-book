import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { root_style } from "@/styles/style";
import { useLocalSearchParams } from "expo-router";

export default function ProfileInfo() {
    const text = ["Name", "Age", "Email", "Phone No.", "Address"];
    const locals = useLocalSearchParams();
    const name = locals.name;

    if (name === "Rodnie A. Caracena") {
        var img_src = require("@/assets/images/src/rodnie_pp.jpg");
        var info = ["Rodnie A. Caracena", "20", "rodniexcaracena@gmail.com", "0915 889 8485", "Bantayan Island, Cebu"];
    }

  return (
    <View style={local_style.container}>
        <Image style={local_style.image_style} source={img_src} />
        <View style={[{ marginTop: 20 }]}>
            {text.map((item, idx) => {
                return <Text style={[local_style.text_style, root_style.root_font]} key={idx} >{item}: {info[idx]}</Text>
            })}
        </View>
    </View>
  );
}

const local_style = StyleSheet.create({
  image_style: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  container: {
    flex: 1,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  text_style: {
    marginTop: 5,
    marginBottom: 5
  }
});
