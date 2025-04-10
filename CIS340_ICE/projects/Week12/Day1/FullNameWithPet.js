// Import React and necessary components from React Native
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function getFullName(fname, mName, lName){
    return `${fname} ${mName} ${lName}`
}

//functional component named my app
export default function MyApp({ pet = "Dog"}) {

    return(
        <View style={styles.container}>

            <Text style={styles.text}>Hello, I am student in CIS340!</Text>

            <Text style={styles.text}>
                My full name is {getFullName("Tayler", "Allen", "Stegman")}
            </Text>

        </View>

    );
}

//creating stylesheet object
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

    card:{
        backgroundColor: 'white',
        padding: 15,
        margin: 10,
        borderRadius: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 4,
    }
})