import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import authentication screens
import LoginScreen from './auth/LoginScreen';
import SignupScreen from './auth/SignupScreen';

// Import your screens here
import Info from './screens/Info';
import Menu from './screens/Menu';
import Orders from './screens/Orders';
import Offers from './screens/Offers';
import Feedback from './screens/Feedback';
import Others from './screens/Others';

const Stack = createStackNavigator();

// Home Screen with Welcome Message and Project Navigation
function HomeScreen({ route, navigation }) {
  const userName = route.params.userName || 'User'; // Get username from params

  // Handle Logout
  const handleLogout = () => {
    Alert.alert('Success', 'Logged out successfully!', [
      {
        text: 'OK',
        onPress: () => navigation.navigate('Login'), // Navigate to Login screen after logout
      },
    ]);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Welcome message at the top */}
      <Text style={styles.text}>Welcome to Greg's Groceries, {userName}!</Text>


      {/* Screen Selection */}
      <Text style={styles.title}>My Grocery Store:</Text>


      <View style={styles.card}>
        <Text style={styles.cardTitle}>Catalogue</Text>
        <TouchableOpacity style={styles.cardButton} onPress={() => navigation.navigate('Info')}>
          <Text style={styles.cardButtonText}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardButton} onPress={() => navigation.navigate('Menu')}>
          <Text style={styles.cardButtonText}>Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardButton} onPress={() => navigation.navigate('Orders')}>
          <Text style={styles.cardButtonText}>Place Order</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardButton} onPress={() => navigation.navigate('Offers')}>
          <Text style={styles.cardButtonText}>Offers</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardButton} onPress={() => navigation.navigate('Feedback')}>
          <Text style={styles.cardButtonText}>Feedback</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardButton} onPress={() => navigation.navigate('Others')}>
          <Text style={styles.cardButtonText}>Others (CRUSH A GRAPE!)</Text>
        </TouchableOpacity>
      </View>
   
      {/* Logout button at the bottom */}
      <View style={styles.logoutContainer}>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.cardButtonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} />

        {/* My Screens */}
        <Stack.Screen name="Info" component={Info} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Orders" component={Orders} />
        <Stack.Screen name="Offers" component={Offers} />
        <Stack.Screen name="Feedback" component={Feedback} />
        <Stack.Screen name="Others" component={Others} />

      </Stack.Navigator>
    </NavigationContainer>

  );
}
//#A34D4A muted red
//#355E3B dark green
//#F5E8D0 cream white
//#D9A441 mustard for buttons
//#E3B858 light mustard for logout

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#A34D4A',//muted red
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#F5E8D0', // Rich bakery brown
    textAlign: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    color: '#F5E8D0', // Warm brown
  },
  card: {
    backgroundColor: '#355E3B',
    borderRadius: 10,
    marginBottom: 20,
    padding: 16,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#F5E8D0', // Bakery brown
    textAlign: 'center',
  },
  cardButton: {
    backgroundColor: '#C46D5E', // Chocolate brown
    paddingVertical: 12,
    borderRadius: 8,
    marginVertical: 8,
    alignItems: 'center',
  },
  cardButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  logoutContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  logoutButton: {
    backgroundColor: '#E3B858', // Rustic red-brown for logout
    paddingVertical: 12,
    borderRadius: 8,
    marginVertical: 20,
    alignItems: 'center',
    width: '100%',
  },
  
});

