import React from "react";
import HomeScreen from "./src/pages/HomeScreen";
import NewTodo from "./src/pages/NewTodo";
import CompleteTodo from "./src/pages/CompleteTodo";
import Temas from "./src/pages/Temas";
import Tema1 from './src/Images/background.jpg';

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
    BGImage: Tema1,
    texttitle: "#fff",
    primary: "#f4511e",
    secondary: "rgb(109, 88, 105)",
    tertiary: "rgb(130, 83, 69)",
    gg: "#000",
  },
};

const tema = theme.colors.BGImage

const Stack = createNativeStackNavigator();

export default function App(){
    return (
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">

          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Lista de Tarefas 2.0',
            headerStyle: {
              backgroundColor: theme.colors.primary,
            },
            headerTintColor: theme.colors.texttitle,
            headerTitleStyle: {
              fontWeight: 'bold',
            }, }}
            initialParams={{ ImageBG: theme.colors.BGImage }}
          />
          <Stack.Screen
            name="NewTodo"
            component={NewTodo}
            options={{ title: 'Nova Tarefa',
            headerStyle: {
              backgroundColor: theme.colors.primary,
            },
            headerTintColor: theme.colors.texttitle,
            headerTitleStyle: {
              fontWeight: 'bold',
            }, }}
            initialParams={{ ImageBG: theme.colors.BGImage }}
          />
          <Stack.Screen
            name="CompleteTodo"
            component={CompleteTodo}
            options={{ title: 'Tarefas Concluídas',
            headerStyle: {
              backgroundColor: theme.colors.primary,
            },
            headerTintColor: theme.colors.texttitle,
            headerTitleStyle: {
              fontWeight: 'bold',
            }, }}
            initialParams={{ ImageBG: theme.colors.BGImage }}
          />
          <Stack.Screen
            name="Temas"
            component={Temas}
            options={{ title: 'Temas',
            headerStyle: {
              backgroundColor: theme.colors.primary,
            },
            headerTintColor: theme.colors.texttitle,
            headerTitleStyle: {
              fontWeight: 'bold',
            }, }}
            initialParams={{ ImageBG: theme.colors.BGImage }}
          />
            
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    )
}