import React from 'react';
import { Text, TouchableOpacity, Linking, StyleSheet } from 'react-native';

export default function CityLink({ url }) {
  const handlePress = () => {
    Linking.openURL(url);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.link}>Go to city page</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  link: {
    color: '#007AFF',
    fontSize: 16,
    textDecorationLine: 'underline',
    marginVertical: 10,
  },
});