import React from 'react';
import { StyleSheet, View } from 'react-native';

const Container = ({children}) => (
<View style={styles.container}>{children}</View>
);


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#83c4ec'
    }
})

export default Container;