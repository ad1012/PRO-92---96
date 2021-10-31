import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
  ImageBackground,
} from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Audio } from 'expo-av';
import PressSoundButton from './components/PressSoundButton';

export class Circle1 extends React.Component {
  render() {
    return (
      <View
        style={{
          marginTop: 150,
          width: 180,
          height: 100,
          marginLeft: 10,
          fontSize: 10,
          alignSelf: 'center',
        }}>
        <Button title="Press Me" color="green" />
      </View>
    );
  }
}

//class SoundButton extends React.Component {
// playSound = async () => {
//  await Audio.Sound.createAsync(
//  { uri: 'https://freesound.org/people/AncientOracle/sounds/476871/' },
//  { shouldPlay: true }
// );
//};
// render() {
//return <Button title="Press Me" onPress={this.playSound} />;
// }
//}

export class Rectangle1 extends React.Component {
  constructor() {
    super();
    this.state = {
      buttonColor: 'gray',
    };
  }

  changeColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    this.setState({ buttonColor: color });
  };

  render() {
    return (
      <View
        style={{
          marginTop: 75,
          width: 180,
          height: 300,
          marginLeft: 10,
          fontSize: 30,
          alignSelf: 'center',
        }}>
        <Button
          title="Hit Me"
          color={this.state.buttonColor}
          onPress={this.changeColor}
        />
      </View>
      //<TouchableOpacity>
      //  <Text style = {styles.buttonText1} >
      // Hit Me
      // </Text>
      // </TouchableOpacity>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <ImageBackground
            source={require('./assets/button.png')}
            style={styles.image1}>
            <Header
              centerComponent={{
                text: 'Fidget Button',
                style: { fontSize: 20 },
                justifyContent: 'center',
              }}
            />

            <PressSoundButton />
            <Circle1 />
            <Rectangle1 />
          </ImageBackground>
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  circle2: {
    marginTop: 50,
    marginLeft: 90,
    borderWidth: 3,
    borderRadius: 150,
    width: 160,
    height: 130,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#754123',
  },

  circleText: {
    fontSize: 20,
    color: 'black',
  },

  //buttonText1: {
  // fontSize: 20,
  // color: 'black',
  //},

  image1: {
    flex: 1,
    resizeMode: 'cover',
  },
});
