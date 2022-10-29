import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

export default function ForgotPasswordPharma({ navigation }) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={[styles.container]}
    >
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("LoginFarmacia")}>
          <Text style={styles.backText}>Voltar</Text>
        </TouchableOpacity>
        <Animatable.View animation="fadeInUp" styles={styles.containerForm}>
          <Text style={styles.titleCnpj}>CNPJ</Text>
          <TextInput
            style={styles.inputCnpj}
            placeholder="000.000.000-00"
            keyboardType="numeric"
          />

          <Text style={styles.titlePassword}>Digite sua nova senha</Text>
          <TextInput
            style={styles.inputPassword}
            secureTextEntry={true}
            placeholder="Nova senha"
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => setDisplay("flex")}
          >
            <Text style={styles.buttonText}>Trocar senha</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#83c4ec",
  },
  backText: {
    fontSize: 20,
    marginTop: "15%",
    marginLeft: "5%",
  },
  containerForm: {
    backgroundColor: "#fff",
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "10%",
    paddingEnd: "5%",
  },
  titleCnpj: {
    fontSize: 20,
    marginTop: "50%",
    marginLeft: "10%",
  },
  inputCnpj: {
    marginTop: 5,
    marginLeft: "10%",
    padding: 15,
    width: 300,
    backgroundColor: "#e0e1e6",
    fontSize: 16,
    fontWeight: "bold",
    borderRadius: 3,
  },
  titlePassword: {
    fontSize: 20,
    marginTop: 5,
    marginLeft: "10%",
  },
  inputPassword: {
    marginTop: 5,
    marginLeft: "10%",
    padding: 15,
    width: 300,
    backgroundColor: "#e0e1e6",
    fontSize: 16,
    fontWeight: "bold",
    borderRadius: 3,
  },
  button: {
    backgroundColor: "#4eabe4",
    width: "80%",
    alignItems: "center",
    borderRadius: 4,
    marginLeft: "10%",
    paddingVertical: 10,
    justifyContent: "center",
    marginTop: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
