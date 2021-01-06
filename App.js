import { apisAreAvailable } from 'expo';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';

export default function App() {
  var textInputValue = ""
  const handlePress = () => console.log(textInputValue)
  return (
    <View>
      <View style={styles.headerTop}></View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Hello World!</Text>
        <Text style={styles.headerSubTitle}>First React Native App</Text>
        <Text style={styles.paragraph}>This is a paragraph explaining what this app is all about. 
          As you can see there are already many components including text, images and buttons.
        </Text>
        
      </View>
      <View style={{ width: '80%'}}>
        <Text style={styles.body}>
          What would you like to get out of this course?
        </Text>
        <TextInput style={styles.textInput} 
          placeholder="Enter Text"
          multiline={true}
          onChangeText={(text) => textInputValue = text} />
        <Text style={styles.body}>An emoji describing how I feel about this course:</Text> 
        <Image style={{ width: 100, height: 100, marginLeft: 10}}
          source={require('./assets/in-love-smiley.png')}></Image>
      </View>
      <View style={styles.buttonView}>
        <Button
          title= 'Press Me'
          onPress={handlePress}>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50
  },
  headerTop: {
    backgroundColor: '#24305E',
    width: '100%',
    height: 50
  },
  headerContainer: {
    backgroundColor: '#A8D1E7',
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 20,
    marginLeft: 10,
    marginBottom: 5
  },
  headerSubTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 10,
    marginBottom: 5
  },
  paragraph: {
    marginBottom: 20,
    marginLeft: 10
  },
  body: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
    marginBottom: 5
  },
  textInput: {
    backgroundColor: '#F2F2F2',
    height: 100,
    padding: 10,
    textAlignVertical: 'top'
  },
  buttonView: {
    marginTop: 50
  }
});
