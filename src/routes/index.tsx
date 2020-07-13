import React from 'react'

// Native
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// Pages
import Home from '~/pages/Home'
import Points from '~/pages/Points'
import Details from '~/pages/Details'

//Components
import BackButton from '~/components/BackButton'

// Private
import styles from './styles'

const AppStack = createStackNavigator()

const screenOptions = {
  title: '',
  headerTransparent: true,
  cardStyle: styles.cardStyle,
  headerStyle: styles.headerStyle,
  headerLeft: () => <BackButton />,
  headerLeftContainerStyle: styles.headerLeftContainerStyle
}

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
  )
}

export default Routes
