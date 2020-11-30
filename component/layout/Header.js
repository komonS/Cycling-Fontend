import React, { useState, useEffect, useContext } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, AsyncStorage, Picker } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import MenuBarRight from '../widget/MenuBarRight'
import { MenuContext } from '../../store/MenuProvider'
import MenuRight from '../widget/MenuRight'
import { Overlay } from 'react-native-elements'

import { LoginContext } from '../../store/LoginProvider'

export default function Header(props) {
    const { menu, setMenu } = useContext(MenuContext)
    const { login, setLogin } = useContext(LoginContext)

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
        } else {
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
        <>
            <View style={styles.headerBar}>
                <CheckPage page={props.page} navigation={props.navigation} />
                <Text style={styles.brand}>Cycling Meeting</Text>
                {login ? <Login userID={userID} navigation={props.navigation} /> : <NonLogin navigation={props.navigation} />}
            </View>

        </>
    )
}

const Login = (props) => {
    const { menu, setMenu } = useContext(MenuContext)

    let image = '../../assets/user.png'
    if (props.userID != null) {
        let image = ''
    }
    return (
        <View>
            <TouchableOpacity onPress={() => setMenu(true)}>
                <Image
                    style={styles.userImage}
                    source={require(image)}
                />
            </TouchableOpacity>
            <Overlay
                overlayStyle={styles.sideBar}
                isVisible={menu}
                onBackdropPress={() => setMenu(false)}
                children={<MenuRight navigation={props.navigation} />}
            />
        </View>
    )
}

const NonLogin = (props) => {
    return (
        <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
            <Text style={{ color: '#ffffff', fontSize: 20 }}>Login</Text>
        </TouchableOpacity>

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
        borderRadius: 50,
        height: 50,
        width: 50
    },
    sideBar: {
        height: '100%',
        width: '80%',
        position: 'absolute',
        top: 0,
        right: 0,
    },
});
