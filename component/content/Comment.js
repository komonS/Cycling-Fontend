import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Button, ScrollView } from 'react-native'
import Header from '../layout/Header'
import CommentDetail from '../widget/CommentDetail';
import PostContent from '../widget/PostContent';

export default function Comment({navigation,route}) {
    const { postID } = route.params;
    return (
        <View style={styles.contrainer}>
            <Header navigation={navigation} page="Comment" />
            <View>
                <PostContent postID={postID} />
            </View>
            <ScrollView style={styles.commentContent} showsVerticalScrollIndicator={false}>
                <CommentDetail postID={postID} />
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    contrainer: {
        flex: 1,
        backgroundColor: '#C4C4C4'
    },
    commentContent:{
        marginTop:5,
        marginLeft:30,
        marginRight:30,
        backgroundColor:'#fff',
        borderRadius:5
    }

})
