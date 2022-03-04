import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { getHeaderTitle } from '@react-navigation/elements';
import { createDrawerNavigator } from '@react-navigation/drawer';
import All from './screens/All';
import Business from './screens/Business';
import HealthScreen from './screens/Health';
import SportsScreen from './screens/Sports';
import TechScreen from './screens/Tech';
import WionScreen from './screens/Wion';
import { Icon } from 'react-native-elements';
import { View, Text } from 'react-native';
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={MainStackNavigator} />
      <Tab.Screen name="Contact" component={ContactStackNavigator} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
        headerStyle: { 
        //  backgroundColor: '#35858B',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        // headerShown: false,
        // headerLeft: ({ navigation, route, options }) => {
        header: ({ navigation, route, options }) => {
          // const title = getHeaderTitle(options, route.name);
          // console.log('header', title, route, navigation, options)
          return (
            <View style={{ backgroundColor: '#072227', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start' }}>
              
              {/*
              <View style={{ marginLeft: 0, marginTop: 'auto', flexDirection: 'row', justifyContent: 'center'   }}>
                <Icon type='feather' name='menu' color='#072227'  onPress={() => console.log('hello')} reverse reverseColor='#35858B' />
                <Text style={{ color: 'white', marginLeft: 'auto', marginTop: 'auto' }}>NGNN Nex-Gen News Network</Text>
              </View>
              */}

              {/*   

                1. flexDirection: 'row' use for show content in a row
                1. justifyContent: 'center' use for aligning vertically
                2. alignItems: 'center' use for aligning  horizontally
                  
                */}
                <View style={{ alignItems: 'flex-start', marginRight: 'auto', flex:0.3,  }}>
                    <Icon type='feather' name='menu' color='#072227'  onPress={() => console.log('hello')} reverse reverseColor='#35858B' />
                </View>
                <View style={{ alignItems: 'flex-start', marginRight: 'auto', flex:0.7, marginTop: 25 }}>
                    <Text style={{ color: 'white' }} >Nex-Gen News Network</Text><Icon />
                </View>

        
            </View>
          )
        },

      }}
      tabBarOptions={{
       activeTintColor: '#fff',
       inactiveTintColor: 'lightgray',
       activeBackgroundColor: '#35858B',
       inactiveBackgroundColor: '#072227',
       style: 
         {
             backgroundColor: '#072227',
             paddingBottom: 3
         }
    }}      
      >
        <Tab.Screen name="All" component={All}
          options={{ 
            // title: 'My home',
            headerStyle: {
            backgroundColor: '#072227',
            },
            headerTintColor: '#f5f5f5',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            tabBarIcon: (props) => (
              <Icon type='feather' name='home' color={props.color} />
            ),
          }} />

        <Tab.Screen name="Business" component={Business}
          options={{
            headerStyle: {
            backgroundColor: '#072227',
            },
            headerTintColor: '#f5f5f5',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            tabBarIcon: (props) => (
              <Icon type='feather' name='dollar-sign' color={props.color} />
            ),
          }} />

        <Tab.Screen name="Health" component={HealthScreen}
          options={{
            headerStyle: {
            backgroundColor: '#072227',
            },
            headerTintColor: '#f5f5f5',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            tabBarIcon: (props) => (
              <Icon type='feather' name='heart' color={props.color} />
            ),
          }} />

        <Tab.Screen name="Sports" component={SportsScreen}
          options={{
            headerStyle: {
            backgroundColor: '#072227',
            },
            headerTintColor: '#f5f5f5',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            tabBarIcon: (props) => (
              <Icon type='ionicon' name="tennisball-outline" color={props.color}/>
            ),
          }} />

        <Tab.Screen name="Tech" component={TechScreen}
          options={{
            headerStyle: {
            backgroundColor: '#072227',
            },
            headerTintColor: '#f5f5f5',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            tabBarIcon: (props) => (
              <Icon type='ionicon' name="hardware-chip-outline" color={props.color} />
            ),
          }} />
        <Tab.Screen name="Wion" component={WionScreen}
          options={{
            headerStyle: {
            backgroundColor: '#072227',
            },
            headerTintColor: '#f5f5f5',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            tabBarIcon: (props) => (
              <Icon type='ionicon' name="hardware-chip-outline" color={props.color} />
            ),
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}