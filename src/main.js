let express = require('express')
let app = express()
let path = require('path')
let port = 8000
let hbs = require('hbs')
let pathForStatic = path.join(__dirname, '../public')
// console.log(path.join(__dirname, '../public'))
// let pathForAbout = path.join(__dirname, '../views/about.hbs')
// let pathForIndex = path.join(__dirname, '../views/index.hbs')
let viewsDirectory = path.join(__dirname, '../templates/views')
let partialsDirectory = path.join(__dirname, '../templates/partials')
app.set('view engine', 'hbs')
hbs.registerPartials(partialsDirectory)
app.set('views',viewsDirectory)
app.use(express.static(pathForStatic))

app.get('/', (req, res)=>{
    res.render('index')
})
app.get('/about', (req, res)=>{
    res.render('about', {
        sachinDon: 'this is sachin speaking'
    })
})

app.get('/weather', (req, res)=>{
    res.render('weather')
})

app.get('*', (req, res)=>{
    res.render('404error')
})

app.listen(port, ()=>{
    console.log(`port started successfully . Your port number is ${port}`)
})


