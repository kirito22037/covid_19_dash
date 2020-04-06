import React, { Component } from 'react';

// Import styling
import '../css/lvlBar.css';

class LvlBar extends Component {
    render() {
        

        // Adjust progress bar using inline styles
        let innerWidthStyle = { width: `${this.props.recover}%` };

        return (
            <div className="lvlWrapper">
                 <h2 id="percent">{ this.props.recover }%</h2><small>recovered</small>
            <div className="Progress">
                <div className="inner" style={innerWidthStyle} >
            </div>
            </div>
            </div>
        );
    }
}

export default LvlBar;