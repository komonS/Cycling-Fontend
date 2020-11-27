import React, { useState, useEffect, useContext } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, AsyncStorage, Picker } from 'react-native'
import { MenuContext } from '../../store/MenuProvider'
export default function MenuBarRight() {
    const { menu, setMenu } = useContext(MenuContext)

    return (
        <View style={styles.contrainer}>

            <TouchableOpacity style={styles.hideBox} onPress={() => setMenu(false)}>
                <Text>Hide</Text>
            </TouchableOpacity>

            <View style={styles.menuBox}>
                <TouchableOpacity onPress={() => setMenu(false)}>
                    <Text>Hide</Text>
                </TouchableOpacity>
                <Text>MenuBar</Text>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    contrainer: {
        flex: 1,
        position: 'absolute',
        height: '100%',
        width: '100%',
        alignItems: 'flex-end',
        flexDirection: 'row',
        alignContent: 'flex-end',
        top:0,
        right:0
    },
    menuBox: {
        backgroundColor: '#FF0000',
        height: '100%',
        width: '80%',
    },
    hideBox:{
        height:'100%',
        width: '20%',
        backgroundColor: '#CCCCCC',
        opacity:0.3
    }
})