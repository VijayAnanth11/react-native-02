import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import { Red123, red } from './Constants';


const Home = (props) => {
  return (
  <Background>
    <View style={{ marginHorizontal: 70, marginVertical: 200 }}>
      <Text style={styles.text}>As a User</Text>
     <Btn bgColor={Red123} textColor='white' btnLabel="Login" Press={() => props.navigation.navigate("Login")} />
     <Btn bgColor='white' textColor={Red123} btnLabel="Signup" Press={() => props.navigation.navigate("Signup")}/>
   </View>
  </Background>
  );
}

const styles = StyleSheet.create({
  text:{
    color:'white',
    fontSize:15,
    marginTop:50,
    marginLeft:10
  }

})

export default Home;
