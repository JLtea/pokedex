import axios from 'axios';
import React from 'react';
import Search from './Search.js';
import Results from './Results.js';

class PokeList extends React.Component {
  constructor(props) { 
    super(props);
    this.state = {
      pokedex: [],
      species: [],
    }
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }
  // componentDidMount() {
  //   axios.get(baseURL + this.state.search)
  //     .then(response => {
  //       this.setState({pokemon: response.data});
  //       console.log(response.data);
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     });
  // }
  componentDidMount() {
    axios.get('http://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response =>{
            this.setState({
                pokedex : Array.from(response.data.results),
                species : Array.from(response.data.results),
            });
        })
        .catch(error => {
            console.log(error)
        });
  }
  handleSearchChange(event) {
    const {value} = event.target;
    var filtered = this.state.pokedex.filter(pokemon => (
      pokemon.name.includes(value.toLowerCase())
    ));
    // console.log(filtered);
    this.setState({species: filtered});
    //console.log(this.state.species);
  }

  handleSelectChange(event) {
    const {value} = event.target;
    let sorted =[];
    if (value == "name") {
      sorted = this.state.species.sort((a,b) => (
        (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0
      ));
    } else if (value == "number") {
      sorted = this.state.pokedex;
    }
    this.setState({species: sorted});
  }

  render() {
    console.log(this.state.species);
    return (
      <div className = "pokelist">
        <div>
        Sort By:
          <select value={this.state.value} onChange={this.handleSelectChange}>
            <option value="number">Pokedex Number</option>
            <option value="name">Name</option>
          </select>
        <Search onChange={this.handleSearchChange}/>
        </div>
        <Results species = {this.state.species}/>
      </div>
    );
  }
}

export default PokeList;
