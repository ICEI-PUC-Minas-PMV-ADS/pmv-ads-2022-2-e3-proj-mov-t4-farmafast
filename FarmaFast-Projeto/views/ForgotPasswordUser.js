import React, {useEffect}from 'react';
import { View, Text, StyleSheet, Alert, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native'

export default function ForgotPassword({navigation}) 

{


    return (
<KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={[styles.container, styles.darkbg]}>
    <View style={styles.container}>
        
        <Animatable.View animation="fadeInUp" styles={styles.containerForm}>
            <Text style={styles.titleCPF}>CPF</Text>
            <TextInput style={styles.inputCPF}  placeholder="000.000.000-00"  keyboardType='numeric'/>

            <Text style={styles.titlePassword}>Digite sua nova senha</Text>
            <TextInput style={styles.inputPassword}  secureTextEntry={true} placeholder="Nova senha"/>

            <TouchableOpacity style={styles.button} onPress={()=>setDisplay('flex')}>
                <Text style={styles.buttonText}>Trocar senha</Text>
            </TouchableOpacity>
        </Animatable.View>
    </View>

        
</KeyboardAvoidingView>

    )

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#83c4ec'
    },
    containerForm:{
        backgroundColor:'#fff',
        flex:1,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        paddingStart:'10%',
        paddingEnd:'5%'
    },
    titleCPF:{
        fontSize:20,
        marginTop:400,
        marginLeft:'10%',
        width: 50,

    },
    inputCPF:{
       fontSize:16,
       fontWeight:'bold',
       borderRadius:3,
       marginLeft: '10%',
       backgroundColor:'#e0e1e6',
       width: 300,
       padding: 15,
       marginTop: 3,
       marginBottom: 4
    },


    titlePassword:{
        fontSize:20,
        marginLeft:'10%',
        marginBottom: 70,
        width: 210,
    },
    inputPassword:{
        fontSize:16,
        fontWeight:'bold',
        borderRadius:3,
        marginLeft: '10%',
        backgroundColor:'#e0e1e6',
        width: 300,
        padding: 15,
        marginTop: -65
       
     },
     button:{
        backgroundColor:'#4eabe4',
        width:'80%',
        alignItems:'center',
        borderRadius:4,
        marginLeft:'10%',
        paddingVertical: 10,
        justifyContent:'center',
        marginTop:15,
       
    },
    buttonText:{
        color:'#fff',
        fontSize:18,
        fontWeight:'bold',
        
    }  
})