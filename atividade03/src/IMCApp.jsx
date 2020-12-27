import React, { Component } from 'react'
import { View, TextInput, Button, StyleSheet} from 'react-native'
import IMCCalc from './IMCCalc'

export default class IMCApp extends Component {
    constructor(props) {
        super(props)
        this.state = { peso: null, altura: null}

        this.acaoBotao = this.acaoBotao.bind(this);
    }

    acaoBotao = () => {
        console.log(this.state.altura)
        console.log(this.state.peso)
    }

    render() {
        return (
            <View style={styles.headerText}>
                <h3>Altura:{this.state.altura}</h3>
                <h3>Peso:{this.state.peso}</h3>
                <View style={styles.textInput}>
                    <TextInput
                        style={{ height: 40 }}
                        placeholder='Digite a altura'
                        onChangeText={(altura) => this.setState({ altura })}
                    />
                    <TextInput
                        style={{ height: 40 }}
                        placeholder='Digite o peso'
                        onChangeText={(peso) => this.setState({ peso })}
                    />
                    <IMCCalc peso={this.state.peso} altura={this.state.altura} />
                    <View style={styles.viewButton}>
                        <Button
                            title="Calcular"
                            onPress={this.acaoBotao}
                        />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerText: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        fontWeight: "bold"
    },
    textInput: {
        height: 45,
        width: "95%",
        borderColor: "gray",
        borderWidth: 2,
        paddingLeft: 20
    },
    viewButton: {
        width: "93%",
        margin: 15,
        backgroundColor: "red"
    }
});