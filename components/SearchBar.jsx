import React, { Component } from 'react'
import styles from '../styles/search-bar.css'

export default class SearchBar extends Component {
  render() {
    return (
      <div className={styles.searchBarContainer}>
        <input
          className={styles.input}
          value={this.props.searchText}
          placeholder='SEARCH'
          onChange={this.props.handleSearchChange}/>
      </div>
    )
  }
}
