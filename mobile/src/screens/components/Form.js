import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, Modal, TouchableHighlight, View} from 'react-native';
import {RadioButton} from 'react-native-paper';
import GLOBAL from '../../Global';
import pokeApi from '../../services/pokeApi';

function Form() {

    const [pokemon, setPokemon] = useState([]);
    const [pokemons, setPokemons] = useState([]);

    const [gender, setGender] = useState('female');

    const [shiny, setShiny] = useState(false);

    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
      async function loadPokemons() {
        const res = await pokeApi.get('?offset=0&limit=807');

        setPokemons(res.data.results);
      }
      loadPokemons();
    }, []);

    function selectedChange(pokemon) {
      setPokemon(pokemon);
    }

    return(
        <>
            <Text style={[{fontSize:30}, styles.text]}>Adicionar Pokémon</Text>

            <Text style={[styles.infoText, styles.text]}>Nome do Pokémon</Text>
            <Modal
                animationType="fade"
                transparent={false}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View>
                    <View>
                    <TouchableHighlight
                        style={styles.input}
                        onPress={() => {
                            setModalVisible(!modalVisible);
                        }}>
                        <Text style={styles.inputText}>Hide Modal</Text>
                    </TouchableHighlight>
                    </View>
                </View>
            </Modal>

            <TouchableHighlight
                style={styles.input}
                underlayColor={GLOBAL.COLOR.LIGHTBLUE}
                onPress={() => {setModalVisible(true);}}
            >
                <Text style={styles.inputText}>Pesquisar...</Text>
            </TouchableHighlight>

            <View style={styles.splitContainer}>
                <View>
                    <Text style={[styles.infoText, styles.text, {alignSelf:'center'}]}>Sexo</Text> 
                    <View style={styles.containerRow}>
                        <RadioButton 
                            value='female'
                            color={GLOBAL.COLOR.BLUE}
                            status={gender === 'female' ? 'checked' : 'unchecked'}
                            onPress={() => {setGender('female')}}
                        />
                        <Text style={[{alignSelf:'center'}, styles.text]}>Feminino</Text>
                    </View>
                    <View style={styles.containerRow}>
                        <RadioButton
                            value='male'
                            color={GLOBAL.COLOR.BLUE}
                            status={gender === 'male' ? 'checked' : 'unchecked'}
                            onPress={() => {setGender('male')}}
                        />
                        <Text style={[{alignSelf:'center'}, styles.text]}>Masculino</Text>
                    </View>
                </View>

                <View>
                    <Text style={[styles.infoText, styles.text, {alignSelf:'center'}]}>Shiny</Text>
                    <View style={styles.containerRow}>
                        <RadioButton 
                            value='no'
                            color={GLOBAL.COLOR.BLUE}
                            status={shiny === false ? 'checked' : 'unchecked'}
                            onPress={() => {setShiny(false)}}
                        />
                        <Text style={[{alignSelf:'center'}, styles.text]}>Não</Text>
                    </View>
                    <View style={styles.containerRow}>
                        <RadioButton
                            value='true'
                            color={GLOBAL.COLOR.BLUE}
                            status={shiny === true ? 'checked' : 'unchecked'}
                            onPress={() => {setShiny(true)}}
                        />
                        <Text style={[{alignSelf:'center'}, styles.text]}>Sim</Text>
                    </View>
                </View>
            </View>
            
            <View style={styles.splitContainer}>
                <View>
                    <Text style={[styles.infoText, styles.text, {alignSelf:'center'}]}>Nature</Text>

                    <TouchableHighlight
                        style={styles.input}
                        underlayColor={GLOBAL.COLOR.LIGHTBLUE}
                        onPress={() => {setModalVisible(true);}}
                    >
                        <Text style={styles.inputText}>Pesquisar...</Text>
                    </TouchableHighlight>
                </View>
                <View>
                    <Text style={[styles.infoText, styles.text, {alignSelf:'center'}]}>Abilidade</Text>

                    <TouchableHighlight
                        style={styles.input}
                        underlayColor={GLOBAL.COLOR.LIGHTBLUE}
                        onPress={() => {setModalVisible(true);}}
                    >
                        <Text style={styles.inputText}>Pesquisar...</Text>
                    </TouchableHighlight>   
                </View>
            </View>
        
            <Text style={[styles.infoText, styles.text, {alignSelf:'center'}]}>Item</Text>
            <TouchableHighlight
                style={styles.input}
                underlayColor={GLOBAL.COLOR.LIGHTBLUE}
                onPress={() => {setModalVisible(true);}}
            >
                <Text style={styles.inputText}>Pesquisar...</Text>
            </TouchableHighlight>

            <Text style={[styles.infoText, styles.text, {alignSelf:'center'}]}>Moves</Text>
            <View style={styles.splitContainer}>
                <TouchableHighlight
                    style={[styles.input, styles.smallInput]}
                    underlayColor={GLOBAL.COLOR.LIGHTBLUE}
                    onPress={() => {setModalVisible(true);}}
                >
                    <Text style={styles.inputText}>Move 1</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={[styles.input, styles.smallInput]}
                    underlayColor={GLOBAL.COLOR.LIGHTBLUE}
                    onPress={() => {setModalVisible(true);}}
                >
                    <Text style={styles.inputText}>Move 2</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={[styles.input, styles.smallInput]}
                    underlayColor={GLOBAL.COLOR.LIGHTBLUE}
                    onPress={() => {setModalVisible(true);}}
                >
                    <Text style={styles.inputText}>Move 3</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={[styles.input, styles.smallInput]}
                    underlayColor={GLOBAL.COLOR.LIGHTBLUE}
                    onPress={() => {setModalVisible(true);}}
                >
                    <Text style={styles.inputText}>Move 4</Text>
                </TouchableHighlight>
               
            </View>
            
        </>
    );
}

const styles = StyleSheet.create({  
    text: {
        color: GLOBAL.COLOR.BLACK,
        //fontFamily: 'Open Sans',
    },
    smallInput:{
        width: 80,
    },
    input: {
        backgroundColor: GLOBAL.COLOR.BLUE,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
        height: 40,
        width: 150,
    },
    inputText: {
        color: GLOBAL.COLOR.WHITE,
        fontSize: 18,
        marginTop: 5,
        textAlign: 'center',
    },
    infoText: {
        fontSize: 20,
        marginTop: 5,
        marginBottom: 5,
    },
    splitContainer: {
       justifyContent: 'space-around', 
       flexDirection: 'row',
       width:'100%',
       marginTop: 10,
    },  
    containerRow: {
        flexDirection: 'row',
        justifyContent:'flex-start',
    },  
});

export default Form;
