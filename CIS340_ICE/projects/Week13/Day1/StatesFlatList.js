// Import React and React Native components
import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';

const US_STATE = [
  {key: 'Alabama'},
  {key: 'Colorado'},
  {key: 'Delaware'},
  {key: 'Washington'},
  {key: 'Aladsbama'},
  {key: 'Colsorado'},
  {key: 'Deldaware'},
  {key: 'Wasghington'},
  {key: 'Alaqbama'},
  {key: 'Coleorado'},
  {key: 'Delawware'},
  {key: 'Washirngton'},
  {key: 'Alabtama'},
  {key: 'Coloyrado'},
  {key: 'Delawuare'},
  {key: 'Washinigton'},
  {key: 'Alabaoma'},
  {key: 'Coloprado'},
  {key: 'Delwadware'},
  {key: 'Washifngton'}
]

// Define the functional component
export default function StatesApp() {

  return (

    <View style={styles.container}>
      <FlatList 
        data={US_STATE}
        keyExtractor={(item) => item.key}
        
        //render each item using text component
        renderItem={({item}) =>(
          <Text style={styles.itemText}>{item.key}</Text>
        )}
      />
    </View>



  )

}

// Create styles using StyleSheet (cleaner than inline styles)
const styles = StyleSheet.create({
  container: {
    flex: 1,          // Use full screen height
    paddingTop: 22,   // Add space at the top
    backgroundColor: '#F0F8FF', // Optional: soft background color
  },
  itemText: {
    padding: 10,      // Space around each item
    fontSize: 20,     // Larger text
    height: 44,       // Fixed height for consistency
    color: '#333333', // Dark grey for good contrast
  }
});
