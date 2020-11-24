import React from 'react'
import { View, Text, StyleSheet, Image, AsyncStorage, TouchableOpacity, Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

export default function PostFunction() {
    return (
        <View style={styles.contrainer}>
            <View style={styles.postContent}>
                <TextInput style={styles.postInput}
                 placeholder="Please enter something..."
                 multiline={true}
                 numberOfLines={10}
                 textAlignVertical="top" 
                 />
            </View>
            <View style={styles.postButtonContent}>
                <TouchableOpacity style={styles.postButton}>
                    <Text style={styles.postButtonText}>Post</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    contrainer: {
        marginBottom:10
    },
    postInput: {
        height: 142,
        width: '100%',
        backgroundColor: '#fff',
        borderWidth:1,
        borderColor:'#000',
        borderRadius:5,
    },
    postContent:{
        marginTop:10,
        marginBottom:5,
        marginLeft:30,
        marginRight:30,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
    },
    postButtonContent:{
        flexDirection:'row',
        justifyContent:'flex-end',
        marginTop:5,
        marginRight:30
    },
    postButton:{
        backgroundColor:'#94F9F3',
        width:90,
        height:30,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5
    },
    postButtonText:{
        color:'#fff',
        fontSize:18,
        fontWeight:'bold'
    }
})
