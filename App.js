import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, SafeAreaView,
   TextInput, ScrollView } from 'react-native';
import React, {Component} from 'react';
import MedList from './MedList.js';

export default class App extends Component {


  //View (like div) holds stuff
  //Safe area adds padding to top to ignore notch
  //On Press listens for an event

  //Custom state for all meds to keep track of

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
        <Text style={styles.title}>Medication Tracker</Text>
        <MedList/>
        <StatusBar style="auto" />
        </ScrollView>
      </SafeAreaView>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "flex-start",
    alignItems: "center"
  },
  title: {
    fontSize: 35,
    fontFamily: 'Helvetica',
    color: '#fc0349',
    marginTop: 30,
    marginBottom: 20
  },
  medBox: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#e5709f',
    marginBottom: 10,
    backgroundColor: '#ffd7e7'
  },
  med: {
    fontSize: 20,
    padding: 10,
  },
  //temporary input
  input: {
    width: '100%',
    backgroundColor: '#cecece',
    fontSize: 20,
    marginBottom: 10
  }
});
