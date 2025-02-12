import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import CityLink from '../../components/CityLink';
import CityInfo from '../../components/CityInfo';

export default function CityScreen({ route }) {
  const { city, cityUrl, info } = route.params;

  return (
    <View style={styles.container}>
      {info.imageUrl && (
        <Image
          source={{ uri: info.imageUrl }}
          style={styles.image}
        />
      )}
      <Text style={styles.cityName}>{city}</Text>
      <CityLink url={cityUrl} />
      <CityInfo info={info} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
  cityName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'blue',
  },
});