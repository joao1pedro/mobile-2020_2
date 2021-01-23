import React, { Component } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './components/Routes'

export default class App extends Component {
  render() {
    return (
      <SafeAreaProvider>
        <Routes />
      </SafeAreaProvider>
    )
  }
}
