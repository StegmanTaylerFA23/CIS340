// Import necessary components
import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
// Functional Component
export default function BakeryMenuScreen() {
  // TODO: Create a menu screen using components like:
  // ScrollView, Image, Text, and StyleSheet

// Array of menu items for greg's produce
const menuItems = [
  {
    name: 'Banana',
    description: 'Fresh, ripe bananas packed with potassium.',
    image: {
      uri: 'https://raw.githubusercontent.com/StegmanTaylerFA23/CIS340/refs/heads/main/IMAGES/Banana.jpg'
    }
  },
  {
    name: 'Red Grape',
    description: 'Classic red grapes, great for salads or on their own.',
    image: {
      uri: 'https://raw.githubusercontent.com/StegmanTaylerFA23/CIS340/refs/heads/main/IMAGES/RedGrape.jpg'
    }
  },
  {
    name: 'Green Grape',
    description: 'Crisp and tart seedless green grapes.',
    image: {
      uri: 'https://raw.githubusercontent.com/StegmanTaylerFA23/CIS340/refs/heads/main/IMAGES/GreenGrape.png'
    }
  },
  {
    name: 'Purple Grape',
    description: 'Juicy and bold in flavor — perfect for snacking.',
    image: {
      uri: 'https://raw.githubusercontent.com/StegmanTaylerFA23/CIS340/refs/heads/main/IMAGES/PurpleGrape.png'
    }
  },
  {
    name: 'Cotton Candy Grape',
    description: 'Sweet grapes that taste like cotton candy.',
    image: {
      uri: 'https://raw.githubusercontent.com/StegmanTaylerFA23/CIS340/refs/heads/main/IMAGES/CottonCandyGrape.jpg'
    }
  }
];

  return (
    <ScrollView contentContainerStyle={ styles.container } style={{backgroundColor :'#A34D4A'}}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>Greg's Produce Menu</Text>
      {menuItems.map( (item,index) => (
        <View key={index} style={styles.card}>
          <Image source={item.image} style={styles.image}/>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16
  },
  card: {
    backgroundColor: '#f8f8f8',
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 8,
    marginBottom: 10
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    color: '#555',
    marginTop: 4
  }
});
