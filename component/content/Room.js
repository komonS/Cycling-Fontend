import React from 'react'
import { View, Text, StyleSheet, Image, AsyncStorage, TouchableOpacity, Button } from 'react-native'
import Header from '../layout/Header'

export default function Room({ navigation }) {
    return (
        <View style={styles.contrainer}>
            <Header navigation={navigation} page="Room" />
            <View style={styles.roomHeader}>
                <Text style={styles.roomHeaderText}>Room List</Text>
            </View>
            <View>
                <View style={styles.itemList}>
                    <Text>Room1</Text>
                    <TouchableOpacity style={styles.buttonItem} onPress={() => navigation.navigate('Post',{
                        roomID:1
                    })} >
                        <Text style={styles.buttonText}>
                            Join
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.itemList}>
                    <Text>Room1</Text>
                    <TouchableOpacity style={styles.buttonItem}  onPress={() => navigation.navigate('Post',{
                        roomID:2
                    })}>
                        <Text style={styles.buttonText}>
                            Join
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.itemList}>
                    <Text>Room1</Text>
                    <TouchableOpacity style={styles.buttonItem}  onPress={() => navigation.navigate('Post',{
                        roomID:3
                    })}>
                        <Text style={styles.buttonText}>
                            Join
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.itemList}>
                    <Text>Room1</Text>
                    <TouchableOpacity style={styles.buttonItem}  onPress={() => navigation.navigate('Post',{
                        roomID:4
                    })}>
                        <Text style={styles.buttonText}>
                            Join
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    contrainer: {
        flex: 1,
        backgroundColor: '#C4C4C4'
    },
    itemList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom:5,
        paddingLeft:25,
        paddingRight:25,
        margin: 2,
        backgroundColor: '#ffffff'
    },
    buttonItem: {
        color: '#ffffff',
        backgroundColor: '#94F9F3',
        padding:10,
        width:70,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText:{
        color:'#ffffff',
        fontWeight:'bold'
    },
    roomHeader: {
        padding: 15,
        margin: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    roomHeaderText: {
        fontSize: 24,
        fontWeight: 'bold'
    }
});

