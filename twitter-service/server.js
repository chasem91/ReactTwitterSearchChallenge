const Twit = require('twit')
const express = require('express')
const app = express()

const T = new Twit({
  consumer_key: 'l9Hd6VE7NU9r1liZIiZ2DpTYK',
  consumer_secret: 'zgWU6fB28RkrqWP76QnqcBvZCQomWFSI37HrpS4EdtvSDZDUDv',
  access_token: '22442657-Ad7QQnWzkIDsa7I1vLoxdc17j4i4bAKb5hPjXvPo9',
  access_token_secret: '0dg7IUMfI18P2KqB4b2H9YtIFxrR12QkhRKj3eVOLG7HU',
})


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

app.get('/', (req, res) => {
  console.log('url', req.url);

  T.get(
    'search/tweets',
    { q: req.url.slice(2) },
    (error, tweets, response) => {
      const tweetTexts = tweets.statuses ? tweets.statuses.map(t => t.text) : []
      res.json(tweetTexts)
    }
  )

})

app.listen(3000, () => {
  console.log('Listening on port 3000!');
})
