import React, { Component } from 'react';
import './Calculator.css';
import Button from '../Button/Button';
import Display from '../Display/Display'

export default class Calculadora extends Component {

    // clearMemory() {
    //     this.setState({ ...initialState})
    // }

    // setOperation(operation){

    // }

    // addState(n) {

    // }

    render() {
        return(
            <div className="calculadora">
                <div className='Iphone7'>
                    <div className="tela">
                        <Display value={0} />
                        <Button label="C" operation1 />
                        <Button label="+/-" operation1 />
                        <Button label="%" operation1 />
                        <Button label="/" operation />
                        <Button label="7" />
                        <Button label="8" />
                        <Button label="9" />
                        <Button label="X" operation />
                        <Button label="4" />
                        <Button label="5" />
                        <Button label="6" />
                        <Button label="-" operation />
                        <Button label="1" />
                        <Button label="2" />
                        <Button label="3" />
                        <Button label="+" operation />
                        <Button label="0" duble/>
                        <Button label="," />
                        <Button label="=" operation/>
                    </div>
                </div>
            </div>
        )
    }
    
}