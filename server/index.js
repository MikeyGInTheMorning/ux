const express = require('express')
const app = express()
const fs = require('fs/promises')
const cors = require('cors');

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173'
}));

const port = 4000

app.post('/api/totals', async (req, res) => {

    const body = req.body
    const body2 = JSON.stringify(req.body)
    console.log(body)
    console.log(body2)
    await fs.writeFile('./totals.json', JSON.stringify(req.body), { encoding: 'utf-8' })
    res.json({ message: 'Hello World!' })
})

app.get('/api/totals', async (req, res) => {
    let totals = {}

    try {
        totals = await fs.readFile('./totals.json', { encoding: 'utf-8' })
    } catch (error) {
        console.log(error)
    }
    res.json({ totals })
})

app.post('/api/budgets', async (req, res) => {
    await fs.writeFile('./budgets.json', JSON.stringify(req.body), { encoding: 'utf-8' })
    res.json({ message: 'Hello World!' })
})

app.get('/api/budgets', async (req, res) => {
    var budgets = {}

    try {
        budgets = JSON.parse(await fs.readFile('./budgets.json', 'utf-8'))
    } catch (error) {
        console.log(error)
    }
    res.json( {budgets})
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})