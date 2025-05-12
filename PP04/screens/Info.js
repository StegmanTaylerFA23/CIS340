// Import necessary components
import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image} from 'react-native';

// Functional Component
export default function BakeryOverviewScreen() {
  // TODO: Complete the Overview/About screen using components like:
  // ScrollView, Text, Image, and StyleSheet

  let logo = {
    uri: "https://raw.githubusercontent.com/StegmanTaylerFA23/CIS340/refs/heads/main/IMAGES/Gregs%20Groceries%20Logo.png"
  }

  return (
    <ScrollView contentContainerStyle={{ alignItems: 'center', padding: 16 }}>
      <Image source={logo} style={styles.image} />

      <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginVertical: 12 }}>
        Greg's Groceries
      </Text>

      <Text style={styles.textMedium}>{"\n"}Store Hours:</Text>
      <Text style={styles.textSmall}>Mon-Sunday 8AM - 11PM</Text>

      <Text style={styles.textMedium}>{"\n"}Location:</Text>
      <Text style={styles.textSmall}>142069 Grape Lane, Fort Collins, CO 80523</Text>

      <Text style={styles.textMedium}>{"\n"}About Us:</Text>
      <Text style={[styles.textSmall, { paddingHorizontal: 16 }]}>
        {"\n"}
        Greg's Groceries is a locally-inspired grocery app designed to bring charm, convenience, and community together.{"\n"}{"\n"}
        We offer a curated selection of everyday essentials, fresh bakery items, and local favorites — all just a tap away.{"\n"}{"\n"}
        Rooted in simplicity and warmth, our goal is to make your grocery experience personal and hassle-free.{"\n"}{"\n"}
        Whether you're browsing the menu or placing an order, we keep things easy and welcoming.{"\n"}{"\n"}
        At Greg’s, groceries aren’t just goods — they’re part of the good life.
      </Text>

      <Text style={styles.textMedium}>{"\n"}Contact:</Text>
      <Text style={styles.textSmall}>
        Phone: (720) 355-0728 {"\n"} Email: greg@gmail.com
      </Text>
    </ScrollView>

  );
}

// Styles used in the app
const styles = StyleSheet.create({
  textMedium: {
   fontSize: 16,
   fontWeight: 'bold',
   textAlign: 'center' 
  },
  textSmall:{
    fontSize: 12,
    textAlign: 'left'
  },
  image:{
    width: 200,
    height: 200,
  }


})
