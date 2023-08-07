import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';

export default function App() {

  console.log("App Runs");

  //View (like div) holds stuff
  //Safe area adds padding to top to ignore notch
  //On Press listens for an event

  state = {
    medList:["Med A", "Med B"]
  }

  onChangeInput = (event) => {
    this.setState({

    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Medication Tracker</Text>
      {
        this.state.medList.map(item => (
          <Text style = {styles.med} key={item}>{item}</Text>
        ))
      }

      <Button color="red"
      title="Add New" onPress={() => alert("Button Press")}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center"
  },
  med: {
    fontSize: 20,
    padding: 10,
    borderWidth: 2,
    borderColor: '#cecece',
    marginBottom: 10
  }
});
