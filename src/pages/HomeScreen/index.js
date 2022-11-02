import React, { useState, useEffect } from "react";
import firestore from '@react-native-firebase/firestore'
import { useTheme, Text, Appbar } from 'react-native-paper';
import { StyleSheet, ImageBackground } from "react-native";
import ImageBG from '../../Images/background.jpg';
import Todo from './Todo';
import { FlatList, View } from "react-native";
import FabButton from "../../components/FabButton";


export default function HomeScreen({navigation}) {

    const theme = useTheme();

    const [loading, setLoading] = useState(true);
    const [Completos, setCompletos] = useState([]);
    const [Incompletos, setIncompletos] = useState([]);

    const ref = firestore().collection('todos');

    async function Apagar() {
      await firestore()
          .collection('todos')
          .doc(id)
          .delete();
    }

    //Tarefas Incompletas
    useEffect(() => {
      return ref.onSnapshot((querySnapshot) => {
          const listInc = [];
          querySnapshot.forEach(doc => {
              const { title, complete, name } = doc.data();
              if(complete === true) return;
              listInc.push({
                  id: doc.id,
                  title,
                  complete,
                  name,
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



  //Tarefas Completas
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
      <Appbar style={{backgroundColor: theme.colors.primary}}>
        <Appbar.Content style={{alignItems: 'center'}} title={"Lista de Tarefas 2.0"} />
      </Appbar>
      {/* Tarefas Incompletas */}
      <Text 
        variant="titleLarge" 
        style={{
          borderBottomColor: '#000',
          borderBottomWidth: 1
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

      

      {/* Tarefas Completas */}
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
      <FabButton 
        Concluidas={() => {}}
        NovoItem={() => navigation.navigate('NewTodo')} 
        style={{ bottom: 80, right: 60 }}
      />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  modalHeader: {
    marginLeft: 10,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  modalTitle: {
    marginLeft: 15,
    fontSize: 23,
    color: '#fff',
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
})