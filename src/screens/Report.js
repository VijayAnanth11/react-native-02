import React, { useState } from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, Image, TextInput } from 'react-native';
import p13 from '../../assets/images/gym.jpg';
import p4 from '../../assets/images/a2.jpg';
import p5 from '../../assets/images/a3.jpg';
import p6 from '../../assets/images/a4.webp';
import p7 from '../../assets/images/a5.jpg';
import p8 from '../../assets/images/a6.jpg';
import p9 from '../../assets/images/b6.jpg';

const Report = ({ navigation }) => {
    const [fdata, setFdata] = useState({
        pcode: '',
        name: '',
        details: '',
        category: '',
        price: ''
    })

    const [errormsg, setErrormsg] = useState(null);

    return (
        <ImageBackground source={p13} style={styles.container}>

            <View style={styles.head}>
                <Text style={styles.title}>CEYLONFIT</Text>
            </View>

            <View style={styles.root}>

                <View style={styles.itemrow}>
                    <TouchableOpacity style={styles.itembtn} onPress={() => navigation.navigate("AttendanceDetails")}>
                        <Image source={p4} style={styles.pic1} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itembtn} onPress={() => navigation.navigate("TimeTableHistory")}>
                        <Image source={p5} style={styles.pic1} />
                    </TouchableOpacity>
                </View>
                <View style={styles.itemrow}>
                    <TouchableOpacity style={styles.itembtn} onPress={() => navigation.navigate("Revenue")}>
                        <Image source={p6} style={styles.pic1} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itembtn} onPress={() => navigation.navigate("Cost")}>
                        <Image source={p7} style={styles.pic1} />
                    </TouchableOpacity>
                </View>
                <View style={styles.itemrow}>
                    <TouchableOpacity style={styles.itembtn} onPress={() => navigation.navigate("Usage")}>
                        <Image source={p8} style={styles.pic1} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itembtn} onPress={() => navigation.navigate("ViewUsage")}>
                        <Image source={p9} style={styles.pic1} />
                    </TouchableOpacity>
                </View>

            </View>

            <TouchableOpacity style={styles.back} onPress={() => navigation.navigate("SecondScreen")}>
                <Text style={styles.text7}>Back</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    head: {
        backgroundColor: '#ff0000',
        marginTop: 30,
        borderRadius: 40,
        padding: 10,
        width: '70%',
        marginLeft: 50,

    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 75
    },
    titletwo: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 70
    },
    root: {
        height: '55%',
        margin: 15,
        backgroundColor: 'rgb(241, 179, 72)',
        padding: 15,
        borderRadius: 30,
        marginBottom: 1,
        marginTop: 10,
    },
    sub: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'darkblue',
        marginLeft: 30,
        marginBottom: 10
    },
    name: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 5
    },
    file: {
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 5
    },
    description: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 5
    },
    nametext: {
        marginTop: 5,
        fontSize: 17
    },
    selecttext: {
        marginTop: 5,
        fontSize: 17,
        color: 'darkblue'
    },
    destext: {
        fontSize: 17,
        marginTop: 10
    },
    userinput: {
        marginLeft: 10,
        padding: 5,
        borderWidth: 1,
        borderRadius: 20,
        width: 200,
        paddingLeft: 20
    },
    userinput3: {
        marginLeft: 10,
        padding: 5,
        borderWidth: 1,
        borderRadius: 20,
        width: 180,
        paddingLeft: 20
    },
    userinput2: {
        padding: 5,
        borderWidth: 1,
        borderRadius: 20,
        width: 250,
        height: 50,
        marginTop: 5,
        paddingLeft: 20,
        marginLeft: 10
    },
    back: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#ff0000',
        borderRadius: 25,
        width: '30%',
        marginLeft: 240
    },
    btn1: {
        marginTop: 10,
        padding: 10,
        backgroundColor: 'darkblue',
        borderRadius: 25,
        width: 90,
        marginLeft: 20,
        paddingLeft: -3
    },
    btn3: {
        marginTop: 30,
        padding: 10,
        backgroundColor: 'darkblue',
        borderRadius: 25,
        width: '30%',
        marginLeft: 10,
        width: 150,
        paddingLeft: 8
    },
    text7: {
        fontSize: 15,
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 25
    },
    footbutton: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 10
    },
    errormessage: {
        marginTop: 10,
        color: "white",
        fontSize: 15,
        textAlign: 'center',
        backgroundColor: '#F50057',
        padding: 5,
        borderRadius: 10,
    },
    itemrow: {
        flexDirection: 'row',
        marginLeft: 20
    },
    pic1: {
        height: '100%',
        width: '100%',
        borderRadius: 15,
    },
    itembtn: {
        height: 110,
        width: 130,
        backgroundColor: 'black',
        margin: 10,
        borderRadius: 15
    },
});

export default Report;