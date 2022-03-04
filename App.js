import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { getHeaderTitle } from '@react-navigation/elements';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
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
    <Tab.Navigator
        screenOptions={{
        headerStyle: { 
        //  backgroundColor: '#35858B',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerShown: false,
        // headerLeft: ({ navigation, route, options }) => {
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
  );
};

function CustomDrawerContent(props) {
  return (
    <>
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Share App" onPress={() => alert('Link to help')} activeTintColor='#2196f3' activeBackgroundColor='rgba(0, 0, 0, .04)' inactiveTintColor='rgba(0, 0, 0, .87)' inactiveBackgroundColor='transparent' style={{backgroundColor: '#000000'}} labelStyle={{color: '#ffffff'}} />
      <DrawerItem label="Rate App" onPress={() => alert('Link to help')} />
      <DrawerItem label="About Us" onPress={() => alert('Link to help')} />
    </DrawerContentScrollView>
    <Text
      style={{
        fontSize: 16,
        textAlign: 'center',
        color: '#OOOOOO'
      }}>
      appVersion-0.0.1
    </Text>
    </>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        initialRouteName="All"
        screenOptions={{
          drawerStyle: {
            // backgroundColor: '#072227',
            width: 200,
            // color: 'white'
          },
          // headerShown: false,
          headerTintColor: '#ffffff',
          headerStyle: {
            backgroundColor: '#072227',
          },
          headerTitleStyle: {
          fontWeight: 'bold',
          color: '#ffffff'
        },
        }}
      >
        <Drawer.Screen name="Nex-Gen News Network" label="Nex-Gen News Network" component={BottomTabNavigator} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}