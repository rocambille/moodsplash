import React from 'react';
import Axios from 'axios';

import './App.css';

import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keywords: null,
      images: [],
    };
  }

  setKeywords = (keywords) => this.setState({ keywords });

  search = () => {
    Axios.get(`https://api.unsplash.com/search/photos?query=${this.state.keywords}&client_id=gS4yjdOF7bCy1YmWS5bGdOo-kjy520FRokEHcs8w48M`)
      .then((response) => response.data)
      .then((data) => {
        this.setState({ images: data.results.map((result) => result.urls.regular) });
      });
  }

  render() {
    const { images } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar setKeywords={this.setKeywords} onSearch={this.search} />
          <ImageList images={images} />
        </header>
      </div>
    );
  }
}

export default App;
