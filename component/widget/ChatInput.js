import React,{useContext,useState} from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { MessageContext } from '../../store/MessageProvider'

export default function ChatInput(props) {
    const { message, addMessage } = useContext(MessageContext)

    const [ms, setMs] = useState('')

    const setMessage = () => {
        let m = {
            userID: 3,
            username: 'user3',
            fname: 'Willy',
            lname: 'Macloren',
            message: ms
        }
        addMessage(m)
    }
    return (
        <View style={styles.messageInputContent}>
            <TextInput style={styles.messageInput}
                placeholder="Message something..."
                multiline={true}
                textAlignVertical="top"
                onChangeText={text => setMs(text)}
            />
            <TouchableOpacity style={styles.messageInputButton} onPress={() => setMessage()}>
                <FontAwesomeIcon icon={faPaperPlane} size="50" color="#94F9F3" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    messageInputContent: {
        flexDirection: 'row'
    },
    messageInputButton: {
        justifyContent: 'flex-end',
    },
    messageInput: {
        width: '80%',
    }
})