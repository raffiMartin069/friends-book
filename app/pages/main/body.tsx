import { View, Text, StyleSheet, Image } from "react-native";
import { Link } from "expo-router";
import React from "react";

function profileNavigator(name: string) {
  let path: string = "";

  if (name === null || name === "" || name === undefined) {
    throw new Error("Something went wrong!");
  }

  if (name === "Rodnie A. Caracena") {
    path = "/pages/rodnie";
  }

  if (name === "Raphael H. Bellosillo") {
    path = "/pages/raphael";
  }

  if (name === "Lance Joseph Lines") {
    path = "/pages/lance";
  }

  if (name === "Adrianne Villarta") {
    path = "/pages/adrianne";
  }

  if (name === "Aaron (Adams) Pinote") {
    path = "/pages/aaron";
  }

  return path;
}

export default function Body() {
  const person = [
    "Rodnie A. Caracena",
    "Raphael H. Bellosillo",
    "Lance Joseph Lines",
    "Adrianne Villarta",
    "Aaron (Adams) Pinote",
  ];
  const imagePath = [
    require("@/assets/images/src/rodnie_pp.jpg"),
    require("@/assets/images/src/raph_pp.jpg"),
    require("@/assets/images/src/lj.jpg"),
    require("@/assets/images/src/drianne_2.jpg"),
    require("@/assets/images/src/aaron.jpg"),
  ];
  return (
    <View style={[profile_style.local_container]}>
      {person.map((person, idx) => {
        let path = null;
        try {
          path = profileNavigator(person);
        } catch (e) {
          console.error(e);
        }
        return (
          <View style={[profile_style.text_container]} key={idx}>
            <Link href={path as any}>
              <View style={[profile_style.row]}>
                <Image
                  source={imagePath[idx]}
                  style={{ width: 100, height: 100, borderRadius: 125 }}
                />
                <Text style={profile_style.text}>{person}</Text>
              </View>
            </Link>
          </View>
        );
      })}
    </View>
  );
}

const profile_style = StyleSheet.create({
  text_container: {
    marginTop: 15,
    marginBottom: 15,
  },
  text: {
    fontSize: 20,
    textDecorationLine: "none",
    color: "blue",
    marginLeft: 10,
  },
  local_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    alignSelf: "center",
  },
  row: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
});