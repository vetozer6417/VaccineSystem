const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser')
const connectDB = require('./config/db')

//Load ENV vars
dotenv.config({path:'./config/config.env'});

connectDB();

const app = express();
//Body Parser
app.use(express.json());

//Cookie Parser
app.use(cookieParser());

const hospitals = require('./routes/hospitals');
const auth = require('./routes/auth');

app.use('/api/v1/hospitals', hospitals);
app.use('/api/v1/auth', auth)

const PORT = process.env.PORT || 5001;
app.listen(PORT, console.log('Server running in',process.env.NODE_ENV,  'mode on port', PORT));

process.on('unhandledRejection', (err,promise) => {
    console.log(`Error: ${err.message}`);
    server.close(() => process.exit(1));
})


