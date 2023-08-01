import React, { useState } from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, Image, TextInput,Button } from 'react-native';
import p13 from '../../assets/images/gym.jpg';

import { Calendar } from 'react-native-calendars';

const Schedule = ({ navigation }) => {
    const [fdata, setFdata] = useState({
        name: '',
        mobile: ''
    })

    const [errormsg, setErrormsg] = useState(null);

    const markedDates = {
        '2023-05-01': { selected: true, marked: true, selectedColor: 'blue' },
        '2023-05-10': { marked: true, dotColor: 'green' },
        '2023-05-15': { marked: true, dotColor: 'red' },
    };


    const Sendtobackend = () => {
        if (fdata.name == '' ||
            fdata.mobile == '') {
            setErrormsg('All fields are required');
            return;
        }
        else {
            fetch('http://192.168.159.210:3000/scheduleuser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(fdata)
            })
                .then(res => res.json()).then(
                    data => {
                        // console.log(data);
                        if (data.error) {
                            setErrormsg(data.error)
                        }
                        else {
                            alert('Sechedule added successfully');
                            // navigation.navigate('Login')
                        }
                    }
                )
        }

    }
    return (
        <ImageBackground source={p13} style={styles.container}>

            <View style={styles.head}>
                <Text style={styles.title}>CEYLONFIT</Text>
            </View>

            <View style={styles.root}>
                <Text style={styles.sub}>Class Booking</Text>
                {
                    errormsg ? <Text style={styles.errormessage}>{errormsg}</Text> : null
                }
                <View style={styles.name}>
                    <Text style={styles.nametext}>Member Name</Text>
                    <TextInput style={styles.userinput} placeholder="Enter name"
                        onPressIn={() => setErrormsg(null)}
                        onChangeText={(text) => setFdata({ ...fdata, name: text })}
                    />
                </View>
                <View style={styles.name}>
                    <Text style={styles.nametext}>Mobile no</Text>
                    <TextInput style={styles.userinput} placeholder="mobile"
                        onPressIn={() => setErrormsg(null)}
                        onChangeText={(text) => setFdata({ ...fdata, mobile: text })}
                    />
                </View>

                    <View style={styles.calender}>
                        <Calendar markedDates={markedDates} />
                    </View>

                <View style={styles.footbutton}>
                    <TouchableOpacity style={styles.btn1}>
                        <Text style={styles.text7}>Clear</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn1} onPress={() => {
                        Sendtobackend();
                    }} >
                        <Text style={styles.text7}>Save</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity style={styles.back} onPress={() => navigation.navigate("First")}>
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
        height: '80%',
        marginTop: 30,
        margin: 15,
        backgroundColor: 'rgb(188, 188, 199)',
        padding: 15,
        borderRadius: 30,
        marginBottom: 1,
        marginTop: 10
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
        marginLeft: 5,
        marginBottom: 10
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
    calender: {

    }
});

export default Schedule;