import React, { Component } from 'react'

class CharComponent extends Component {
    style = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black'
    }
    render() {
        return(
            <div onClick={this.props.click} style={this.style}>{this.props.char}</div>
        )
    }
}

export default CharComponent;