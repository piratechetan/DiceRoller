/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';

import DiceOne from './assets/one.png';
import DiceTwo from './assets/two.png';
import DiceThree from './assets/three.png';
import DiceFour from './assets/four.png';
import DiceFive from './assets/five.png';
import DiceSix from './assets/six.png';

const App = () => {
  const [uri, seturi] = useState(DiceOne);
  const [Dice2, setDice2] = useState(DiceOne);

  const playDiceButton = () => {
    let randomNumber = Math.floor(Math.random() * 6 + 1);
    switch (randomNumber) {
      case 1:
        seturi(DiceOne);
        break;
      case 2:
        seturi(DiceTwo);
        break;
      case 3:
        seturi(DiceThree);
        break;
      case 4:
        seturi(DiceFour);
        break;
      case 5:
        seturi(DiceFive);
        break;
      case 6:
        seturi(DiceSix);
        break;

      default:
        seturi(DiceOne);
        break;
    }
    let randomNumber1 = Math.floor(Math.random() * 6 + 1);
    switch (randomNumber1) {
      case 1:
        setDice2(DiceOne);
        break;
      case 2:
        setDice2(DiceTwo);
        break;
      case 3:
        setDice2(DiceThree);
        break;
      case 4:
        setDice2(DiceFour);
        break;
      case 5:
        setDice2(DiceFive);
        break;
      case 6:
        setDice2(DiceSix);
        break;

      default:
        setDice2(DiceOne);
        break;
    }
  };

  return (
    <>
      <StatusBar backgroundColor={'#222831'} />
      <View style={Styles.container}>
        <View style={Styles.View}>
          <Image source={uri} style={Styles.image} />
          <Image source={Dice2} style={Styles.image1} />
        </View>
        <TouchableOpacity onPress={playDiceButton}>
          <Text style={Styles.text}>Play Dice</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const Styles = StyleSheet.create({
  container: {
    backgroundColor: '#222831',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 20,
    marginTop: 30,
    color: '#F2A365',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderColor: '#30475E',
    borderRadius: 5,
    borderWidth: 3,
    fontWeight: 'bold',
  },
  image: {
    width: 130,
    height: 130,
    marginRight: 10,
  },
  image1: {
    width: 130,
    height: 130,
  },

  View: {
    flexDirection: 'row',
  },
});

export default App;
