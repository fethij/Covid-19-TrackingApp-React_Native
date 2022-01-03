import React, { Component } from "react";
import api from "../api"
import {View, Text, FlatList, Image, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import styles from "../styles";


export default class Countries extends React.Component {

    state = {
        covidCountriesSource: []
      }
    
      _getCovidStatistics = async () => {
        const apiHost = api.getApiHostCovidCountriesStats();
        return fetch(apiHost)
                .then(response => response.json())
                .then(responseJson => {
                  this.setState(
                    {
                        covidCountriesSource: responseJson
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

    render(){
        const countriesCovidStatsToDisplay = this.state.covidCountriesSource;
        
        return (
            <View>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={countriesCovidStatsToDisplay}
                    renderItem={({item}) => (
                        
                        <View style={styles.home_block}>
                          <View>
                            <Text>{item.country}</Text>
                            <Image source={{uri: item.countryInfo.flag}} 
                              style={{width: 50}} />
                          </View>
                          <View>
                            <Text style={styles.text_right}>CASES: {item.cases}</Text>
                            <Text style={styles.text_right}>TODAY CASES: {item.todayCases}</Text>
                            <Text style={styles.text_right}>TODAY DEATHS: {item.todayDeaths}</Text>
                            <Text style={styles.text_right}>DEATHS: {item.deaths}</Text>
                            <Text style={styles.text_right}>RECOVERED: {item.recovered}</Text>
                          </View>
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toFixed()}
                />
            </View>
        );
    }
}