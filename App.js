import React from "react";
import HomeScreen from "./src/pages/HomeScreen";
import NewTodo from "./src/pages/NewTodo";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    BG: '#171d31',
    primary: "rgb(158, 42, 155)",
    secondary: "rgb(109, 88, 105)",
    tertiary: "rgb(130, 83, 69)",
    gg: "#000",
  },
};

const Stack = createNativeStackNavigator();

export default function App(){
    return (
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">

          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Lista de Tarefas' }}
          />
          <Stack.Screen
            name="NewTodo"
            component={NewTodo}
            options={{ title: 'Nova Tarefa' }}
          />
            
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    )
}