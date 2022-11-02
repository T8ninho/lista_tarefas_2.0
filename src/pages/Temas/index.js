import React from 'react'
import { View, ImageBackground } from 'react-native'
import { Text } from 'react-native-paper'

export default function Temas({route}){

    const { ImageBG } = route.params;

    return(
        <View style={{flex: 1}}>
            <ImageBackground 
                source={ImageBG} 
                resizeMode="cover" 
                blurRadius={6} 
                style={{
                    flex: 1,
                    justifyContent: "center", 
                    alignItems: 'center'
                }}>
                <Text variant="titleLarge">Sou o Tema</Text>
            </ImageBackground>
        </View>
    )
}