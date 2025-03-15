import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { root_style } from "@/styles/style";
import { Link } from "expo-router";

function profileNavigator(name: string) {
  let path: string = "";

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

export default function ProfilePage() {
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
    require("@/assets/images/src/drianne_1.jpg"),
    require("@/assets/images/src/aaron.jpg"),
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
          Scan through you friend list!
        </Text>
      </View>
      <View style={[profile_style.local_container]}>
        {person.map((person, idx) => {
          console.log(person);
          let path = profileNavigator(person);
          return (
            <View style={[profile_style.text_container]} key={idx}>
              <View style={[profile_style.row]}>
                <Image
                  source={imagePath[idx]}
                  style={{ width: 50, height: 50 }}
                />

                <Link href={path as any}>
                  <Text style={profile_style.text}>{person}</Text>
                </Link>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const profile_style = StyleSheet.create({
  text_container: {
    marginTop: 5,
    marginBottom: 5,
  },
  text: {
    fontSize: 20,
    textDecorationLine: "underline",
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
    gap: 10,
    alignItems: "center",
  },
});
