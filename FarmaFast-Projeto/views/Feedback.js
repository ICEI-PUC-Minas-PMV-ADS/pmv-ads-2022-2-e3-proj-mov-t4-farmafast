import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import { Header, Container } from './importsComponents';

function Feedback({ navigation }) {

    return (
        <Container>
            <Header />


            <View>
                <Text style={styles.title}>Selecione um dos números abaixo:</Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('')}>
                    <Text style={styles.text}>1- Ótimo</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('')}>
                    <Text style={styles.text}>2- Bom</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('')}>
                    <Text style={styles.text}>3- Médio</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('')}>
                    <Text style={styles.text}>4- Ruim</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('')}>
                    <Text style={styles.text}>5- Péssimo</Text>
                </TouchableOpacity>

                <Text style={styles.title}>Fale Conosco:</Text>

                <TextInput
                    placeholder='Como podemos te ajudar?'
                    placeholderTextColor={"black"}
                    style={styles.input}
                />

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('')}>
                    <Text style={styles.text}>Enviar</Text>
                </TouchableOpacity>

            </View>



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

    },

    button: {
        backgroundColor: '#4eabe4',
        width: '60%',
        alignItems: 'center',
        borderRadius: 4,
        marginLeft: '20%',
        paddingVertical: 12,
        justifyContent: 'center',
        marginTop: 10,

    },
    text: {
        color: '#fff',
        fontWeight: 'bold',

    },
    input: {
        marginTop: 1,
        marginBottom: 10,
        marginLeft: '10%',
        padding: 70,
        paddingVertical: 50,
        paddingHorizontal: 20,
        width: '80%',
        backgroundColor: '#e0e1e6',
        fontSize: 16,
        borderRadius: 3,
    }


});


export default Feedback;
