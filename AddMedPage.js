import React, {Component} from 'react';

import {Text, View, TextInput} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default class AddMedPage extends Component {
    render() {
        return (
            <View>
            <Text>Enter Fields To Add Med</Text>
            <Text>Name</Text>
            <TextInput/>
            <Text>Amount per Perscription</Text>
            <TextInput/>
            <Text>Current Amount</Text>
            <TextInput/>
            <Text>Dosage</Text>
            <TextInput/>
            <StatusBar style="auto" />
            </View>
        );
    }
}