import React, { Component } from 'react'

class ValidationComponent extends Component {
    render() {
        let validationMessage;
        if (this.props.text.length > 5) { this.validationMessage = 'long enough' } else { this.validationMessage = 'too short' };

        return (
            <div className='ValidationMessage'>
                {'Text ' + this.validationMessage}
            </div>
        )
    };
}

export default ValidationComponent;