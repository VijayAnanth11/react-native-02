import React from 'react';
import { StyleSheet,SafeAreaView  } from 'react-native';
import MainContainer from './src/MainContainer'

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
    <MainContainer/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC'
    
  },
});

export default App;
