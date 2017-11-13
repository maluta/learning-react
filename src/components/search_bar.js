import React, { Component } from 'react';

// xxx
class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = { term:'start'};
  }

  render() {
    //return <input onChange={this.onInputChange}></input>;
    //return <input onChange={(event) => console.log(event.target.value)} />;

    return (
      <div className="search-bar">
      <input
        value={this.state.term}
        onChange={event => this.onInputChange(event.target.value)}
        />
      .
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

/*
const SearchBar = () => {
  return <input />;
}
*/

export default SearchBar;
