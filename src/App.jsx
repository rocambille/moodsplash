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

  search = () => {
    console.log('hello');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar setKeywords={this.setKeywords} onSearch={this.search} />
        </header>
      </div>
    );
  }
}

export default App;
