import React from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import p9 from '../../assets/images/n9.jpg';
import cover from '../../assets/images/gym.jpg';
import { Ionicons } from '@expo/vector-icons';

const Setting = ({ navigation }) => {
    return (
        <ImageBackground source={cover} style={styles.container}>


            <View style={styles.body}>

                <View style={styles.dp}>
                    <Image source={p9} style={styles.pic2} />
                </View>
                <Text style={styles.text}>Dom Dean</Text>

                <View style={styles.name}>
                    <Text style={styles.nametext}>Name</Text>

                </View>
                <View style={styles.name}>
                    <Text style={styles.nametext}>IC No</Text>

                </View>
                <View style={styles.name}>
                    <Text style={styles.nametext}>Address</Text>

                </View>
                <View style={styles.name}>
                    <Text style={styles.nametext}>Mobile No</Text>

                </View>
            </View>

            <View>
                <TouchableOpacity style={styles.back} onPress={() => navigation.navigate("First")}>
                    <Text style={styles.text7}>Back</Text>
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
        height: '10%',
        backgroundColor: 'rgb(219, 222, 225)',
        flexDirection: 'row',
    },
    body: {
        height: '55%',
        backgroundColor: 'white',
        borderRadius: 20,
        marginTop: 90,
        margin: 10,
        padding: 10
    },
    itembtn: {
        height: 110,
        width: 130,
        backgroundColor: 'black',
        margin: 10,
        borderRadius: 15
    },
    itemrow: {
        flexDirection: 'row',
        marginLeft: 20
    },
    pic1: {
        height: '100%',
        width: '100%',
        borderRadius: 15
    },
    dp: {
        margin: 5,
        height: 100,
        width: 100,
        borderRadius: 60,
        marginLeft: 120
    },
    pic2: {
        height: '100%',
        width: '100%',
        borderRadius: 60
    },
    icon: {
        marginLeft: 160,
        marginTop: 20
    },
    text: {
        marginTop: 5,
        fontSize: 20,
        marginLeft: 120,
        fontWeight: 'bold'
    },
    nametext: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    name: {
        backgroundColor: 'rgb(219, 222, 225)',
        margin: 5,
        padding: 10,
        borderRadius: 15
    },
    back: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#ff0000',
        borderRadius: 25,
        width: '30%',
        marginLeft: 240
    },
    text7: {
        fontSize: 15,
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 25
    },



});
export default Setting;
