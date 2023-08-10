import React, {Component} from 'react';
import {View, Text} from 'react-native';

import AddMedPage from './AddMedPage.js'

export default class MedList extends Component {

    state = {
        medToAdd: null,
        medList: [{name: 'Sample', persc: 30, current: 20, dosage: "e", key: '0'}]
    };

    addMed = (data) => {
        
        this.setState({medToAdd: data});
        this.state.medToAdd
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