import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to My New App</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.cityButton}
          onPress={() => navigation.navigate('CityDetails', {
            cityName: 'Calgary',
            cityLink: 'https://www.calgary.ca/home.html',
            cityInfo: {
              population: '1.3 million (2023 est.)',
              mayor: 'Jyoti Gondek',
              established: '1875',
              description: 'Calgary is a vibrant city known for its Stampede and proximity to the Rocky Mountains.',
            }
          })}
        >
          <Text style={styles.buttonText}>Calgary</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.cityButton}
          onPress={() => navigation.navigate('CityDetails', {
            cityName: 'Edmonton',
            cityLink: 'https://www.edmonton.ca/',
            cityInfo: {
              population: '1.1 million (2023 est.)',
              mayor: 'Amarjeet Sohi',
              established: '1904',
              description: 'Edmonton is known as the "Festival City" and is home to North America\'s largest mall.',
            }
          })}
        >
          <Text style={styles.buttonText}>Edmonton</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5', // Light background color
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
    color: '#4B3D00', // Darker gold color for text
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  cityButton: {
    backgroundColor: '#B8860B', // Gold color for buttons
    padding: 15,
    borderRadius: 8,
    width: '80%',
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;