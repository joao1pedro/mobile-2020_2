import React, { Component } from 'react'
import { View } from 'react-native'

import Header from './Header';
import AlbumList from './AlbumList'

export default class Home extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header title='Project Albums' />
                <AlbumList {...this.props} />
            </View>
        )
    }
}
