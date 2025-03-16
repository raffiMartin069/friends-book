import { View, Text, StyleSheet } from "react-native";
import React from "react";

type Prop = {
  header_subtext: string;
};

export default function Header(prop: Prop) {
  return (
    <View style={[profile_style.header]}>
      <Text style={{ fontSize: 32, fontWeight: "bold", color: "white" }}>
        FriendsBook
      </Text>
      <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>
        {prop.header_subtext}
      </Text>
    </View>
  );
}

const profile_style = StyleSheet.create({
  header: {
    width: "100%",
    height: 100,
    backgroundColor: "#0866ff",
    justifyContent: "center",
    padding: 10,
  },
});
