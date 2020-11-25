import React, { useState,useContext } from 'react'
import { View, Text, StyleSheet, Image, AsyncStorage, TouchableOpacity, ScrollView } from 'react-native'
import {MessageContext} from '../../store/MessageProvider'

export default function ChatDisplay(props) {
    const {message} = useContext(MessageContext)
    /*const [message2] = useState([
        {
            userID: 1,
            username: 'user1',
            fname: 'Komon',
            lname: 'Wanje',
            message: "Hi"
        },
        {
            userID: 2,
            username: 'user2',
            fname: 'Jonh',
            lname: 'Dept',
            message: "Yo"
        },
        {
            userID: 2,
            username: 'user2',
            fname: 'Jonh',
            lname: 'Dept',
            message: "Yo"
        },
        {
            userID: 2,
            username: 'user2',
            fname: 'Jonh',
            lname: 'Dept',
            message: "Yo"
        },
        {
            userID: 2,
            username: 'user2',
            fname: 'Jonh',
            lname: 'Dept',
            message: "Yo"
        },
        {
            userID: 2,
            username: 'user2',
            fname: 'Jonh',
            lname: 'Dept',
            message: "Yo"
        },
        {
            userID: 2,
            username: 'user2',
            fname: 'Jonh',
            lname: 'Dept',
            message: "Yo"
        },
        {
            userID: 2,
            username: 'user2',
            fname: 'Jonh',
            lname: 'Dept',
            message: "Yo"
        },
        {
            userID: 2,
            username: 'user2',
            fname: 'Jonh',
            lname: 'Dept',
            message: "Yo"
        },
        {
            userID: 2,
            username: 'user2',
            fname: 'Jonh',
            lname: 'Dept',
            message: "last data"
        }
    ])
    */

    const Message = (props) => {
        let messageBox = ""

        let id = AsyncStorage.getItem('userID')
        if (props.userID === id) {
            messageBox = <View style={styles.yourMessageBox}>
                <View style={styles.yourMessageImage} >
                    <Image
                        style={styles.userImage}
                        source={require('../../assets/user.png')}
                    />
                </View>
                <View style={styles.yourMessageInfo}>
                    <Text style={styles.yourMessage}>{props.fname} {props.lname}</Text>
                    <Text>{props.message}</Text>
                </View>
            </View>
        } else {
            messageBox = <View style={styles.otherMessageBox}>
                <View style={styles.otherMessageImage} >
                    <Image
                        style={styles.userImage}
                        source={require('../../assets/user.png')}
                    />
                </View>
                <View style={styles.otherMessageInfo}>
                    <Text style={styles.otherMessage}>{props.fname} {props.lname}</Text>
                    <Text>{props.message}</Text>
                </View>
            </View>
        }

        return messageBox
    }


    return (
        <ScrollView showsVerticalScrollIndicator={false}  >
            {message.map((item, index) => (
                <Message userID={item.userID} fname={item.fname} lname={item.lname} message={item.message} />
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    userImage: {
        borderRadius: 50,
        height: 30,
        width: 30,
    },
    yourMessageBox: {
        backgroundColor: '#94F9F3',
        flexDirection: 'row',
        padding: 10,
        borderRadius: 5,
        marginBottom: 5
    },
    yourMessage: {
        fontWeight: 'bold'
    },
    yourMessageInfo: {
        justifyContent: 'center',
        marginLeft: 10
    },
    yourMessageImage: {
        justifyContent: 'center',
        alignItems: 'center'
    },


    otherMessageBox: {
        backgroundColor: '#E5E5E5',
        flexDirection: 'row-reverse',
        padding: 10,
        borderRadius: 5,
        marginBottom: 5
    },
    otherMessage: {
        fontWeight: 'bold'
    },
    otherMessageInfo: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginRight: 10
    },
    otherMessageImage: {
        justifyContent: 'center',
        alignItems: 'center'
    },
})
