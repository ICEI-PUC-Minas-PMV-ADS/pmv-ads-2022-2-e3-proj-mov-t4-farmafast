import React, { useState } from 'react';
import { View, Text, TextInput, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';

import { Header, Container } from './importsComponents';

function Solicitation({ navigation }) {

    return (
        <Container>
            <Header />

            <SafeAreaView>
                <Text style={styles.title}>Escreva o nome do medicamento</Text>

                <TextInput
                    placeholder='Ex: Amoxicilina'
                    placeholderTextColor={"black"}
                    style={styles.input}
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Enviar</Text>
                </TouchableOpacity>


                <Text style={styles.title}>Anexe uma foto da receita</Text>

            </SafeAreaView>

        </Container>
    )

};

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
        alignItems: 'center',
        fontSize: 17,
        margin: 25,
        marginBottom: 20,
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

