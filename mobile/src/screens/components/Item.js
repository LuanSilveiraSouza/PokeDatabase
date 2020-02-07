import React, { useEffect, useState } from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

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
                        <Text style={styles.infoText}>Id: {pokemon._id}</Text>
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
        height: 80,
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
        fontSize: 18,
    },
});

export default Item;