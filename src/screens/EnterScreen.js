import React from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import cover from '../../assets/images/gym.jpg';
import p5 from '../../assets/images/n2.jpg';
import p4 from '../../assets/images/n1.jpg';

const EnterScreen = ({ navigation }) => {
  return (
    <ImageBackground source={cover} style={styles.container}>

      <View style={styles.head}>
        <Text style={styles.title}>CEYLONFIT</Text>
      </View>

      <View style={styles.root}>
        <Text style={styles.heading}>Welcome</Text>
        <Text style={styles.textnext}>To start press below</Text>
        <TouchableOpacity style={styles.move} onPress={() => navigation.navigate("Choose")}>
          <Text style={styles.textgo}>Lets Go</Text>
          <AntDesign style={styles.moveicon} name="doubleright" color="#EA177A" size={25} />
        </TouchableOpacity>
        <View style={styles.pic}>
          <Image source={p4} style={styles.pic1} />
          <View style={styles.picnew}>
            <Image source={p5} style={styles.pic2} />
          </View>
        </View>
      </View>

    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  head: {
    marginTop: 30,
    borderRadius: 40,
    padding: 10,
    width: '80%',
    marginLeft: 100,

  },
  root: {
    marginTop: 20,
    backgroundColor: 'rgb(128, 4, 109)',
    borderRadius: 50,
    height: '50%',
  },
  title: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 20
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 100
  },
  heading: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    marginLeft: 110,
    marginTop:10
  },
  textnext: {
    color: 'white',
    fontSize: 15,
    marginTop: 10,
    marginLeft: 90
  },
  move: {
    backgroundColor: 'yellow',
    padding: 15,
    borderRadius: 40,
    width: '80%',
    marginTop: 10,
    marginLeft: 40,
    flexDirection: 'row',
  },
  textgo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10
  },
  moveicon: {
    marginTop: 2,
    marginLeft: 150,
  },
  pic: {
    height: '40%',
    width: '50%',
    marginTop: 30,
    flexDirection: 'row',
  },
  picnew: {
    height: '80%',
    width: '80%',
    marginTop:40,
    marginLeft:-30
  },
  pic1: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
    marginLeft: 40
  },
  pic2: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
});

export default EnterScreen;
