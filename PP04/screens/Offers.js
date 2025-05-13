// Import necessary components
import React, { useState } from 'react';
import { View, Text, ScrollView, Image, Button, StyleSheet } from 'react-native';

// Functional Component
export default function BakeryOffer() {
  // TODO: Use useState, Math.random(), Image, Text, and Button 
  // to create an interactive offer screen
  const deals = [
    // list of deals to choose from
    {
      name: 'Banana',
      description: 'Fresh, ripe bananas packed with potassium.',
      discount: '20% off this week only!',
      image: {
        uri: 'https://raw.githubusercontent.com/StegmanTaylerFA23/CIS340/main/IMAGES/Banana.jpg',
      },
    },
    {
      name: 'Red Grape',
      description: 'Classic red grapes, great for salads or on their own.',
      discount: 'Buy one bunch, get one 50% off!',
      image: {
        uri: 'https://raw.githubusercontent.com/StegmanTaylerFA23/CIS340/main/IMAGES/RedGrape.jpg',
      },
    },
    {
      name: 'Green Grape',
      description: 'Crisp and tart seedless green grapes.',
      discount: '25% off all green grapes!',
      image: {
        uri: 'https://raw.githubusercontent.com/StegmanTaylerFA23/CIS340/main/IMAGES/GreenGrape.png',
      },
    },
    {
      name: 'Purple Grape',
      description: 'Juicy and bold in flavor — perfect for snacking.',
      discount: 'Limited time: 30% off purple grapes!',
      image: {
        uri: 'https://raw.githubusercontent.com/StegmanTaylerFA23/CIS340/main/IMAGES/PurpleGrape.png',
      },
    },
    {
      name: 'Cotton Candy Grape',
      description: 'Sweet grapes that taste like cotton candy.',
      discount: 'Flash sale: Save $1.50 per bag!',
      image: {
        uri: 'https://raw.githubusercontent.com/StegmanTaylerFA23/CIS340/main/IMAGES/CottonCandyGrape.jpg',
      },
    },
  ];

  const [deal, setDeal] = useState(null);

  const getRandomDeal = () => {
    const randomIndex = Math.floor(Math.random() * deals.length);
    setDeal(deals[randomIndex]);
  };

  return (
      <ScrollView contentContainerStyle={styles.container} style={{backgroundColor :'#A34D4A'}}>
        <Text style={styles.title}> Weekly Produce Deal! </Text>

        <Button title="Reveal Weekly Offer" onPress={getRandomDeal} />

        {deal && (
          <View style={styles.card}>
            <Image source={deal.image} style={styles.image} />
            <Text style={styles.itemName}>{deal.name}</Text>
            <Text style={styles.description}>{deal.description}</Text>
            <Text style={styles.discount}>{deal.discount}</Text>
          </View>
        )}
      </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#A34D4A',
    marginBottom: 180,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 12,
    marginTop: 20,
    alignItems: 'center',
    width: '100%',
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  itemName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    color: '#555',
    marginBottom: 6,
  },
  discount: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2a9d8f',
  },
});