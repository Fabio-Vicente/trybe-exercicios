import React, { Component } from "react";

    
class Input extends Component {
    render () {
        const { type, name, value, handleChange } = this.props;
        return (
            <input
            type={type}
            name={name}
            value={value}
            onChange={handleChange}
            />
        )
    }
}

export default Input;