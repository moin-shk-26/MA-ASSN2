// /components/CityImage.js
import React from 'react';
import { Image, StyleSheet } from 'react-native';

const CityImage = ({ uri }) => {
  return (
    <Image
      source={{ uri }}
      style={styles.image}
      onError={() => console.log('Error loading image')}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    resizeMode: 'cover',
  },
});

export default CityImage;