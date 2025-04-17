import React from 'react';
import { Text, Image, ScrollView } from 'react-native';

const dog ={
  uri: 'https://raw.githubusercontent.com/AnanthIyerKrishnan/CIS340/master/images/dog2.png',
  width: 64,
  height: 64
}

export default MyScrollViewApp = () => (
  <ScrollView style={{padding: 40}}>
  <Text>Try to scroll down</Text>
  <Image source={require('../../../assets/dog2.png')} style={{width: 80, height: 70}}/>
  <Image source={dog}></Image>
  <Image source={dog}></Image>
  <Image source={dog}></Image>
  <Image source={dog}></Image>
  <Image source={dog}></Image>
  <Image source={require('../../../assets/dog2.png')} style={{width: 80, height: 70}}/>
  <Image source={dog}></Image>
  <Image source={dog}></Image>
  <Image source={dog}></Image>
  <Image source={dog}></Image>
  <Image source={dog}></Image>
  <Image source={require('../../../assets/dog2.png')} style={{width: 80, height: 70}}/>
  <Image source={dog}></Image>
  <Image source={dog}></Image>
  <Image source={dog}></Image>
  <Image source={dog}></Image>
  <Image source={dog}></Image>
  </ScrollView>

);

