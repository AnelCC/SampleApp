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
        <View style={styles.container}>
          <Text style={styles.defaultText}>Anel</Text>
          <Text style={[styles.defaultText, styles.selectedText]}>Howard</Text>
          <Text style={styles.defaultText}>Eunice</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

/**Create a style: for implement we should apply in the component
 * justifyContent::: flex-start, flex-end, center, space-between, space-around
 * alignSelf:::: stretch, flex-end
 * flex: 1 doesn't working ---> height: '100%'
 **/
const styles = StyleSheet.create({
  container: {
    flex: 1,    
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    backgroundColor: '#DDD',
  },
  defaultText: {
    textAlign: 'center',
    fontSize: 22,
    padding: 10,
    margin: 5,
    borderWidth: StyleSheet.hairLineWith,
    color: 'black',
  },
  selectedText: {
    alignSelf: 'flex-end',
    backgroundColor: 'yellow',
    color: 'blue',
    fontWeight: 'bold',
  },
});

export default App;
