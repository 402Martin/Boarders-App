import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Provider } from 'react-redux';
import Alarm from 'src/components/Alarm';
import NavigatorHandler from 'src/navigation/NavigatorHandler';
import { RootStackParamList } from 'src/navigation/routes';
import { useAppSelector } from 'src/store';
import store from 'src/store/store';

const Stack = createNativeStackNavigator();

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
const App = () => {
  const isDarkMode = true;

  return (
    <Provider store={store}>
      <NavigatorHandler />
      <Alarm />
    </Provider>
  );
};

export default App;
