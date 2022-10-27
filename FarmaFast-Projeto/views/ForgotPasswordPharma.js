import React, {useEffect, useState }from 'react';
import { View, Text, StyleSheet, Alert, Image, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native'

export default function ForgotPasswordPharma({navigation}) 
{

    return (
<KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={[styles.container, styles.darkbg]}>
    <View style={styles.container}>

        <Animatable.View animation="fadeInUp" styles={styles.containerForm}>

            <Text style={styles.title}>CNPJ</Text>
            <TextInput style={styles.input}  placeholder="000.000.000-00"  keyboardType='numeric'/>

            <Text style={styles.title}>Digite sua nova senha</Text>
            <TextInput style={styles.input}  secureTextEntry={true} placeholder="Nova senha"/>
        
    
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
    title:{
        fontSize:20,
        marginTop:200,
        marginLeft:'10%',
        borderColor: 'red',
        borderWidth: 1,
        width: 210,
        
        
      },  
    input:{
        marginTop: 5,
        marginBottom:0,
        marginLeft:'10%',
        padding: 15,
        width: 300,
        backgroundColor:'#e0e1e6',
        fontSize:16,
        fontWeight:'bold',
        borderRadius:3,
        
        borderColor: 'red',
        borderWidth: 1
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
        borderColor: 'red',
        borderWidth: 1,
    },
    buttonText:{
        color:'#fff',
        fontSize:18,
        fontWeight:'bold',
        
    }  

})
