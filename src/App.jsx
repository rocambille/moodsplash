import React, { useState } from 'react';

import {
  Link,
  Route,
  Switch,
} from 'react-router-dom';

import Axios from 'axios';

import './App.css';

import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

const App = () => {
  const [images, setImages] = useState([]);
  const [keywords, setKeywords] = useState('');

  const search = () => {
    Axios.get(`https://api.unsplash.com/search/photos?query=${keywords}&client_id=gS4yjdOF7bCy1YmWS5bGdOo-kjy520FRokEHcs8w48M`)
      .then((response) => response.data)
      .then((data) => {
        setImages(data.results.map((result) => result.urls.regular));
      });
  };

  return (
    <Switch>
      <Route path="/">
        <div className="App">
          <header className="App-header">
            <SearchBar
              keywords={keywords}
              onSearch={search}
              setKeywords={setKeywords}
              style={{
                columnSpan: 'all',
                marginBottom: '1rem',
              }}
            />

            <ImageList images={images} />
          </header>
        </div>
      </Route>
    </Switch>
  );
};

export default App;
