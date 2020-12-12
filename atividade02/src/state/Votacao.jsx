import React, { Component } from 'react'
import { View, Button } from 'react-native'

export default class Votacao extends Component {
    constructor(props) {
        super(props)

        this.state = { vQxd: 0, vFor: 0, vLim: 0, vJze: 0 }
        this.testar = this.testar.bind(this)
    }

    testar() {
        var qxd = this.state.vQxd, fortal = this.state.vFor, limoeiro = this.state.vLim, juazeiro = this.state.vJze;
        var max = Math.max(this.state.vQxd, this.state.vFor, this.state.vLim, this.state.vJze);
        var min = Math.min(this.state.vQxd, this.state.vFor, this.state.vLim, this.state.vJze);
        var vmax = '';
        var vmin = '';

        if (max != min) {
            if (this.state.vQxd == max) {
                vmax = 'Quixadá'
                alert('O MAIS VOTADO possui ' + max + ' votos e a cidade é: ' + vmax)
            } else if (this.state.vFor == max) {
                vmax = 'Fortaleza'
                alert('O MAIS VOTADO possui ' + max + ' votos e a cidade é: ' + vmax)
            } else if (this.state.vLim == max) {
                vmax = 'Limoeiro'
                alert('O MAIS VOTADO possui ' + max + ' votos e a cidade é: ' + vmax)
            } else if (this.state.vJze == max) {
                vmax = 'Juazeiro'
                alert('O MAIS VOTADO possui ' + max + ' votos e a cidade é: ' + vmax)
            }

            if (this.state.vQxd == min) {
                vmin = 'Quixadá'
                alert('O MENOS VOTADO possui ' + min + ' votos e a cidade é: ' + vmin)
            } else if (this.state.vFor == min) {
                vmin = 'Fortaleza'
                alert('O MENOS VOTADO possui ' + min + ' votos e a cidade é: ' + vmin)
            } else if (this.state.vLim == min) {
                vmin = 'Limoeiro'
                alert('O MENOS VOTADO possui ' + min + ' votos e a cidade é: ' + vmin)
            } else if (this.state.vJze == min) {
                vmin = 'Juazeiro'
                alert('O MENOS VOTADO possui ' + min + ' votos e a cidade é: ' + vmin)
            }

            if (qxd == fortal && qxd == limoeiro) {
                alert('Quixadá, Fortaleza e Limoeiro estão empatados com ' + qxd + ' votos')
            } else if (qxd == fortal && qxd == juazeiro) {
                alert('Quixadá, Fortaleza e Juazeiro estão empatados com ' + qxd + ' votos')
            } else if (qxd == limoeiro && qxd == juazeiro) {
                alert('Quixadá, Limoeiro e Juazeiro estão empatados com ' + qxd + ' votos')
            }

            else if (fortal == limoeiro && fortal == juazeiro) {
                alert('Fortaleza, Limoeiro e Juazeiro estão empatados com ' + fortal + ' votos')
            }

            else if (qxd == fortal) {
                alert('Quixadá e Fortaleza estão empatados com ' + qxd + ' votos')
            } else if (qxd == limoeiro) {
                alert('Quixadá e Limoeiro estão empatados com ' + qxd + ' votos')
            } else if (qxd == juazeiro) {
                alert('Quixadá e Juazeiro estão empatados com ' + qxd + ' votos')
            }

            else if (fortal == limoeiro) {
                alert('Fortaleza e Limoeiro estão empatados com ' + fortal + ' votos')
            }
            else if (fortal == juazeiro) {
                alert('Fortaleza e Juazeiro estão empatados com ' + fortal + ' votos')
            }
            else if (limoeiro == juazeiro) {
                alert('Juazeiro e Limoeiro estão empatados com ' + limoeiro + ' votos')
            }
        } else if (max == min) {
            if (qxd == fortal && qxd == limoeiro && qxd == juazeiro) {
                alert('Todas cidades estão empatadas com ' + qxd + ' votos')
            }
        }

    }

    render() {


        return (
            <View>
                <h1> Votação</h1>
                <Button
                    title="Quixadá"
                    onPress={() => { this.setState({ vQxd: this.state.vQxd + 1 }) }}
                />
                <br />
                <Button title='Fortaleza'
                    onPress={() => { this.setState({ vFor: this.state.vFor + 1 }) }}
                />
                <br />
                <Button title='Limoeiro'
                    onPress={() => { this.setState({ vLim: this.state.vLim + 1 }) }}
                />
                <br />
                <Button title='Juazeiro'
                    onPress={() => { this.setState({ vJze: this.state.vJze + 1 }) }}
                />
                <br />
                Número de votos Quixadá: {this.state.vQxd}
                <br />
                Número de votos Fortaleza: {this.state.vFor}
                <br />
                Número de votos Limoeiro: {this.state.vLim}
                <br />
                Número de votos Juazeiro: {this.state.vJze}
                <br />
                <strong> Clique no botão abaixo para verificar o andamento da votação.</strong>
                <br />
                <Button title='Verificar andamento das votações'
                    onPress={this.testar}
                />
            </View>
        )
    }
}