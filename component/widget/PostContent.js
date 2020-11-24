import React from 'react'
import { View, Text, StyleSheet, Image, AsyncStorage, TouchableOpacity, Button } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import LinkButton from './LinkButton'
export default function PostContent(props) {
    return (
        <View style={styles.contrainer}>
            <View style={styles.postContent}>
                <View style={styles.postInfo}>
                    <View style={styles.userInfo}>
                        <Image
                            style={styles.userImage}
                            source={require('../../assets/user.png')}
                        />
                        <Text style={styles.userName}>username</Text>
                    </View>
                </View>
                <View style={styles.postDetail}>
                    <Text>content</Text>
                </View>
                <View>
                    <LinkButton />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contrainer: {
        marginTop: 10
    },
    postContent: {
        backgroundColor: '#fff',
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 5,
        borderColor:'#000',
        borderWidth:1
    },
    postInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10
    },
    postDetail: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 20
    },
    userImage: {
        borderRadius: 50,
        height: 30,
        width: 30,
        margin: 5
    },
    userInfo: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5
    },
    userName: {
        fontWeight: 'bold'
    },
    icon: {
        padding: 10,
        color: '#C4C4C4'
    },
    iconDetail: {
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
})
