const express = require('express')
const ejs = require('ejs')
const path = require('path')
const moment = require('moment')

const app = express()

app.use(express.static(__dirname))

app.set('views', path.join(__dirname, '/templates'));
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

/**
 * Home Page & Post List Page
 */
app.get('/', async (req, res) => {
  console.log(__dirname)
  const response = require('./data/list.json')
  res.render('index', { ...response })
})

/**
 * Post Page
 */
app.get('/post/:postName', async (req, res) => {
  const response = require('./data/post.json')
  console.log(response)
  res.render('post', {
    ...response,
    moment,
  })
})

/**
 * Archives Page
 */
app.get('/archives', async (req, res) => {
  const response = require('./data/archives.json')
  res.render('archives', {
    ...response,
    moment,
  })
})

/**
 * tags Page
 */
app.get('/tags', async (req, res) => {
  const response = require('./data/tags.json')
  res.render('tags', { ...response })
})

/**
 * tag Page
 */
app.get('/tag/:tagName', async (req, res) => {
  const response = require('./data/tag.json')
  res.render('tag', { ...response })
})

// 使用 3001 端口
app.listen(3001)
console.log("The server is running on 3001")
