const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const User = require('./models/User');
const Song = require('./models/Song');

const adminroute= require('./routes/admin');

const app = express();
const port = 3000;

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true, // Enable credentials (cookies, authorization headers, etc.)
  }));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/' , adminroute);

const songroute = require('./routes/songroute');
app.use('/song',songroute);
const artistroute = require('./routes/artistroute');
app.use('/artist',artistroute);
const albumroute = require('./routes/albumroute');
app.use('/album',albumroute);
const radioroute = require('./routes/radioroute');
app.use('/radio',radioroute);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB URI
const mongoURI = 'mongodb://localhost:27017/Spot';

mongoose.connect('mongodb://localhost:27017/Spot',{useNewUrlParser: true,
useUnifiedTopology: true,}).then((data) =>{
    console.log("!connected");
})


const saltRounds = 10;
app.post('/signup' ,(req,res) => {
    console.log(req.body);
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({"email":email}).then((val) => {
        if(val == null) {
            console.log("No data found");
            bcrypt.hash(password , saltRounds ,function(err,hash){
                console.log(hash);
                let senduser = new User({username:username , email:email , password:hash});
              senduser.save().then((val) =>{
                    console.log(val);
                    res.json(val);
                })
            });
        }else{
            console.log("user already exists")
        }
    })
})

//End point to deal with log gin
app.post('/login',(req,res)=>{
    const email = req.body.email;

    console.log(email);
    //check email on backend
    User.findOne({email : email}).then((val) =>{
//if yes
       if( val != null) {
       console.log(val);
       //check pass
       bcrypt.compare(req.body.password,val.password , function(err , result){
        console.log(result);
        res.json(result,);
       })
    }else{
        res.json("Enter Correct Email")
        // console.log(val)
    } 
    })
})




app.listen(port ,async () => {
    console.log(`example app listening on the port ${port}`)

});