import React, {Component} from 'react';

import Med from './Med.js'

export default class MedList extends Component {

    state = {
        medToAdd: null,
        medList: []
    };

    addMed = () => {
        this.setState(prevState => {
            return {
                medToAdd: null,
                medList: [...prevState.medList, prevState.medToAdd]
            }
        });
    }

    render() {
        return (
            this.state.medList.map(item => {
                <Med key={item} />
            })
        );
    }
    

}