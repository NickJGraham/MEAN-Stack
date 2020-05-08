const express = require('express')

const app = express();
app.use(express.static(__dirname + '/static'))
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.get('/', function (req, res) {
    res.render('cats.ejs')
})
app.get('/cat1', function (req, res) {
    cat_one = {
        fav_food: 'Tacos',
        age: 1,
        sleeping_spots: ['under my bed', 'in the dryer']
    }
    res.render('cat1.ejs', cat_one)
})
app.get('/cat2', function (req, res) {
    cat_two = {
        fav_food: 'Fish',
        age: 2,
        sleeping_spots: ['somewhere near me', 'in the backyard']
    }
    res.render('cat2.ejs', cat_two)
})
app.get('/cat3', function (req, res) {
    cat_three = {
        fav_food: 'Rice',
        age: 6,
        sleeping_spots: ['windowsil', 'hiding from the sunshine']
    }
    res.render('cat3.ejs', cat_three)
})

app.listen(8000, () => {
    console.log('Started server on port 8000')
})