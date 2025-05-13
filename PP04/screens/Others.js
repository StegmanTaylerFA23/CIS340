// Import necessary components
import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

// Functional Component
export default function Others() {
  const grapes = [
    {
      uri: ''
    },
    {
      uri: ''
    },
    {
      uri: ''
    },
    {
      uri: ''
    },

  ]

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }} style={{backgroundColor :'#A34D4A'}}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>
        This screen is up for your own creativity!
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

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
  }
});