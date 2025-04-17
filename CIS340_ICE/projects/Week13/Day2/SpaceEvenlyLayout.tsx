// Importing React and the View component from react-native
import React from 'react';
import { View } from 'react-native';

// Main functional component named App
export default function App() {

    return(
        <View
            style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-evenly'
            }}>
            
            {/* first box */}
            <View
                style={{
                    width: 50,
                    height: 50,
                    backgroundColor: 'red'
                }}>

            </View>

             {/* Second box */}
             <View
                style={{
                    width: 50,
                    height: 50,
                    backgroundColor: 'yellow'
                }}>

            </View>

             {/* Third box */}
             <View
                style={{
                    width: 50,
                    height: 50,
                    backgroundColor: 'green'
                }}>

            </View>
        </View>
    );
}
