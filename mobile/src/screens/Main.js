import React, {useState} from 'react';
import { StyleSheet, View, Text, Image, TextInput} from 'react-native';

function Main() {
    const [name, setName] = useState('');

    return (
        <View style={styles.container}>
            <Image source={require ('../../assets/pokemon.png')} style={styles.img}/>

            <Text style={styles.title}>Adicionar Pokémon</Text>

            <Text style={styles.infoText}>Nome do Pokémon</Text>
            <TextInput
                style={styles.input}
                onChangeText={text => setName(text)}
                value={name}
            />
        </View>
    ); 
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: 'column',
        flex: 1,
    },
    img: {
        flex: 1,
        alignContent: "flex-start",
        width: 250,
        maxHeight: 100,
        resizeMode: "contain",
        marginVertical: 10,
    },  
    title: {
        fontSize: 30,
    },
    input: {
        borderColor: "#000000",
        borderWidth: 3,
        borderRadius: 30,
        height: 40,
        width: 200,
        fontSize: 24,
        paddingLeft: 10,
    },
    infoText: {
        fontSize: 20,
        marginTop: 10,
        marginBottom: 5,
    },
});

export default Main;