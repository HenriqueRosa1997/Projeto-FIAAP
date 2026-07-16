import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeAluno from "../Screens/Aluno/HomeAluno";
import { Login } from "../Screens/Login/Login";
import { HomeProfessor } from "../Screens/Professor/HomeProfessor";

export type RootStackParamList = {
  Login: undefined;

  Professor: undefined;

  Aluno: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />

      <Stack.Screen name="Professor" component={HomeProfessor} />

      <Stack.Screen name="Aluno" component={HomeAluno} />
    </Stack.Navigator>
  );
}
