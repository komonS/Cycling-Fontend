import React, { useContext } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Animated, } from 'react-native'
import { MenuContext } from '../../store/MenuProvider'
import { LoginContext } from '../../store/LoginProvider'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function MenuRight(props) {
    const { menu, setMenu } = useContext(MenuContext)
    const { login, setLogin } = useContext(LoginContext)

    const logout = async () => {
        setMenu(false)
        setLogin(false)
        await AsyncStorage.removeItem('userID')
        props.navigation.navigate('Room')
    }
    return (
        <View>
            <TouchableOpacity style={styles.sideBarMenuIcon} onPress={()=>setMenu(false)}>
                <FontAwesomeIcon icon={faChevronRight} style={styles.icon}  />
            </TouchableOpacity>
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
        marginBottom:5,
        backgroundColor:'#E8E2E2',
        padding:10
    },
    sideBarMenuIcon:{
        marginBottom:5
    },
    icon: {
        padding: 15,
        color: '#000'
    },
})
