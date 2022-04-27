const express = require('express')
const app = express()
const port = 3000

//routers
const login_router = require('./routes/login')
const register_router = require('./routes/register')
const application_router = require('./routes/applications')

//middleware
const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', (req, res, next) =>{
    res.send('Welcome to vc-common-app backend!')
})

app.use('/login', login_router)
app.use('/register', register_router)
app.use('/applications', application_router)


app.listen(port, () =>{
    console.log(`VC-Common-App listening on port ${port}`)
})