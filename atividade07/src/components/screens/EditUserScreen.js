import React, { Component } from 'react';
import { Text, TextInput } from 'react-native';

import firestore from '@react-native-firebase/firestore'

import MyButton from '../cards/MyButton'
import Card from '../cards/Card'
import CardItem from '../cards/CardItem'


export default class EditUserScreen extends Component {
    
    constructor(props){
        super(props)
        this.state = {name:this.props.route.params.name}
    }

    updateUser = () => {
        firestore()
          .collection('users')
          .doc('yflYoh1tNmEJHsro6dwZ')
          .update({
            name: this.state.name,
          })
          .then(() => {
            console.log('User updated!');
          });
          this.props.navigation.navigate('ListUserScreen')
      }

    render() {
        return (
            <Card>
                <CardItem>
                    <Text>Edit User</Text>
                </CardItem>
                <CardItem>
                <TextInput
                    onChangeText={(name) => this.setState({ name })}
                    value={this.state.name}
                />
                </CardItem>
                <CardItem>
                    <MyButton 
                        title='Update'
                        onPress={this.updateUser}
                        />
                    <MyButton 
                        title='Back' 
                        onPress={() => this.props.navigation.goBack()}/>
                </CardItem>

            </Card>

             
        )
    }
}