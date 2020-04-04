import React, { Component } from 'react'

class UserInput extends Component {
    style = {
        width: '150px',
        textAlign: 'center'
    }
    render() {
        return(
            <div className="UserInput" >
                <input style={this.style} type="text" onChange={this.props.changeEvent} value={this.props.userName}></input>
            </div>
        )
    }
}

export default UserInput;