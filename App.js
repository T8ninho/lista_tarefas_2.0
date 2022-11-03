import React, { useState } from "react";
import HomeScreen from "./src/pages/HomeScreen";
import NewTodo from "./src/pages/NewTodo";
import CompleteTodo from "./src/pages/CompleteTodo";
import Temas from "./src/pages/Temas";

import Flor from './src/Images/background.jpg'
import Raposa from './src/Images/Raposa.png'
import Papel from './src/Images/Papel.jpg'
import Vidro from './src/Images/Vidro.jpg'
import Desenho from './src/Images/Desenho.jpg'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';

const Stack = createNativeStackNavigator();

export default function App(){

  const Tema1 = Flor;
  const Tema2 = Raposa;
  const Tema3 = Papel;
  const Tema4 = Vidro;
  const Tema5 = Desenho;

  const [Tema, setTema] = useState(Tema1)

  const theme = {
    ...DefaultTheme,
    colors: {
      BG: '#171d31',
      BGImage: Tema,
      texttitle: "#fff",
      primary: "#f4511e",
      secondary: "rgb(109, 88, 105)",
      tertiary: "rgb(130, 83, 69)",
      gg: "#000",
    },
  };

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
            options={({ route }) => ({ title: route.params.name,
              headerStyle: { backgroundColor: theme.colors.primary },
              headerTintColor: theme.colors.texttitle,
              headerTitleStyle: { fontWeight: 'bold' }, 
            })}
            initialParams={{ ImageBG: theme.colors.BGImage }}
          />
            
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    )
}