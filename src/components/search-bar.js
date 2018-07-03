import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchText: "", placeHolder: "Tapez votre film..." };
  }
  render() {
    return (
      <input
        onChange={this.handleChange.bind(this)}
        placeholder={this.state.handleChange}
      />
    );
  }

  handleChange(e) {
    this.setState({ SearchText: event.target.value });
  }
}

export default SearchBar;
