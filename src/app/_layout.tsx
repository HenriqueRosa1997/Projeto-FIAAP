import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Login",
        }}
      />

      <Stack.Screen
        name="professor/index"
        options={{
          title: "Professor",
        }}
      />

      <Stack.Screen
        name="aluno/index"
        options={{
          title: "Aluno",
        }}
      />
    </Stack>
  );
}
