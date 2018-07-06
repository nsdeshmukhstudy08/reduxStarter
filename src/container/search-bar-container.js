import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { fetchWeather } from "../actions/index";
class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {term : ''};

        this.searchCityHandler = this.searchCityHandler.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    
    }

    searchCityHandler(event){
        this.setState({term: event.target.value});
    }

    onFormSubmit(event){
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term:''}); 
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit} className='input-group'>
                    <input 
                        className='form-control'
                        placeholder='Search your city to know the weather.'
                        onChange= {this.searchCityHandler}
                        value={this.state.term}
                    />
                    <span className='input-group-btn'>
                        <button type='submit' className='btn btn-secondary'>Submit</button>
                    </span>
                </form>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather:fetchWeather},dispatch)
}

export default connect(null,mapDispatchToProps)(SearchBar);