import React, { useState, useEffect, useRef } from "react";
import {Text, View, Image, Modal, TouchableOpacity, SafeAreaView, StyleSheet} from "react-native";
import { Camera } from "expo-camera";
import { FontAwesome } from "@expo/vector-icons";

export default function Photo({navigation}) {
  const camRef = useRef(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [open, setOpen] = useState(false);
  const [send, setSend] = useState(false);


  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>Acesso negado!</Text>;
  }

  async function takePicture() {
    if (camRef) {
      const data = await camRef.current.takePictureAsync();
      setCapturedPhoto(data.uri);
      setOpen(true);
      //console.log(data);
    }
  }
 
  return (
    <SafeAreaView style={styles.container}>
      <Camera style={styles.camera} type={type} ref={camRef}>
        <View style={styles.contentButtons}>
          <TouchableOpacity
            style={styles.buttonFlip}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <FontAwesome name="exchange" size={23} color="#fff"></FontAwesome>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonCamera} onPress={takePicture}>
            <FontAwesome name="camera" size={23} color="#fff"></FontAwesome>
          </TouchableOpacity>

          

          <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.navigate('Solicitation')}>
            <FontAwesome name="arrow-left" size={30} color="#fff"></FontAwesome>
          </TouchableOpacity>

        </View>
      </Camera>
      {capturedPhoto && (
        <Modal animationType="slide" transparent={true} visible={open}>
          <View style={styles.contentModal}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setOpen(false)}
            >
              <FontAwesome name="close" size={35} color="#fff"></FontAwesome>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.sendButton}
              onPress={() => setSend(false)}
            >
              <FontAwesome name="check" size={35} color="#fff"></FontAwesome>
            </TouchableOpacity>

            <Image style={styles.imgPhoto} source={{ uri: capturedPhoto }} />
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: '#4eabe4',
  },
  camera: {
    height: "100%",
    width: "100%",
  },
  contentButtons: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
  },
  buttonCamera: {
    position: "absolute",
    bottom: 12,
    right: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4eabe4",
    margin: 20,
    height: 50,
    width: 50,
    borderRadius: 50,
 
  },
  buttonFlip: {
    position: "absolute",
    bottom: 12,
    left: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4eabe4",
    margin: 20,
    height: 50,
    width: 50,
    borderRadius: 50,
    
  },
  contentModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    margin: 20,
  },
  closeButton: {
    position: "absolute",
    top: 35,
    left: 300,
    margin: 10,
  },
  imgPhoto: {
    width: "100%",
    height: 550,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonBack:{
    position: "absolute",
    top: 15,
    left: 10,
    margin: 10,
  },
  sendButton:{
    position: "absolute",
    top: 35,
    left: 250,
    margin: 10,
  }
});