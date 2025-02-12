import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function CityInfo({ info }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{info}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
});