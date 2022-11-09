import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { StyledView } from 'src/components/StyledView';
import { RootState, useAppSelector } from 'src/store';
import Navbar from '../Navbar';
import StackNavigation from '../StackNavigation';

const NavigatorHandler = () => {
  const user = useAppSelector((state: RootState) => state.user);
  return (
    <NavigationContainer>
      <StyledView style={styles.sceneContainer}>{!user?.id ? <StackNavigation /> : <Navbar />}</StyledView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sceneContainer: {
    minWidth: '100%',
    minHeight: '100%',
  },
});
export default NavigatorHandler;
