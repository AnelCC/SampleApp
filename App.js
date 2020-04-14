/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, View, Text, StatusBar} from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar hidden={true} />
      <SafeAreaView>
        <View>
          <Text>Anel</Text>
          <Text>Howard</Text>
          <Text>Eunice</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;