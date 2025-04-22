// Import necessary components from React and React Native
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
const meals = [
  { title: 'Breakfast', color: '#FF6B6B', menu: 'Pancakes, Omelette, Juice' },
  { title: 'Lunch', color: '#4ECDC4', menu: 'Grilled Chicken, Salad, Rice' },
  { title: 'Dinner', color: '#1A535C', menu: 'Pasta, Steak, Vegetables' }
];


// Main component of the app
export default function App() {
  return (
    <View style={styles.container}>
      {/* Loop through the meals array and create a card for each meal */}

      {meals.map((meal,index)=> (
        <FlippableCard key={index} meal={meal} />
      ))}
    </View>

  );

}

// Component to create a flippable card
function FlippableCard({meal}){
  // this state keeps track of whether the card is flipped or not
  const[isFlipped, setIsFlipped] = useState(false);
  
  // Animated value to rotate the card
  const rotation = useState(new Animated.Value(0))[0];

  const handleFlip = () =>{
    // Start animation: flip to 180 or back to 0
    Animated.timing(rotation, {
      toValue: isFlipped ? 0: 1,
      duration: 500,
      useNativeDriver: true
    }).start(() => {
      setIsFlipped(!isFlipped);
    })
  };

  // Rotation for the front side of the card
  const frontRotation = rotation.interpolate({
    inputRange: [0,1],
    outputRange: ['0deg', '180deg']
  });

  //Rotation for back side
  const backRotation = rotation.interpolate({
    inputRange: [0,1],
    outputRange: ['180deg', '360deg']
  });

  return(
    
    <TouchableOpacity onPress={handleFlip}>
      {/* Front of the card shows the meal title */}
      <Animated.View style={[
        styles.card,
        {backgroundColor: meal.color, transform: [{rotateY: frontRotation}]}
      ]}>
        <Text style={styles.text}>{meal.title}</Text>
      </Animated.View>

      {/* Back of the card shows the meal title */}
      <Animated.View style={[
        styles.card,
        styles.backCard,
        {backgroundColor: meal.color, transform: [{rotateY: backRotation}]}
      ]}>
        <Text style={styles.text}>{meal.menu}</Text>
      </Animated.View>
    </TouchableOpacity>
  )

}

// Styles used in the app
const styles = StyleSheet.create({
  container: {
    flex: 1,                         // Takes up full screen height
    justifyContent: 'center',       // Vertically center items
    alignItems: 'center',           // Horizontally center items
    backgroundColor: '#F7FFF7'      // Light background color
  },
  card: {
    width: 200,
    height: 100,
    justifyContent: 'center',       // Center text vertically
    alignItems: 'center',           // Center text horizontally
    marginVertical: 10,             // Space between cards
    borderRadius: 10,               // Rounded corners
    backfaceVisibility: 'hidden'    // Prevents showing both sides when rotating
  },
  backCard: {
    position: 'absolute',           // Stack behind front card
    top: 0,                         // Align at the top of parent
    backgroundColor: '#333'         // Dark background for back side
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  }
});
