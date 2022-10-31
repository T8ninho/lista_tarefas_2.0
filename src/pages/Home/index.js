import React from "react";
import {View, Text} from 'react-native';


export default function Filmes(){

    const [searchElement, setElement] = React.useState([]);
    const navigation = useNavigation();

    const valorDigitado = '';

    const addItem = (valor) => {
        setElement([ ...searchElement, {
            text: {valor},
        }])
    }

    return(
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                            <Feather name="chevron-left" size={25} color="#53565A" ></Feather> 
                        </TouchableOpacity>
                    </View>

                    <View style={styles.searchBar}>
                        <View
                        style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                            <Icon name="search" size={20} color="grey" />
                            <TouchableOpacity>
                                <TextInput 
                                style={styles.Search}
                                editable={true}
                                value={valorDigitado}
                                placeholder={"Pesquisar"}
                                returnKeyType={'search'}
                                onSubmitEditing={setElement(valorDigitado)}
                                >
                                </TextInput>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                {/* <View>
                    <FlatList
                    data={searchElement}
                    renderItem={({item}) => {
                        return <Text>{item}</Text>
                    }}
                    />
                </View> */}
            </View>
        </SafeAreaView>
    )
}