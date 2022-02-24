import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Signin, Signup } from '../screens';

const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="signin" component={Signin} />
      <Stack.Screen name="signup" component={Signup} />
    </Stack.Navigator>
  );
};

export default Auth;
