import { Drawer } from "expo-router/drawer";
import { GlobalColors } from "../../constants/colors";

const Layout = () => {
  return (
    <Drawer
      screenOptions={{
        headerStyle: { backgroundColor: GlobalColors.red200 },
        headerTintColor: GlobalColors.whiteTxt100,
      }}
    >
      <Drawer.Screen name="(tabs)" options={{ title: "Monsters" }} />
      <Drawer.Screen name="weapons" options={{ title: "Weapons" }} />
    </Drawer>
  );
};

export default Layout;
