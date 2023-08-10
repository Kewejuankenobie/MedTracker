import React, {Component} from 'react';
import {View, Text} from 'react-native';

import AddMedPage from './AddMedPage.js'

export default class MedList extends Component {

    state = {
        medToAdd: null,
        medList: [{name: 'name', persc: 0, current: 0, dosage: "e", key: '0'}]
    };

    addMed = (data) => {
        this.setState({medToAdd: data});
        this.setState(prevState => {
            return {
                medToAdd: null,
                medList: [...prevState.medList, prevState.medToAdd]
            }
        });
    }

    render() {
        return (
            <View>
                {
                    this.state.medList.map(item => (
                        <Text key = {item.key}>{item.name}</Text>
                    ))
                }
                <AddMedPage med = {this.addMed}/>
            </View>
        );
    }
    

}