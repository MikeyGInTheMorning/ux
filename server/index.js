const express = require('express')
const app = express()
const fs = require('fs/promises')
const cors = require('cors');

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173'
}));

const port = 4000

app.post('/api/:fileName', async (req, res) => {
    const fileName = req.params.fileName
    await fs.writeFile(`./${fileName}.json`, JSON.stringify(req.body), { encoding: 'utf-8' })
    res.json({})
})

app.get('/api/:fileName', async (req, res) => {
    let data

    try {
        const fileName = req.params.fileName
        data = await fs.readFile(`./${fileName}.json`, { encoding: 'utf-8' })
    } catch (error) {
        console.log(error)
    }
    res.json({ data })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})