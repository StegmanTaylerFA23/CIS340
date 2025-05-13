// Import necessary components
import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, Alert, TouchableOpacity} from 'react-native';

// Functional Component
export default function Others() {
  const grapes = [
    {
      uri: 'https://raw.githubusercontent.com/StegmanTaylerFA23/CIS340/refs/heads/main/IMAGES/Grape%20Smash/g1.png'
    },
    {
      uri: 'https://raw.githubusercontent.com/StegmanTaylerFA23/CIS340/refs/heads/main/IMAGES/Grape%20Smash/g2.png'
    },
    {
      uri: 'https://raw.githubusercontent.com/StegmanTaylerFA23/CIS340/refs/heads/main/IMAGES/Grape%20Smash/g3.png'
    },
    {
      uri: 'https://raw.githubusercontent.com/StegmanTaylerFA23/CIS340/refs/heads/main/IMAGES/Grape%20Smash/g4.png'
    },
  ]

  const [count, setCount] = useState(0)
  const [grapeLevel, setGrapeLevel] = useState(0)
  const [tapLocked, setTapLocked] = useState(false);

  function determineSmash(){
    if(tapLocked){
      return;
    }
    setTapLocked(true);

    setCount((previous) => {
      const newCount = previous + 1;
      // console.log("Count",count);

      if (newCount > 9) {
        setGrapeLevel(3);
        Alert.alert("Grape smashed!");
      } 
      else if (newCount > 6) {
        setGrapeLevel(2);
      } 
      else if (newCount > 3) {
        setGrapeLevel(1);
      }
      // console.log("Grape level",grapeLevel);
      return newCount;
    });

    // unlock after short delay
    setTimeout(() => setTapLocked(false), 1200); // 600ms delay
  }

  function resetSmash() {
    setCount(0);
    setGrapeLevel(0);
  }

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }} style={{backgroundColor :'#A34D4A'}}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>Keep Tapping to Smash the Grape</Text>

      <TouchableOpacity style={{marginTop: 25}} onPress={determineSmash} disabled={tapLocked}>
        <Image source={grapes[grapeLevel]} style={[styles.image, tapLocked && styles.lockedImage]}/>
        <Text style={styles.counterText}>
          Taps: {count}
        </Text>
      </TouchableOpacity>

      <View style={{ marginTop: 20, alignItems: 'center' }}>
        <TouchableOpacity onPress={resetSmash} style={styles.resetButton}>
        <Text style={styles.resetText}>Reset</Text>
        </TouchableOpacity>
      </View>
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
    width: 300,
    height: 300,
    borderRadius: 8,
    marginLeft: 30,
    marginBottom: 10
  },
  resetButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#000',
    marginTop: 10,
  },
  resetText: {
    color: '#A34D4A',
    fontSize: 16,
    fontWeight: 'bold',
  },
  lockedImage: {
    opacity: 0.8, // make it look faded
    transform: [{ scale: 0.93 }]
  }
});