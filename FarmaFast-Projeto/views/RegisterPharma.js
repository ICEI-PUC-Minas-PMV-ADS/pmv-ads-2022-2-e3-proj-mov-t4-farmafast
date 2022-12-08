<<<<<<< HEAD
import React from 'react';
import { Button, View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import * as Animatable from 'react-native-animatable';
import companiesService from './../Services/companiesService';
=======
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
>>>>>>> origin


export default function RegisterPharma({navigation}) {
  return (

        <View style={styles.container}>
        <View style={styles.containerLogo}>
        <Image
            source={require('../assets/img/logoCircle.png')}
            style={{width:'60%'}}
            resizeMode='contain'/>
         </View>

    <Animatable.View animation="fadeInUp" styles={styles.containerForm}>

        <Text style={styles.title}>Nome</Text>
        <TextInput
        style={styles.input}
        placeholder="Digite o nome da farmácia" />

        <Text style={styles.title}>CNPJ</Text>
        <TextInput
        style={styles.input}
        placeholder="00.000.000/0000-00"
        keyboardType='numeric'/>

<<<<<<< HEAD
                        <Animatable.View animation="fadeInUp" styles={styles.containerForm}>
                                {/* 
                                <Formik
                                        onSubmit={onSubmit}
                                        initialValues={{ name: '', cnpj: '', password: '', passwordconfirm: '' }}
                                        render={({ values }) => (
                                                <Form>
=======
        <Text style={styles.title}>Senha</Text>
        <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Digite sua senha" />

        <Text style={styles.title}>Confirme sua senha</Text>
        <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Repita sua senha" />
>>>>>>> origin

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoginFarmacia')}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>


<<<<<<< HEAD
                                                        <Text style={styles.title}>Senha</Text>
                                                        <Field
                                                                style={styles.input}
                                                                // secureTextEntry={true}
                                                                placeholder="Digite sua senha"
                                                                name="password"
                                                                type="password"
                                                        />

                                                        <Text style={styles.title}>Confirme sua senha</Text>
                                                        <Field
                                                                style={styles.input}
                                                                // secureTextEntry={true}
                                                                placeholder="Repita sua senha"
                                                                name="passwordconfirm"
                                                                type="password"
                                                        />

                                                        <TouchableOpacity style={styles.button1}>
                                                                <button type="submit" title="Cadastrar" value="Cadastrar">
                                                                        Cadastrar
                                                                </button>
                                                        </TouchableOpacity>
                                                </Form>
                                        )}
                                /> */}
                        </Animatable.View>
                </View>
        );
};
=======
    </Animatable.View>
    </View>
  )
}
>>>>>>> origin

const styles = StyleSheet.create({
container:{
        flex:1,
        backgroundColor:'#83c4ec',
},
containerForm:{
        backgroundColor:'#fff',
        flex:1,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        paddingStart:'15%',
        paddingEnd:'5%'
},
title:{
        fontSize:20,
        marginTop:4,
        marginLeft:'10%',
},
input:{
        marginTop: 5,
        marginLeft:'10%',
        padding: 15,
        width: 300,
        backgroundColor:'#e0e1e6',
        fontSize:16,
        fontWeight:'bold',
        borderRadius:3
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
        fontWeight:'bold'
},
containerLogo:{
        flex:0.8,
        justifyContent:'center',
        alignItems:'center',

},


}
)