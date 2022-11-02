import React, {useEffect, useState} from 'react';
import { View, FlatList, ImageBackground, StyleSheet } from 'react-native';
import {Text } from 'react-native-paper'
import ref from '../../components/Firebase';

import Todo from '../HomeScreen/Todo';

export default function CompleteTodo({loading, route}) {

    const { ImageBG } = route.params;
    const [Completos, setCompletos] = useState([]);

    useEffect(() => {
        return ref.onSnapshot((querySnapshot) => {
            const listComp = [];
            querySnapshot.forEach(doc => {
                const { title, complete, name } = doc.data();
                if(complete === false) return;
                listComp.push({
                    id: doc.id,
                    title,
                    complete,
                    name,
                });
            });
    
            setCompletos(listComp);
    
            if (loading) {
                return(
                  <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                    <Text>Carregando...</Text>
                  </View>
                  );
            }
        })
    }, [])

    return(
        <View style={{flex: 1}}>
            <ImageBackground source={ImageBG} resizeMode="cover" style={styles.image} blurRadius={6}>
                <Text 
                    variant="titleLarge" 
                    style={{
                    borderBottomColor: '#000',
                    borderBottomWidth: 1
                    }}> Completas </Text>
                <FlatList
                style={{
                    flex: 1,
                    padding: 20,
                }}
                data={Completos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Todo {...item} />}
                />
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center"
      },
})