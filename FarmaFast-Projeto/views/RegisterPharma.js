import React from 'react';
import { Button, View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import * as Animatable from 'react-native-animatable';
import companiesService from './../Services/companiesService';


export default function RegisterPharma({ navigation }) {
        function onSubmit(values, actions) {
                if (values !== undefined) {
                        // console.info('SUBMIT', values);

                        if (values.password != values.passwordconfirm)
                                return "Ops! The passwords isn't matching.";

                        let service = new companiesService();
                        var data = {
                                "name": values.name,
                                "cnpj": values.cnpj,
                                "password": values.password
                        }
                        service.Save(data);
                }

        };
        return (

                <View style={styles.container}>
                        <View style={styles.containerLogo}>
                                <Image
                                        source={require('../assets/img/logoCircle.png')}
                                        style={{ width: '60%' }}
                                        resizeMode='contain' />
                        </View>

                        <Animatable.View animation="fadeInUp" styles={styles.containerForm}>
                                {/* 
                                <Formik
                                        onSubmit={onSubmit}
                                        initialValues={{ name: '', cnpj: '', password: '', passwordconfirm: '' }}
                                        render={({ values }) => (
                                                <Form>

                                                        <Text style={styles.title}>Nome</Text>
                                                        <Field
                                                                style={styles.input}
                                                                placeholder="Digite o nome da farmácia"
                                                                name="name"
                                                                type="text"
                                                        />

                                                        <Text style={styles.title}>CNPJ</Text>
                                                        <Field style={styles.input}
                                                                // type={'cnpj'}
                                                                placeholder="00.000.000/0000-00"
                                                                // keyboardType='numeric'
                                                                name="cnpj"
                                                                type="text"
                                                        //</Form>onChangeText={text => setCnpj(text)} 
                                                        />

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
        button1: {
                backgroundColor: '#4eabe4',
                width: '40%',
                height: '20px',
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


});