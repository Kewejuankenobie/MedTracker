import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';

export default function App() {

  console.log("App Runs");

  //View (like div) holds stuff
  //Safe area adds padding to top to ignore notch
  //On Press listens for an event

  const pressName = () =>
    console.log("Hello World");

  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={pressName}>Hello, Kiron</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <TouchableOpacity onPress={() => console.log("Short press")}
      onLongPress={() => console.log("Long Press")}>
        <Image 
        blurRadius={10}
        source={{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300"}}
          />
      </TouchableOpacity>
      <Button color="red"
      title="Click Me" onPress={() => alert("Button Press")}/>
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
});
