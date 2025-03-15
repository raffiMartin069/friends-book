import { View } from "react-native";
import ProfilePage from "./pages/profile_page";
import ProfileInfo from "./pages/profile_info";
import { root_style } from "@/styles/style";

export default function Index() {
  return (
    <View style={[root_style.container]}>
        <ProfilePage />
    </View>
  );
}
