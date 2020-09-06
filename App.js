/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  const [operationCount, setOperationCount] = useState(0);
  const [result, calculateValue] = useState(0);
  const [valueOne, setValueOne] = useState(0);
  const [valueTwo, setValueTwo] = useState(0);
  const [operator, setOperator] = useState("+");
  const [showResult, setShowResult] = useState(false);

  resetAll=()=>{
    calculateValue(0);
    setValueOne(null);
    setValueTwo(null);
    setOperator("+");
    setShowResult(false)

  }  

  calculate = type => {
    setOperationCount(operationCount + 1);
    setOperator(type)
    setShowResult(true)
    switch (type) {
      case '+':
        calculateValue(Number(valueOne) + Number(valueTwo));
        break;
      case '-':
        calculateValue(Number(valueOne) - Number(valueTwo));
        break;
      case '*':
        calculateValue(Number(valueOne) * Number(valueTwo));
        break;
      case '/':
        calculateValue(Number(valueOne) / Number(valueTwo));
        break;
      default:
        calculateValue(Number(valueOne) + Number(valueTwo));
        break;
    }
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text>Total Operations Peformed:{operationCount}</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            value={valueOne}
            keyboardType={"numeric"}
            onChangeText={text => setValueOne(text)}
            style={styles.inputStyle}></TextInput>
          <Text style={styles.operatorStyle}>{operator}</Text>
          <TextInput
            value={valueTwo}
            keyboardType={"numeric"}
            onChangeText={text => setValueTwo(text)}
            style={styles.inputStyle}></TextInput>
        </View>
        <View style={styles.operatorContainer}>
          <View style={styles.operator}>
            <TouchableOpacity
              onPress={() => calculate('+')}
              style={styles.resetButton}>
              <Text>+</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.operator}>
            <TouchableOpacity
              onPress={() => calculate('-')}
              style={styles.resetButton}>
              <Text>-</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.operator}>
            <TouchableOpacity
              onPress={() => calculate('*')}
              style={styles.resetButton}>
              <Text>*</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.operator}>
            <TouchableOpacity
              onPress={() => calculate('/')}
              style={styles.resetButton}>
              <Text>/</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.resetContainer}>
          <TouchableOpacity
            onPress={()=>resetAll()}
            style={styles.resetButton}>
            <Text>RESET</Text>
          </TouchableOpacity>
          {showResult&&<Text style={styles.resultStyle}>Result:{result}</Text>}
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  inputStyle: {
    width: '45%',
    height: 100,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  operatorStyle: {
    textAlign: 'center',
    alignSelf: 'center',
    color: 'red',
  },
  operatorContainer: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-evenly',
  },
  operator: {
    height: 50,
    width: Dimensions.get('window').width / 4 - 40,
    margin: 20,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resetContainer: {
    marginTop: 20,
    width: '50%',
    height: 50,
    backgroundColor: 'red',
    marginLeft: 20,
    flexDirection: 'row',
  },
  resetButton: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultStyle: {
    color: 'green',
  },
});

export default App;
