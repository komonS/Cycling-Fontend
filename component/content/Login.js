import React,{useState,useContext} from 'react'
import { View, Text, StyleSheet, Image, AsyncStorage, TouchableOpacity, Button, Alert } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import Header from '../layout/Header'
import {LoginContext} from '../../store/LoginProvider'

export default function Login({ navigation }) {
    const {login,setLogin} = useContext(LoginContext)

    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')

    const [id, setId] = useState('')

    const checkLogin = async () => {
        if((username != '') &&(password != '')){
            try{
                await AsyncStorage.setItem('userID',username)
                let id = await AsyncStorage.getItem('userID');
                setLogin(true)
                navigation.navigate('Room')
            }catch{
                Alert.alert("Can not login please tyr again")
            }
            
            
            //localStorage.userID = username
        }else{
            Alert.alert("Please enter user or password")
        }
    }
    return (
        <View style={styles.contrainer}>
            <Header navigation={navigation} page="Login" />
            <View style={styles.content}>
                
                <View style={styles.loginLayer}>
                    <View style={styles.inputLogin}>
                        <Text style={styles.loginText}>Username</Text>
                        <TextInput style={styles.loginInput} onChangeText={text=>setUsername(text)} />
                    </View>
                    <View style={styles.inputLogin}>
                        <Text style={styles.loginText}>Password</Text>
                        <TextInput style={styles.loginInput} secureTextEntry={true} onChangeText={text=>setPassword(text)} />
                    </View>
                    <View style={styles.buttonLogin}>
                        <TouchableOpacity style={styles.loginButton} onPress={()=>checkLogin()}>
                            <Text style={styles.loginButtonText}>Login</Text>
                        </TouchableOpacity>
                    </View>
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
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginLayer: {
        backgroundColor: '#fff',
        width: '90%',
        padding: 20,
        borderRadius: 5,
        flexDirection: 'column',
    },
    loginText: {
        fontWeight: 'bold',
        marginRight: 5
    },
    loginInput: {
        backgroundColor: '#E8E2E2',
        width: '80%',
        borderRadius: 5
    },
    inputLogin: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:10
    },
    loginButton:{
        backgroundColor:'#94F9F3',
        height:30,
        width:80,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5
    },
    loginButtonText:{
        color:'#fff',
        fontWeight: 'bold',
    },
    buttonLogin:{
        justifyContent:'center',
        alignItems:'center',
    }


})