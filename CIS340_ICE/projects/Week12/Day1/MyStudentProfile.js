// Importing React and required components from react-native
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function MyApp({ studentName }){
    return(

        <View style={styles.card}>

            <Text style={styles.text}>
                Monkey business, Hello I am {studentName}, a student in CIS340!
            </Text>

        </View>

    );
}

export default function MultiComp(){
    return(
        <View style={styles.container}>
            <MyApp studentName="Tayler"></MyApp>
            <MyApp studentName="Ramadan"></MyApp>
            <MyApp studentName="George"></MyApp>
            <MyApp studentName="Alice"></MyApp>
            <MyApp studentName="Bob"></MyApp>

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

    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
    }
})