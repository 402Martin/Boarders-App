/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { StyledView } from 'src/components/StyledView';
import { routes } from 'src/navigation/routes';
import Login from 'src/scenes/Login';
import Register from 'src/scenes/register';
import store from 'src/store/store';

const Stack = createNativeStackNavigator();
const App = () => {
  const isDarkMode = true;

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StyledView style={styles.sceneContainer}>
          <Stack.Navigator
            initialRouteName={routes.LOGIN}
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name={routes.REGISTER} component={Register} />
            <Stack.Screen name={routes.LOGIN} component={Login} />
          </Stack.Navigator>
        </StyledView>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  sceneContainer: {
    minWidth: '100%',
    minHeight: '100%',
  },
});
export default App;
