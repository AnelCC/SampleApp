/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';
//import { IMAGENAME , IMG} from '../man.png';
//import  IMG2 = require('../man.png');

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar hidden={true} />
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.defaultText}>
            Anel
            <Image style={styles.image} source={require('./img/woman_1.png')} />
          </Text>
          <Text style={[styles.defaultText, styles.selectedText]}>
            Howard
            <Image style={styles.images} source={require('./img/man.png')} />
          </Text>
          <Text style={styles.defaultText}>
            Eunice
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={require('./img/woman_2.png')}
              />
            </View>
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

/**Create a style: for implement we should apply in the component
 * justifyContent::: flex-start, flex-end, center, space-between, space-around
 * alignSelf:::: stretch, flex-end
 * flex: 1 doesn't working
 **/
const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    backgroundColor: '#DDD',
  },
  imageContainer: {
    height: '30%',
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
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  images: {
    width: 100,
    height: 100,
    resizeMode: 'repeat',
  },
});

export default App;
