import React, { useState, useEffect } from "react";
import firestore from '@react-native-firebase/firestore'
import { useTheme } from 'react-native-paper';

import Todo from './Todo';

import { FlatList, ScrollView, Text } from "react-native";
import { Appbar, TextInput, Button } from "react-native-paper";


export default function Todos() {

    const theme = useTheme();

    const [todo, setTodo] = useState('');
    const [loading, setLoading] = useState(true);
    const [Completos, setCompletos] = useState([]);
    const [Incompletos, setIncompletos] = useState([]);
    const [nomes, setNomes] = useState('');

    const ref = firestore().collection('todos');

    async function addTodo(){
      if(todo === '') return;
      if(nomes === '') return;
      await ref.add({
            title: todo,
            complete: false,
            name: nomes
        });
        setTodo('');
        setNomes('')
    }

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
              return null;
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
            return null;
        }cv
    })
}, [])

  return(
    <>
      <Appbar style={{backgroundColor: theme.colors.primary}}>
        <Appbar.Content style={{alignItems: 'center'}} title={"Lista de Tarefas 2.0"} />
      </Appbar>
      {/* Tarefas Incompletas */}
      <FlatList
        style={{
            flex: 1,
            backgroundColor: theme.colors.secondary,
            padding: 20,
        }}
        data={Incompletos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Todo {...item} />}
      />
      {/* Tarefas Completas */}
      <FlatList
        style={{
            flex: 1,
            backgroundColor: theme.colors.tertiary,
            padding: 20,
        }}
        data={Completos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Todo {...item}  onPress={Apagar}/>}
      />
      <TextInput mode='outlined' label={'Nova Tarefa'} value={todo} onChangeText={setTodo} />
      <TextInput mode="contained" label={'Novo Nome'} value={nomes} onChangeText={setNomes} />
      <Button mode="contained" onPress={() => addTodo()}>Adicinar Tarefa</Button>
    </>
  );
}