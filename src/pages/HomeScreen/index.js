import React, { useState, useEffect, cloneElement } from "react";
import { useTheme, Text, Appbar } from 'react-native-paper';
import { StyleSheet, ImageBackground } from "react-native";

import Todo from './Todo';
import { FlatList, View } from "react-native";
import FabButton from "../../components/FabButton";
import ref from "../../components/Firebase";


export default function HomeScreen({route, navigation}) {

    const { ImageBG } = route.params;
    const [loading, setLoading] = useState(true);
    const [Incompletos, setIncompletos] = useState([]);


    //Tarefas Incompletas
    useEffect(() => {
      return ref.onSnapshot((querySnapshot) => {
          const listInc = [];
          querySnapshot.forEach(doc => {
              const { title, complete, Quantidade } = doc.data();
              if(complete === true) return;
              listInc.push({
                  id: doc.id,
                  title,
                  complete,
                  Quantidade,
              });
          });

          setIncompletos(listInc);

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
      {/* Tarefas Incompletas */}
      <Text 
        variant="titleLarge" 
        style={{
          borderBottomColor: '#000',
          borderBottomWidth: 1,
          textAlign: 'center',
        }}> Incompletas </Text>
      <FlatList
        style={{
            flex: 1,
            padding: 20,
        }}
        data={Incompletos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Todo {...item} />}
      />
 
      <FabButton 
        Temas={() => navigation.navigate('Temas')}
        Concluidas={() => navigation.navigate('CompleteTodo')}
        NovoItem={() => navigation.navigate('NewTodo')} 
        style={{ bottom: 80, right: 60 }}
      />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center"
  },
})