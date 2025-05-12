// Import React and necessary hooks from the React library
import React, { useState, useEffect } from "react";

// Import React Native components used in the app
import {
  Text,
  View,
  SectionList,
  ActivityIndicator,
  Alert,
} from "react-native";

// Main functional component
export default function StatesApp() {
  // 'Sections' holds the grouped formatted city data for section list
  const [sections, setSections] = useState([]);

  // 'loading ' controls whether to show a loading spinner
  const [loading, setLoading] = useState(true);

  // GitHub URL that points to a raw text file containing list of city names
  const githubURL = "https://raw.githubusercontent.com/AnanthIyerKrishnan/CIS340/main/Cities.txt"

  // Use effect runs once when the component first loads (similar to componentDidMount)
  useEffect( () => {
    // fetch the file content from the github URL
    fetch(githubURL)
    .then((response) => {
      // if repsonse failed throw an error
      if(!response.ok){
        throw new Error("Failed to fetch file");
      }
      return response.text();
    })
    .then((text) => {
      // Split the text content by new line
      let cities = text
        .split("\n")
        .map((c) => c.trim())
        .filter((c) => c !== " ")
        .sort();

        // Group the cities by the first letter of each city name
        let groups = {};
        cities.forEach((city) => {
          let letter = city[0].toUpperCase();
          if(!groups[letter]){
            groups[letter] = [];
          }
          groups[letter].push(city);
        });

        // Convert group object into an array format
        let formatted = Object.keys(groups)
          .sort()
          .map((letter) => ({
            title:letter,
            data: groups[letter]
          }));

        //Save the final grouped data into state
        setSections(formatted);   
    })
    .catch((error) => {
      // if anything goes wrong, log error
      console.error(error);
      Alert.alert("Error", "Could not fetch file")
    })
    .finally(() => {
      // Hide loading spinner
      setLoading(false);
    })
  }, []); //Empty array so it only runs once when apps starts

  // if stil loading show spinner in center of the screen
  if(loading){
    return(
      <View
        style={{flex: 1, justifyContent: "center", alignItems: "center"}}
      >
        <ActivityIndicator size="large" color="blue"/>
      </View>
    );
  }

  return(
    <View style={{flex: 1, paddingTop: 22, paddingHorizontal: 10}}>
      <SectionList
        // city data grouped by letter
        sections={sections}

        // Unique key for each city
        keyExtractor={(item, index) => index.toString()}

        // How each city name should be rendered
        renderItem={({ item }) => (
          <Text style={{ padding: 10, fontSize: 20}}>{item}</Text>
        )}

        // how each section (group header) should be rendered
        renderSectionHeader={({section}) => {
          <Text
          style={{
            padding: 5,
            fontSize: 16,
            fontWeight: "bold",
            backgroundColor: "lightblue",
            color: "white"
          }}>
            {section.title}

          </Text>
        }}

      />
    </View>

  )

}
