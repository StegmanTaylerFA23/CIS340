// Importing necessary components from React and React Native
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MyApp(){
    const pet = "Dog";

    return(
        <View style ={styles.container}>

            <Text style={styles.text}>
                Hello, I am a student in CIS340!
            </Text>

            <Text style={StyleSheet.text}>
                I have a {pet}
            </Text>


        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },

    text: {
        fontSize: 18,
        color: '#333',
        marginBottom: 10,
    },

})

