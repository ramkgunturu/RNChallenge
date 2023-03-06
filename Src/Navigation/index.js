// This code file sets up the navigation for the application.
// It creates a Stack Navigator and sets up its options like screen header color and initial route name.
// The Stack Navigator has only one screen, which is the Search screen imported from the containers directory.
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Search} from '@containers';
import {Colors} from '@Themes';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: {
            color: Colors.themecolor,
            // Set color of the screen title
          },
        }}
        headerMode="none"
        initialRouteName="Search">
        <Stack.Screen name="Pincode Lookup" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
