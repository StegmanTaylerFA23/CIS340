import React, { Component } from "react";
import { View, Text, Image, TextInput, StyleSheet} from 'react-native';


// Keep imports for teaching/demo purposes
import Forecast from "./Forecast";
import OpenWeatherMap from "./open_weather_map";

class WeatherForecast extends Component {

  // Constructor method to initialize state
  constructor(props){
    super(props)
    this.state = { zip: "", forecast: null}
  }

  // Function to handle when user submits zip code in the TextInput
  _hndleTextChange = event => {
    let zip = event.nativeEvent.text;//Extract zip code from the event
    //use helper methods
    OpenWeatherMap.fetchForecast(zip).then(forecast =>{
      if(forecast){
        this.setState({forecast})
      }
    });
  }

  render() {
    let content = null;//Will hold forecast component once data is available
    
    // if forecast data has been fectched, render the forecast component
    if(this.state.forecast !== null){
      content = (
        <Forecast 
          main={this.state.forecast.main}
          description={this.state.forecast.description}
          temp={this.state.forecast.temp}
          feels_like={this.state.forecast.feels_like}
          temp_min={this.state.forecast.temp_min}
          temp_max={this.state.forecast.temp_max}
          humidity={this.state.forecast.humidity}
          wind_speed={this.state.forecast.wind_speed}
          wind_deg={this.state.forecast.wind_deg}
          pressure={this.state.forecast.pressure}
          visibility={this.state.forecast.visibility}
          sunrise={this.state.forecast.sunrise}
          sunset={this.state.forecast.sunset}
          city={this.state.forecast.city}
          country={this.state.forecast.country}
          icon={this.state.forecast.icon}
        />
      )
    }


    return( 
      <View style={styles.container}>
        {/* Background image */}
        <Image
          source={require("../../../assets/sky.jpg")}
          resizeMode='cover'
          style={styles.backdrop}
        />

        {/* Transparent */}
        <View style={styles.overlay}>
          {/* Row for "current weather for label and zip input" */}
          <View style={styles.row}>
            <Text style={styles.mainText}>
              Current weather for:{'\n'}
            </Text>

            <View style={styles.zipContainer}>
              <TextInput style={[styles.zipCode, styles.mainText]}
                onSubmitEditing={this._hndleTextChange}
              > 
              </TextInput>
            </View>
            {/* Forecast display goes here once data is available */}
            {content}
          </View>
        </View>
      </View> 
    );
  }
}

const baseFontSize = 16;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 30,
    backgroundColor: "#000000"
  },
  backdrop: {
    width: 500,
    height: 200,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 10
  },
  overlay: {
    paddingTop: 5,
    opacity: 0.5,
    flexDirection: "column",
    alignItems: "center"
  },
  row: {
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "flex-start",
    padding: 30
  },
  zipContainer: {
    height: baseFontSize + 10,
    borderBottomColor: "#FFFAF0",
    borderBottomWidth: 3,
    marginLeft: 18
  },
  zipCode: {
    flex: 1,
    width: 100,
    height: baseFontSize
  },
  mainText: {
    fontSize: baseFontSize,
    color: "#FFFAF0"
  }
});

export default WeatherForecast;
