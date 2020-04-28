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
  const [tags, setTags] = useState([]);

  const search = () => {
    Axios.get(`https://api.unsplash.com/search/photos?query=${keywords}&client_id=gS4yjdOF7bCy1YmWS5bGdOo-kjy520FRokEHcs8w48M`)
      .then((response) => response.data)
      .then((data) => {
        setImages(data.results);

        /*let tags = [];

        for (let i = 0; i < data.results.length; i++) {
          tags = [...tags, ...data.results[i].tags];
        }*/

        /*let tags = [];

        data.results.forEach((result) => {
          tags = [...tags, ...result.tags];
        });*/

        setTags([...new Set(data.results.reduce((acc, result) => {
          return [...acc, ...result.tags.map((tag) => tag.title)];
        }, []))]);
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

            <div
              style={{
                columnSpan: 'all',
                marginBottom: '1rem',
              }}
            >
              {tags.map((tag) => (
                <div
                  style={{
                    display: 'inline-block',
                    marginRight: '1rem',
                  }}
                >
                  <input name={tag} type="checkbox" />
                  <label htmlFor={tag}>{tag}</label>
                </div>
              ))}
            </div>
            <ImageList images={images} filteredTags={['neon', 'black-and-white']} />
          </header>
        </div>
      </Route>
    </Switch>
  );
};

export default App;
