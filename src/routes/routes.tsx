import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer, ParamListBase } from '@react-navigation/native';
import { Badge, Box, Center, Flex, HStack, Input, Progress, Spacer, Text, VStack } from 'native-base';
import { Pressable, View } from 'react-native';
import { IconAdornment } from 'react-native-paper/lib/typescript/components/TextInput/Adornment/TextInputIcon';
import Icon from 'react-native-vector-icons/AntDesign';
import { Dashboard } from '../screens/Dashboard';
import React, { useContext, useState } from 'react';
import { ProfileScreen } from '../screens/ProfileScreen';
import { Dimensions, StyleSheet } from 'react-native'
import { Link } from 'native-base';

type ITabRoutes = {
    Settings: undefined;
    Home: undefined;
    Profile: undefined;
}

const Tab = createMaterialBottomTabNavigator<ITabRoutes>();

interface IMyTabs {}

export const Routes: React.FunctionComponent<IMyTabs> = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator>
        <Tab.Screen name="Home" component={Dashboard} options={{
          title: 'Home',
          tabBarIcon: () => <Icon name="home" size={20} color="green" />
        }} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{
          title: 'Perfil',
          tabBarIcon: () => <Icon name="user" size={20} color="green" />
        }} />
        <Tab.Screen name="Settings" component={Screen} options={{
          title: 'Link',
          tabBarIcon: () => <Icon name="link" size={20} color="green" />
        }} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}

const Screen = () => {
  const { width, height } = Dimensions.get('window');
  
  return (
    <VStack bgColor='#d1fae5' flex={1} width={width} height={height} justifyContent='space-between' alignItems='center' p={4} my={320}>
      <Link href="https://riconnect.rico.com.vc/blog/como-economizar-dinheiro/" alignItems='center' p={4} my={30}>
        Clique aqui para mais dicas de como economizar!
      </Link>
    </VStack>
  );
};



