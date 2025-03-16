import { root_style } from "@/styles/style";
import { View } from "react-native";

import ProfilePage from "./pages/main/profile_page";

export default function Index() {
  return (
    <View style={[root_style.container]}>
      <ProfilePage />
    </View>
  );
}
