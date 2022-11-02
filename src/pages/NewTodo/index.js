import React, {useState} from 'react';
import firestore from '@react-native-firebase/firestore'
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import { useTheme } from 'react-native-paper';

export default function NewTodo({navigation}) {

    const ref = firestore().collection('todos');

    const theme = useTheme();
    const [todo, setTodo] = useState('');
    const [nomes, setNomes] = useState('');

    async function addTodo(){
        if(todo === '') return;
        if(nomes === '') return;
        await ref.add({
              title: todo,
              complete: false,
              name: nomes
          });
          setTodo('');
          setNomes('');
          navigation.goBack()
      }
    
    return(
        <View style={{backgroundColor: theme.colors.BG, flex: 2}}>
            <TextInput mode='outlined' label={'Nova Tarefa'} value={todo} onChangeText={setTodo} />
            <TextInput mode="contained" label={'Novo Nome'} value={nomes} onChangeText={setNomes} />
            <Button mode="contained" onPress={() => addTodo()}>Adicinar Tarefa</Button>
        </View>
    )
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