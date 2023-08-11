import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import AddMedPage from './AddMedPage.js'

export default class MedList extends Component {

    state = {
        medToAdd: null,
        medList: [{name: 'Sample Med', persc: 30, current: 20, dosage: "One pill twice a day", key: '0'}]
    };

    addMed = (data) => {
        //Adds a medication to the medList
        this.setState({medToAdd: data});
        this.state.medToAdd
        this.setState(prevState => {
            return {
                medToAdd: null,
                medList: [...prevState.medList, prevState.medToAdd]
            }
        });
    }

    removeMed(k) {
        //Removes a medication from the medList

        for (let i = 0; i < this.state.medList.length; i++) {
            if (this.state.medList[i].key == k) {
                let tmpList = this.state.medList;
                tmpList.splice(i, 1);
                this.setState({medList: tmpList});
                break;
            }
        }
    }

    takePill(k) {
        //Function to take a pill
        for (let i = 0; i < this.state.medList.length; i++) {
            if (this.state.medList[i].key == k) {
                let tmpList = this.state.medList;
                if (tmpList[i].current == 0) {
                    alert("Out of Pills")
                    break;
                } else {
                    tmpList[i].current--;
                    this.setState({medList: tmpList});
                    break;
                }
            }
        }
    }

    addPerscription(k) {
        //Function to add an extra perscription of pills to current
        for (let i = 0; i < this.state.medList.length; i++) {
            if (this.state.medList[i].key == k) {
                let tmpList = this.state.medList;
                tmpList[i].current += tmpList[i].persc;
                this.setState({medList: tmpList});
                break;
            }
        }
    }

    render() {
        return (
            <View>
                <AddMedPage med = {this.addMed}/>
                {
                    this.state.medList.map(item => (
                        <View style = {styles.medBox} key = {item.key}>
                            <Text>{item.name}</Text>
                            <Text>Prescribed Amount: {item.persc}</Text>
                            <Text>Remaining Amount: {item.current}</Text>
                            <Text>Dossage: {item.dosage}</Text>
                            <Button title = "Take pill"
                            onPress = {this.takePill.bind(this, item.key)}/>
                            <Button title = "Add Perscription"
                            onPress = {this.addPerscription.bind(this, item.key)}/>
                            <Button title = "Remove Med"
                            onPress = {this.removeMed.bind(this, item.key)}/>
                        </View>
                    ))
                }
            </View>
        );
    }
    

}

const styles = StyleSheet.create ({
    medBox: {
        borderWidth: 2,
        borderColor: '#e5709f',
        marginBottom: 10,
        backgroundColor: '#ffd7e7'
      }
});