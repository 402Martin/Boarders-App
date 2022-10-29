import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { routes } from 'src/navigation/routes';
import MyProfile from 'src/scenes/MyProfile';
import MySessions from 'src/scenes/MySessions';
import Search from 'src/scenes/Search';
import profileLogo from 'src/assets/icons/profileLogo.png';
import searchIcon from 'src/assets/icons/searchIcon.png';
import iconLogo from 'src/assets/icons/iconLogo.png';

import { Image } from 'react-native';
import PendingRequests from 'src/scenes/MySessions/PendingRequests';

const Tab = createBottomTabNavigator();

const Navbar = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
    >
      <Tab.Screen
        name={routes.MYPROFILE}
        component={MyProfile}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Image
                style={{
                  height: 25,
                  width: 25,
                  backgroundColor: 'transparent',
                }}
                source={profileLogo}
              />
            );
          },
          tabBarLabel: 'Mi perfil',
        }}
      />
      <Tab.Screen
        name={routes.SEARCH}
        component={Search}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Image
                style={{
                  height: 25,
                  width: 25,
                  backgroundColor: 'transparent',
                }}
                source={searchIcon}
              />
            );
          },
          tabBarLabel: 'Busqueda',
        }}
      />
      <Tab.Screen
        name={routes.MYSESSION}
        component={PendingRequests}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Image
                style={{
                  height: 25,
                  width: 25,
                  backgroundColor: 'transparent',
                }}
                source={iconLogo}
              />
            );
          },
          tabBarLabel: 'Mis sessiones',
        }}
      />

      <Tab.Screen
        name={routes.PENDINGREQUEST}
        component={PendingRequests}
        options={({ route }) => ({
          tabBarButton: () => null,
        })}
      />
    </Tab.Navigator>
  );
};

export default Navbar;
