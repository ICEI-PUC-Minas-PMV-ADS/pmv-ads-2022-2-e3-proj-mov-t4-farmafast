import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Header } from './importsComponents';
import * as Animatable from 'react-native-animatable';
import { useForm, Controller } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import PeopleService from './../Services/peopleService';

var schema = yup.object({
    username: yup.string().required("Informe seu nome completo!"),
    usercpf: yup.number().required("Informe seu cpf!"),
    userdate: yup.number().required("Informe sua data de nascimento!"),
    email: yup.string().email("Email Inválido!").required("Informe seu e-mail!"),
    password: yup.string().min(6, "A senha deve ter pelo menos 6 digitos").required("Informe sua senha"),
    passwordconfirm: yup.string().required("As senhas devem ser iguais!")
});

export default function RegisterUser({ navigation: { goBack } }) {

    var { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    function handleCadastro(data) {
        let service = new PeopleService();
        console.info(data);
        service.Save(data);

    }

    return (

        <View style={styles.container}>

            <Header title={'Registro de Usuário'}
                goBack={() => goBack()}
            />
            <Animatable.View animation="fadeInUp" styles={styles.containerForm}>


                <Text style={styles.title}>Nome Completo</Text>
                <Controller
                    control={control}
                    name="username"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={[styles.input, {
                                borderWidth: errors.username && 1,
                                borderColor: errors.username && '#ff375b'
                            }]}
                            onChangeText={onChange}
                            onBlur={onBlur} //chamado quando o textinput é trocado
                            value={value}
                            placeholder="Digite o seu nome completo" />
                    )} />
                <Text style={styles.labelError}>{errors.username && errors.username?.message}</Text>

                <Text style={styles.title}>CPF</Text>
                <Controller
                    control={control}
                    name="usercpf"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={[styles.input, {
                                borderWidth: errors.usercpf && 1,
                                borderColor: errors.usercpf && '#ff375b'
                            }]}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            placeholder="000.000.000-00" />
                    )} />
                <Text style={styles.labelError}>{errors.usercpf && errors.usercpf?.message}</Text>

                <Text style={styles.title}>Data de nascimento</Text>
                <Controller
                    control={control}
                    name="userdate"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={[styles.input, {
                                borderWidth: errors.userdate && 1,
                                borderColor: errors.userdate && '#ff375b'
                            }]}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            placeholder="00/00/0000" />
                    )} />
                <Text style={styles.labelError}>{errors.userdate && errors.userdate?.message}</Text>

                <Text style={styles.title}>Email</Text>
                <Controller
                    control={control}
                    name="email"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={[styles.input, {
                                borderWidth: errors.email && 1,
                                borderColor: errors.email && '#ff375b'
                            }]}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            placeholder="Digite seu melhor email" />
                    )} />
                <Text style={styles.labelError}>{errors.email && errors.email?.message}</Text>

                <Text style={styles.title}>Senha</Text>
                <Controller
                    control={control}
                    name="password"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={[styles.input, {
                                borderWidth: errors.password && 1,
                                borderColor: errors.password && '#ff375b'
                            }]}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            placeholder="Digite sua senha"
                            type="password"
                            secureTextEntry={true} />
                    )} />
                <Text style={styles.labelError}>{errors.password && errors.password?.message}</Text>


                <Text style={styles.title}>Confirme sua senha</Text>
                <Controller
                    control={control}
                    name="passwordconfirm"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={[styles.input, {
                                borderWidth: errors.passwordconfirm && 1,
                                borderColor: errors.passwordconfirm && '#ff375b'
                            }]}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            placeholder="Digite sua senha"
                            type="password"
                            secureTextEntry={true} />
                    )} />
                <Text style={styles.labelError}>{errors.passwordconfirm && errors.passwordconfirm?.message}</Text>

                <TouchableOpacity style={styles.button} onPress={handleSubmit(handleCadastro)}>
                    <Text style={styles.buttonText}>
                        Cadastrar
                    </Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    )
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
        padding: 8,
        width: 300,
        backgroundColor: '#e0e1e6',
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 3
    },
    button: {
        backgroundColor: '#4eabe4',
        width: '40%',
        height: 40,
        alignItems: 'center',
        borderRadius: 4,
        marginLeft: '32%',
        paddingVertical: 10,
        marginTop: 15,
    },
    buttonText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerLogo: {
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    labelError: {
        alignSelf: 'flex-start',
        color: '#ff375b',
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 8,
        marginLeft: '10%',
    }
});