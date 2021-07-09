import React, { Component } from 'react';
import PropTypes from 'prop-types'
export default class ListItem1 extends Component {

    static defaultProps = {
        name: 'LIST-item2'
    }
    static propTypes = {
        name: PropTypes.string
    }
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div>
                <h1>item2--{this.props.name}</h1>
            </div>
        )
    }
}