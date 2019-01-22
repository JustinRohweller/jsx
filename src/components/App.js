import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";

class App extends React.Component {
  onSubmit = async term => {
    const response = await unsplash.get(
      "https://api.unsplash.com/search/photos",
      {
        params: {
          query: term
        }
      }
    );
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default App;
