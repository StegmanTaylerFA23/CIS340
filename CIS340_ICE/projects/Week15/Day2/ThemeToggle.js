// Import necessary components from React and React Native
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// Main App component
export default function App() {

  // State to keep track of dark mode or not
  const [isDarkMode, setIsDarkMode] = useState(false);

  // function for toggle
  function toggleTheme() {
    setIsDarkMode(!isDarkMode);
  }

  // Dynamically choose styles based on mode
  const themeStyles = isDarkMode ? darkStyles : lightStyles;

  return(
    <View style={[styles.container, themeStyles.container]}>

      {/* Text changes color and content based on current theme */}
      <Text style={[styles.text, themeStyles.text]}>
        {isDarkMode ? 'Dark Mode': 'Light Mode'}
      </Text>

      {/* Button to switch modes */}
      <Button title="Toggle Theme" onPress={toggleTheme}/>
    </View>

  )
}

// Base styles shared across themes
const styles = StyleSheet.create({
  container: {
    flex: 1,                  // Fill the screen
    justifyContent: 'center', // Center vertically
    alignItems: 'center',     // Center horizontally
  },
  text: {
    fontSize: 24,
    marginBottom: 10,
  },
});

// Styles specific to light mode
const lightStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fffff',
  },
  text: {
    color: '#000000',
  },
});

// Styles specific to dark mode
const darkStyles = StyleSheet.create({
  container: {
    backgroundColor: '#333333',
  },
  text: {
    color: '#ffffff',
  },
});
