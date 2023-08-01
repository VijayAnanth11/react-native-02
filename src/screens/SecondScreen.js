import React from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import p6 from '../../assets/images/n6.jpg';
import p7 from '../../assets/images/n7.jpg';
import p8 from '../../assets/images/n8.webp';
import p9 from '../../assets/images/a7.jpg';
import p10 from '../../assets/images/a8.png';
import cover from '../../assets/images/gym.jpg';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const SecondScreen = ({ navigation }) => {
    return (
        <ImageBackground source={cover} style={styles.container}>

            <View style={styles.head}>
                <View style={styles.dp}>
                    <Image source={p9} style={styles.pic2} />
                </View>
                <Text style={styles.text}>ADMIN PANAL</Text>
                <TouchableOpacity>
                    <Ionicons style={styles.icon} name="notifications" color="rgb(120, 4, 65)" size={35} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Choose")}>
                    <AntDesign style={styles.icon2} name="logout" color="rgb(120, 4, 65)" size={35} />
                </TouchableOpacity>
            </View>

            <View style={styles.body}>
                <View style={styles.itemrow}>
                    <TouchableOpacity style={styles.itembtn} onPress={() => navigation.navigate("UserDetails")}>
                        <Image source={p10} style={styles.pic1} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itembtn} onPress={() => navigation.navigate("StaffManagement")}>
                        <Image source={p7} style={styles.pic1} />
                    </TouchableOpacity>
                </View>
                <View style={styles.itemrow}>
                    <TouchableOpacity style={styles.itembtn} onPress={() => navigation.navigate("PayDetails")}>
                        <Image source={p6} style={styles.pic1} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itembtn} onPress={() => navigation.navigate("Report")}>
                        <Image source={p8} style={styles.pic1} />
                    </TouchableOpacity>
                </View>
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
        height: '40%',
        backgroundColor: 'rgb(241, 179, 72)',
        borderRadius: 20,
        marginTop: 30,
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
        height: 65,
        width: 65,
        borderRadius: 60
    },
    pic2: {
        height: '100%',
        width: '100%',
        borderRadius: 60
    },
    icon: {
        marginLeft: 70,
        marginTop: 20
    },
    icon2: {
        marginLeft: 10,
        marginTop: 20
    },
    text: {
        marginTop: 20,
        fontSize: 20,
        marginLeft: 10,
        fontWeight: 'bold'
    }



});

export default SecondScreen;

