import React from 'react'
import { View, Text, StyleSheet, Image, AsyncStorage, TouchableOpacity, Button } from 'react-native'

export default function Menubar({navigation}) {
    return (
        <View style={styles.menubar}>
            <TouchableOpacity style={styles.menuButton} onPress={()=>navigation.navigate('Post')}>
                <Text style={styles.menuText}>Post</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuButton} onPress={()=>navigation.navigate('Statistic')}>
                <Text style={styles.menuText}>Statistic</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuButton} onPress={()=>navigation.navigate('Chat')}>
                <Text style={styles.menuText}>Chat</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    menubar:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#DEDCDC',
        paddingLeft:20,
        paddingRight:20
    },
    menuButton:{
        backgroundColor:'#94F9F3',
        padding:5,
        margin:5,
        width:72,
        height:30,
        borderRadius:5,
        alignItems:'center'
    },
    menuText:{
        color:'#ffffff',
        fontWeight:'bold'
    }
})
