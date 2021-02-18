import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './Home'
import ModalScreen from './ModalScreen'

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

function MainStackScreen() {
    return (
        <MainStack.Navigator>
            <MainStack.Screen name="Home" component={HomeScreen} />
        </MainStack.Navigator>
    );
}

function RootStackScreen() {
    return (
        <NavigationContainer>
            <RootStack.Navigator mode="modal" headerMode="none">
                <RootStack.Screen name="Main" component={MainStackScreen} />
                <RootStack.Screen name="MyModal" component={ModalScreen} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
}

export default RootStackScreen