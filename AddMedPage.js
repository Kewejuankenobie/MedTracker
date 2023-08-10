import React, {Component} from 'react';

import {Text, View, TextInput, Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import MedList from './MedList';

export default class AddMedPage extends Component {

    //State of input fields
    state = {
        name: "",
        amount: "",
        currAmount: "",
        dosage: ""
    };

    changeName = (event) => {
        this.setState({name:event});
    }

    changeAmount = (event) => {
        this.setState({amount:event});
    }

    changeCurrent = (event) => {
        this.setState({currAmount:event});
    }

    changeDosage = (event) => {
        this.setState({dosage:event});
    }

    createMed = () => {
        /*Creates the new medication to add
        First checks if the amount per perscription
        and amount currently owned is a number */
        if ((isNaN(this.state.amount)) || 
        (isNaN(this.state.currAmount))) {
            alert("Amount and / or Current Amount Must Be a Positive Integer");
        } else {
            let nameToExp = this.state.name;
            let amToExp = +this.state.amount; //int
            let curToExp = +this.state.currAmount; //int
            let dosToExp = this.state.dosage;
            this.setState(prevState => {
                return {
                    name: "",
                    amount: "",
                    currAmount: "",
                    dosage: ""
                };
            });
        }
    }

    render() {
        return (
            <View>
            <Text>Enter Fields To Add Med</Text>
            <Text>Name</Text>
            <TextInput 
            value = {this.state.name}
            onChangeText = {this.changeName}
            />
            <Text>Amount per Perscription</Text>
            <TextInput
            value = {this.state.amount}
            onChangeText = {this.changeAmount}/>
            <Text>Current Amount</Text>
            <TextInput
            value = {this.state.currAmount}
            onChangeText = {this.changeCurrent}/>
            <Text>Dosage</Text>
            <TextInput
            value = {this.state.dosage}
            onChangeText = {this.changeDosage}/>
            <Button title = "Add Med" onPress = {this.createMed}/>
            <StatusBar style="auto"/>
            </View>
        );
    }
}