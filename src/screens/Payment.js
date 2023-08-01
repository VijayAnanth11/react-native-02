import React, { useState } from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, Image, TextInput } from 'react-native';
import p13 from '../../assets/images/gym.jpg';
import p4 from '../../assets/images/c1.png';

import { CheckBox } from 'react-native-elements';

const Payment = ({ navigation }) => {
    const [fdata, setFdata] = useState({
        holder: '',
        card: '',
        expiry: ''
    })

    const [errormsg, setErrormsg] = useState(null);

    const [checked, setChecked] = useState(false);

    const Sendtobackend = () => {
        if (fdata.holder== '' ||
            fdata.card == '' ||
            fdata.expiry == '') {
            setErrormsg('All fields are required');
            return;
        }
        else {
            fetch('http://192.168.159.210:3000/payment', {
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
                            alert('Payment added successfully');
                            // navigation.navigate('Login')
                        }
                    }
                )
        }
    }

    return (
        <ImageBackground source={p13} style={styles.container}>

            <View style={styles.root}>

                <Text style={styles.sub}>Payment Screen</Text>

                {
                    errormsg ? <Text style={styles.errormessage}>{errormsg}</Text> : null
                }

                <View style={styles.pic}>
                    <Image source={p4} style={styles.pic1} />
                </View>
                <View style={styles.name}>
                    <Text style={styles.nametext}>Card Holder</Text>
                    <TextInput style={styles.userinput} placeholder="S. PADILLA"
                        onPressIn={() => setErrormsg(null)}
                        onChangeText={(text) => setFdata({ ...fdata, holder: text })}
                    />
                </View>
                <View style={styles.name}>
                    <Text style={styles.nametext}>Card</Text>
                    <TextInput style={styles.userinput} placeholder="5488 6845 9123 4567"
                        onPressIn={() => setErrormsg(null)}
                        onChangeText={(text) => setFdata({ ...fdata, card: text })}
                    />
                </View>
                <View style={styles.name}>
                    <Text style={styles.nametext}>Expiry Date</Text>
                    <TextInput style={styles.userinput} placeholder="01/27"
                        onPressIn={() => setErrormsg(null)}
                        onChangeText={(text) => setFdata({ ...fdata, expiry: text })}
                    />
                </View>
                <View style={{marginTop:10}}>
                    <CheckBox
                        title='Secury Save Card Details'
                        checked={checked}
                        onPress={() => setChecked(!checked)}
                    />
                </View>
                <View style={styles.footbutton}>
                    <TouchableOpacity style={styles.btn1} onPress={() => {
                        Sendtobackend();
                    }}>
                        <Text style={styles.text8}>Pay</Text>
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
    pic: {
        height: '30%',
        width: '100%',
        marginTop: 5,
    },
    pic1: {
        height: '100%',
        width: '100%',
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
        height: '85%',
        marginTop: 30,
        margin: 15,
        backgroundColor: 'white',
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
        fontSize: 15,
        fontWeight: 'bold'
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
        padding: 5,
        borderWidth: 1,
        borderRadius: 10,
        width: 320,
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
        borderRadius: 10,
        width: 300,
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
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 25
    },
    text8: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 130
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
    }
});

export default Payment;