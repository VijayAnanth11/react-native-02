import React, { useState } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, TextInput  } from 'react-native';
import Background from './Background';
import { Red123, red } from './Constants';

const Signup = (props, { navigation }) => {

    const [fdata, setFdata] = useState({
        fname: '',
        lname: '',
        email: '',
        contact: '',
        password: '',
        confirm: ''
    })

    const [errormsg, setErrormsg] = useState(null);

    const Sendtobackend = () => {
        if (fdata.fname == '' ||
            fdata.lname == '' ||
            fdata.email == '' ||
            fdata.contact == '' ||
            fdata.password == '' ||
            fdata.confirm == '') {
            setErrormsg('All fields are required');
            return;
        }
        else {
            if (fdata.password != fdata.confirm) {
                setErrormsg('Password and Confirm Password must be same');
                return;
            }
            else {
                fetch('http://192.168.159.210:3000/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(fdata)
                })
                    .then(res => res.json()).then(
                        data => {
                            if (data.error) {
                                setErrormsg(data.error)
                            }
                            else {
                                alert('account created successfully');
                                navigation.navigate('Login')
                            }
                        }
                    )
            }
        }

    }

    return (
        <Background>
            <View style={{ alignItems: "center", width: 400 }}>
                <Text style={{ color: "white", fontSize: 54, fontWeight: 'bold', marginVertical: 15 }}> Register </Text>
                <View style={{
                    backgroundColor: "white", height: 700, width: 400, borderTopLeftRadius: 130,
                    paddingTop: 50, alignItems: 'center'
                }}>
                    <Text style={{ fontSize: 30, color: Red123, fontWeight: 'bold' }}>Join with us</Text>
                    <Text style={{ color: "grey", fontSize: 19, fontWeight: "bold", marginBottom: 20 }}>
                        Lets shape your body</Text>

                    {
                        errormsg ? <Text style={styles.errormessage}>{errormsg}</Text> : null
                    }

                    <TextInput style={styles.userinput} placeholder="First Name"
                        onPressIn={() => setErrormsg(null)}
                        onChangeText={(text) => setFdata({ ...fdata, fname: text })} />

                    <TextInput style={styles.userinput} placeholder="Last Name"
                        onPressIn={() => setErrormsg(null)}
                        onChangeText={(text) => setFdata({ ...fdata, lname: text })}
                    />

                    <TextInput style={styles.userinput} placeholder="Email/ Username" keyboardType={"email-address"}
                        onPressIn={() => setErrormsg(null)}
                        onChangeText={(text) => setFdata({ ...fdata, email: text })}
                    />

                    <TextInput style={styles.userinput} placeholder="Contact Number"
                        onPressIn={() => setErrormsg(null)}
                        onChangeText={(text) => setFdata({ ...fdata, contact: text })}
                    />

                    <TextInput style={styles.userinput} placeholder="Password"
                        onPressIn={() => setErrormsg(null)}
                        secureTextEntry={true}
                        onChangeText={(text) => setFdata({ ...fdata, password: text })}
                    />

                    <TextInput style={styles.userinput} placeholder="Confirm Password"
                        onPressIn={() => setErrormsg(null)}
                        secureTextEntry={true}
                        onChangeText={(text) => setFdata({ ...fdata, confirm: text })}
                    />

                    {/* <Field placeholder="Confirm Password"
                        onPressIn={() => setErrormsg(null)}
                        secureTextEntry={true}
                        onChangeText={(text) => setFdata({ ...fdata, confirm: text })}
                    /> */}

                    <View style={{ alignItems: 'flex-end', width: '78%', paddingRight: 16, marginBottom: 10 }}>

                    </View>
                    <TouchableOpacity style={styles.btn1} onPress={() => {
                        Sendtobackend();
                    }} >
                        <Text style={styles.text7}>Signup</Text>
                    </TouchableOpacity>

                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Already have an account?</Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
                            <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 16 }}> Log in</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Background>
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
        borderRadius: 100, 
        color: 'grey', 
        paddingHorizontal: 10, 
        width: '85%', 
        backgroundColor: 'rgb(220,220, 220)',
         marginVertical: 10
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
        backgroundColor: '#ff2424',
        borderRadius: 100,
        alignItems: 'center',
        width: 250,
        paddingVertical: 5,
        marginVertical: 10
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
        color: '#fff', 
        fontSize: 20, 
        fontWeight: 'bold'
    },
    errormessage: {
        marginTop: 10,
        color: "#fff",
        fontSize: 18,
        textAlign: 'center',
        backgroundColor: '#ff2424',
        padding: 5,
        paddingLeft:10,
        width: '85%'
    }
});

export default Signup;

