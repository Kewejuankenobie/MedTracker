import React, {Component} from 'react';

import {StyleSheet} from 'react-native';

export default class Med extends Component {

    state = {
        name: '',
        perscriptionAmount: 0,
        currentAmount: 0,
        dosage: ''
    };


    render() {
        return (
            <View style = {medStyle.medBox}>
              <Text style = {medStyle.med}>{this.name}</Text>
              <Button title="Remove"/>
            </View>
        );
    }
    

}

const medStyle = StyleSheet.create({
    medBox: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: '#e5709f',
        marginBottom: 10,
        backgroundColor: '#ffd7e7'
      },
      med: {
        fontSize: 20,
        padding: 10,
      },
});
