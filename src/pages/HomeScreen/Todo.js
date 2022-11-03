import React from 'react';
import firestore from '@react-native-firebase/firestore';
import { List, Text, Button } from 'react-native-paper';

function Todo({id, title, complete, Quantidade}) {
    async function toggleComplete() {
        if(complete === true) {
            await firestore()
            .collection('todos')
            .doc(id)
            .delete();
        } else {
            await firestore()
            .collection('todos')
            .doc(id)
            .update({
            complete: !complete,
        });
        }
        
    }

    

    return(
        <>
            <List.Item
                style={{
                    borderBottomColor: '#000',
                    borderWidth: 1,
                    margin: 3,
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    borderRadius: 10
                }}
                title={title}
                onPress={() => toggleComplete()}
                left={props => (<List.Icon {...props} icon={complete ? 'close' : 'check'} />
                )}
                right={props => (<Text>{Quantidade}</Text>)}
            ><Text>oi</Text></List.Item>
        </>
    );
}

export default React.memo(Todo);