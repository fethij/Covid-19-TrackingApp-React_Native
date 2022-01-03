import React, { Component } from "react";
import {View, Text, Image, Linking, FlatList, StyleSheet, SafeAreaView, StatusBar, TouchableOpacity, Dimensions } from 'react-native';
import api from "../api"
import styles from "../styles";

export default class Home extends React.Component {

  state = {
    covidSource: []
  }

  _getCovidStatistics = async () => {
    const apiHost = api.getApiHostCovidStats();
    return fetch(apiHost)
            .then(response => response.json())
            .then(responseJson => {
              this.setState(
                {
                  covidSource: [responseJson]
                },
                function(){}
              );
            })
            .catch(error => {
              console.error(error);
            });
  };

  componentDidMount() {
    this._getCovidStatistics();
  }


  render() {
    return ( 
      <View>
        {this.state.covidSource.map((item, key) => {
          const millisecondEpoch = new Date(item.updated);
          const dateToRead = millisecondEpoch.toUTCString();
          return (
            <View key={key} style={styles.p15, {height: Dimensions.get("window").height / 1.1}}>
              <View>
                <Text style={styles.centenText}>{dateToRead}</Text>
              </View>
              <TouchableOpacity onPress={() =>
              this.props.navigation.navigate("Countries")}>
                <View style={styles.home_block}>
                  <Text>Cases</Text>
                  <Text>{item.cases}</Text>
                </View>
                <View style={styles.home_block}>
                  <Text>Recovered</Text>
                  <Text>{item.recovered}</Text>
                </View>
                <View style={styles.home_block}>
                  <Text>Deaths</Text>
                  <Text>{item.deaths}</Text>
                </View>
              </TouchableOpacity>
              <View style={{position: 'absolute', bottom: 40, paddingHorizontal: 15,}}>
                <View style={styles.p15}>
                  <Text onPress={() => Linking.openURL('https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters')}>
                    MYTH BUSTERS
                  </Text>
                </View>
                <View style={styles.p15}>
                  <Text onPress={() => Linking.openURL('https://www.who.int/emergencies/diseases/novel-coronavirus-2019/donate')}>
                    DONATE
                  </Text>
                </View>
              </View>
            </View> 
          );
        })}
      </View>
    )  
  }

}