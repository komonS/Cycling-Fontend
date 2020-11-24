import React from 'react'
import { View, Text, StyleSheet, Image, AsyncStorage, TouchableOpacity, Button, ScrollView } from 'react-native'
import Header from '../layout/Header'
import PostContent from '../widget/PostContent';

export default function Comment({navigation,route}) {
    const { postID } = route.params;
    return (
        <View style={styles.contrainer}>
            <Header/>
            <View>
                <PostContent postID={postID} />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    contrainer: {
        flex: 1,
        backgroundColor: '#C4C4C4'
    },

})
