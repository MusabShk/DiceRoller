import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  StatusBar,
} from 'react-native';
import DiceOne from './assets/dice1.png';
import DiceTwo from './assets/dice2.png';
import DiceThree from './assets/dice3.png';
import DiceFour from './assets/dice4.png';
import DiceFive from './assets/dice5.png';
import DiceSix from './assets/dice6.png';

const App = () => {
  const [uri1, setUri1] = useState(DiceOne);
  const [uri2, setUri2] = useState(DiceThree);

  const runDice2 = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setUri2(DiceOne);
        break;
      case 2:
        setUri2(DiceTwo);
        break;
      case 3:
        setUri2(DiceThree);
        break;
      case 4:
        setUri2(DiceFour);
        break;
      case 5:
        setUri2(DiceFive);
        break;
      case 6:
        setUri2(DiceSix);
        break;

      default:
        setUri2(DiceThree);
        break;
    }
  };

  const runDice1 = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setUri1(DiceOne);
        break;
      case 2:
        setUri1(DiceTwo);
        break;
      case 3:
        setUri1(DiceThree);
        break;
      case 4:
        setUri1(DiceFour);
        break;
      case 5:
        setUri1(DiceFive);
        break;
      case 6:
        setUri1(DiceSix);
        break;

      default:
        setUri1(DiceOne);
        break;
    }
  };

  return (
    <>
      <StatusBar backgroundColor="#120E43" />
      <View style={styles.container}>
        <TouchableOpacity onPress={runDice2}>
          {/* <Text style={styles.gamePlayButton}>Play Game</Text> */}
          <Image style={styles.image} source={uri2} />
        </TouchableOpacity>

        <TouchableOpacity onPress={runDice1}>
          {/* <Text style={styles.gamePlayButton}>Play Game</Text> */}
          <Image style={styles.image} source={uri1} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#120E43',
    alignItems: 'center', //aligns on hoizontal axis
    justifyContent: 'center', //aligns on vertical axis
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
  gamePlayButton: {
    fontSize: 20,
    marginTop: 30,
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: '#F7CD2E',
    borderColor: '#CAD5E2',
    borderWidth: 1,
    borderRadius: 5,
    fontWeight: 'bold',
  },
});
