import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

import { Header, Container } from './importsComponents';

function Feedback({ navigation }) {

    return (
        <Container>
            <Header
                title={'Feedback'}
                goBack={() => navigation.goBack()}
            />


            <View>

                <Text style={styles.title}>Você pode avaliar o nosso atendimento?</Text>

                <Text style={styles.title}>Selecione um dos números abaixo:</Text>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('')}>
                    <Text style={styles.text}>1 - Muito bom</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('')}>
                    <Text style={styles.text}>2 - Bom</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('')}>
                    <Text style={styles.text}>3 - Médio</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('')}>
                    <Text style={styles.text}>4 - Ruim</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('')}>
                    <Text style={styles.text}>5 - Muito ruim</Text>
                </TouchableOpacity>

                <Text style={styles.title}>Fale Conosco:</Text>


                <TextInput
                    placeholder=''
                    placeholderTextColor={"black"}
                    style={styles.input}
                />


                <TouchableOpacity style={styles.buttonEnvio} onPress={() => navigation.navigate('')}>
                    <Text style={styles.textEnvio}>Enviar</Text>
                </TouchableOpacity>

            </View>



        </Container>
    )
};

const styles = StyleSheet.create({
    title: {
        marginLeft: 45,
        color: 'black',
        fontSize: 17,
        margin: 30,
        marginBottom: 20,

    },

    button: {
        backgroundColor: '#83c4ec',
        width: '60%',
        marginLeft: '20%',
        paddingVertical: 5,
        justifyContent: 'center',
        marginTop: 3,
    },

    text: {
        color: 'black',
    },

    buttonEnvio: {
        backgroundColor: "#4eabe4",
        width: "80%",
        alignItems: "center",
        borderRadius: 4,
        marginLeft: "10%",
        paddingVertical: 12,
        justifyContent: "center",
        marginTop: 15,
    },

    textEnvio: {
        color: '#FFF',
        fontWeight: 'bold'
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
