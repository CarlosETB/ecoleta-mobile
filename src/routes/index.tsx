import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../pages/Home";
import Points from "../pages/Points";
import Details from "../pages/Details";

import BackButton from "../components/BackButton";

// Private
import styles from "../routes/styles";

const AppStack = createStackNavigator();

const screenOptions = {
  title: "",
  headerTransparent: true,
  cardStyle: styles.cardStyle,
  headerStyle: styles.headerStyle,
  headerLeft: () => <BackButton />,
  headerLeftContainerStyle: styles.headerLeftContainerStyle,
};

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={screenOptions}>
        <AppStack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <AppStack.Screen name="Points" component={Points} />
        <AppStack.Screen name="Details" component={Details} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
