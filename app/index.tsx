import { SafeAreaView } from "react-native-safe-area-context";
import { root_style } from "@/styles/style";

import ProfilePage from "./pages/main/profile_page";

export default function Index() {
  return (
    <SafeAreaView style={[root_style.container]}>
      <ProfilePage />
    </SafeAreaView>
  );
}
