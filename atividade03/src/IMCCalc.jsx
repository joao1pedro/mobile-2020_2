import React, {Component} from 'react'
import {Text, View} from 'react-native'

import IMCMsg from './IMCMsg'

export default class IMCCalc extends Component {
    render(){
        if(this.props.peso == null || this.props.altura == null) return null
        const imc = this.props.peso/(this.props.altura**2)
        return(
            <Text style={ {padding: 10, fontSize: 20} }>
                <strong>
                Seu IMC é: {imc}
                {'\n'}
                <IMCMsg
                value={imc}
                />
                </strong>
            </Text>  
        )
    }
}