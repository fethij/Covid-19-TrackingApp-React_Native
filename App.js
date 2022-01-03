import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Countries from './screens/countries';
import Home from './screens/home';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    path: "home"
  },
  Countries: {
    screen: Countries,
    path: "countries"
  },
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

