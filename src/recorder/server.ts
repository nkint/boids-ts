import { writeFileSync } from 'fs'
import express from 'express'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.post('/save/:id', function(req, res) {
  const filename = `saved-${req.params.id}.json`
  writeFileSync(filename, JSON.stringify(req.body))
  console.log('saved', filename)
  return res.sendStatus(200)
})

app.listen(8080, function() {
  console.log('Recorder app listening on port 8080!')
})
