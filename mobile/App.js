import React from 'react';
import {StyleSheet, StatusBar, View} from 'react-native';

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
    backgroundColor: '#ffffff',
    height: StatusBar.currentHeight,
  },
});
