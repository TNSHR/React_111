import React from "react";
import "./dice.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Component } from "react";

class Die extends Component{
    render(){
        const {face,rolling}=this.props;
        return(
            <div>
                <FontAwesomeIcon
                icon={['fas',`fa-dice-${face}`]}
                className={`Die ${rolling && 'Die-shaking'}`}
                />
            </div>
        )
    }
}
export default Die;
