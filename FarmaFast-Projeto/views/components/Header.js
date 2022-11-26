import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Appbar } from 'react-native-paper';


const Header = ({ title, goBack }) => (
    <View>
        <Appbar.Header style={[styles.header]}>
            {
                goBack &&
                <Appbar.BackAction onPress={goBack} />
            }

            <Appbar.Content title={title} />
        </Appbar.Header>
    </View>
);


const styles = StyleSheet.create({
    header: {
        backgroundColor: '#4eabe4'
    }
})

export default Header;

