import React, { useState } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, TextInput } from 'react-native';
import Background from './Background';
import { Red123, red } from './Constants';

const LoginAdmin = ({ navigation }) => {

    const [fdata, setFdata] = useState({
        email: '',
        password: ''
    })

    const [errormsg, setErrormsg] = useState(null)

    const Sendtobackend = () => {
        if (fdata.email == '' || fdata.password == '') {
            setErrormsg('Please add email or password');
            return;
        }
        else {
            if (fdata.email == 'admin' && fdata.password == 'root') {
                alert('logged successfully');
                navigation.navigate('SecondScreen')
            }
            else {
                setErrormsg('Invalid Credentials');
                return;
            }
        }
    }

    return (
        <Background>
            <View style={{ alignItems: "center", width: 400 }}>
                <Text style={{ color: "white", fontSize: 54, fontWeight: 'bold', marginVertical: 15 }}> Login </Text>
                <View style={{
                    backgroundColor: "white", height: 700, width: 400, borderTopLeftRadius: 130,
                    paddingTop: 100, alignItems: 'center'
                }}>
                    <Text style={{ fontSize: 30, color: Red123, fontWeight: 'bold' }}>Welcome Back</Text>
                    <Text style={{ color: "grey", fontSize: 19, fontWeight: "bold", marginBottom: 20 }}>Login to your account</Text>

                    {
                        errormsg ? <Text style={styles.errormessage}>{errormsg}</Text> : null
                    }

                    <TextInput style={styles.userinput} placeholder="Email/ Username"
                        keyboardType={"email-address"}
                        onChangeText={(text) => setFdata({ ...fdata, email: text })}
                        onPressIn={() => setErrormsg(null)}
                    />
                    <TextInput style={styles.userinput} placeholder="Password"
                        onChangeText={(text) => setFdata({ ...fdata, password: text })}
                        secureTextEntry={true}
                        onPressIn={() => setErrormsg(null)} />

                    <View style={{ alignItems: 'flex-end', width: '78%', paddingRight: 16, marginBottom: 200 }}>
                        <Text style={{ color: red, fontWeight: 'bold', fontSize: 14 }}>Forgot Password ?
                        </Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.btn1} onPress={() => Sendtobackend()}>
                            <Text style={styles.text7}>Login</Text>
                        </TouchableOpacity>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Don't have an account?</Text>
                            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                                <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 16 }}>Signup</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </Background>
    );
};

const styles = StyleSheet.create({

    adminchoose: {
        borderRadius: 30,
        flexDirection: 'row',
    },
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
    userinput: {
        borderRadius: 100, 
        color: 'grey', 
        paddingHorizontal: 10, 
        width: '85%', 
        backgroundColor: 'rgb(220,220, 220)',
         marginVertical: 10
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
    footbutton: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 10
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

export default LoginAdmin;

