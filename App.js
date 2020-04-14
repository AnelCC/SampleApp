/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, SafeAreaView, View, Text, StatusBar} from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar hidden={true} />
      <SafeAreaView>
        <View>
          <Text style={styles.defaultText}>Anel</Text>
          <Text style={[styles.defaultText, styles.selectedText]}>Howard</Text>
          <Text style={styles.defaultText}>Eunice</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

/*Create a style: for implement we should apply in the component */
const styles = StyleSheet.create({
  defaultText: {
    fontSize: 22,
    padding: 10,
    margin: 5,
    borderWidth: StyleSheet.hairLineWith,
    color: 'black',
  },
  selectedText: {
    backgroundColor: 'yellow',
    color: 'blue',
    fontWeight: 'bold',
  },
});

export default App;
