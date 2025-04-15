// Importing React and necessary components from react-native
import React from 'react';
import { Text, View, Image } from 'react-native';

// Defining the main functional component called CatApp
export default function CatApp() {

    //Defining object 'pic' that holds URI (IMage URL)
    let pic = {
        uri: 'https://raw.githubusercontent.com/AnanthIyerKrishnan/CIS340/master/images/dog2.png'  
    };
    let grape = {
        uri: 'https://img.imageboss.me/fourwinds/width/425/dpr:2/shop/products/rubyseedlessgrapes.jpg?v=1729716408'  
    };
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>

        <Image
            source={grape}
            style={{width: 200, height: 200}}
        />

        </View>
    );

}
