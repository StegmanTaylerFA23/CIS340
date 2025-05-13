// Import necessary components
import React, {useState} from 'react';
import { View, Text, ScrollView, TextInput, Button, StyleSheet, Alert} from 'react-native';

// Functional Component
export default function BakeryFeedback() {
  // TODO: Complete the code for the Feedback & Rating screen as per project instructions.
  // Use TextInput, Button, useState, Alert, etc.
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = () => {
    Alert.alert('Thanks for your feedback!');
    // Optionally, reset fields after submit
    setComment('');
    setRating('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container} style={{backgroundColor :'#A34D4A'}}>
      <Text style={styles.title}>We’d love your feedback!</Text>

      <Text style={styles.label}>Your Comments:</Text>
      <TextInput
        style={styles.input}
        placeholder="Write your thoughts here..."
        value={comment}
        onChangeText={setComment}
        multiline
      />

      <Text style={styles.label}>Rating (1–5):</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a number"
        value={rating}
        onChangeText={setRating}
        keyboardType="numeric"
        maxLength={1}
      />

      <View style={styles.buttonContainer}>
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'stretch',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'white',
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    fontWeight: '500',
    color: 'white'
  },
  input: {
    backgroundColor: '#f0f0f0',
    borderRadius: 6,
    padding: 12,
    fontSize: 16,
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 10,
    alignItems: 'center',
    color: '#355E3B'
  },
});
