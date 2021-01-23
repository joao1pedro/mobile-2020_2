import Home from './Home';
import Sobre from './Sobre';
import Cadastro from './Cadastro'
import IMC from './IMC'
import Perfil from './Perfil'
import Resultado from './Resultado'

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const StackMain = createStackNavigator()
const RootStack = createStackNavigator()

function StackMainScreens() {
    return (
        <StackMain.Navigator
            initialRouteName='Home'
        >
            <StackMain.Screen name='Home' component={Home} />
            <StackMain.Screen name='Cadastro' component={Cadastro} />
            <StackMain.Screen name='IMC' component={IMC} />
            <StackMain.Screen name='Sobre' component={Sobre} />
            <StackMain.Screen name='Resultado' component={Resultado} />
        </StackMain.Navigator>
    )
}

function RootStackScreens() {
    return (
        <NavigationContainer>
            <RootStack.Navigator>
                <RootStack.Screen
                    name='Principal'
                    component={StackMainScreens}
                    options={{ headerShown: false }}
                />
                <RootStack.Screen name='MeuPerfil' component={Perfil} options={{ headerShown: false }}/>
            </RootStack.Navigator>
        </NavigationContainer>
    )
}

export default RootStackScreens
