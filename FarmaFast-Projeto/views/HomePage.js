import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Animated } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
 
export default function Inicial({navigation})
{
    return (
        <View style={styles.container}>
           
            <View style={styles.containerLogo}>
                <Animatable.Image
                    animation="flipInY"
                    source={require('../assets/img/logoCircle.png')}
                    style={{width:'60%'}}
                    resizeMode='contain'
                />
            </View>
 
            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
 
                <Text style={styles.title}>Quero entrar como...</Text>
               
                <TouchableOpacity style={styles.buttonFarm} onPress={ () => navigation.navigate('LoginFarmacia')}>
                    <Text style={styles.buttonTextFarm}>Farmácia</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonUser} onPress={ () => navigation.navigate('LoginUsuario')}>
                    <Text style={styles.buttonTextUser}>Usuário</Text>
                </TouchableOpacity>
 
            </Animatable.View>
        </View>
    )
}
 
const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#83c4ec',
  },
  containerLogo:{
     flex:2,
     backgroundColor:'#83c4ec',
     justifyContent:'center',
     alignItems:'center',
  },
  containerForm:{
      flex:1,
      backgroundColor:'#e0e1e6',
      borderTopLeftRadius:25,
      borderTopRightRadius:25,
      paddingStart:'15%',
      paddingEnd:'5%',
  },
  title:{
      fontWeight:'bold',
      fontSize:28,
      marginTop:20,
      marginBottom:15,
  },
  buttonFarm:{
    position:'absolute',
    backgroundColor:'#4eabe4',
    borderRadius:50,
    paddingVertical:8,
    width:'85%',
    height:'15%',
    alignSelf:'center',
    bottom: '50%',
    alignItems:'center',
    justifyContent:'center'
  },
  buttonTextFarm:{
      fontSize:18,
      color: '#fff',
      fontWeight:'bold'  
  },
  buttonUser:{
      position:'absolute',
      backgroundColor:'#4eabe4',
      borderRadius:50,
      paddingVertical:8,
      width:'85%',
      height:'15%',
      alignSelf:'center',
      bottom: '30%',
      alignItems:'center',
      justifyContent:'center'
  },
  buttonTextUser:{
     fontSize:18,
     color: '#fff',
     fontWeight:'bold'    
  }
  })

