import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import AsyncStorage from 
'@react-native-async-storage/async-storage';

import AddMedPage from './AddMedPage.js'

export default class MedList extends Component {

    state = {
        medToAdd: null,
        medList: []
        //{name, persc, current, dosage, key}
    };

    constructor(prop) {
        //Get data from async Storage and add to medList state
        super(prop);
        this.getData();
    }

    async saveData(med) {
        //Save all med data
        let id = med.name;
        let medToSave = JSON.stringify(med);
        await AsyncStorage.setItem(id, medToSave);
    }

    async getData() {
        //Get med data (maybe seperate function for listing all meds)
        try {
            const keys = await AsyncStorage.getAllKeys();
            const allMeds = await AsyncStorage.multiGet(keys);
            if (allMeds !== null) {
                let tmpList = [];
                for (let i = 0; i < allMeds.length; i++) {
                    const medObj = JSON.parse(allMeds[i][1]);
                    tmpList.push(medObj);
                }
                this.setState({medList: tmpList});
            }
        } catch(error) {
            console.log(error);
        }
    }

    addMed = (data) => {
        //Adds a medication to the medList
        this.setState({medToAdd: data});
        console.log(data.name);
        this.saveData(data);
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
                AsyncStorage.removeItem(tmpList[i].name);
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
                    this.saveData(tmpList[i]);
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
                this.saveData(tmpList[i]);
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
                            <Text>Dosage: {item.dosage}</Text>
                            {item.current < 0.34 * item.persc ?
                            <Text>Warning, Running Low</Text>
                            : <Text></Text>}
                            <Button title = "Take Med"
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