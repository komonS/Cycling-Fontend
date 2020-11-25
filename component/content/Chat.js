import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Button, ScrollView } from 'react-native'
import Header from '../layout/Header';
import ChatDisplay from '../widget/ChatDisplay';
import ChatInput from '../widget/ChatInput';

export default function Chat({ navigation, route }) {
    const { roomID } = route.params;
    return (
        <View style={styles.contrainer}>
            <Header navigation={navigation} page="Comment" />
            <View style={styles.roomName}>
                <Text style={styles.roomNameText}>Room Name {roomID}</Text>
            </View>
            <View style={styles.message}>
                <ChatDisplay roomID={roomID} />
            </View>
            <View style={styles.messageInput}>
                <ChatInput roomID={roomID} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contrainer: {
        flex: 1,
        backgroundColor: '#C4C4C4'
    },
    commentContent: {
        marginTop: 5,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: '#fff',
        borderRadius: 5
    },
    roomName: {
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    roomNameText: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    message:{
        marginTop:5,
        marginLeft:20,
        marginRight:20,
        backgroundColor:'#fff',
        height:'70%',
        borderRadius:5,
        padding:10
    },
    messageInput:{
        marginTop:5,
        marginLeft:20,
        marginRight:20,
        backgroundColor:'#fff',
        height:'10%',
        borderRadius:5,
        padding:10
    }

})