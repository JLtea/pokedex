
import React from 'react';
import './App.css';
import Header from './components/Header.js';
import PokeList from './components/List/PokeList.js';
import Gallery from './components/Gallery/Gallery.js';

const baseURL = "https://pokeapi.co/api/v2/pokemon/";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listview: 1,
    }
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(value) {
    this.setState({listview: value});
  }

  render() {
    let content;
    const {listview} = this.state;
    if (listview === 1) {
      content = <PokeList/>;
    } else if (listview === 2) {
      content = <Gallery/>;
    }
    return (
      <div>
        <Header/>
        <div>
          <a onClick = {() => this.handleClick(1)}>Search</a>
          <a onClick = {() => this.handleClick(2)}>Gallery</a>
        </div>
        <div className = "container">
          {content}
        </div>
      </div>
    );
  }
}

export default App;
