import { Redirect, Stack } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { SafeAreaView } from "react-native-safe-area-context";
const Layout = () => {
  return (
    <SafeAreaView>
      <Redirect href={"/(drawer)/(tabs)/"} />
    </SafeAreaView>
  );
};

export default Layout;
