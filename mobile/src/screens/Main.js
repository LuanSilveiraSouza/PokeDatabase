import React from 'react';
import { StyleSheet, View, Image} from 'react-native';
import Form from './components/Form';
import GLOBAL from '../Global';

function Main() {

    return (
        <View style={styles.container}>
            <Image source={require ('../../assets/pokemon.png')} style={styles.img}/>

            <Form/>
        </View>
    ); 
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: GLOBAL.COLOR.WHITE,
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
});

export default Main;