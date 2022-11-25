import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Appbar } from 'react-native-paper';


const Header = () => (
    <View>
        <Appbar.Header style={[styles.header]}>
            <Appbar.BackAction onPress={() => { }} />
            <Appbar.Content title={" "} />
            <Appbar.Action icon="magnify" onPress={() => { }} />
        </Appbar.Header>
    </View>
);


const styles = StyleSheet.create({
    header: {
        backgroundColor: '#4eabe4'
    }
})

export default Header;

