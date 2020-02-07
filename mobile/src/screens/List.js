import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, SafeAreaView, FlatList} from 'react-native';
import Item from './components/Item';
import GLOBAL from '../Global';
import api from '../services/api';

function List() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        async function loadPokemons() {
            const res = await api.get('/pokemon');
            setPokemons(res.data);
        }
        loadPokemons();
    },[]);

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={pokemons}
                renderItem={({ item }) => <Item pokemon={item} />}
                keyExtractor={(item) => item._id.toString()}
            />
        </SafeAreaView>
    ); 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
    }
});

export default List;