import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

class Forecast extends Component {
  render() {
    return( 
    <View style={styles.container}>
      {/* Display city and country */}
      <Text style={styles.bigText}>
        {this.props.city}, {this.props.country}
      </Text>

      <Image
        source={{uri: `https://openweathermap.org/img/w/${this.props.icon}.png`}}
        style={styles.weatherIcon}
      />

      {/* Main weather condition e.g clear and rain */}
      <Text style={styles.bigText}>
        {this.props.main}
      </Text>

      {/* More detailed weather description */}
      <Text style={styles.mainText}>
        {this.props.description}
      </Text>

      {/* current temperature */}
      <Text style={styles.mainText}>
        {this.props.temp}
      </Text>

      {/* feels like temperature */}
      <Text style={styles.mainText}>
        Feels like: {this.props.feels_like}F
      </Text>

      {/* Minimum and maximum temperature for the day */}
      <Text style={styles.mainText}>
        Min: {this.props.temp_min}F | Max: {this.props.temp_max}
      </Text>

      {/* Humidity percentage */}
      <Text style={styles.mainText}>
        Humidity: {this.props.humidity}%
      </Text>

      {/* Atmospheric pressure in hPa */}
      <Text style={styles.mainText}>
        Pressure {this.props.pressure} hPa
      </Text>

      {/*Visibility in meters*/}
      <Text style={styles.mainText}>
        Visibility: {this.props.visibility} meters
      </Text>

      {/* Humidity percentage */}
      <Text style={styles.mainText}>
        Humidity: {this.props.humidity}%
      </Text>

      {/* Sunrise time (already formatted)*/}
      <Text style={styles.mainText}>
        Sunrise: {this.props.sunrise}%
      </Text>

      {/* Sunset time (already formatted)*/}
      <Text style={styles.mainText}>
        Sunset: {this.props.sunset}%
      </Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    alignItems: "flex-start",
    paddingLeft: 20
  },
  bigText: {
    fontSize: 20,
    textAlign: "left",
    color: "#FFFFFF"
  },
  mainText: {
    fontSize: 16,
    textAlign: "left",
    color: "#FFFFFF"
  },
  weatherIcon: {
    width: 50,
    height: 50
  }
});

// Export the forecast components to be used in other files
export default Forecast;
