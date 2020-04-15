import React from 'react';
import logo from './logo.svg';
import './App.css';

import SearchBar from './components/SearchBar'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keywords: null,
    };
  }

  setKeywords = (keywords) => this.setState({ keywords });

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar setKeywords={this.setKeywords} />
        </header>
      </div>
    );
  }
}

export default App;
