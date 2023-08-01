import React from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import cover from '../../assets/images/gym.jpg';


const LoginChoose = ({ navigation }) => {
    return (
        <ImageBackground source={cover} style={styles.container}>

            <View style={styles.body}>
                <Text style={styles.textchoose}>To Login choose one</Text>
                <TouchableOpacity style={styles.userchoose} onPress={() => navigation.navigate("Home")}>
                    <AntDesign style={styles.icon} name="user" color="white" size={25} />
                    <Text style={styles.usertext}>User Login</Text>
                    <AntDesign style={styles.moveicon1} name="doubleright" color="white" size={25} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.adminchoose} onPress={() => navigation.navigate("HomeAdmin")}>
                    <FontAwesome5 style={styles.icon} name="user-cog" color="white"  size={25} />
                    <Text style={styles.usertext}>Admin Login</Text>
                    <AntDesign style={styles.moveicon} name="doubleright" color="white"  size={25} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.adminchoose} onPress={() => navigation.navigate("HomeTrainer")}>
                    <FontAwesome5 style={styles.icon} name="user-check" color="white"  size={25} />
                    <Text style={styles.usertext}>Trainee Login</Text>
                    <AntDesign style={styles.moveicon} name="doubleright" color="white"  size={25} />
                </TouchableOpacity>
            </View>

        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    head: {
        height: '25%',
        backgroundColor: 'rgb(245, 164, 239)',
        margin: 10,
        marginTop: 20,
        padding: 10,
        borderRadius: 50,
        flexDirection: 'row',
    },
    pic: {
        height: '80%',
        width: '40%',
        flexDirection: 'row',
    },
    pictwo: {
        height: '60%',
        width: '30%',
        marginTop: 20,
    },
    picthree: {
        height: '45%',
        width: '20%',
        marginTop: 90,
        marginLeft: 30
    },
    pic1: {
        height: '100%',
        width: '100%',
        borderRadius: 30
    },
    pic2: {
        height: '100%',
        width: '100%',
        borderRadius: 20,
        marginLeft: -30,
        marginTop: 10
    },
    pic3: {
        height: '100%',
        width: '100%',
        borderRadius: 35
    },
    textlog: {
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 20,
        color: 'rgb(120, 4, 65)'

    },
    body: {
        height: '50%',
        // backgroundColor: 'rgb(241, 179, 72)',
        borderRadius: 20,
        marginTop: 100,
        margin: 10,
        padding: 10
    },
    userchoose: {
        backgroundColor: '#ff0000',
        padding: 20,
        marginTop: 20,
        marginLeft: 10,
        borderRadius: 30,
        flexDirection: 'row',
        width: '90%'
    },
    usertext: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        color:'white'
    },
    adminchoose: {
        backgroundColor: '#ff0000',
        marginTop: 10,
        padding: 20,
        marginLeft: 10,
        borderRadius: 30,
        flexDirection: 'row',
        width: '90%'
    },
    textchoose: {
        marginTop: 20,
        marginLeft: 20,
        fontSize: 15,
        color: 'white'
    },
    textcreate: {
        marginTop: 20,
        marginLeft: 20,
        fontSize: 15,
        color: 'rgb(120, 4, 65)'
    },
    signup: {
        backgroundColor: 'rgb(227, 100, 241)',
        padding: 10,
        paddingLeft: 40,
        marginTop: 10,
        marginLeft: 10,
        borderRadius: 15,
        flexDirection: 'row',
        width: '50%',
    },
    moveicon: {
        marginLeft: 90
    },
    moveicon1: {
        marginLeft: 110
    }

});

export default LoginChoose;
