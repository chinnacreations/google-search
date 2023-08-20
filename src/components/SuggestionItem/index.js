import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, UpdateSearchInput} = props
  const {suggestion} = suggestionDetails

  const onSearch = () => {
    UpdateSearchInput(suggestion)
  }

  return (
    <li className="list-container">
      <p className="desc">{suggestion}</p>
      <button type="button" className="btn" onClick={onSearch}>
        <img
          className="icon"
          alt="arrow"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
