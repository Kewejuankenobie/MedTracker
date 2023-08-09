import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, SafeAreaView,
   TextInput, ScrollView } from 'react-native';
import React, {Component} from 'react';
import MedList from './MedList.js';
import AddMedPage from './AddMedPage.js';

export default class App extends Component {


  //View (like div) holds stuff
  //Safe area adds padding to top to ignore notch
  //On Press listens for an event

  //Custom state for all meds to keep track of
  state = {
    medToAdd: "",
    medList: []
  }

  onChangeInput = (event) => {
    this.setState({medToAdd:event});
  }

  addMedication = () => {
    this.setState(prevState => {
      return {
        medToAdd: "",
        medList: [...prevState.medList, prevState.medToAdd]
      }
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
        <Text style={styles.title}>Medication Tracker</Text>
        {
          //Uses map() to map list to several items
          this.state.medList.map(item => (
            <View style = {styles.medBox}>
              <Text style = {styles.med} key={item}>{item}</Text>
              <Button title="Remove"/>
            </View>
          ))
        }
        <TextInput
        value = {this.state.medToAdd}
        style = {styles.input}
        onChangeText = {this.onChangeInput}/>
        <Button color="red"
        title="Add New" onPress={this.addMedication}/>
        <AddMedPage/>
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
