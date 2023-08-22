import React, {Component} from 'react';

import {Text, View, TextInput, Button, StyleSheet} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import MedList from './MedList';

export default class AddMedPage extends Component {

    //State of input fields
    state = {
        name: "",
        amount: "",
        currAmount: "",
        dosage: "",
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
            alert("Amount and/or Current Amount Must Be a Positive Integer");
        
        } else if (this.state.name.length == 0 ||
        this.state.dosage.length == 0) {
            alert("Name and/or Dossage Can't be Empty");

        } else {
            let nameToExp = this.state.name;
            let amToExp = +this.state.amount; //convert to int
            let curToExp = +this.state.currAmount; //convert to int
            let dosToExp = this.state.dosage;
            //Super simple function to get a key
            let keyToExp = (amToExp + curToExp) / (2 * amToExp + 1) + nameToExp.length;
            this.setState(prevState => {
                return {
                    name: "",
                    amount: "",
                    currAmount: "",
                    dosage: "",
                };
            });
            this.props.med({
                name: nameToExp,
                persc: amToExp,
                current: curToExp,
                dosage: dosToExp,
                key: keyToExp
            });

        }
    }

    render() {
        return (
            <View style = {styles.box}>
                <Text style = {styles.title}>Enter Fields To Add Med</Text>
                <Text style = {styles.prompt}>Name</Text>
                <TextInput 
                value = {this.state.name}
                onChangeText = {this.changeName}
                style = {styles.textBox}
                />
                <Text style = {styles.prompt}>Amount per Perscription (Integer)</Text>
                <TextInput
                value = {this.state.amount}
                onChangeText = {this.changeAmount}
                style = {styles.textBox}/>
                <Text style = {styles.prompt}>Current Amount (Integer)</Text>
                <TextInput
                value = {this.state.currAmount}
                onChangeText = {this.changeCurrent}
                style = {styles.textBox}/>
                <Text style = {styles.prompt}>Dosage Notes</Text>
                <TextInput
                value = {this.state.dosage}
                onChangeText = {this.changeDosage}
                style = {styles.textBox}/>
                <Button title = "Add Med" onPress = {this.createMed}/>
                <StatusBar style="auto"/>
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    box: {
        borderWidth: 3,
        marginTop: 20,
        marginBottom: 15,
        backgroundColor: "#fff2fa",
        borderColor: "#f9295b"
    },
    title: {
        fontSize: 25,
        fontWeight: "400",
        alignSelf: "center"
    },
    prompt: {
        fontSize: 20,
        alignSelf: "center"
    },
    textBox: {
        backgroundColor: "#e2e2e2",
        marginBottom: 15,
        width: "90%",
        alignSelf: "center"
    }
});