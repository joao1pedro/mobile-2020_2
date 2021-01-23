import React, {Component} from 'react'
import {Text, View} from 'react-native'

export default class IMCMsg extends Component{
    render(){
        if(this.props.value == null)
            return null;
        if (this.props.value < 17) {
            return (
                <Text style={ {padding: 10, fontSize: 20, color:'red'} }>
                    Muito abaixo do peso 
                </Text>
            );
        } 
        if (this.props.value < 18.49) {
            return (
                <Text style={ {padding: 10, fontSize: 20, color:'red'} }>
                    Abaixo do peso
                </Text>
            );
        }
        if (this.props.value < 24.99) {
            return (
                <Text style={ {padding: 10, fontSize: 20, color:'blue'} }>
                    Peso normal
                </Text>
            );
        } 
        if (this.props.value < 29.99) {
            return (
                <Text style={ {padding: 10, fontSize: 20, color:'red'} }>
                    Acima do peso
                </Text>
            );
        }
        if (this.props.value < 34.99)  {
            return (
                <Text style={ {padding: 10, fontSize: 20, color:'red'} }>
                    Obesidade I
                </Text>
            );
        }
        if(this.props.value < 39.99) {
            return (
                <Text style={ {padding: 10, fontSize: 20, color:'red'} }>
                    Obesidade II (severa)
                </Text>
            );
        }
        if(this.props.value >= 40) {
            return(
                <Text style={ {padding: 10, fontSize: 20, color:'red'} }> 
                    Obesidade III (mórbida)
                </Text>
            );
        }   
    }
}