import React from "react";

class SearchBar extends React.Component {
  state = { term: "",page: 1 };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term,this.state.page);
  };
  onButttonClick = () => {

    this.setState({ page: this.state.page + 1 });
    this.props.onSubmit(this.state.term,this.state.page)
  };
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="text-input">Image Search</label>
            <input
              id="text-input"
              type="text"
              value={this.state.term}
              onChange={(event) => this.setState({ term: event.target.value })}
            />
               <button onClick={this.onButttonClick}>Next Page</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
