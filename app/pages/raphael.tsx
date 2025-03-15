import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { root_style } from "@/styles/style";

export default function RaphaelPage() {
  const text = ["Name", "Age", "Email", "Phone No.", "Address"];
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
      <View
        style={[
          {
            width: "100%",
            height: 100,
            backgroundColor: "#0866ff",
            justifyContent: "center",
            padding: 10,
          },
        ]}
      >
        <Text style={{ fontSize: 32, fontWeight: "bold", color: "white" }}>
          FriendsBook
        </Text>
        <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>
          Find you friends with one click!
        </Text>
      </View>
      <View style={local_style.container}>
        <Image style={local_style.image_style} source={img_src} />
        <View style={[{ marginTop: 20 }]}>
          {text.map((item, idx) => {
            return (
              <Text
                style={[local_style.text_style, root_style.root_font]}
                key={idx}
              >
                {item}: {info[idx]}
              </Text>
            );
          })}
        </View>
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
    marginBottom: 5,
  },
});
