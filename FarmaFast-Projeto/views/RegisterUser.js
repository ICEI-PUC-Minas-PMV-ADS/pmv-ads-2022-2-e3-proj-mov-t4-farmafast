import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import PeopleService from './../Services/peopleService';
import React, { useEffect, useState } from 'react';
import { TextInputMask } from "react-native-masked-text";

export default function RegisterUser({ navigation }) {
    const [cpf, setCpf] = useState('');
    const [birthDate, setDate] = useState('');
    return (

        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Image
                    source={require('../assets/img/logoCircle.png')}
                    style={{ width: '60%' }}
                    resizeMode='contain' />
            </View>

            <Animatable.View animation="fadeInUp" styles={styles.containerForm}>

                <Text style={styles.title}>Nome Completo</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite o seu nome completo" />

                <Text style={styles.title}>CPF</Text>
                <TextInputMask style={styles.input}
                    type={'cpf'}
                    placeholder="000.000.000-00"
                    keyboardType='numeric'
                    value={cpf}
                    onChangeText={text => setCpf(text)} />

                <Text style={styles.title}>Data de nascimento</Text>
                <TextInputMask
                    type={'datetime'}
                    options={{
                        format: 'DD/MM/YYYY'
                    }}
                    style={styles.input}
                    placeholder="00/00/0000"
                    keyboardType='numeric'
                    value={birthDate}
                    onChangeText={text => setDate(text)} />


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

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onclik={(new PeopleService).post()}>Cadastrar</Text>
                </TouchableOpacity>


            </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#83c4ec',
    },
    containerForm: {
        backgroundColor: '#fff',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '15%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 20,
        marginTop: 4,
        marginLeft: '10%',
    },
    input: {
        marginTop: 5,
        marginLeft: '10%',
        padding: 15,
        width: 300,
        backgroundColor: '#e0e1e6',
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 3
    },
    button: {
        backgroundColor: '#4eabe4',
        width: '80%',
        alignItems: 'center',
        borderRadius: 4,
        marginLeft: '10%',
        paddingVertical: 10,
        justifyContent: 'center',
        marginTop: 15,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    containerLogo: {
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center',

    },


}
)
