import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styles from './styles/app.css'

import SearchBar from './components/SearchBar.jsx'
import Tweets from './components/Tweets.jsx'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: '',
      // placeholder tweets for debugging to avoid surpassing API call limit
      tweets: [
        "RT @olgaNYC1211: Insanity!!! Trump congratulates Erdogan on his new Dictatorship Status 🤦🏼‍♀️↵@FBI Please Hurry..↵#Trumprussia↵↵ https://t.…",
        "@deepdeplorable @MSNBC @POTUS @maddow https://t.co/5zsI0XAEyz",
        "Bird nerds! This golden pheasant was picked up by animal control in East Providence, RI yesterday. He's been nickna… https://t.co/qBrgKhQhCe",
        "RT @TeaPainUSA: POLL: Do you believe the rumor that Rudy Giuliani has flipped on Donald Trump? #TrumpRussia",
        "RT @TeaPainUSA: POLL: Do you believe the rumor that Rudy Giuliani has flipped on Donald Trump? #TrumpRussia",
        "RT @TUSK81: Fun fact: Donald Trump has applied for more than 500 visas for foreign workers for Mar-A-Lago since 2010. https://t.co/qE0G4Gaw…",
        "RT @TrueFactsStated: Something tells me ↵@DanScavino is going to regret the day he first started carrying Donald Trump's golf clubs. @Louis…",
        "RT @politico: 📷 Behind the scenes at the White House Easter Egg Roll https://t.co/jfdmPFXXAu https://t.co/UZmbVL55uO",
        "RT @StockMonsterUSA: BREAKING : FBI's #2 Andrew McCabe who's wife was given 700K by Clinton/McAuliffe may be one of the wrong doers in Dona…",
        "Bitch you don't even belong in america who gaf stfu before i call donald trump https://t.co/MZtjVCQpzz",
        "Video Donald Trump Impersonates Alec Baldwin with Pence and Pepe https://t.co/ilY5BnG1oF",
        "RT @PalmerReport: Donald Trump thinks North Korean dictator Kim Jong-Un has been in power since the nineties https://t.co/7mYFlxDxD1",
        "RT @TIME: Paul Ryan has a lower approval rating than Donald Trump https://t.co/CMT6fJFSIm",
        "RT @AndrewDYounker: omg who let donald trump mooch off my netflix account he literally watched all 156 episodes of naruto in three days"
      ]
    }
    this.handleSearchChange = this.handleSearchChange.bind(this)
  }

  handleSearchChange({ currentTarget: { value: searchText } }) {
    this.setState({ searchText })
    const headers = new Headers()
    const init = {
      headers,
      method: 'GET',
      mode: 'cors',
      cache: 'default'
    }
    fetch(`http://localhost:3000/?${searchText}`, init)
      .then(res => res.json().then(json => {
        console.log(json)
        this.setState({ tweets: json })
      }))
  }

  render() {
    return (
      <div className={styles.app}>
        <SearchBar
          searchText={this.state.searchText}
          handleSearchChange={this.handleSearchChange}
          />
        <Tweets tweets={this.state.tweets} />
      </div>
    )
  }
}

const root = document.getElementById('root')
ReactDOM.render(<App />, root)
