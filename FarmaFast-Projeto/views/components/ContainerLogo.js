import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const ContainerLogo = () => (
    <View style={styles.containerLogo}>
        <Image
            source={require('../../assets/img/logoCircle.png')}
            style={{ width: '60%' }}
            resizeMode='contain' />
    </View>

);


const styles = StyleSheet.create({
    containerLogo: {
        flex: 0.7,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default ContainerLogo;