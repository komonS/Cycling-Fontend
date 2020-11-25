import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {  faChevronLeft } from '@fortawesome/free-solid-svg-icons'

export default function Header(props) {
    const [userID, setUserID] = useState('')
    const getUserID = async () => {
        let id = null
        try {
            id = await AsyncStorage.getItem('userID')
        } catch {
            id = null
        }

        setUserID(id)
    }

    const CheckPage = (props) => {
        let icon = "" 
        if (props.page != "Room") {
            icon = <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <FontAwesomeIcon icon={faChevronLeft} style={styles.icon} />
            </TouchableOpacity>
        }else{
            icon = <TouchableOpacity >
                <FontAwesomeIcon icon={faChevronLeft} style={styles.icon} />
            </TouchableOpacity>
        }

        return icon
    }


    useEffect(() => {
        getUserID()
    }, [])

    return (
        <View style={styles.headerBar}>
            <CheckPage page={props.page} navigation={props.navigation} />
            <Text style={styles.brand}>Cycling Meeting</Text>
            {userID ? <Login /> : <NonLogin />}
        </View>
    )
}

const Login = () => {
    let image = '../../assets/user.png'
    if (localStorage.userID != null) {
        let image = ''
    }
    return (
        <View>
            <Image
                style={styles.userImage}
                source={require(image)}
            />
        </View>
    )
}

const NonLogin = () => {
    return (
        <Text style={{ color: '#ffffff', fontSize: 20 }}>Login</Text>
    )
}

const styles = StyleSheet.create({
    headerBar: {
        height: '10%',
        backgroundColor: '#0CDFD1',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center'
    },
    brand: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    icon: {
        padding: 15,
        color: '#ffffff'
    },
    userImage: {
        borderRadius: 50
    }
});
