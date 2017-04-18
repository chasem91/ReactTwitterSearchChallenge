import React, { Component } from 'react'
import styles from '../styles/tweets.css'

export default class Tweets extends Component {
  render() {
    return (
      <div className={styles.tweetsContainer}>
        {
          this.props.tweets.map((tweet, i) => (
            <div
              key={i}
              className={styles.tweet}>
              {tweet}
            </div>
          ))
        }
      </div>
    )
  }
}
