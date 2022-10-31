import React from 'react';
import firestore from '@react-native-firebase/firestore';
import { List, Text, Button } from 'react-native-paper';

function Todo({id, title, complete, name}) {
    async function toggleComplete() {
        await firestore()
            .collection('todos')
            .doc(id)
            .update({
                complete: !complete,
            });
    }

    

    return(
        <>
            <List.Item
                style={{
                    borderBottomColor: '#000',
                    borderWidth: 1,
                    margin: 3
                }}
                title={title}
                onPress={() => toggleComplete()}
                left={props => (<List.Icon {...props} icon={complete ? 'check' : 'cancel'} />
                )}
                right={props => (<Text>{name}</Text>)}
            />
        </>
    );
}

export default React.memo(Todo);