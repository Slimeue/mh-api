import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="[weapon]" options={{ title: "Weapon" }} />
    </Stack>
  );
};

export default Layout;
