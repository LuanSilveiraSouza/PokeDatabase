import React, { useEffect, useState } from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import apiImages from '../../services/apiImages';

function Item(props) {
    const pokemon = props.pokemon;

    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.img}
                source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.pkdx}.png`}}/>
            </View>
            <View style={styles.container2}>
                <Text style={styles.title}>{pokemon.name} #{pokemon.pkdx}</Text>
                <View style={styles.infoBox}>
                    <View>
                        <Text style={styles.infoText}>Id: {pokemon._id}</Text>
                        <Text style={styles.infoText}>Gender: {pokemon.gender}</Text>
                        <Text style={styles.infoText}>Shiny: {pokemon.shiny}</Text>
                    </View>
                    <View>
                        <Text style={styles.infoText} >Nature: {pokemon.nature}</Text>
                        <Text style={styles.infoText} >Ability: {pokemon.ability}</Text>
                        <Text style={styles.infoText} >Item: {pokemon.item}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        textTransform: "capitalize",
        alignSelf: "center",
        flex: 1,
    },
    container: {
        borderColor: "#000000",
        borderStyle: "solid",
        borderRadius: 5,
        borderWidth: 3,
        margin: 5,
        padding: 5,
        flexDirection: "row",
    },
    img: {
        flex: 1,
        height: 'auto',
        width: 120,
        resizeMode: "contain",
    },
    container2: {
        flex: 1,
    },
    infoText: {
        textAlign: "center",
    },
    infoBox: {
        flex: 1,
        flexDirection: "row",
    }
});

export default Item;