import { ProfileContextEnum } from "@/enum/profile_context_enum";
import { View, Text, StyleSheet, Image } from "react-native";
import { root_style } from "@/styles/style";
import React from "react";

type Prop = {
  name: string;
  age: number;
  email: string;
  phone: string;
  address: string;
  img_src: any;
};

export default function ProfileContext(prop: Prop) {
  const text = [
    ProfileContextEnum[ProfileContextEnum.Name],
    ProfileContextEnum[ProfileContextEnum.Age],
    ProfileContextEnum[ProfileContextEnum.Email],
    ProfileContextEnum[ProfileContextEnum.Phone],
    ProfileContextEnum[ProfileContextEnum.Address],
  ];

  var info = [
    prop.name,
    prop.age.toString(),
    prop.email,
    prop.phone,
    prop.address,
  ];

  return (
    <View style={local_style.container}>
      <Image style={local_style.image_style} source={prop.img_src} />
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
    flexShrink: 1,
    flexWrap: "wrap",
  },
});
