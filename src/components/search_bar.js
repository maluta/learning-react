import React, { Component } from 'react';

// xxx
class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = { term:'initial text'};
  }

  render() {
    //return <input onChange={this.onInputChange}></input>;
    //return <input onChange={(event) => console.log(event.target.value)} />;

    return (
      <div>
      <input
        value={this.state.term}
        onChange={event => this.setState({ term: event.target.value})} />
      </div>
    );
  }

  onInputChange(event) {
    console.log(event);
  }
}

/*
const SearchBar = () => {
  return <input />;
}
*/

export default SearchBar;
