import React from 'react'

const withTooltip = (Component) => {
    return (
        class withTooltip extends React.Component {
            state = {
                showToolTip: false
            }

            mouseOver = () => this.setState({ showToolTip: true })
            mouseOut = () => this.setState({ showToolTip: false })

            render() {
                return (
                    <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
                        <Component {...this.props} showToolTip={this.state.showToolTip} />
                    </div>
                )
            }
        }
    )
}

export default withTooltip