import {Component} from 'react'

import './index.css'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {
    SearchInput: '',
  }

  UpdateSearchInput = value => {
    this.setState({
      SearchInput: value,
    })
  }

  ChangeSearchInput = event => {
    this.setState({
      SearchInput: event.target.value,
    })
  }

  render() {
    const {SearchInput} = this.state
    const {suggestionsList} = this.props
    const searchResults = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(SearchInput.toLowerCase()),
    )

    return (
      <div className="bg-con">
        <div className="card-con">
          <img
            className="logo"
            alt="google logo"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          />
          <div className="searchInput-con">
            <div className="search-input">
              <img
                className="search-icon"
                alt="search icon"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              />
              <input
                type="search"
                className="search"
                placeholder="Search Google"
                onChange={this.ChangeSearchInput}
                value={SearchInput}
              />
            </div>
            <ul className="list-con">
              {searchResults.map(eachItem => (
                <SuggestionItem
                  key={eachItem.id}
                  suggestionDetails={eachItem}
                  UpdateSearchInput={this.UpdateSearchInput}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
