import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Header, Container, ContainerLogo } from './importsComponents';


function InitialUser({ navigation }) {

    return (

        <Container>
            <Header title={'Tela Inicial'} />
            <ContainerLogo />

            <View>

                <Text style={styles.title}>Bem-vindo ao Farma Fast. Selecione uma das opções:</Text>

                <TouchableOpacity style={styles.button} mode="elevated" onPress={() => navigation.navigate('Solicitation')}>
                    <Text style={styles.text}>Solicitar Medicamentos</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RedefinedPasswordUser')}>
                    <Text style={styles.text}>Trocar a senha</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Feedback')}>
                    <Text style={styles.text}>Feedback</Text>
                </TouchableOpacity>




            </View>
        </Container>



    )

};

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        color: 'black',
        alignItems: 'center',
        fontSize: 14,

    },

    button: {
        backgroundColor: '#4eabe4',
        width: '80%',
        alignItems: 'center',
        borderRadius: 20,
        marginLeft: '10%',
        paddingVertical: 23,
        justifyContent: 'center',
        marginTop: 25,

    },
    text: {
        color: '#fff',
        fontWeight: 'bold',

    },


});





export default InitialUser;

