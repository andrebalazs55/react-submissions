import React, { Component } from 'react'

class UserOutput extends Component {
    render() {
        return(
            <div className="UserOutput">
                <p> This is an output for user:</p>
                <p>{this.props.userName}</p>
            </div>
        )
    }
}

export default UserOutput;