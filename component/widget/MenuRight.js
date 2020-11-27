import React, { useContext } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, AsyncStorage, } from 'react-native'
import { MenuContext } from '../../store/MenuProvider'
import {LoginContext} from '../../store/LoginProvider'


export default function MenuRight(props) {
    const { menu, setMenu } = useContext(MenuContext)
    const {login,setLogin} = useContext(LoginContext)

    const logout = async () => {
        setMenu(false)
        setLogin(false)
        await AsyncStorage.removeItem('userID')
        props.navigation.navigate('Room')
    }
    return (
        <View>
            <View style={styles.sideBarMenu}>
                <Text>Profile</Text>
            </View>
            <View style={styles.sideBarMenu}>
                <TouchableOpacity onPress={() => logout()}>
                    <Text>Logout</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    sideBarMenu: {
        borderColor: '#000',
        borderWidth: 1
    }
})
