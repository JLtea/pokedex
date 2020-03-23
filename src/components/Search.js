import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Pokemon from './Pokemon';

class Search extends React.Component {
     
    constructor(props) {
        super(props);
        this.state = {
            pokedex: [],
            filtered: []
        }
        axios.get ('https://pokeapi.co/api/v2/pokemon?limit=24')
        .then(pokeurls => {
            const pokedex = [];
            pokeurls.data.results.forEach(element => {
                var id = element.url.substr(34);
                id = id.substr(id, id.length - 1);
                pokedex.push({
                    name: element.name,
                    id: id
                })
            })
            this.setState({pokedex: pokedex, filtered: pokedex});
        });
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    static defaultProps = {
        onChange: () => {}
    }
    
    handleSearchChange(event) {
        const {value} = event.target;
        let filtered = this.state.pokedex.filter(pokemon => (
            pokemon.name.includes(value.toLowerCase())
        ));
        this.setState({filtered: filtered});
    }

    handleSelectChange(event) {
        const {value} = event.target;
        let sorted = [];
        if (value == "name") {
            sorted = this.state.filtered.sort((a,b) => (
              (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0
            ));
        } else if (value == "number") {
            sorted = this.state.filtered.sort((a,b) => (
                (a.id < b.id) ? -1 : (a.id > b.id) ? 1 : 0
            ));
        }
        this.setState({filtered: sorted});
    }

    render() {
        return (
            <>
            <div>
                <input onChange = {this.handleSearchChange}/>
                <select value={this.state.value} onChange={this.handleSelectChange}>
                    <option value="number">Pokedex Number</option>
                    <option value="name">Name</option>
                </select>
            </div>
            <div>
                <ul>
                    {this.state.filtered.map((pokemon) => <li><Pokemon key = {pokemon.name} id = {pokemon.id} name = {pokemon.name} callBack = {this.props.callBack}/></li>)}
                </ul>
            </div>
            </>
        );
    }

}

export default Search;