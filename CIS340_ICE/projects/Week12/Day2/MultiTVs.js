// Importing React and the useState hook to manage state
import React, { useState } from 'react';

// Importing components from react-native
import { Text, View, Button } from 'react-native';
// import { processColorsInProps } from 'react-native-reanimated/lib/typescript/Colors';


// Main component that renders multiple TVs
function Tv(props) {

    //use state hooke
    const [isOff, setIsOff] = useState(true);

    return(
        <View>

            <Text>

                {/* Display the TV name and its current state using conditional rendering */}
                This is {props.name} TV, and it is {isOff? "Off" : "Turned on"}!

            </Text>

            <Button
                onPress={() => {
                    setIsOff(false);
                }}
                disabled={!isOff}
                title={isOff ? "Turn Me On, Please!" : "Thanks for turning me on!"}

            />


        </View>

    );
}

//Main component that renders multiple TVs
export default function MultiTVs(){
    return(
        <View>
            {/* Rendering two TV components with different names */}
            <Tv name="LG"/>
            <Tv name="Sony"/>
        </View>

    )
}
