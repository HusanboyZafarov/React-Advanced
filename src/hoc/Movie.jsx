import React, { Component } from 'react'
import withTooltip from './withTooltip'

class Movie extends Component {
    render() {
        return (
            <div>Movie
                {this.props.showToolTip && <div>Some tooltip</div>}
            </div>
        )
    }
}


export default withTooltip(Movie)