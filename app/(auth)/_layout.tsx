import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Index", headerShown: false }}
      />
      <Stack.Screen
        name="register"
        options={{ title: "Register", headerShown: false }}
      />
    </Stack>
  );
}
