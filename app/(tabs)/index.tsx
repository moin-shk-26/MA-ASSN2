import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import SignInScreen from './screens/SignInScreen';
import CityScreen from './screens/CityScreen';
import CityInfo from '../components/CityInfo';
import CityDetails from './screens/CityDetails';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: 'location-city' | 'business' = route.name === 'Calgary' ? 'location-city' : 'business';
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen 
        name="Calgary" 
        component={CityScreen}
        initialParams={{ 
          city: 'Calgary',
          //imageUrl: '../assests/cagary.jpg',
          cityUrl: 'https://www.calgary.ca/home.html',
          info: 'Calgary is known for the Calgary Stampede, its proximity to the Rocky Mountains, and its oil industry.'
        }}
      />
      <Tab.Screen 
        name="Edmonton" 
        component={CityScreen}
        initialParams={{ 
          city: 'Edmonton',
          //imageUrl: '../../../assets/images/edmonton.jpg',
          cityUrl: 'https://www.edmonton.ca/',
          info: 'Edmonton is Alberta\'s capital city and is famous for West Edmonton Mall and its vibrant festival scene.'
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
      <Stack.Navigator>
        <Stack.Screen 
          name="SignIn" 
          component={SignInScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ 
            title: 'Welcome to My New App',
            headerBackVisible: false 
          }}
        />
        <Stack.Screen 
          name="CityDetails" 
          component={CityDetails}
          options={({ route }) => ({ 
            title: (route.params as { cityName: string }).cityName,
          })}
        />
      </Stack.Navigator>
  );
}