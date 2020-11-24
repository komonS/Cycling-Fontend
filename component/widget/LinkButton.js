import React from 'react'
import { View, Text, StyleSheet, Image, AsyncStorage, TouchableOpacity, Button } from 'react-native'

export default function LinkButton(props) {
    return (
        <TouchableOpacity style={styles.linkButton}>
            <Text style={styles.linkButtonText}>LIKE</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    linkButton:{
        backgroundColor:'#94F9F3',
        width:50,
        height:25,
        borderRadius:5,
        margin:10,
        justifyContent:'center',
        alignItems:'center'
    },
    linkButtonText:{
        color:'#fff',
    }
})