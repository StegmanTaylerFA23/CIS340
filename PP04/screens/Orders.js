// Import necessary components
import React , { useState }from 'react';
import { View, Text, ScrollView, StyleSheet, Image, Button, Alert} from 'react-native';

// Functional Component
export default function PlaceOrderScreen() {
  //use same menu items array
  const menuItems = [
    {
      name: 'Banana',
      label: 'Banana',
      description: 'Fresh, ripe bananas packed with potassium.',
      image: {
        uri: 'https://raw.githubusercontent.com/StegmanTaylerFA23/CIS340/refs/heads/main/IMAGES/Banana.jpg'
      }
    },
    {
      name: 'Red Grape',
      label: 'RedGrape',
      description: 'Classic red grapes, great for salads or on their own.',
      image: {
        uri: 'https://raw.githubusercontent.com/StegmanTaylerFA23/CIS340/refs/heads/main/IMAGES/RedGrape.jpg'
      }
    },
    {
      name: 'Green Grape',
      label: 'GreenGrape',
      description: 'Crisp and tart seedless green grapes.',
      image: {
        uri: 'https://raw.githubusercontent.com/StegmanTaylerFA23/CIS340/refs/heads/main/IMAGES/GreenGrape.png'
      }
    },
    {
      name: 'Purple Grape',
      label: 'PurpleGrape',
      description: 'Juicy and bold in flavor — perfect for snacking.',
      image: {
        uri: 'https://raw.githubusercontent.com/StegmanTaylerFA23/CIS340/refs/heads/main/IMAGES/PurpleGrape.png'
      }
    },
    {
      name: 'Cotton Candy Grape',
      label: 'CottonCandyG', 
      description: 'Sweet grapes that taste like cotton candy.',
      image: {
        uri: 'https://raw.githubusercontent.com/StegmanTaylerFA23/CIS340/refs/heads/main/IMAGES/CottonCandyGrape.jpg'
      }
    }
  ];

  // TODO: Use useState to track item quantities
  const [itemCounts, setItemCounts] = useState({
    Banana: 0,
    RedGrape: 0,
    GreenGrape: 0,
    PurpleGrape: 0,
    CottonCandyG: 0
  });

  function increaseCount(item){
    setItemCounts(previous => ({
      ...previous,
      [item]: previous[item] + 1
    }));
  }

  function decreaseCount(item){
    setItemCounts(previous => ({
      ...previous,
      [item]: Math.max(0, previous[item] - 1)
    }))
  }

  function resetCount(item){
    setItemCounts(previous => ({
      ...previous,
      [item]: 0
    }));
  }
  // TODO: Use Button to increase/decrease counts
  // TODO: Use Alert to display the final order\
  function placeOrder() {
    //turn Use state into a object to go through
    const entries = Object.entries(itemCounts);
    // sort out counts not above 0
    const orderedItems = entries.filter(([_, count]) => count > 0);
    // if cart is empty
    if (orderedItems.length === 0) {
      Alert.alert("Cart is empty", "You haven't added anything to your order.");
      return;
    }
    //go through ordered items and create message
    let message = "";
    let total = 0;
    let idx = 0;
    orderedItems.forEach(([item, count]) => {
      const matched = menuItems.find(menuItem => menuItem.label === item);
      const name = matched ? matched.name : item;
      message += `${name}: ${count}\n`;
      total += count;
    });
    message += `\nTotal items: ${total}`
    Alert.alert("Your Order", message);
  }
  
  // TODO: Use Image, Text, and ScrollView to organize UI

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>Order some of Greg's Produce!</Text>
      {menuItems.map((item, index) => (
        <View key={index} style={styles.card}>
          {/* information on menu items */}
          <Text style={styles.title}>{item.name}</Text>
          <Image source={item.image} style={styles.image}></Image>

          {/* Button to + and - orders */}
          <View style={styles.buttonGroup}>
            <Button title="+" onPress={() => increaseCount(item.label)} style={styles.buttonGroup}></Button>
            <Text style={{color:'white'}}>{itemCounts[item.label]}</Text>
            <Button title="-" onPress={() => decreaseCount(item.label)}></Button>
          </View>
          <View style={{marginTop:20}}>
            <Button title="Reset" onPress={() => resetCount(item.label)}></Button>
          </View>
        </View>
      ))}
      <View style={styles.card}>
        <Button title="Place Order" onPress={placeOrder} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center'
  },
  buttonGroup: {
    width: '60%',
    alignItems: 'center'                // Take up 60% of screen width
  },
  buttonSpacing: {
    marginHorizontal: 10,          // Space between buttons
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'white'
  },
  card: {
    backgroundColor: '#355E3B',
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