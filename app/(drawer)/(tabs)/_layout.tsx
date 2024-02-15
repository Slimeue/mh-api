import { Tabs } from "expo-router";
import { GlobalColors } from "../../../constants/colors";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { backgroundColor: GlobalColors.red200 },
        headerShown: false,
        tabBarActiveTintColor: GlobalColors.whiteTxt100,
        tabBarInactiveTintColor: GlobalColors.whiteTxt500,
      }}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="small" />
    </Tabs>
  );
};

export default Layout;
