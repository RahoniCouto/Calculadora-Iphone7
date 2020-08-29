import React, { Component } from 'react';
import './Calculator.css';
import Button from '../Button/Button';
import Display from '../Display/Display'

const initialState = {
    displayValue: '0',
    clearDisplay: false, 
    operation: null,
    values: [0, 0],
    current: 0
}

export default class Calculadora extends Component {

    state = { ...initialState }

    constructor(props) {
        super(props)

        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    clearMemory() {
        this.setState({...initialState})
    }

    setOperation(operation) {
        if( this.state.current === 0) {
            this.setState({ operation, current: 1, clearDisplay: true })
        } else {
            const currentOperation = this.state.operation
            const values = [ ...this.state.values]

            switch(operation){
                case '=':
                    const finalOperation = operation === '='
                    

                    switch(currentOperation){
                        case '+':
                            values[0]=values[0] + values[1];
                        break;
                        case '-':
                            values[0]=values[0] - values[1];
                        break;
                        case 'X':
                            values[0]=values[0] * values[1];
                        break;
                        case '/':
                            values[0]=values[0] / values[1];
                        break;
                        default:
                            values[0]=0
                    }
                    values[1] = 0
                
                    this.setState({
                        displayValue: values[0],
                        operation: finalOperation ? null : operation,
                        current: finalOperation ? 0 : 1,
                        clearDisplay: !finalOperation,
                        values
                    })
                break;
                case '%':
                    const percentResult = operation === '%'
                
                    switch(currentOperation){
                        case '+':
                            values[0]=values[0]+(values[0] * (values[1] / values[0]));
                        break;
                        case '-':
                            values[0]=values[0]-(values[0] * (values[1] / values[0]));
                        break;
                        case 'X':
                            values[0]=values[0]*(values[0] * (values[1] / values[0]));
                        break;
                        case '/':
                            values[0]=values[0]/(values[0] * (values[1] / values[0]));
                        break;
                        default:
                            values[0]=0
                    }        
                    values[1] = 0
                
                    this.setState({
                        displayValue: values[0],
                        operation: percentResult ? null : operation,
                        current: percentResult ? 0 : 1,
                        clearDisplay: !percentResult,
                        values
                    })            
                break;
                default:
                    return 'error'
            }
            
            
        }
    }

    addDigit(n) {
        if (n === '.' && this.state.displayValue.includes('.')) {
            return
        }
        const clearDisplay = this.state.displayValue === '0'
            || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n
        this.setState({ displayValue, clearDisplay: false })

        if (n !== '.') {
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [ ...this.state.values]
            values[i] = newValue
            this.setState({ values })
        }
    }

    render() {
        return(
            <div className="calculadora">
                <div className='Iphone7'>
                    <div className="tela">
                        <Display value={this.state.displayValue} />
                        <Button label="C" click={ this.clearMemory } operationTop />
                        <Button label="+/-" click={ this.setOperation } operationTop />
                        <Button label="%" click={ this.setOperation } operationTop />
                        <Button label="/" click={ this.setOperation } operation />
                        <Button label="7" click={ this.addDigit } />
                        <Button label="8" click={ this.addDigit } />
                        <Button label="9" click={ this.addDigit } />
                        <Button label="X" click={ this.setOperation } operation />
                        <Button label="4" click={ this.addDigit } />
                        <Button label="5" click={ this.addDigit } />
                        <Button label="6" click={ this.addDigit } />
                        <Button label="-" click={ this.setOperation } operation />
                        <Button label="1" click={ this.addDigit } />
                        <Button label="2" click={ this.addDigit } />
                        <Button label="3" click={ this.addDigit } />
                        <Button label="+" click={ this.setOperation } operation />
                        <Button label="0" click={ this.addDigit } duble/>
                        <Button label="." click={ this.addDigit } />
                        <Button label="=" click={ this.setOperation } operation/>
                    </div>
                </div>
            </div>
        )
    }
    
}