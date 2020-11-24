import React from 'react'
import { View, Text, StyleSheet, Image, AsyncStorage, TouchableOpacity, Button, ScrollView } from 'react-native'
import Header from '../layout/Header'
import Menubar from '../widget/Menubar';
import PostContentAll from '../widget/PostContentAll';
import PostFunction from '../widget/PostFunction';

export default function Post({ navigation, route }) {
    const { roomID } = route.params;
    return (
        <View style={styles.contrainer}>
            <Header navigation={navigation} page="Post" />
            <View style={styles.roomName}>
                <Text style={styles.roomNameText}>Room Name {roomID}</Text>
            </View>
            <Menubar navigation={navigation} />
            <ScrollView>
                <PostFunction />
                <PostContentAll navigation={navigation} />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    contrainer: {
        flex: 1,
        backgroundColor: '#C4C4C4'
    },
    roomName: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    roomNameText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    menubar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#DEDCDC',
        paddingLeft: 20,
        paddingRight: 20
    },
    menuButton: {
        backgroundColor: '#94F9F3',
        padding: 5,
        margin: 5,
        width: 72,
        height: 30,
        borderRadius: 5,
        alignItems: 'center'
    },
    menuText: {
        color: '#ffffff',
        fontWeight: 'bold'
    }
})