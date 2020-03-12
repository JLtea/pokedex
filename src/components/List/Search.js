import React from 'react';
import PropTypes from "prop-types";
import './Search.scss';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    static propTypes = {
        onChange: PropTypes.func
    };

    static defaultProps = {
        onChange: () => {}
    }

    handleChange(event) {
        const {onChange} = this.props;
        onChange(event);
    }
    render() {
        return (
            <div className = "Search_box">
                <input className = "Search_in" onChange = {this.handleChange}>
                </input>
            </div>
        );
    }
}

export default Search;