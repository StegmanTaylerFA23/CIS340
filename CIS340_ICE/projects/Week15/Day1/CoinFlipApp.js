// Import React and React Native components
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

// Main App component
export default function App() {
  // State to store the current coin result (Heads or Tails)
  const [coinResult, setCoinResult] = useState('Heads');

  // State to set timer
  const[countdown, setCountdown] = useState(null);

  // state to disable button while flashing
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  //Coin image URLs from GitHub   
  const images = {
    Heads: 'https://raw.githubusercontent.com/AnanthIyerKrishnan/CIS340/main/images/heads.jpg',
    Tails: 'https://raw.githubusercontent.com/AnanthIyerKrishnan/CIS340/main/images/tails.jpg',
  };

  // function to start countdown and flip the coin
  function flipCoinWithCountdown(){
    let counter = 3;
    setCountdown(counter)
    setIsButtonDisabled(true);

    // Start a repeating interval every 500 milliseconds
    const countdownInterval = setInterval(() =>{
      counter = counter - 1;
      setCountdown(counter);

      if(counter === 0){
        clearInterval(countdownInterval);

        // Rnadomly decide heads or tails
        const result = Math.random() > 0.5 ? 'Heads': 'Tails';

        //Update results state and reset countdown button
        setCoinResult(result);
        setCountdown(null);
        setIsButtonDisabled(false);
      }
    },500)
  }

  return(
    <View style={styles.container}>
      {/* Show coin result when not counting */}
      {countdown === null && (
        <Text style={styles.resultText}>
          {coinResult}
        </Text>
      )}

      {/* Show countdown or coin image */}
      {countdown !== null ? (
        <Text style={styles.countdownText}>{countdown}</Text>
      ):(
        <Image
          source={{uri: images[coinResult]}}
          style={styles.coinImage}
        />
      )}

      {/* Button */}
      <View style={styles.buttonWrapper}>
        <Button
          title="Flip Coin"
          onPress={flipCoinWithCountdown}
          disabled={isButtonDisabled}
        />
      </View>
    </View>
  );
}

// Styles for the app
const styles = StyleSheet.create({
  container: {
    flex: 1,                    // Fill full screen
    justifyContent: 'center',  // Center vertically
    alignItems: 'center',      // Center horizontally
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  resultText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  countdownText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#ff3b30',
    marginBottom: 10,
  },
  coinImage: {
    width: 120,
    height: 120,
    marginVertical: 20,
  },
  buttonWrapper: {
    marginTop: 10,
    width: 150,
  },
});
