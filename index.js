const express = require('express');
const port = 3000;
const db=require('./config/mongoose');
const app = express();
const session = require('express-session');
const sassMiddleware = require('node-sass-middleware');
const cookieParser = require('cookie-parser');
const MongoStore = require('connect-mongo');
const passport = require('./config/passport-local-strategy');

app.use(sassMiddleware({
    src:'./assets/scss',
    dest:'./assets/css',
    debug:true,
    outputStyle:'extended',
    prefix:'/css'
}));


app.use(express.urlencoded());
app.use(cookieParser());
app.use(express.static('./assets'));


//setting the view engine and path
app.set('view engine','ejs');
app.set('views','./views');

app.use(session({
    name:'interviews',
    secret:'something', // to be changed while deployment
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000 * 60 *100)
    },
    store:MongoStore.create(
        {
            mongoUrl: 'mongodb://localhost/codeial-development',
            autoRemove:'disabled'
        },
        function(err){
            console.log(err || "mongo store connection is ok");
        }
    )

}))

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

//use the router
app.use('/',require('./routes/index'));

app.use(express.static(__dirname));

app.listen(port, function(err){
    if(err){
        console.log(`Error connecting to server ${err}`);
        return ;
    }
    console.log(`server is up and running on port ${port}`)
})