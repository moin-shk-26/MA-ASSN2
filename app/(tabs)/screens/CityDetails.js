import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import CityInfo from '../../components/CityInfo';

const CityDetails = ({ route }) => {
  const { cityName, cityImage, cityLink, cityInfo } = route.params;

  return (
    <View style={styles.cityContainer}>
      <Image source={{ uri: cityImage }} style={styles.cityImage} />
      <Text style={styles.cityName}>{cityName}</Text>
      <Text style={styles.cityDetail}>Population: <Text style={styles.detailValue}>{cityInfo.population}</Text></Text>
      <Text style={styles.cityDetail}>Mayor: <Text style={styles.detailValue}>{cityInfo.mayor}</Text></Text>
      <Text style={styles.cityDetail}>Established: <Text style={styles.detailValue}>{cityInfo.established}</Text></Text>
      <Text style={styles.cityDetail}>Description: <Text style={styles.detailValue}>{cityInfo.description}</Text></Text>
      <TouchableOpacity style={styles.linkButton} onPress={() => Linking.openURL(cityLink)}>
        <Text style={styles.goToCityLink}>Go to {cityName} Page</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cityContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  cityImage: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  cityName: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4B3D00', // Darker gold color for the city name
  },
  cityDetail: {
    fontSize: 16,
    marginBottom: 10,
    color: '#555',
  },
  detailValue: {
    fontWeight: '600',
    color: '#000',
  },
  linkButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#B8860B', // Darker golden color for the button
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  goToCityLink: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CityDetails;