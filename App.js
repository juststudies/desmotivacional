import React from 'react';
import { StyleSheet, View } from 'react-native';
import Desmotivacional from './Desmotivacional'

export default function App() {
  return (
    <View style={styles.container}>
      <Desmotivacional />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#FFDFD3',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
