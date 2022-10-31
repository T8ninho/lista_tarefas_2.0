import React from "react";
import {View, Text} from 'react-native';
import Todos from "./src/pages/Home";
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    myOwnColor: '#BADA55',
    primary: "rgb(158, 42, 155)",
    secondary: "rgb(109, 88, 105)",
    tertiary: "rgb(130, 83, 69)",
    gg: "#000",
  },
};

export default function App(){
    return (
      <PaperProvider theme={theme}>
        <Todos />
      </PaperProvider>
    )
}