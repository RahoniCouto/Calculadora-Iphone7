import React from 'react';
import './Button.css';

export default props => {
    let classes = 'button'
    classes +=props.operation ? ' operation' : ''
    classes +=props.operation1 ? ' operation1' : ''
    classes +=props.duble ? ' duble' : ''

    return (
        <button
            // onClick={ e => props.click(props.label)}
            className={ classes } 
        >
            { props.label }
        </button>
    )
}