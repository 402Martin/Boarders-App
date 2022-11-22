import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from 'src/scenes/Login';
import MyProfile from 'src/scenes/MyProfile';
import Register from 'src/scenes/register';
import { routes } from '../routes';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.LOGIN}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={routes.REGISTER} component={Register} />
      <Stack.Screen name={routes.LOGIN} component={Login} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
