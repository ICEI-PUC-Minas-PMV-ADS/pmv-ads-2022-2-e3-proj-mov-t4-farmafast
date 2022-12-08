import React, { useState } from 'react';
import { View, Text, TextInput, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { Header, Container, ContainerLogo } from './importsComponents';

function Solicitation({ navigation }) {

    return (


        <Container>
            <Header title={'Tela Inicial'} 
            goBack={() => navigation.goBack()}/>
        <ContainerLogo />

            <SafeAreaView>
                <Text style={styles.title}>Escreva o nome do medicamento</Text>

                <TextInput
                    placeholder='Ex: Amoxicilina'
                    placeholderTextColor={"black"}
                    style={styles.input}
                />


                <Text style={styles.title}>Anexe uma foto da receita</Text>

                <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('Photo')}>
                    <Text style={styles.buttonText}>Câmera</Text>
                </TouchableOpacity>

            </SafeAreaView>

        </Container>
    )

};

const styles = StyleSheet.create({
    title: {
        marginLeft: 45,
        color: 'black',
        fontSize: 17,
        margin: 30,
        marginBottom: 5,
    },

    input: {
        marginTop: 5,
        marginLeft: '10%',
        padding: 15,
        width: '80%',
        backgroundColor: '#e0e1e6',
        fontSize: 16,
        borderRadius: 3,
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
        color: '#FFF',
    }
})


export default Solicitation;
