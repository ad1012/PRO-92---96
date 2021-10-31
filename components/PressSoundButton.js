import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

class PressSoundButton extends React.Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3' },
      { shouldPlay: true }
    );
  };

  render() {
    return (
      <TouchableOpacity style={styles.button} onPress={this.playSound}>
        <Text style={styles.buttonText}>Click Me</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    marginTop: 75,
    width: 180,
    height: 30,
    marginLeft: 10,
    fontSize: 30,
    alignSelf: 'center',
    justifyContent:'center',
    backgroundColor: 'blue',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 15,
    alignSelf: 'center',
    color: 'white'
  },
});

export default PressSoundButton;
