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
import {filter} from 'rxjs/operator/filter';

const App = () => {
  const [notes, addNotes] = useState([]);
  const [globalNotes, addGlobalNotes] = useState([]);

  const [valueOne, setValueOne] = useState('');
  const [valueTwo, setValueTwo] = useState('');
  const [fileredNotes, setFileredNotes] = useState([]);

  addNote = () => {
    notes.push({title: valueOne, status: valueTwo});
    setValueOne('');
    setValueTwo('');
    setFileredNotes(notes);
    addGlobalNotes(notes);
  };

  filterN = type => {
    switch (type) {
      case 'All':
        setFileredNotes(notes);
        break;
      case 'Active':
        var x = notes.filter(function(item, index) {
          return item.status == 'Active';
        });
        setFileredNotes(x);
        break;
      case 'Completed':
        var x = notes.filter(function(item, index) {
          return item.status == 'Completed';
        });
        setFileredNotes(x);
        break;
      default:
        setFileredNotes(notes);
        break;
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />

      <SafeAreaView style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            value={valueOne}
            onChangeText={text => setValueOne(text)}
            placeholder={'Note Title'}
            style={styles.inputStyle}></TextInput>
          <TextInput
            value={valueTwo}
            onChangeText={text => setValueTwo(text)}
            placeholder={'Note Status'}
            style={styles.inputStyle}></TextInput>
          <View style={styles.resetContainer}>
            <TouchableOpacity
              onPress={() => addNote()}
              style={styles.resetButton}>
              <Text>ADD NOTES</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.operatorContainer}>
          <View style={styles.operator}>
            <TouchableOpacity
              onPress={() => filterN('All')}
              style={styles.resetButton}>
              <Text>All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.operator}>
            <TouchableOpacity
              onPress={() => filterN('Active')}
              style={styles.resetButton}>
              <Text>Active</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.operator}>
            <TouchableOpacity
              onPress={() => filterN('Completed')}
              style={styles.resetButton}>
              <Text>Completed</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.gridContainer}>
          {fileredNotes.map(function(item, index) {
            return (
              <View key={index} style={styles.gridRow}>
                <Text>{item.title}</Text>
                <Text>{item.status}</Text>
              </View>
            );
          })}
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gridRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  gridContainer: {
    width: '100%',
    paddingTop: 100,
    borderWidth: 1,
    borderColor: 'green',
  },
  inputContainer: {
    width: '100%',
    height: 20,
    paddingTop: 100,
    flexDirection: 'row',
  },
  inputStyle: {
    width: '30%',
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  resetContainer: {
    width: '30%',
    height: 40,
    backgroundColor: 'green',
    marginLeft: 20,
    flexDirection: 'row',
  },
  resetButton: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  operatorContainer: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-evenly',
    paddingTop: 20,
  },
  operator: {
    height: 50,
    width: Dimensions.get('window').width / 3 - 40,
    margin: 20,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
