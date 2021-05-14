const express = require('express')
const request = require('request')
const path = require('path')
const app = express()

const PORT = process.env.PORT || 5000

function Counter(url, callback) {
    request(url, (err, res, text) => {
        if (err) throw err

        var words = {}

        wordArray = text.toLowerCase().split(/\W+/)

        wordArray.forEach((key) => {
            if (words.hasOwnProperty(key)) {
                words[key] += 1
            } else {
                words[key] = 1
            }
        })

        wordCount = Object.keys(words).map((key) => {
            return {
                word: key,
                count: words[key]
            }
        })

        wordCount.sort((a, b) => b.count - a.count)

        return callback(wordCount)
    })
}
app.use(express.static('client/build'))



app.get('/data', (req, res) => {
    Counter('https://raw.githubusercontent.com/invictustech/test/main/README.md', (data) => { res.send(data) })
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})


app.listen(PORT, () => console.log(`Server Running at ${PORT}`))
