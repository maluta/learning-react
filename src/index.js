import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = '';

// creating new component: idea -- 'generates' --> html
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// take the component and put on the page
ReactDOM.render(<App />, document.querySelector('.container'));
