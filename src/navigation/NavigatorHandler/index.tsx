import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { AsyncStorage, StyleSheet } from 'react-native';
import { StyledView } from 'src/components/StyledView';
import { RootState, useAppDispatch, useAppSelector, userActions } from 'src/store';
import { User } from 'src/types/user.types';
import Navbar from '../Navbar';
import StackNavigation from '../StackNavigation';

const NavigatorHandler = () => {
  const user = useAppSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();
  const isLoggedIn = async () => {
    try {
      const loggedUser = JSON.parse((await AsyncStorage.getItem('user')) || '{}');

      if (loggedUser?.date > new Date().getTime()) {
        dispatch(userActions.setUser(loggedUser as User));
        return;
      }
      dispatch(userActions.setUser({} as User));
    } catch (e) {
      dispatch(userActions.setUser({} as User));
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

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
