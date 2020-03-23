import React from 'react';
import './App.css';
import Gallery from './components/Gallery';
import Search from './components/Search';
import Detail from './components/Detail';

import PropTypes from 'prop-types'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 2,
      id: 25
    }

    this.handleTab = this.handleTab.bind(this);
    this.showDetails = this.showDetails.bind(this);
  }

  handleTab(value) {
    this.setState({view: value});
  }

  showDetails(value) {
    this.setState({view: 3, id: value})
  }
  static propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    callback: PropTypes.func,
    filtertype: PropTypes.string
  }


  render() {
    const view = this.state.view;
    return (
      <div>
        <header>Pokedex</header>
        <div className = "navbar">
          <a className = "tabs" onClick = {() => this.handleTab(2)}>Search</a>
          <a className = "tabs" onClick = {() => this.handleTab(1)}>Gallery</a>
        </div>
        <div className = "content">
          {view === 1 ? <Gallery callBack = {this.showDetails}/> : null}
          {view === 2 ? <Search callBack = {this.showDetails}/> : null}
          {view === 3 ? <Detail id = {this.state.id}/> : null}
        </div>
      </div>
    );
  }
}

export default App;
