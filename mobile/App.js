import React from 'react';
import {StyleSheet, StatusBar, View} from 'react-native';
import GLOBAL from './src/Global';
import Routes from './src/routes';

export default function App() {
  return(
    <>
      <View  style={styles.statusBar}>
        <StatusBar barStyle = "dark-content"/>
      </View>
      <Routes/>
    </>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: GLOBAL.COLOR.WHITE,
    height: StatusBar.currentHeight,
  },
});
